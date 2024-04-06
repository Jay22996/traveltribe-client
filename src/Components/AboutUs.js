import Navbar from "../Components/Navbar"
import "../Css/About.css"
import Footer from './Footer'

const AboutUs = () => {
  window.scrollTo({top:0,left:0,behavior:"smooth"})

  return (
    <>
      <Navbar/>
      <div className='jay'>
  <div class="about">
    {/* <!-- ------------------------------------ --> */}
    <div class="upper">
      <div class="logo">
        {/* <!--      here i put the logo i made but the links were not working and the logo didn't show so removed it :(      --> */}
       
        <div class="image">
          <div class="camp">
            <img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78235/tent-clipart-md.png" alt="" id="tent" />
          </div>
        </div>
      </div>
      <div class="info">
        <h1>ABOUT TRAVEL TRIBE</h1>
        <p>
        At Travel Tribe, we don't just sell trips. we curate unforgettable memories. Join us as we redefine travel, one destination at a time.

Explore the extraordinary with Travel Trib. From hidden gems to iconic landmarks, we turn travel dreams into reality.
        </p>
      </div>
    </div>
    {/* <!-- ------------------------------------ --> */}
    <div class="lower">
      <div class="info" id="lower-info">
        <h1>ABOUT OUR TEAM</h1>
        <p>
        "We don't just write code. we compose digital symphonies. Our web development team orchestrates the harmony of design, functionality, and user experience to create masterpieces on the web."
        </p>
      </div>
      <div class="slider" id="lower-img">
        <img src="https://i.pinimg.com/736x/6d/7d/b3/6d7db3a1037c8ac5b41b0ebfec293ca4.jpg" alt="" />
      </div>
    </div>
    {/* <!-- ------------------------------------ --> */}
  </div>
</div>


<Footer/>


    </>
  )
}

export default AboutUs
