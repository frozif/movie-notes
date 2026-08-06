import MovieContext from '@/app/context/MovieCardContext'
import XbtnTwo from '@/assets/icon/xVector.svg'
import MovieForm from '@/features/MovieForm'
import MovieCards from '@/entities/MovieCard'
import starNull from '@/assets/icon/VectorStarNull.svg'
import star from '@/assets/icon/VectorStar.svg'
import favoritesActive from '@/assets/icon/favoritesActive.svg'
import { useMovieContext } from '@/app/context/MovieCardContext'
import { useContext } from "react"
function MovieCardsPanel (){

    const {
    visibleCards, searchValue, selectedDate, gridType,
    favorite, setFavorite,
    setEditPanel, setEditId, setEditData, setPosterMode,
    setDeleteCard, setSaveCardInfo, deleteCard, editPanel,
    show, setShow,
    cardInfo, setCardInfo, saveCardInfo,
    editData,
    posterMode, color, setColor,
    imageUrl, setImageUrl, setImageFile,
    swatches, dateLimit, getCurrentDate,
    api
  } = useMovieContext()


  const sharedFormProps = {
    posterMode, setPosterMode,
    color, setColor,
    imageUrl, setImageUrl, setImageFile,
    swatches, saveCardInfo, setSaveCardInfo,
    dateLimit, getCurrentDate,
    XbtnTwo, star, starNull,
  }

return (
      <div className="card_Panel">
        <div className="container">
        <div className={`card_Panel_Main ${gridType === 'grid'  ? 'grid' : 'list'}`}>
                   <MovieCards/>
          </div>
          {show && <div className="overlay" onClick={() => setShow(false)} />}
    <MovieForm
         {...sharedFormProps}
          isFormOpen={show}
          setIsFormOpen={setShow}
          movieData={cardInfo}
          setMovieData={setCardInfo}
           api={api}
  />
      {editPanel && (
      <MovieForm
            {...sharedFormProps}
            isFormOpen={editPanel}
            api={api}
            setIsFormOpen={setEditPanel}
            movieData={editData}
            setMovieData={setEditData}
    />
  )}
  
        </div>
      </div>
)


}


export default MovieCardsPanel