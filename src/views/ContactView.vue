<template>
    <v-app >
        <div class="tout_contact">
    <!--alert messages start
    <div class="alert-success">
        <span>Message Sent! Thank you for contacting us.</span>
    </div>
    <div class="alert-error">
        <span>Something went wrong! Please try again.</span>
    </div>
    alert messages end-->

    <!--contact section start-->
	<div class="contact-section">
        <div class="contact-info">
         <div><v-icon size="large" color="white" icon="mdi-map-marker">mdi-map-marker</v-icon> Adresse, City, Country</div>
         <div><v-icon size="large" color="white" icon="mdi-email">mdi-email</v-icon> Contact@email.com</div>
         <div><v-icon size="large" color="white" icon="mdi-phone">mdi-phone</v-icon> +216 22 222 222</div>
         <div><v-icon size="large" color="white" icon="mdi-clock">mdi-clock</v-icon> Mon - Fri 8:00 AM to 5:00 PM</div>
        </div>
        <div class="contact-form">
            <h2>Contact Us</h2>
            <form class="contact" action="" method="post">
                <input type="text" name="name" class="text-box" placeholder="Your Name" required>
                <input type="email" name="email" class="text-box" placeholder="Your Email" required>
                <textarea name="message"  rows="5" placeholder="Your Message" required></textarea>
                <input type="submit" name="submit" class="send-btn" value="Send">
            </form>
        </div>
    </div>
</div>
</v-app>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
.etoile_contact{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
.tout_contact{
    min-height: 100vh;
    background: url("../assets/th.jpg") no-repeat;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-section{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-info{
    color: #f9e2e2;
    max-width: 500px;
    line-height: 65px;
    padding-left: 50px;
    font-size: 20px;
}

.contact-info v-icon{
    margin-right: 20px;
    font-size: 25px;
}

.contact-form{
    max-width: 700px;
    margin-right: 50px;
}

.contact-info, .contact-form{
    flex: 1;
}

.contact-form h2{
    color: #f9e2e2;
    text-align: center;
    font-size: 35px;
    text-transform: uppercase;
    margin-bottom: 30px;
}
.contact-form .text-box{
    background:#7895cb53;
    color: #fff;
    border: none;
    width: calc(50% - 10px);
    height: 50px;
    padding: 12px;
    font-size: 15px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.493);
    margin-bottom: 20px;
    opacity: 0.9;
}

.contact-form .text-box:first-child{
    margin-right: 15px;
}

.contact-form textarea{
    background: #7895cb75 ;
    color: #fff;
    border: none;
    width: 100%;
    padding: 12px;
    font-size: 15px;
    min-height: 200px;
    max-height: 400px;
    resize: vertical;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.653);
    margin-bottom: 20px;
    opacity: 0.9;
}

.contact-form .send-btn{
    float: right;
    background: #3f586bb5;
    color: #fff;
    border: none;
    width: 120px;
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    transition-property: background;
}

.contact-form .send-btn:hover{
    background: #4f5c67;
}

@media screen and (max-width:950px){
    .contact-section{
        flex-direction: column;
    }
    .contact-info, .contact-form{
        margin: 30px 50px;
    }
    .contact-form h2{
        font-size: 30px;
    }
    
    .contact-form .text-box{
        width: 100%;
    }
}

/*css for alert messages*/
.alert-success{
    z-index: 1;
    background: #D4EDDA;
    font-size: 18px;
    padding: 20px 40px;
    min-width: 420px;
    position: fixed;
    right: 0;
    top: 10px;
    border-left: 8px solid #3AD66E;
    border-radius: 4px;
}

.alert-error{
    z-index: 1;
    background: #FFF3CD;
    font-size: 18px;
    padding: 20px 40px;
    min-width: 420px;
    position: fixed;
    right: 0;
    top: 10px;
    border-left: 8px solid #FFA502;
    border-radius: 4px;
}


</style>
