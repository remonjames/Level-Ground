import "./normalize.css";
import "./style.css";
import HeaderBg from "./images/header-bg.jpg";
import Gym from "./images/gym.jpg";
import Home from "./images/home.jpg";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Mail from "./images/mail.svg";

// function component() {
//     const element = document.createElement('div');

// const myIcon = new Image();
// myIcon.src = Cat;

//     element.appendChild(myIcon);

//     return element;
//   }

//   document.body.appendChild(component());

const main = document.querySelector("main");
main.style.backgroundImage = `url(${HeaderBg})`;

const gym = document.getElementById("gym");
gym.src = Gym;

const home = document.getElementById("home");
home.src = Home;

const facebook = document.getElementById("facebookIcon");
facebook.src = Facebook;

const twitter = document.getElementById("twitterIcon");
twitter.src = Twitter;

const email = document.getElementById("emailIcon");
email.src = Mail;
