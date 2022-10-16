import React from 'react'
import "./CardGrids.css"
import proj1 from "./images/proj1.svg"
import proj2 from "./images/proj2.svg"
import proj3 from "./images/proj3.svg"
import proj4 from "./images/proj4.svg"
import proj5 from "./images/proj5.svg"
import proj6 from "./images/proj6.svg"
function CardGrids() {
  return (
    <div>
      <div class="wrapper">
        <div class="card" id="newr"><img src={proj1} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API. Deployed on netlify.</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj3} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj2} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj4} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj5} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj6} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API</p>
            <button>Read More</button>
          </div>
        </div>
      </div></div>
  )
}

export default CardGrids