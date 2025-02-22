import "./admin.css";
import note  from "../images/notification-2-fill.png";
import message  from "../images/chat-3-fill.png";
import user  from "../images/user-3-line.png";
import usere  from "../images/user-fill.png";
import home  from "../images/home-5-fill.png";
import send  from "../images/send-plane-fill.png";
import consulter  from "../images/search-eye-line.png";
import menu  from "../images/menu-search-line.png";
import calendar  from "../images/calendar-todo-fill.png";
import dashboard  from "../images/dashboard-fill.png";
import users  from "../images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg";
import logo from "../images/DjezzyLogo copie.png";
import close from "../images/close-line.png";
import mnu from "../images/menu-fill.png";
import Acceulle from "./acceille";
import Gestioncompte from "./gestioncompte";
import Envoyerdemande from "./envoyerdemande";
import Consulterprojet from "./consulterprojet";
import Archiverprojet from "./archiverprojet";
import Dashboards from "./dashboard";
import Calendrier from "./calendrier";
import Message from "./message";
import Notification from "./notification";
import Messenger from "./messenger";
import { useState } from "react";

function Admin() {
       const [image,setimage]=useState(mnu);
       const [show,setshow]=useState(true);
       const [color,setcolor]=useState("brown");

  const onclick=()=>{
       if (show == false) {
           setshow(true);
           setimage(close);
          }else{
        setshow(false);
        setimage(mnu);
       }
  };
   
  const backgroundchange=()=>{
    if (color == "brown") {
      setcolor("red");
    }
    else{
      setcolor("brown");
    }
};

    return (
      <div className="body">
        <div className="header">
          <img src={image} className="menubar" onClick={onclick}></img>
            <h1 className="hey">Hey , Zoui Mohamed !</h1>
            <div className="icons">
            <img src={note} className="not"></img>
            <img src={message} className="mes"></img>
            <h1 className="name">Zoui Mohamed</h1>
            <div className="circle">
            <img src={user} className="user"></img>
            </div>
            </div>
            {/* <Message></Message> */}
            {/* <Notification></Notification> */}
            {/* <Messenger></Messenger> */}
        </div>
       { show && (<div className="navbar">
         <img src={users} className="users"></img>
        <h1 className="username">Zoui Mohamed</h1>
        <p className="job">ADMINISTRATOR</p>
        <div className="space">
        <h1 className="sidemenu" onClick={backgroundchange}><img src={home} className="usere"></img>Acceuil</h1>
        <h1 className="sidemenu"><img src={usere} className="usere"></img>Gestion Compte</h1>
        <h1 className="sidemenu"><img src={send} className="usere"></img>Envoyer Demande</h1>
        <h1 className="sidemenu"><img src={consulter} className="usere"></img>Consulter Projet</h1>
        <h1 className="sidemenu"><img src={menu} className="usere"></img>Archiver Projet</h1>
        <h1 className="sidemenu"><img src={dashboard} className="usere"></img>Dashboard</h1>
        <h1 className="sidemenu"><img src={calendar} className="usere"></img>Calendrier</h1>
        </div>
        <button className="button1"> <span className="bute">Quitter</span>
        </button>
        </div>)
        }
        <div className="index">
        {/* <Acceulle></Acceulle> */}
      {/* <Gestioncompte></Gestioncompte> */}
      {/* <Envoyerdemande></Envoyerdemande> */}
      {/* <Consulterprojet></Consulterprojet> */}
      {/* <Archiverprojet></Archiverprojet> */}
      {/* <Dashboards></Dashboards> */}
      {/* <Calendrier></Calendrier> */}
        </div>
        <img src={logo} className="logo"></img>
        <p className="dis">For More Details You Can Cheeck our <strong className="s">HELP</strong> Page</p>
      </div>
    );
  }
  
  export default Admin;
  

// import React from "react";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
// import {Head} from "@inertiajs/react";



// export default function Admin({ posts }) {
//     return (
//             <div className="py-12">
//                 {posts && posts.map((post) => (
//                     <div key={post.id}>
//                         <h2>{post.title}</h2>
//                         <p>{post.content}</p>
//                     </div>
//                 ))}
//             </div>
//     );
// }