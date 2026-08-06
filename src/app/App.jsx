import { useEffect, useState, useRef } from 'react'
import React from 'react'
import MovieContext from '@/app/context/MovieCardContext'

// -----------------------
// import svg и тд  

// --------------
// импорт стилей 

import '@/app/styles/headerCss/headerLogo.css' 
import '@/App.css'
import '@/app/styles/headerCss/headerPanel.css'
import '@/app/styles/headerCss/headerSearchPanel.css'
import '@/app/styles/headerCss/headerFavorites.css'
import '@/app/styles/headerCss/headerLeft.css'
import '@/app/styles/headerCss/headerRight.css'
import '@/app/styles/panelCss/headerBurgerMenu.css'
import '@/app/styles/headerCss/headerSort.css'
import '@/app/styles/headerCss/headerTypeSwitcher.css'
import '@/app/styles/headerCss/headerInfoPanel.css'
import '@/app/styles/sectionCss/sectionCardsPanel.css'
import '@/app/styles/sectionCss/sectionCardsPanelList.css'
import '@/app/styles/sectionCss/movieCard.css'
import '@/app/styles/panelCss/moviePanel.css'
import '@/app/styles/footerCss/footer.css'
import '@/app/styles/panelCss/deletePanel.css'

// -------------------------



import logo from '@/assets/icon/movie_notes_logo.svg'
import favorites from '@/assets/icon/favorites.svg'
import favoritesActive from '@/assets/icon/favoritesActive.svg'
import switcherType1 from '@/assets/icon/switcherType1.svg'
import switcherType2 from '@/assets/icon/switcherType2.svg'
import star from '@/assets/icon/VectorStar.svg'
import starNull from '@/assets/icon/VectorStarNull.svg'
import addPlus from '@/assets/icon/addPlus.svg'
import xBtn from '@/assets/icon/Xbtn.svg'
import trashImg from '@/assets/icon/trashImg.svg'
import XbtnTwo from '@/assets/icon/xVector.svg'
import plusVector  from '@/assets/icon/plusVector.svg'
import BurgerMenu from '@/features/BurgerMenu'
import burgerMenuClose from '@/assets/icon/burgerMenuClose.svg'

// ------------
import MovieForm from '@/features/MovieForm'
import MovieCards from '@/entities/MovieCard'
import SearchPanel from '@/features/SearchPanel'
import SortPanel from '@/features/SortPanel'
import MovieCardsPanel from '@/widgets/sections/MovieCardsPanel'
import Footer from '@/widgets/footer/Footer'
import useMovieForm from '@/app/hooks/useMovieForm'
import HeaderLeft from '@/widgets/Headers/HeaderLeft'
import HeaderRight from '@/widgets/Headers/HeaderRight'
import HeaderCollection from '@/widgets/Headers/HeaderCollection'
import MovieMain from './layouts/MovieMain'
import { MovieProvider } from '@/app/context/MovieCardContext'
import { useMovieContext } from '@/app/context/MovieCardContext'
function App(){
return (
<main>
        <MovieProvider>
        <MovieMain />
      </MovieProvider>
</main>
)
}

export default App
