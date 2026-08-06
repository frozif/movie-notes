import { createContext, useContext, useState } from 'react';
import useMovieForm from '@/app/hooks/useMovieForm';

import api from '../../shared/api';
const MovieContext = createContext()

export function useMovieContext() {
  return useContext(MovieContext)
}

function getCurrentDate() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function MovieProvider({ children }) {

  const swatches = ['#1e2027', '#1a2535', '#1f1a35', '#1a2e1f', '#2e1a1a', '#2a2415', '#111', '#2b2b2b'];
  const [show, setShow] = useState(false)
  const [deleteCard, setDeleteCard] = useState(null)
  const [posterMode, setPosterMode] = useState('color') 
  const [color, setColor] = useState('#1e2027')
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [cardInfo, setCardInfo] = useState({movieTitle: '', year: '', genre: '', personalNotes: '', poster: '', rating:  0, color: '', dateAdded: getCurrentDate(), imgUrl: ''})
  const [saveCardInfo, setSaveCardInfo] = useState([])
  const [favoriteControls, setFavoriteControls] = useState(false)
  const [favorite, setFavorite] = useState([])
  const [editId, setEditId] = useState(null)
  const [editPanel, setEditPanel] = useState(null)
  const [editData, setEditData] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const [gridType, setGridType] = useState('grid')
  const [dateAdded, setDateAdded] = useState(getCurrentDate())
  const [selectedDate, setSelectedDate] = useState('all')
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)     



  const { ref, dateLimit } = useMovieForm({
    imageUrl,
    width,
    setWidth,
    setBurgerMenuOpen,
    saveCardInfo,
  })

const visibleCards =  favoriteControls ?  saveCardInfo.filter(card=> favorite.includes(card.id) ) :saveCardInfo

const  dateAddOption = ()=>{
  const uniqueDates = [...new Set(saveCardInfo.map(c => c.dateAdded))]
  return uniqueDates.map(date => (
    <option key={date} value={date}>{date}</option>
  ))
}
  const value = {
    // Форма
    show, setShow,
    posterMode, setPosterMode,
    color, setColor,
    imageFile, setImageFile,
    imageUrl, setImageUrl,
    cardInfo, setCardInfo,
    swatches,
    getCurrentDate,

    // Карточки
    saveCardInfo, setSaveCardInfo,
    deleteCard, setDeleteCard,
    editId, setEditId,
    editPanel, setEditPanel,
    editData, setEditData,

    // Фильтры
    favoriteControls, setFavoriteControls,
    favorite, setFavorite,
    searchValue, setSearchValue,
    gridType, setGridType,
    selectedDate, setSelectedDate,

    // UI
    burgerMenuOpen, setBurgerMenuOpen,
    width, setWidth,

    // Производные
    visibleCards,
    dateAddOption,

        ref,
    dateLimit,
    api,
  }



  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieContext