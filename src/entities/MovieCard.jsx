import React from 'react'
import { useMovieContext } from '@/app/context/MovieCardContext'
import redactBtn from '@/assets/icon/redact.svg'
import deleteBtn from '@/assets/icon/delete.svg'
import star from '@/assets/icon/VectorStar.svg'
import starNull from '@/assets/icon/VectorStarNull.svg'
import trashImg from '@/assets/icon/trashImg.svg'
import favorites from '@/assets/icon/favorites.svg'
import favoritesActive from '@/assets/icon/favoritesActive.svg'
import api from '../shared/api'
function MovieCards (){
    const {
    visibleCards,
    searchValue,
    selectedDate,
    gridType,
    favorite, setFavorite,
    setEditPanel,
    setEditId,
    setEditData,
    setPosterMode,
    setDeleteCard,
    setSaveCardInfo,
    deleteCard,
    editPanel,
    api
  }  = useMovieContext()


  
// ---------------
// открытие Панели редактирования 
const  openEditPanel =(card)=>{
  setEditPanel(!editPanel)
setEditId(card.id)
setEditData(card)
setPosterMode(card.posterMode || 'color')
}

// -----------------
// оценка рейтинга звездами от 0 до 5

const starRating =(card)=>{
 return  [1,2,3,4,5].map(starIndex => (
  <img
      key={starIndex}
      src={starIndex <= card.rating ? star : starNull}
      alt="star"
      className="rating_star"
    />
  ))
}

// -----------------
// фильтрация карточки 

const filteredCards = visibleCards.filter(item => {
        const searchVld = item.movieTitle.toLowerCase().includes(searchValue.toLowerCase())  ||item.genre.toLowerCase().includes(searchValue.toLowerCase())
const dateVld =
  selectedDate === 'all'
    ? true
    : item.dateAdded === selectedDate;

     return searchVld && dateVld
    }
     )

// ----------------
// удаление карточки 
const deleteMovie = (card)=>{
               if(confirm('Вы уверены, что хотите удалить этот фильм?')){ 
       api.deleteApi(card.id)
                       .then(() => {
                        setSaveCardInfo(prev=> prev.filter(crd => crd.id !== card.id))
                                      setDeleteCard(null)
                       })
              
             }
}


// ---------------
// переключатель избранного 

const toggleFavorite = (card)=>{
     setFavorite(prev=> prev.includes(card.id) ? prev.filter(id =>  id !== card.id) : [...prev, card.id])
}

// ----------------------
// Стиль постера 

const getPosterStyle = (card) => {
  if (
    (card.posterMode === 'image' ||
      card.posterMode === 'url') &&
    card.poster
  ) {
    return {
      backgroundImage: `url(${card.poster})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
  }

  if (card.posterMode === 'none') {
    return {};
  }

  return {
    backgroundColor: card.color || '#1e2027',
  };
};


// ----------------------

    return(
    <>
    { filteredCards.map(card=>{
    return(
        <React.Fragment key={card.id}>
        <div  
className={`card ${gridType}`}  
style={getPosterStyle(card)}    
      >

           <div className="card_up">
<div className="card_up_Up">
               <span className="card_FilmCategory">{card.genre}</span>
             <div className="card_controls">
              <button 
              className='card_controls_favorites' 
              type="button"
          onClick={() => {
    toggleFavorite(card)
          }}
              ><img src={favorite.includes(card.id) ? favoritesActive : favorites} alt="" /></button>

              <button type="button"
              onClick={()=>{
openEditPanel(card)
              }}
              >
                <img src={redactBtn} alt="" /></button>
              <button
               type="button"
            onClick={()=>{
              setDeleteCard(card.id)
            }}
               ><img src={deleteBtn} alt="" /></button>
             </div>
</div>
             <span className="card_FilmRating"><span className='rating'> {card.rating} </span>   /5 </span>
           </div>
           <div className="card_down">
            <h3 className="card_down_filmName">{card.movieTitle}</h3>
            <p className='card_down_filmDate'>{card.year}</p>
            <div className="card_down_filmDate_ratingTable">
  {starRating(card)}
</div>
<div className="card_down_Description">{card.personalNotes}</div>
           </div>
          </div>
{deleteCard === card.id &&  
(
  <div className="overlay">
                  <div className={`deleteFilm_Panel ${deleteCard === card.id ? 'delete' : ''}`}>
         <div className="deleteFilm_Panel_Up">
           <img src={trashImg} alt="deleteFilm trash img" />
           <h3>Delete Movie?</h3>
           <p>This action cannot be undone. The movie and all your notes will be permanently removed.</p>
         </div>
         <div className="deleteFilm_Panel_down">
          <button   className='deleteFilm_Panel_CanelBtn' 
          type="button"
          onClick={()=>{
            setDeleteCard(null)
          }}
          >Cancel</button>
          <button
          className='deleteFilm_Panel_DeleteBtn' 
          onClick={()=>{
         deleteMovie(card)
          }}
          type="button">Delete</button>
         </div>
        </div>
</div>
)}
        </React.Fragment>
    )
  })}
    </>
  )
}


export default MovieCards

