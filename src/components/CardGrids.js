import React from 'react'
import "./CardGrids.css"
import proj1 from "./images/proj1.png"
import proj2 from "./images/proj2.png"
import proj3 from "./images/proj3.png"
import proj4 from "./images/proj4.png"
import proj5 from "./images/proj5.png"
import proj6 from "./images/proj6.png"
function CardGrids() {
  return (
    <div>
      <div class="wrapper">
        <div class="card" id="newr"><img src={proj1} alt="" />
          <div class="info">
            <h5>OMDB Web App</h5>
            <p style={{ fontWeight: "300" }}>Movie directory with Firebase authentication, playlist keeper while using OMDB API. Deployed on netlify.</p>
            <a href="https://631715a76702a7389789dfd9--visionary-phoenix-c7fbfa.netlify.app/" target="_blank"><button>Read More</button></a>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj3} alt="" />
          <div class="info">
            <h5>Data Visualizer</h5>
            <p style={{ fontWeight: "300" }}>Keep track of all your investment with this expesense dashboard with visual representation.</p>
            <a href="https://covid-19-app-2633a.web.app/" target="_blank"><button>Read More</button></a>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj2} alt="" />
          <div class="info">
            <h5>Miniplay Extension</h5>
            <p style={{ fontWeight: "300" }}>Selected for Microsoft Edge Add-ons community, chromium based extension to share an app in smaller window.</p>
            <a href="https://github.com/Aishanipach/Miniplay" target="_blank"><button>Read More</button></a>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj4} alt="" />
          <div class="info">
            <h5>BaazVU & BaazAdmin</h5>
            <p style={{ fontWeight: "300" }}>Inventory management React-based dashboard for Baaz Bikes with AWS Cognito enabled auth and integrated backend. </p>
            <a href="https://www.linkedin.com/company/baazbikes/" target="_blank"><button>Read More</button></a>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj5} alt="" />
          <div class="info">
            <h5>Covid Dashboard</h5>
            <p style={{ fontWeight: "300" }}>React based Covid cases tracker with Maps API and visual search deployed on firebase</p>
            <a href="https://covid-19-app-2633a.web.app/" target="_blank"><button>Read More</button></a>
          </div>
        </div>
        <div class="card" id="newr"><img src={proj6} alt="" />
          <div class="info">
            <h5>Cloud Continuous Delivery of Microservices</h5>
            <p style={{ fontWeight: "300" }}>Architecture to deploy containerized microservices efficiently using greedy approach.</p>
            <a href="https://docs.google.com/document/d/1zuBbMjag3B_a8SprWLbmLCDzn7mT84MwnvEbxLSp69I/edit" target="_blank"><button>Read More</button></a>
          </div>
        </div>
      </div></div>
  )
}

export default CardGrids