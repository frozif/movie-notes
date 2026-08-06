function SearchPanel (props){

const {
  searchValue,
  setSearchValue,
  XbtnTwo,
} = props


return (
       <div className="search_Panel">
            <input
             placeholder='Search movies, genres…'
             type="text" 
             className="header_SearchPanel"
            value={searchValue} 
           onChange={(event)=>{ setSearchValue(event.target.value)}}
            />
  {searchValue.length > 0 ?           <button
             type='button'
             onClick={()=>{
              setSearchValue('')
             }}
             ><img src={XbtnTwo} alt="x search Btn" /></button> : null}
       </div>
)
}


export default SearchPanel