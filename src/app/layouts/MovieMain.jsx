import HeaderLeft from "@/widgets/Headers/HeaderLeft"
import SearchPanel from "@/features/SearchPanel"
import HeaderRight from "../../widgets/Headers/HeaderRight"
import HeaderCollection from "@/widgets/Headers/HeaderCollection"
import MovieCardsPanel from "@/widgets/sections/MovieCardsPanel"
import star from '@/assets/icon/VectorStar.svg'
import useMovieForm from '@/app/hooks/useMovieForm'
import { useMovieContext } from '@/app/context/MovieCardContext'
import Footer from "@/widgets/footer/Footer"
import { useEffect } from "react"
function MovieMain(){

  const {
    searchValue, setSearchValue,
    burgerMenuOpen, setBurgerMenuOpen,
    favoriteControls, setFavoriteControls,
    favorites,
    selectedDate, setSelectedDate, dateAddOption,
    gridType, setGridType,
    show, setShow,  
    favoritesActive,
    saveCardInfo, setSaveCardInfo,
    visibleCards,
    favorite, setFavorite,
    setEditPanel, setEditId, setEditData,
    setPosterMode, posterMode,
    setDeleteCard, deleteCard,
    editPanel, editData,
    cardInfo, setCardInfo,
    color, setColor,
    imageUrl, setImageUrl, setImageFile,
    swatches, dateLimit, getCurrentDate,
    ref,
    api
  } = useMovieContext()



  useEffect(() => {
  api.startApi()
    .then(data => setSaveCardInfo(data))
    .catch(console.error);
  }, []);

  


return (
<>
    <nav>
     <div className="header_Main">
  <div className="container header_MainContainer">
  <HeaderLeft 
  searchValue={searchValue}
  setSearchValue={setSearchValue}
  burgerMenuOpen={burgerMenuOpen}
  setBurgerMenuOpen={setBurgerMenuOpen}
  />
  <HeaderRight/>
  </div>
     </div>
  
  
    </nav>
    <header>
  <HeaderCollection 
  saveCardInfo={saveCardInfo}
  />
    </header>
    <section>
      <MovieCardsPanel 
      />
    </section>
  <Footer />
  
  </>
)
}

export default  MovieMain