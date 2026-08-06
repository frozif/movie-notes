import { version } from "react";
import { useContext } from "react";
    function  MovieForm   (
  {  isFormOpen,
    setIsFormOpen,
    movieData,
    setMovieData,
    posterMode,
  setPosterMode,
  color,
  setColor,
  imageUrl,
  setImageUrl,
  setImageFile,
  swatches,
  setSaveCardInfo,
  saveCardInfo,
  XbtnTwo,
  dateLimit, 
  starNull,
  star,
  getCurrentDate, 
  api,
  imageFile,
  }


    ){
          if (!isFormOpen) return null      

  return(
  <div className="overlay">
                      <div className={`addFilm_Panel ${isFormOpen  && 'open'}`}>
      <div className="addFilm_Panel_X">
              <button 
              type='button' 
              onClick={()=>{
                
                  setIsFormOpen(false);
              }}
              className="addFilm_btn_X"><img src={XbtnTwo} alt="x button " /></button>
      </div>
            <div className="addFilm_Panel_Info">
              <div className="addFilm_Panel_Title">
      <label >Movie Title</label>
      <input 
      type="text"
        placeholder='Movie title...'
  value={movieData.movieTitle ?? ''}
  maxLength={55}
  onChange={(event) =>
    setMovieData(prev => ({ ...prev, movieTitle: event.target.value }))
  }
        />
              </div>
              <div className="addFilm_Panel_Meta">
                <div className="addFilm_Panel_Year">
                      <label >Year</label>
    <input 
    type="number"
    placeholder="2026"
      min="1800"
            value={movieData.year ?? ''}
        onChange={(event)=>{
    let value = dateLimit(event.target.value);
      setMovieData(prev => ({...prev, year: value}))
        }}
      />
                </div>
                <div className="addFilm_Panel_Genre">
      <label >Genre</label>
      <input 
      type="text"
      value={movieData.genre ?? ''}
        maxLength={20}
      onChange={(event)=>{
        
          setMovieData(prev => ({ ...prev, genre: event.target.value }))
      }}
      />
                </div>
              </div>
  <div className="addFilm_Panel_Rating">
    <label>Rating</label>

    <div className="rating_stars">
  {[1,2,3,4,5].map(starIndex=>{
  return (
      <img
    key={starIndex}
    src={starIndex <= movieData.rating ? star: starNull}
    alt="rating star" 
    className="rating_star"
    onClick={()=>{
      setMovieData(prev=>({...prev, rating: starIndex}))
    }}
    />
  )
  })}
    </div>

  </div>
              <div className="addFilm_Panel_PersonalNotes">
                <label>Personal Notes</label>
          <textarea 
          value={movieData.personalNotes ?? ''}
          onChange={(event)=>{
          setMovieData(prev => ({ ...prev, personalNotes: event.target.value }))
          }}
          ></textarea>
              </div>
      <div className="addFilm_Poster_Panel">
        <div className="addFilm_Poster_Panel_header">
          <span className="addFilm_Poster_Panel_header_icon">ⓘ</span>
          Preview
        </div>

          <div className="addFilm_Poster_Panel_header_main">
        <div className="addFilm_Poster_Panel_header_preview">
    
    {posterMode === 'color' && (
      <div
        className="addFilm_Poster_Panel_header_preview_inner"
        style={{ background: color }}
      />
    )}



    {(posterMode === 'image' ||
  posterMode === 'url') &&
  imageUrl && (
    <img
      src={imageUrl}
      alt="preview"
      className="preview_img"
    />
)}

    {posterMode === 'none' && (
      <div className="empty_preview">
        
      </div>
    )}

  </div>

            <div className="addFilm_Poster_Panel_header_right">
              <div className="addFilm_Poster_Panel_right_note">Your note will appear here...</div>

              <div className="addFilm_Poster_Panel_right_options">
                <button 
                className={`addFilm_Poster_Panel_right_btn 
                  ${  movieData.posterMode === 'color' ? 'active' : ''}`
                
                }
                onClick={() => {
      setPosterMode('color');

      setMovieData(prev => ({
        ...prev,
        posterMode: 'color',
        poster: '',
        color: color,
      }));
    }}
                >Color</button>
                <button 
                className={`addFilm_Poster_Panel_right_btn ${    movieData.posterMode === 'image' ? 'active' : ''}`}
onClick={() => {
  setPosterMode('image');
  setImageFile(null);
  setImageUrl('');
  setMovieData(prev => ({
    ...prev,
    posterMode: 'image',
        poster: '', 
  }));
}}

                >Image</button>
    <button
  type="button"
  className={`addFilm_Poster_Panel_right_btn ${
    movieData.posterMode === 'url' ? 'active' : ''
  }`}
  onClick={() => {
  setImageFile(null);
    setImageUrl('');
    setPosterMode('url');
    setMovieData(prev => ({
      ...prev,
         poster: '',   
      posterMode: 'url',
    }));
  }}
>
  Url Image
</button>
                 
                <button
                className={`addFilm_Poster_Panel_right_btn ${movieData.posterMode === 'none' ? 'active' : ''}`}
    onClick={() => {
      setPosterMode('none');
      setImageUrl('');
      setImageFile(null);

      setMovieData(prev => ({
        ...prev,
        posterMode: 'none',
        poster: '',
        color: '',
      }));
    }}
                >None</button>
              </div>
                
              <div className="addFilm_Poster_Panel_right_swatches">
        {swatches.map((swatch) => (
    <div
      key={swatch}
      className={`swatch ${color === swatch ? 'active' : ''}`}
      style={{ background: swatch }}
      onClick={() => {
        setColor(swatch);
        setPosterMode('color');

        setMovieData(prev => ({
          ...prev,
          color: swatch,
          poster: '',
          posterMode: 'color',
        }));
      }}
    />
        ))}
              </div>
{posterMode === 'image' ? 
(
              <div className="addFilm_Poster_Panel_upload_area">
                <span className="addFilm_Poster_Panel_upload_icon">↑</span>
                Upload image
                <input 
                type="file"
                accept="image/*" 
                className="addFilm_Poster_Panel_upload_input"
    onChange={(event) => {
    const file = event.target.files[0];

    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageFile(file);
    setImageUrl(url);
    setPosterMode('image');

    setMovieData(prev => ({
      ...prev,
      poster: url,
      posterMode: 'image',
    }));



  }}
                />

              </div>
              ) :
              

                            <div className="addFilm_Poster_Panel_upload_area">
                <span className="addFilm_Poster_Panel_upload_icon">↑</span>
                <span>Url:</span>
             <input
    type="text"
    placeholder="Enter image URL"
    className="addFilmUrl_Poster_Panel_upload_input"
    value={imageUrl ?? ''}
    onChange={(e) => {
      const url = e.target.value;

      setImageFile(null);
      setImageUrl(url);

      setMovieData(prev => ({
        ...prev,
        poster: url,
        posterMode: 'url',
      }));
    }}
  />
              </div>
              }

            </div>
          </div>
      </div>
  <div className="addFilm_Panel_btns">
    {movieData.id ? (
      <button 
        className='addFilm_Panel_Addbtn'
        type='button'
        onClick={() => {
      const  movie = saveCardInfo.find(m => m.id === movieData.id);
      if (!movie) return;
api.redactApi(movie.id, movieData)
    // .then(response => response.json())
      .then(response => {
            setSaveCardInfo(crd =>
              crd.map(card => card.id === response.id ? response : card)
            );
            setIsFormOpen(false)
          });
        }}
      >Save</button>
    ) : (
      <button 
        className='addFilm_Panel_Addbtn'
        type='button'
        onClick={() => {
          if (!movieData.movieTitle) return;
   api.addApi(movieData)
    // .then(response => response.json())
    .then(response =>       
    {
         setSaveCardInfo(prev => [...prev, response])
             
                      setMovieData({ movieTitle: '', year: '', genre: '', personalNotes: '', poster: '', rating: 0, color: '', dateAdded: getCurrentDate() })
                        setImageFile(null); 
                        setImageUrl('');
                        setPosterMode('none');
                                setIsFormOpen(false);
    }
    )
        
 
        }}
      >Add</button>
    )}
    <button
      className='addFilm_Panel_CancelBtn'
      type="button"
      onClick={() => setIsFormOpen(false)}
    >Cancel</button>
  </div>
            </div>
          </div>
  </div>

  )
  }


  export default MovieForm