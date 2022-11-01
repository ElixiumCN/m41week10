//rick
// import styled from 'styled-components'
import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import Modal from "./Components/Modal";
import '../pages/App.css';
// import Cart from './Components/Cart';
import {faker} from '@faker-js/faker';

const App = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [ cats, setCats] = useState([])
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorMsg('')
        // const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8');
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=8');
        
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        // setCats(data)
        const catData = data.map((cat, index) => {
          return {
            name: faker.name.findName(),
            Cost: faker.commerce.price(),
            catImage: cat.url
          }
        })
        setCats(catData);


      } catch (error) {
        setErrorMsg("Oops something went wrong...")
        console.log(error.message)
      }
    }
    fetchData()
  }, [])

  if(errorMsg !== ''){
    return <h1>{errorMsg}</h1>
  }

  return (
    <div>
  {/* // ----------------------------------------------------------------- top of cats page */}
      <h1>Browse</h1>
  {/* // ----------------------------------------------------------------- */}

  {/* // ----------------------------------------------------------------- */}


      <div className="container">
      {cats.map((catInfo, index) => {
        return (
          <div className="catpics" key={index}>
            <img className="blur" src={catInfo.catImage} alt="cat"/>
            <div className="addToCart fade"><button onClick={toggleModal}>More details</button></div>
            {modal && (
                          <div className="modal">
                          <div className="overlay" onClick={toggleModal}></div>
                          <div className="modal-content">
                          <img className="modalCat" src={catInfo.catImage} alt="cat"/>
                            <h2>{catInfo.name}</h2>
                            {/* <p>{catInfo.Cost}</p> */}
                            <button className="cloaseBtn" onClick={toggleModal}>Close</button>
                            {/* <button> Add To Cart</button> */}
                          </div>
                        </div>
            )}

          </div>
        )
      })}
    </div>
    </div>
  );
}


export default App;
