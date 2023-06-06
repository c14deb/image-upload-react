
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
    <>
      <div>

        <div onClick={handleImageClick}>
          {/* <img src="./photo.jpg" alt="" /> */}
          {image ? (
            <img src={URL.createObjectURL(image)} alt='' />
          ) : (
            <img src='./photo.jpg' alt='' />
          )} <br />
          <button className='img-upload-button'>Upload</button>
          <input type="file" ref={inputref} onChange={handleImageChange} style={{ display: "none" }} />
        </div>
        
      </div>

    </>
  );
}

export default App;
