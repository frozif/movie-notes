import logo from '@/assets/icon/movie_notes_logo.svg'
import SearchPanel from '@/features/SearchPanel'
import BurgerMenu from '@/features/BurgerMenu'
import XbtnTwo from '@/assets/icon/xVector.svg'
function HeaderLeft (props){

const {
searchValue,
setSearchValue,
burgerMenuOpen,
setBurgerMenuOpen
} = props


return(
  <div className="header_left">
      <div className="header_LogoPanel">
          <img src={logo} alt="Logo MovieNotes" className="header_Logo" />
          <h1 className='header_LogoName'>Movie<span className='header_LogoName header_LogoNameSpan'>Notes</span></h1>
    </div>
<SearchPanel 
searchValue={searchValue}
setSearchValue={setSearchValue}
XbtnTwo={XbtnTwo}
/>
<BurgerMenu 
burgerMenuOpen={burgerMenuOpen}
setBurgerMenuOpen={setBurgerMenuOpen}
/>
</div>
)

}



export default HeaderLeft