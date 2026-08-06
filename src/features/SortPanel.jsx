function SortPanel (props){
const {
selectedDate,
dateAddOption,
setSelectedDate 
} = props

return (
  <div className="header_Sort">
    <select className='header_SortPanel' 
    value={selectedDate}
      onChange={(event) => setSelectedDate(event.target.value)}
      
      >
   <option value="all">All dates</option> 
      {dateAddOption()}
    </select>
  </div>
)
}
  

export default SortPanel