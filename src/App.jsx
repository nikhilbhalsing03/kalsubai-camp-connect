
import './App.css'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <div className="logo">Kalsubai<span>CampConnect</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#camping">Camping</a>
          <a href="#trekking">Night Trek</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="https://wa.me/message/KCIKFTALYCUVI1">
          Enquire Now
        </a>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">EXPLORE • EXPERIENCE • CONNECT</p>
          <h1>Find Your Escape<br />in the <span>Sahyadris.</span></h1>
          <p className="hero-description">
            Discover Kalsubai through unforgettable treks,
            peaceful camping nights and authentic local experiences.
          </p>

          <div className="hero-buttons">
            <a href="https://wa.me/message/KCIKFTALYCUVI1" className="primary-button">
              Explore Experiences ↗
            </a>
            <a href="#discover" className="secondary-button">
              Discover Kalsubai
            </a>
          </div>

          <div className="hero-info">
            <div><strong>1,646 m</strong><span>Highest Peak in Maharashtra</span></div>
            <div><strong>6.6 km</strong><span>Trekking Trail</span></div>
            <div><strong>Bari Village</strong><span>Your Adventure Begins</span></div>
          </div>
        </div>
      </main>

      
<section className="intro" id="discover">
  <p className="eyebrow">WELCOME TO KALSUBAI</p>
  <h2>More than a trek.<br />A memory in the making.</h2>
  <p>
    From breathtaking sunrise views to camping beneath the stars,
    experience the beauty of Kalsubai with local people who know
    these mountains best.
  </p>

  <div className="discover-gallery">
    <img src="/images/takeapicture.jpg" alt="Kalsubai temple at the summit" />
    <img src="/images/temple3.jpg" alt="Kalsubai mountain temple" />
    <img src="/images/night.jpeg" alt="Kalsubai temple experience" />
  </div>
</section>


<section className="video-section">
  <div className="video-heading">
    <p className="eyebrow">EXPERIENCE THE MOUNTAINS</p>
    <h2>Feel the Magic of Kalsubai</h2>
    <p>Real moments. Real adventures. Unforgettable memories.</p>
  </div>

  <div className="video-grid">
    <article className="video-card">
      <video src="/videos/kalsubai-sunrise.MOV" controls playsInline preload="metadata" />
      <h3>Sunrise in the Sahyadris</h3>
      <p>Watch the mountains welcome a new day.</p>
    </article>

    <article className="video-card">
      <video src="/videos/kalsubai-summit.MOV" controls playsInline preload="metadata" />
      <h3>The Summit Experience</h3>
      <p>Every step leads to a beautiful view.</p>
    </article>

    <article className="video-card">
      <video src="/videos/kalsubai-camping.MOV" controls playsInline preload="metadata" />
      <h3>Camping Under the Stars</h3>
      <p>Experience the peaceful side of mountain life.</p>
    </article>
  </div>
</section>


      

<section className="experience" id="camping">
  <div className="section-heading">
    <p className="eyebrow">STAY CLOSE TO NATURE</p>
    <h2>Camping Experiences</h2>
    <p>
      Unplug from everyday life and spend a memorable night in the Sahyadris.
    </p>
  </div>

  <div className="package-grid">

    <article className="package-card">
      <div className="package-image">
        <img
          src="/images/summit3.jpeg"
          alt="Kalsubai mountain camping experience"
        />
      </div>

      <span className="package-tag">MOUNTAIN EXPERIENCE</span>
      <h3>Tent Camping at Kalsubai Top</h3>
      <p>
        Sleep beneath the stars and wake up surrounded by mountain views.
      </p>
      <ul>
        <li>Tent with mat and blanket</li>
        <li>Fresh-up facility at base village</li>
        <li>Evening dinner (Veg / Non-Veg)</li>
        <li>Morning breakfast at campsite</li>
        <li>Local support and guidance</li>
      </ul>
      <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
        Enquire on WhatsApp ↗
      </a>
    </article>

    <article className="package-card featured-package">
      <div className="package-image">
        <img
          src="/images/basehotel.jpeg"
          alt="Tent accommodation near Kalsubai"
        />
      </div>

      <span className="package-tag">VILLAGE STAY</span>
      <h3>Tent Camping at Base Village</h3>
      <p>
        Enjoy a relaxed camping experience with local hospitality at Bari.
      </p>
      <ul>
        <li>Tent stay with mat and blanket</li>
        <li>Evening snacks</li>
        <li>Unlimited dinner (Veg / Non-Veg)</li>
        <li>Guided night trek experience</li>
        <li>Breakfast at the top or base</li>
        <li>Local guide support</li>
      </ul>
      <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
        Enquire on WhatsApp ↗
      </a>
    </article>

  </div>
</section>



<section className="night-trek-section" id="trekking">
  <div className="section-heading">
    <p className="eyebrow">CHASE THE FIRST LIGHT</p>
    <h2>Kalsubai Night Trek</h2>
    <p>Start your climb under the stars and experience sunrise from Maharashtra's highest peak.</p>
  </div>

  <div className="trek-grid">
    <article className="trek-card">
      <div className="trek-image">
        <img src="/images/sunset.jpeg" alt="Sunrise Night Trek at Kalsubai" />
      </div>
      <h3>Sunrise Night Trek</h3>
      <p>A guided night trek with meals at the base village.</p>
      <ul>
        <li>Local trekking guide</li>
        <li>Fresh-up facility</li>
        <li>Breakfast at base</li>
        <li>Lunch at base (Veg / Non-Veg)</li>
      </ul>
      <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">Enquire Now ↗</a>
    </article>

    <article className="trek-card">
      <div className="trek-image">
        <img src="/images/camp2.jpeg" alt="Night Trek with Stay at Kalsubai" />
      </div>
      <h3>Night Trek with Stay</h3>
      <p>Enjoy the trek with a comfortable room stay.</p>
      <ul>
        <li>Local trekking guide</li>
        <li>Room stay and fresh-up</li>
        <li>Dinner (Veg / Non-Veg)</li>
        <li>Breakfast at base</li>
      </ul>
      <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">Enquire Now ↗</a>
    </article>

    <article className="trek-card">
      <div className="trek-image">
        <img src="/images/nightmeal.jpeg" alt="Full Stay and Meals experience" />
      </div>
      <h3>Full Stay & Meals</h3>
      <p>A complete village stay and trekking experience.</p>
      <ul>
        <li>Local trekking guide</li>
        <li>Room stay and fresh-up</li>
        <li>Dinner (Veg / Non-Veg)</li>
        <li>Breakfast and lunch</li>
      </ul>
      <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">Enquire Now ↗</a>
    </article>
  </div>
</section>


{/* TRAVEL SERVICES SECTION */}
<section className="travel-section" id="travel">
  <div className="section-heading">
    <p className="eyebrow">EXPLORE MORE</p>
    <h2>Travel Around the Sahyadris</h2>
    <p>
      Make your journey easier with convenient local transport
      from Kasara to Kalsubai and nearby destinations.
    </p>
  </div>

  <div className="travel-content">
    <div className="travel-info">
      <span className="package-tag">LOCAL TRANSPORT</span>
      <h3>Your Journey, Our Responsibility.</h3>
      <p>
        We arrange comfortable pickup and drop services with
        experienced local drivers for trekkers, families and groups.
      </p>

      <ul>
        <li>Pickup and drop from Kasara Railway Station</li>
        <li>Private vehicle and sharing options</li>
        <li>Flexible timings according to your trek</li>
        <li>Local drivers familiar with the routes</li>
        <li>Transport for individuals and groups</li>
      </ul>

      <a
        href="https://wa.me/message/KCIKFTALYCUVI1"
        target="_blank"
        rel="noreferrer"
      >
        Enquire for Transport →
      </a>
    </div>

    <div className="destination-panel">
      <span className="package-tag">NEARBY DESTINATIONS</span>
      <h3>Discover the Region</h3>

      <div className="destination-list">
        <div><span>01</span> Kalsubai Peak</div>
        <div><span>02</span> Bhandardara</div>
        <div><span>03</span> Harishchandragad</div>
        <div><span>04</span> Ratangad Fort</div>
        <div><span>05</span> Sandhan Valley</div>
        <div><span>06</span> Harihar Fort</div>
        <div><span>07</span> Alang – Madan – Kulang</div>
      </div>
    </div>
  </div>
</section>


{/* HOTEL & RESTAURANT SECTION */}

<section className="hotel-section" id="hotel">
  <div className="section-heading">
    <p className="eyebrow">LOCAL FOOD & HOSPITALITY</p>
    <h2>Welcome to Dadanche Hotel</h2>
    <p>
      Enjoy homemade meals, traditional Maharashtrian flavours
      and comfortable stays during your Kalsubai adventure.
    </p>
  </div>

  <div className="hotel-intro">
    <div>
      <span className="package-tag">A TASTE OF THE SAHYADRIS</span>
      <h3>Good Food. Warm Hospitality. Memorable Stays.</h3>
      <p>
        Located near Kalsubai in Bari Village, Dadanche Hotel
        welcomes trekkers, families and travellers with freshly
        prepared food and local hospitality.
      </p>
      <div className="food-options">
        <span>Pure Veg</span>
        <span>Non-Veg</span>
        <span>Jain Food</span>
      </div>
    </div>

    <div className="hotel-stay">
      <span className="package-tag">STAY WITH US</span>
      <h3>Relax Before or After Your Trek</h3>
      <p>
        Choose from available room stays, village accommodation
        and camping experiences.
      </p>
      <a
        href="https://wa.me/message/KCIKFTALYCUVI1"
        target="_blank"
        rel="noreferrer"
      >
        Enquire for Stay →
      </a>
    </div>
  </div>

  <div className="menu-heading">
    <p className="eyebrow">FRESHLY PREPARED</p>
    <h3>Explore Our Menu</h3>
  </div>

  <div className="menu-grid">
    <div className="menu-card">
      <div className="menu-image">
        <img src="/images/poha.jpeg" alt="Breakfast at Dadanche Hotel" />
      </div>
      <span className="menu-number">01</span>
      <h3>Breakfast</h3>
      <ul>
        <li>Kanda Poha</li>
        <li>Upma & Shira</li>
        <li>Misal Pav</li>
        <li>Vada Pav</li>
        <li>Idli Sambar</li>
        <li>Paratha</li>
        <li>Maggie</li>
        <li>Pav Bhaji</li>
      </ul>
    </div>

    <div className="menu-card">
      <div className="menu-image">
        <img src="/images/vegthali.jpeg" alt="Vegetarian food at Dadanche Hotel" />
      </div>
      <span className="menu-number">02</span>
      <h3>Vegetarian</h3>
      <ul>
        <li>Veg Thali</li>
        <li>Zunka Bhakari</li>
        <li>Puranpoli Thali</li>
        <li>Veg Biryani</li>
        <li>Khichadi</li>
        <li>Mushroom Thali</li>
        <li>Veg Pulav</li>
      </ul>
    </div>

    <div className="menu-card">
      <div className="menu-image">
        <img src="/images/nonvegthali.jpeg" alt="Non-vegetarian food at Dadanche Hotel" />
      </div>
      <span className="menu-number">03</span>
      <h3>Non-Vegetarian</h3>
      <ul>
        <li>Chicken Thali</li>
        <li>Murga Chicken Thali</li>
        <li>Fish Thali</li>
        <li>Egg Thali</li>
        <li>Mutton Thali</li>
      </ul>
    </div>
  </div>

  <div className="hotel-cta">
    <h3>Hungry After Your Trek?</h3>
    <p>Contact us for food, accommodation and group enquiries.</p>
    <a
      href="https://wa.me/message/KCIKFTALYCUVI1"
      target="_blank"
      rel="noreferrer"
    >
      Contact Dadanche Hotel →
    </a>
  </div>
</section>


{/* GALLERY SECTION */}
<section className="gallery-section" id="gallery">
  <div className="section-heading">
    <p className="eyebrow">MOMENTS FROM THE MOUNTAINS</p>
    <h2>Experience Kalsubai Through Our Lens</h2>
    <p>
      From beautiful sunrises to peaceful camping nights,
      explore the moments that make every Kalsubai trip special.
    </p>
  </div>

  <div className="gallery-grid">

    <div className="gallery-item gallery-large">
      <img
        src="/images/kalsubai-hero.jpg"
        alt="Kalsubai mountain landscape"
      />



<div className="gallery-item">
  <img
    src="/images/temple1.jpg"
    alt="Kalsubai summit temple"
  />
  <div className="gallery-caption">
    <h3>Kalsubai Temple</h3>
    <p>A peaceful temple at the mountain summit</p>
  </div>
</div>

<div className="gallery-item">
  <img
    src="/images/temple2.jpg"
    alt="Kalsubai temple surroundings"
  />
  <div className="gallery-caption">
    <h3>Temple & Mountains</h3>
    <p>Discover the spiritual side of Kalsubai</p>
  </div>
</div>

<div className="gallery-item">
  <img
    src="/images/temple3.jpg"
    alt="Kalsubai temple view"
  />
  <div className="gallery-caption">
    <h3>Summit Memories</h3>
    <p>Beautiful moments from the summit</p>
  </div>
</div>




      <div className="gallery-overlay">
        <span>THE SAHYADRIS</span>
        <h3>Discover Kalsubai</h3>
      </div>
    </div>

    <div className="gallery-item">
      <video
        src="/videos/kalsubai-sunrise.MOV"
        controls
        playsInline
        preload="metadata"
      />
      <div className="gallery-caption">
        <h3>Sunrise Views</h3>
        <p>Watch the mountains come alive</p>
      </div>
    </div>

    <div className="gallery-item">
      <video
        src="/videos/kalsubai-summit.MOV"
        controls
        playsInline
        preload="metadata"
      />
      <div className="gallery-caption">
        <h3>The Summit Experience</h3>
        <p>Moments above the clouds</p>
      </div>
    </div>

    <div className="gallery-item">
      <video
        src="/videos/kalsubai-camping.MOV"
        controls
        playsInline
        preload="metadata"
      />
      <div className="gallery-caption">
        <h3>Camping Under the Stars</h3>
        <p>Enjoy the beauty of mountain camping</p>
      </div>
    </div>

  </div>
</section>


{/* BLOG SECTION */}
<section className="blog-section" id="blog">
  <div className="section-heading">
    <p className="eyebrow">TRAVEL STORIES & GUIDES</p>
    <h2>Explore. Learn. Experience.</h2>
    <p>
      Everything you need to know before planning your next
      adventure in the beautiful Sahyadri mountains.
    </p>
  </div>

  <div className="blog-grid">

    <article className="blog-card">
      <span className="blog-number">01 / TREKKING GUIDE</span>
      <h3>Navigating the Trails of Kalsubai</h3>
      <p>
        Discover the trekking route, important stops, ladders
        and everything you should know before reaching the summit.
      </p>
      <a href="#discover">Explore Kalsubai →</a>
    </article>

    <article className="blog-card">
      <span className="blog-number">02 / TRAVEL TIPS</span>
      <h3>Best Time to Visit Kalsubai</h3>
      <p>
        Explore the different seasons and discover what makes
        every visit to Maharashtra's highest peak special.
      </p>
      <a href="#discover">Discover More →</a>
    </article>

    <article className="blog-card">
      <span className="blog-number">03 / NIGHT TREK</span>
      <h3>Master Your Night Trek Planning</h3>
      <p>
        Learn about night trekking, preparation, local guides
        and watching the sunrise from the summit.
      </p>
      <a href="#night-trek">Explore Night Trek →</a>
    </article>

    <article className="blog-card">
      <span className="blog-number">04 / TRAVEL GUIDE</span>
      <h3>Kalsubai Trek from Mumbai</h3>
      <p>
        Plan your journey from Mumbai, including travel to
        Kasara and onward transport to Bari Village.
      </p>
      <a href="#travel">Plan Your Journey →</a>
    </article>

    <article className="blog-card">
      <span className="blog-number">05 / TREKKING TIPS</span>
      <h3>Overcoming Trek Challenges</h3>
      <p>
        Understand the trail, steep sections, ladders and
        basic preparation for a comfortable trekking experience.
      </p>
      <a href="#discover">Read Trek Tips →</a>
    </article>

    <article className="blog-card">
      <span className="blog-number">06 / ESSENTIAL INFORMATION</span>
      <h3>Your Complete Kalsubai Guide</h3>
      <p>
        Get familiar with Bari Village, local food, accommodation,
        trekking support and nearby attractions.
      </p>
      <a href="#hotel">Explore Local Services →</a>
    </article>

  </div>
</section>


{/* CONTACT SECTION */}
<section className="contact-section" id="contact">
  <div className="section-heading">
    <p className="eyebrow">LET'S PLAN YOUR ADVENTURE</p>
    <h2>Get in Touch With Us</h2>
    <p>
      Planning a trek, camping trip, family visit or group adventure?
      Our local team is here to help.
    </p>
  </div>

  <div className="contact-content">
    <div className="contact-info">
      <span className="package-tag">CONTACT INFORMATION</span>
      <h3>We'd Love to Hear From You.</h3>

      <div className="contact-detail">
        <span>PHONE</span>
        <a href="tel:+918390374971">+91 8390374971</a>
        <a href="tel:+917507265841">+91 7507265841</a>
      </div>

      <div className="contact-detail">
        <span>EMAIL</span>
        <a href="mailto:joinkalsabaitrek@gmail.com">
          joinkalsabaitrek@gmail.com
        </a>
      </div>

      <div className="contact-detail">
        <span>LOCATION</span>
        <p>Jahagirdarwadi, Bari Village, Maharashtra, India</p>
      </div>

      <a
        className="contact-whatsapp"
        href="https://wa.me/message/KCIKFTALYCUVI1"
        target="_blank"
        rel="noreferrer"
      >
        Chat With Us on WhatsApp →
      </a>
    </div>

    <div className="contact-enquiry">
      <span className="package-tag">YOUR NEXT ADVENTURE</span>
      <h3>What Can We Help You With?</h3>
      <p>
        Contact us for personalised assistance with:
      </p>

      <div className="enquiry-options">
        <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
          Trekking & Night Trek
        </a>
        <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
          Camping & Accommodation
        </a>
        <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
          Travel & Transportation
        </a>
        <a href="https://wa.me/message/KCIKFTALYCUVI1" target="_blank" rel="noreferrer">
          Group & Vendor Enquiries
        </a>
      </div>

      <a
        className="contact-secondary"
        href="https://www.google.com/maps/search/?api=1&query=Jahagirdarwadi%2C+Bari%2C+Maharashtra"
        target="_blank"
        rel="noreferrer"
      >
        Find Us on Google Maps ↗
      </a>
    </div>
  </div>
</section>


      <footer id="contact">
        <h2>Ready for your Kalsubai adventure?</h2>
        <p>Jahagirdarwadi, Bari Village</p>
        <a href="https://wa.me/message/KCIKFTALYCUVI1">Contact us on WhatsApp ↗</a>
        <p>+91 8390374971 | +91 7507265841</p>
        <p>joinkalsubaitrek@gmail.com</p>
        <small>© KalsubaiCampConnect. All rights reserved.</small>
      </footer>
    </div>
  )
}

export default App
