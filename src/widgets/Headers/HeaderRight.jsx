import SortPanel from '@/features/SortPanel'
import switcherType1 from '@/assets/icon/switcherType1.svg'
import switcherType2 from '@/assets/icon/switcherType2.svg'
import plusVector  from '@/assets/icon/plusVector.svg'
import favoritesActive from '@/assets/icon/favoritesActive.svg'
import favorites from '@/assets/icon/favorites.svg'
import { useMovieContext } from '@/app/context/MovieCardContext'

function HeaderRight (){

  const {
    burgerMenuOpen,
    favoriteControls, setFavoriteControls,
    selectedDate, setSelectedDate, dateAddOption,
    gridType, setGridType,
    setShow,
    ref,
  } = useMovieContext()

return (
    <div className={`header_right ${burgerMenuOpen  ? '' : 'close'}`}>
  <div className="header_Favorites">
    <button className='header_Favorites_Btn' onClick={()=>{setFavoriteControls(prev=> !prev)}}><img src={favoriteControls ? favoritesActive : favorites} alt="favorites logo" /></button>
    <span>Favorites</span>
  </div>
  <SortPanel 
  selectedDate={selectedDate}
  dateAddOption={dateAddOption}
  setSelectedDate={setSelectedDate}
  />
  <div className="header_TypeSwitcher">
    <button className={`switcherType switcherType_list   ${gridType=== 'list' ? 'active' : ''}`} onClick={()=>{setGridType('list')}}><img src={switcherType1} alt="switcherType list" /></button>
    <button className={`switcherType ${gridType=== 'grid' ? 'active' : ''}`}  onClick={()=>{setGridType('grid')}}><img src={switcherType2} alt="switcherType grid" /></button>
  </div>
  <button
 onClick={() => {
  setShow(prev => !prev);
      ref.current?.blur();
 }}
   className='switcherType_AddPlus'>
    <img src={plusVector} alt="addPlus"/><span>Add Movie</span>
    </button>
</div>
)
}


export default HeaderRight