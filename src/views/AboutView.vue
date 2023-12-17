<template>



    <v-app class="Group_camp">
  
      <header class="nav_tout">
      <h2 class="logo">Logo</h2>
      <nav class="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <a href="#">Login</a>
          <span class="notification"><v-icon size="large" color="black" icon="mdi-bell-ring">mdi-bell-ring</v-icon></span>
      </nav>
  </header>
  
  <v-dialog v-model='open'  height="400" width="500">
     <div class="modal">
      
              <span class="icon-close">
                  <ion-icon name="close"></ion-icon>
              </span>
  
          <div class="form-box login">
              <h2>Login</h2>
              <form action="#">
                  <div class="input-box">
                    
                    <span class="icon" left="0" > <v-icon size="small" color="black" icon="mdi-close" ></v-icon></span>
                      <input  prepend-icon="mail" type="email" required>
                      <label>Email</label>
                  </div>
                  <div class="input-box">
                      <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                      <input type="password" required>
                      <label>Password</label>
                  </div>
                  <div class="remember-forgot">
                      <label><input type="checkbox">Remember me</label>
                      <a href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" class="btn">Login</button>
                  <div class="login-register">
                      <p>Don't have an account?<a href="#" id="register-link" class="register-link">Register</a></p>
                  </div>
              </form>
          </div>
  
          <div class="form-box register">
              <h2> registration</h2>
                <form action="#">
                  <div class="input-box">
                      <span class="icon"><ion-icon name="person"></ion-icon></span>
                      <input type="text" required>
                      <label>Username</label>
                  </div>
  
                  <div class="input-box">
                      <span class="icon"><ion-icon name="mail"></ion-icon></span>
                      <input type="email" required>
                      <label>Email</label>
                  </div>
                  <div class="input-box">
                      <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                      <input type="password" required>
                      <label>Password</label>
                  </div>
                  <div class="remember-forgot">
                      <label>
                          <input type="checkbox">I agree to the terms and conditions
                      </label>
                  
                  </div>
                  <button type="submit" class="btn">Register</button>
                  <div class="login-register">
                      <p>Already have an account?<a href="#" class="login-link">Login</a></p>
                  </div>
              </form>
          </div>
      </div>
   
  </v-dialog>
  
     <!-- Review -->
     <section class="client">
        <div class="section__container client__container">
          <h2 class="section__header">Review Client</h2>
          <div class="client__grid__star">
            <div class="client__card__star">
              <img src="../assets/img-1.png" alt="client" />
              <p>The booking </p>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              
            </div>
            <div class="client__card__star">
              <img src="../assets/img-2.png" alt="client" />
              <p>The booking </p>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
            </div>
            <div class="client__card__star">
              <img src="../assets/img-11.png" alt="client" />
              <p>The booking </p>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
              <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
            </div>
          </div>
        </div>
      </section>
  
  <!-- Slider images -->
  
  <div class="slider_container">
    <span class="slider" id="slider1"> </span>
    <span class="slider" id="slider2"> </span>
    <span class="slider" id="slider3"> </span>
    <span class="slider" id="slider4"> </span>
    <span class="slider" id="slider5"> </span>
    <span class="slider" id="slider6"> </span>
    <span class="slider" id="slider7"> </span>
    <div class="imgContainer">
      <div class="slide_div" id="slide_1">
        <img src="../assets/img-1.png" class="img_slider" id="img1">
        <a href="#slider1" class="button_slider" id="button1"></a>
      </div>
      <div class="slide_div" id="slide_1">
        <img src="../assets/img-2.png" class="img_slider" id="img2">
        <a href="#slider2" class="button_slider" id="button2"></a>
      </div>
      <div class="slide_div" id="slide_1">
        <img src="../assets/img-3.jpg" class="img_slider" id="img3">
        <a href="#slider3" class="button_slider" id="button3"></a>
      </div>
      <div class="slide_div" id="slide_1">
        <img src="../assets/img-4.jpg" class="img_slider" id="img4">
        <a href="#slider4" class="button_slider" id="button4"></a>
      </div>
      <div class="slide_div" id="slide_1">
        <img src="../assets/img-5.jpg" class="img_slider" id="img5">
        <a href="#slider5" class="button_slider" id="button5"></a>
      </div>
      <div class="slide_div" id="slide_6">
        <img src="../assets/img-6.jpg" class="img_slider" id="img6">
        <a href="#slider6" class="button_slider" id="button6"></a>
      </div>
      <div class="slide_div" id="slide_7">
        <img src="../assets/img-7.png" class="img_slider" id="img7">
        <a href="#slider7" class="button_slider" id="button7"></a>
      </div>
      
  
    </div>
  </div>
  
      <!-- Groupe de camping -->
      <section class="client">
        <div class="section__container client__container">
          <h2 class="section__header">What our client say</h2>
          <div class="client__grid">
            <div class="client__card">
              <img src="../assets/client-1.jpg" alt="client" />
              <p>
                The booking 
              </p>
              
            </div>
            <div class="client__card">
              <img src="../assets/client-2.jpg" alt="client" />
              <p>
                The booking 
              </p>
            </div>
            <div class="client__card">
              <img src="../assets/client-4.jpg" alt="client" />
              <p>
                The booking 
              </p>
            </div>
            <div class="client__card">
              <img src="../assets/client-3.jpg" alt="client" />
              <p>
                The website 
              </p>
            </div>
          </div>
        </div>
      </section>
   
      <section class="tour">
      <div class="section__container tour__container">
        <h4>Watch Our Video Tour</h4>
        <div class="video__container">
          <video src="../assets/video.mp4" autoplay loop muted></video>
        </div>
      </div>
    </section>

      
     <!-- application mobile-->
      <section class="section__container about__container" id="about">
        <div class="about__image">
          <img src="../assets/mobile.png" alt="about" />
        </div>
        <div class="about__content">
          <h2 class="section__header">Easy Way To Go To Your Next Station</h2>
          <p class="section__description">
            Navigate the world effortlessly with our user-friendly platform,
            connecting you to the finest destinations and accommodations.
          </p>
          <ul>
            <li>
              <span><i class="ri-checkbox-circle-line"></i></span>
              Easily find and compare transportation options, ensuring a
              hassle-free journey to your next destination.
            </li>
            <li>
              <span><i class="ri-checkbox-circle-line"></i></span>
              Enjoy a straightforward and quick booking experience for flights,
              trains, and other transportation modes, all in one place.
            </li>
          </ul>
          <div class="about__links">
            <a href="#">
              <img src="../assets/google-play.png" alt="google-play" />
            </a>
            <a href="#">
              <img src="../assets/app-store.png" alt="app-store" />
            </a>
          </div>
        </div>
      </section>
     
     <!-- section du pide de la page -->
     <section class="footer">
         <div class="box-container">
             
             <div class="box">
                 <h3>Liens extra</h3>
                 <a href="#"><i class="fas fa-angle-right    "></i>posez questions </a>
                 <a href="#"><i class="fas fa-angle-right    "></i>a propos de nous </a>
                 <a href="#"><i class="fas fa-angle-right    "></i>politique de confidentialité </a>
                 <a href="#"><i class="fas fa-angle-right    "></i>nos termes </a>
             </div>
             <div class="box">
                 <h3>info contact</h3>
                 <a href="#"><v-icon size="large" color="white" icon="mdi-phone">mdi-phone</v-icon>+229 60934817 </a>
                 <a href="#"><i class="fas fa-envelope    "></i>ronasdev@gmail.com </a>
                 <a href="#"><i class="fas fa-map    "></i>cotonou - Bénin </a>
             </div>
             <div class="box">
                 <h3>suivez nous</h3>
                 <a href="#"><i class="fab fa-facebook "></i>facebook </a> 
                 <a href="#"><i class="fab fa-instagram "></i>instagram </a>
                 <a href="#"><i class="fab fa-linkedin "></i>linkedIn </a>
             </div>
         </div>
         <div class="home-right">
             créé par <span>mr, ronas</span> | tout droit reservé
         </div>
     </section>
    </v-app>
  </template>
  <script>
  
  export default {
     
    name: 'NavBar',
    
    components: {
  
    },
   
     data: () => ({
     //image:require('../assets/about.png'),
     open:false
     })
   }; 
   
   
  </script>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
  
  
  .Group_camp{
    --primary-color: #2c3855;
    --primary-color-dark: #435681;
    --text-dark: #333333;
    --text-light: #767268;
    --extra-light: #f3f4f6;
    --white: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Pppins', sans-serif;
    
    
  }
  
  header .nav_tout{
      
      display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
   background: red ;
    background-position: center ;
  
  }
  header{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 20px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 99;
  }
  
  .logo{
      font-size: 2em;
      color: #171616;
      user-select: none;
  }
  
  .navigation a {
      position:relative;
      font-size: 1.1em;
      color: #171616;
      text-decoration: none;
      font-weight: 500;
      margin-left: 40px;
  
  }
  
  .navigation a::after{
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 100%;
      height: 3px;
      background: #454242;
      border-radius: 5px;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .5s;
  }
  .navigation a:hover::after{
      transform-origin: left;
      transform: scaleX(1);
  }
  
  .navigation .btnLogin-popup {
      width: 130px;
      height: 50px;
      background: transparent;
      border: 2px solid #fff;
      outline: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1.1em;
      color: #171616;
      font-weight: 500;
      margin-left: 40px;
      transition: .5s;
  
  }
  
  .navigation .btnLogin-popup:hover{
      background: #fff;
      color: #162938;
  }
  .notification{
      margin-left: 30px;
      
  }
  .wrapper{
      position: relative;
      width: 400px;
      height: 440px;
      background: transparent;
      border: 2px solid rgba(255, 255, 255, .5);
      border-radius:20px;
      backdrop-filter: blur(20px);
      box-shadow: 0 0 30px rgba(0, 0, 0, .5);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transform: scale(0);
      transition: transform .5s ease, height .2s ease;
  }
  .wrapper.active-popup {
      transform: scale(1);
  }
  
  .wrapper.active {
      height: 520px;
  }
  .wrapper .form-box {
      width: 100%;
      padding:40px;
  }
  
  .wrapper .form-box.login{
     /* display: none;*/
     transition: transform .18s ease;
     transform: translateX(0);
  }
  
  .wrapper.active .form-box.login{
      transition: none;
      transform: translateX(-400px);
  
  }
  
  .wrapper .form-box.register{
      position: absolute;
      transition: none;
      transform: translateX(400px);
  }
  .wrapper.active .form-box.register{
     /* display: none;*/
     transition: transform .18s ease;
     transform: translateX(0);
  }
  
  .wrapper .icon-close {
      position: absolute;
      top: 0;
      right: 0;
      width: 45px;
      height: 45px;
      background: #162938;
      font-size: 2em;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-left-radius: 20px;
      cursor: pointer;
      z-index: 1;
  }
  
  .form-box h2 {
      font-size: 2em;
      color: #162938;
      text-align: center;
  }
  
  .input-box{
      position: relative;
      width: 100%;
      height: 50px;
      border-bottom: 2px solid #162938;
      margin: 30px 0;
  }
  
  .input-box label{
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      font-size: 1em;
      color: #162938;
      font-weight: 500;
      pointer-events: none;
      transition: .5s;
  
  }
  
  .input-box input:focus~label,
  .input-box input:valid~label{
      top:-5px;
   
  }
  
  .input-box input{
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-size: 1em;
      color: #162938;
      font-weight: 600;
      padding: 0 35px 0 5px;
  }
  
  .input-box .icon {
      position: absolute;
      right: 8px;
      font-size: 1.2em;
      color: #162938;
      line-height: 57px;
  }
  
  .remember-forgot{
      font-size: .9em;
      color:#162938;
      font-weight: 500;
      margin: -15px 0 15px;
      display: flex;
      justify-content: space-between;
  }
  
  .remember-forgot label input{
      accent-color: #162938;
      margin-right: 3px;
  }
  
  .remember-forgot a {
      color: #162938;
      text-decoration: none;
  }
  
  .remember-forgot a:hover{
      text-decoration: underline;
  }
  
  
  
  .login-register{
      font-size: .9em;
      color: #162938;
      text-align: center;
      font-weight: 500;
      margin: 25px 0 10px;
  }
  
  .login-register p a {
      color: #162938;
      text-decoration: none;
      font-weight: 600;
  }
  .login-register p a:hover{
      text-decoration: underline;
  }
  .modal{
      background-color:#FFF
  }
  
  .tour {
  margin-bottom: 2rem;
  background-image: url("../assets/tour.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.tour__container {
  padding-bottom: 0;
}

.tour__container h4 {
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--white);
  text-align: center;
}

.video__container {
  width: 100%;
  max-width: 600px;
  margin-inline: auto;
  height: 300px;
  overflow: hidden;
  background-color: var(--text-light);
  transform: translateY(2rem);
  border: 1px solid var(--white);
  border-radius: 10px;
}




  
  .section__container {
    max-width: 1200px;
    margin: auto;
    padding: 2rem 1rem;
  }
  
  .section__header {
    font-size: 2rem;
    color: var(--text-dark);
    text-align: center;
  }
  
  a {
    text-decoration: none;
  }
  
  img {
    width: 100%;
    display: flex;
  }
  
  
  
  ul {
    list-style: none;
  }
  .client {
    background-color: var(--extra-light);
  }
  
  .client__grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5rem;
  }
  .client__grid__star {
    margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  }
  .client__card__star {
    overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  }
  .client__card__star img {
    position: relative;
  }
  
  
  .client__card img {
    width: 200px;
    box-shadow: 30px 30px 20px #6c6b6b;
    margin: auto;
    margin-bottom: 1rem;
    
  }
  
  .client__card p {
    text-align: center;
    color: var(--text-dark);
  }
  .section__container {
    max-width: var(--max-width);
    margin: auto;
    padding: 3rem 1rem;
  }
  
  .section__header {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-dark);
  }
  
  .section__description {
    margin-top: 1rem;
    max-width: 600px;
    color: var(--text-light);
  }
  
  .about__container {
    display: grid;
    gap: 2rem;
  }
  
  .about__image img {
    max-width: 170px;
    margin: auto;
  }
  
  .about__content ul {
    margin-block: 2rem;
    display: grid;
    gap: 1rem;
  }
  
  .about__content li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    color: var(--text-light);
  }
  
  .about__content li span {
    font-size: 1.2rem;
    color: var(--primary-color);
  }
  
  .about__links {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .about__links img {
    max-width: 150px;
    height: 100%;
  }
  
  
  
  .footer{
      background: url(../assets/footer-bg.jpg) no-repeat;
      background-size: cover;
      background-position: center;
  }
  .footer .box-container{
      display: grid;
      grid-template-columns: repeat(auto-fit,minmax(25rem,1fr));
      gap: 1rem;
  }
  .footer .box-container .box h3{
      color: var(--white);
      font-size: 1.5rem;
      display: block;
  }
  .footer .box-container .box a{
      color: var(--light-white);
      font-size: 1.5rem;
      display: block;
  }
  .footer .box-container .box a i{
      color: var(--main-color);
      padding-right: .5rem;
      transition: .2s linear;
  }
  .footer .box-container .box a:hover i{
      padding-right: 2rem;
  }
  .footer .home-right{
      text-align: center;
      padding-top: 3rem;
      margin-top: 3rem;
      border-top: .1rem solid var(--light-white);
      font-size: 2rem;
      color: var(--white);
  }
  .footer .home-right span {
      color: var(--main-color);
  }
  
  @media (width > 768px) {
  
    .header {
      padding-top: 0;
    }
  
    .about__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }
  
  
  
  .slider_container{
      width: 100%;
      height: 90vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      background: #dedad7;
  }
  
  .imgContainer{
      width: 100%;
      height: 600px;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s;
  }
  
  .slide_div{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 30px 0 30px;
  }
  
  .img_slider{
      position: relative;
      height: 370px;
      width: 240px;
      filter: saturate(10%);
      transition: 0.7s;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
  }
  
  .button_slider{
      position: absolute;
      width: 240px;
      height: 370px;
      transition: 0.7s;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 20px;
  }
  
  .button_slider:hover{
      background-color: rgba(0, 0, 0, 0.2);
  }
  
  #slider1:target ~ .imgContainer #img1,
  #slider1:target ~ .imgContainer #button1{
    width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider2:target ~ .imgContainer #img2,
  #slider2:target ~ .imgContainer #button2{
    width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider3:target ~ .imgContainer #img3,
  #slider3:target ~ .imgContainer #button3{
    width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider4:target ~ .imgContainer #img4,
  #slider4:target ~ .imgContainer #button4{
      width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider5:target ~ .imgContainer #img5,
  #slider5:target ~ .imgContainer #button5{
      width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider6:target ~ .imgContainer #img6,
  #slider6:target ~ .imgContainer #button6{
      width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  #slider7:target ~ .imgContainer #img7,
  #slider7:target ~ .imgContainer #button7{
      width: 250px;
      height: 500px;
      background-color: transparent;
      filter: saturate(100%);
  }
  
  
  #slider1:target ~ .imgContainer{
      left: 60%;
  }
  #slider2:target ~ .imgContainer{
      left: 40%;
  }
  #slider3:target ~ .imgContainer{
      left: 20%;
  }
  #slider4:target ~ .imgContainer{
      left: 0%;
  }
  #slider5:target ~ .imgContainer{
      left: -20%;
  }
  #slider6:target ~ .imgContainer{
      left: -40%;
  }
  #slider7:target ~ .imgContainer{
      left: -60%;
  }
  
  </style>