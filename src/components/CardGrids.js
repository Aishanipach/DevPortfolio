import React from 'react'
import "./CardGrids.css"
import proj1 from "./images/proj1.svg"
import proj2 from "./images/proj2.svg"
import proj3 from "./images/proj3.svg"
import proj4 from "./images/proj4.svg"
function CardGrids() {
  return (
    <div>
      <div class="wrapper">
        <div class="card" id="newr"><img src={proj1} />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj3} />
          <div class="info">
            <h1>Road</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj2} />
          <div class="info">
            <h1>Protester</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj4} />
          <div class="info">
            <h1>Protester</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
            <button>Read More</button>
          </div>
        </div>
      </div></div>
  )
}

export default CardGrids