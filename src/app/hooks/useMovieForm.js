import { useEffect, useRef } from 'react';
function useMovieForm({ 
   imageUrl,
  width,
  setWidth,
  setBurgerMenuOpen,
  setSaveCardInfo,
  saveCardInfo,}){




useEffect(()=>{

return (()=>{
  if (imageUrl) {
     URL.revokeObjectURL(imageUrl);
  }
})
}, [imageUrl])

useEffect(()=>{

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

window.addEventListener('resize', handleResize)
return (()=>{
  window.removeEventListener('resize', handleResize)
})

}, [])

useEffect(() => {
  if (width < 500) {
    setBurgerMenuOpen(false);
  }
    if (width > 500) {
    setBurgerMenuOpen(true);
  }
}, [width]);

const ref = useRef(null)

useEffect(()=>{
ref.current?.blur();
}, [])


function dateLimit (value){
  return value.replace(/\D/g, "").slice(0, 4);
}



  return {
  ref,
  dateLimit
  };

}


export default useMovieForm