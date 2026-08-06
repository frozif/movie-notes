// import '@/style/Header/headerBurgerMenu.css'
function BurgerMenu (props){
const {
burgerMenuOpen,
setBurgerMenuOpen
} = props

  return(
         <div className="burger_menu">
<button
  className={`burger_btn ${burgerMenuOpen ? "active" : ""}`}
  type="button"
  onClick={() => {
    setBurgerMenuOpen(!burgerMenuOpen)

  }}
  aria-label={burgerMenuOpen ? "Закрыть меню" : "Открыть меню"}
>
  <span className="burger_bar burger_bar_top" />
  <span className="burger_bar burger_bar_mid" />
  <span className="burger_bar burger_bar_bot" />
</button>
</div>
  )
}


export default BurgerMenu