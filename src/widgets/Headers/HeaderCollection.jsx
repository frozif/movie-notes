
function HeaderCollection (props){

const {
saveCardInfo 
} = props

return (
    <div className="header_Collection">
      <div className="container">
        <div className="header_Collection_Main">
          <div className="header_Collection_txt">
            <h2>Your Collection</h2>
            <p>My Films</p>
          </div>
          <div className="header_Collection_moviesCount">
           <p><span className='moviesCount'>{saveCardInfo.length}</span>films</p>
          </div>
        </div>
      </div>
    </div>
)
}


export default HeaderCollection