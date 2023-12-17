<template>
<section class="tous-pagelogin">
<div class="hero">
    <div class="formlogin-box">
        <div class="buttonlogin-box">

            <button type="button" class="tologin-btn">Log In</button>
            <button type="button" class="tologin-btn">Register</button>

        </div>
        
    </div>
</div>
</section>
</template>
<style>
.tous-pagelogin{
margin: 0;
padding: 0;
}
.hero{
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('../assets/camping.jpg');
    background-position: center;
    background-size: cover;
    position: absolute;
}
.formlogin-box{
    width: 380px;
    height: 480px;
    position: relative;
    margin: 6% auto;
    background: #fff;
    padding: 5px;

}

.buttonlogin-box{
    widows: 220px;
    margin: 35px auto; 
    position: relative;
    box-shadow: 0 0 20px 9px #ff61241f;
    border-radius: 30px;

}

.tologin-btn{
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;

}
</style>