import "./admin.css";
import user  from "../images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg";



function Notification(){
    return(
     <div >
           <div className="notificationdiv">
              <h1 className="messagetitle">Notification :</h1>
              <div className="messages">
                   <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div>
                   <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div> <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div> <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div> <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div> <div className="conversationsusers">
                    <div className="usercircle">                   
                         <img src={user} className="userimage"></img>
                    </div>
                    <div className="usernames">
                        <h1 className="acountname">John Doe</h1>
                        <p className="messagejob">New Project Upload</p>
                    </div>
                   </div>
              </div>
            </div>
    </div>
    )
}


export default Notification;