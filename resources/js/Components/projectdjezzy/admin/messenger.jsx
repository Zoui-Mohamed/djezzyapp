import "./admin.css";
import user  from "../images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg";
import  close from"../images/close-line.png";
import send from "../images/sendred.png";


function Messenger(){
    return(
     <div >
         <div className="messenger">
          <div className="messengerdesign">
            <img  src={user} className="imagecircle"></img>
            <h1 className="messengeruser">Jhon Doe</h1>
            <img  src={close} className="closemessage"></img>
          </div>
          <div className="messengerdesign2">
            <h1>hello</h1>
          </div>
          <div className="messengerdesign3">
            <input type="text" className="messengerinput" placeholder="Envoyer Message....."></input>
            <img  src={send} className="sendmessagnger"></img>
          </div>
        </div>
    </div>
    )
}


export default Messenger;