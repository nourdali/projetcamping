<template>
<v-app class="tout_profil">
<header class="body_profil">
<div class="profil">
      <div class="profile-top">
        <div class="profile-image"></div>
      </div>

      <div class="profile-bottom">
        <div class="profile-infos">
          <div class="main-infos">
            <h3 class="name">Nour Daly</h3>
            <p class="age grey">24</p>
          </div>
          <p class="email">nourhouda.dali01@gmail.com</p>
          <p class="ville"><ion-icon name="location"></ion-icon>Tunis</p>
        </div>

        <div class="profile-stats">
          <div class="stat-item">
            <p class="stat">38K</p>
            <p class="grey">Abonnés</p>
          </div>
          <div class="stat-item">
            <p class="stat">103K</p>
            <p class="grey">Likes</p>
          </div>
          <div class="stat-item">
            <p class="stat">1.3K</p>
            <p class="grey">Photos</p>
          </div>
        </div>
      </div>
    </div>
</header>
</v-app>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap");

.tout_profil {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.body_profil {
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Rubik", sans-serif;
}

.profil {
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
 
}

.grey {
  color: #120c0c;
}

.profile-top {
  height: 250px;
  width: 500px;
  background-image: url("../assets/city.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
}

.profile-image {
  background-image: url("../assets/nour.jpg");
  background-position: center;
  background-size: cover;
  position: relative;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.profile-bottom {
  margin-top: 75px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-infos {
  display: flex;
  align-items: center;
  font-size: 28px;
  margin-bottom: 5px;
}

.name {
  font-weight: 700;
  margin-right: 15px;
}

.email {
  font-size: 14px;
  margin-bottom: 25px;
}

.ville {
  font-size: 20px;
  margin-bottom: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ville ion-icon {
  margin-right: 5px;
  color: #388eff;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
}

.stat-item:not(:last-child) {
  border-right: 1px solid black;
}

.stat {
  font-size: 20px;
  font-weight: 700;
}

</style>