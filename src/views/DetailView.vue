<template>
<!--- #POPULAR -->

<section class="popular-staar" id="destination">
        <div class="container-staar">

          <p class="section-subtitle-staar">Uncover place</p>

          <h2 class="h2 section-title-staar">Popular destination</h2>

          <p class="section-text-staar">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul class="popular-list-staar">

            <li>
              <div class="popular-card_staar">

                <figure class="card-img_staar">
                  <img src="../assets/popular-1.jpg" alt="San miguel, italy" loading="lazy">
                </figure>

                <div class="card-content-staar">

                  <div class="card-rating-staar">
                    <v-icon size="x-large" color="black" icon="mdi-star">mdi-star</v-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle-staar">
                    <a href="#">Italy</a>
                  </p>

                  <h3 class="h3 card-title-staar">
                    <a href="#">San miguel</a>
                  </h3>

                  <p class="card-text-staar">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card-staar">

                <figure class="card-img-staar">
                  <img src="../assets/popular-2.jpg" alt="Burj khalifa, dubai" loading="lazy">
                </figure>

                <div class="card-content-staar">

                  <div class="card-rating-staar">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle-staar">
                    <a href="#">Dubai</a>
                  </p>

                  <h3 class="h3 card-title-staar">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p class="card-text-staar">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card-staar">

                <figure class="card-img-staar">
                  <img src="../assets/popular-3.jpg" alt="Kyoto temple, japan" loading="lazy">
                </figure>

                <div class="card-content-staar">

                  <div class="card-rating-staar">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p class="card-subtitle-staar">
                    <a href="#">Japan</a>
                  </p>

                  <h3 class="h3 card-title-staar">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p class="card-text-staar">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <button class="btn btn-primary-staar">More destintion</button>

        </div>
      </section>

</template>
<style>
:root {

/**
 * colors
 */

--united-nations-blue: hsl(214, 56%, 58%);
--bright-navy-blue: hsl(214, 57%, 51%);
--spanish-gray: hsl(0, 0%, 60%);
--black-coral: hsl(225, 8%, 42%);
--oxford-blue: hsl(208, 97%, 12%);
--yale-blue: hsl(214, 72%, 33%);
--blue-ncs: hsl(197, 100%, 36%);
--gunmetal: hsl(206, 34%, 20%);
--gainsboro: hsl(0, 0%, 88%);
--cultured: hsl(0, 0%, 98%);
--white: hsl(0, 0%, 100%);
--black: hsl(0, 0%, 0%);
--onyx: hsl(0, 0%, 25%);
--jet: hsl(0, 0%, 20%);

/**
 * typography
 */

--ff-poppins: "Poppins", sans-serif;
--ff-montserrat: "Montserrat", sans-serif;

--fs-1: calc(20px + 3.5vw);
--fs-2: calc(18px + 1.6vw);
--fs-3: calc(16px + 0.45vw);
--fs-4: 15px;
--fs-5: 14px;
--fs-6: 13px;
--fs-7: 12px;
--fs-8: 11px;

--fw-500: 500;
--fw-600: 600;
--fw-700: 700;
--fw-800: 800;

/**
 * transition
 */

--transition: 0.25s ease-in-out;

/**
 * spacing
 */

--section-padding: 60px;

/**
 * border-radius
 */

--radius-15: 15px;
--radius-25: 25px;

}





/*-----------------------------------*\
* #RESET
\*-----------------------------------*/



li { list-style: none; }

a { text-decoration: none; }

a,
img,
span,
input,
label,
button,
ion-icon { display: block; }

.btn-primary-staar {
  background: var(--bright-navy-blue);
  border-color: var(--bright-navy-blue);
}

.btn-primary-staar:is(:hover, :focus) {
  background: var(--yale-blue);
  border-color: var(--yale-blue);
}


.h1,
.h2,
.h3 {
  font-weight: var(--fw-800);
  font-family: var(--ff-montserrat);
  text-transform: uppercase;
}

.h1 {
  color: var(--white);
  font-size: var(--fs-1);
}

.h2,
.h3 { color: var(--gunmetal); }

.h2 { font-size: var(--fs-2); }

.h3 {
  font-size: var(--fs-3);
  font-weight: var(--fw-700);
}

.section-subtitle-staar {
  color: var(--bright-navy-blue);
  font-size: var(--fs-5);
  text-transform: uppercase;
  font-family: var(--ff-montserrat);
  margin-bottom: 8px;
}

.section-title-staar { margin-bottom: 15px; }

.section-text-staar {
  color: var(--black-coral);
  margin-bottom: 30px;
}

.card-text-staar{
  color: var(--black-coral);
  font-size: var(--fs-5);
}




button {
background: none;
border: none;
font: inherit;
}

button { cursor: pointer; }



ion-icon { pointer-events: none; }




/*-----------------------------------*\
* #REUSED STYLE
\*-----------------------------------*/

.container-staar { padding-inline: 15px; }

.btn {
color: var(--white);
text-transform: uppercase;
font-size: var(--fs-5);
border-radius: 100px;
padding: var(--padding, 8px 18px);
border: var(--border-width, 2px) solid transparent;
transition: var(--transition);
}

/*-----------------------------------*\
 * #POPULAR
\*-----------------------------------*/

.popular-staar { padding-block: var(--section-padding); }

.popular-list-staar,
.popular-list-staar > li:not(:last-child) { margin-bottom: 30px; }

.popular-card-staar {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-25);
  height: 430px;
}

.popular-card-staar .card-img-staar { height: 100%; }

.popular-card-staar .card-img-staar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.popular-card-staar .card-content-staar {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background: var(--white);
  border-radius: var(--radius-25);
  padding: 20px;
}


.popular-card-staar .card-rating-staar {
  background: var(--bright-navy-blue);
  color: var(--white);
  position: absolute;
  top: 0;
  right: 25px;
  display: flex;
  align-items: center;
  gap: 1px;
  transform: translateY(-50%);
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
}

.popular-card-staar .card-subtitle-staar {
  color: var(--blue-ncs);
  font-size: var(--fs-6);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.popular-card-staar .card-title-staar { margin-bottom: 5px; }

.popular-card-staar :is(.card-subtitle-staar, .card-title-staar) > a { color: inherit; }

.popular-staar .btn { margin-inline: auto; }



</style>