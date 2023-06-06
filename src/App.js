
import './App.css';
import { useRef, useState } from 'react';




function App() {

  const inputref = useRef(null)
  const [image, setImage] = useState("")

  const handleImageClick = () => {
    inputref.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setImage(e.target.files[0])
  }



  return (
    <div className="image-upload-container">
        <div className="box-decoration">

        <label htmlFor="image-upload-input" className="image-upload-label">
          {image ? image.name : "Choose an image"}
        </label>

        <div onClick={handleImageClick} style={{ cursor: "pointer" }}>
          {/* <img src="./photo.jpg" alt="" /> */}
          {image ? (
            <img src={URL.createObjectURL(image)} alt='' className="img-display-after" />
          ) : (
            <img src='./photo.jpg' alt='' className="img-display-before" />
          )} 
      
          <input id="image-upload-input" type="file" ref={inputref} onChange={handleImageChange} style={{ display: "none" }} />
              <br />
          <button className='image-upload-button'>Upload</button>
        </div>

        
      </div>

      </div>
  );
}

export default App;
