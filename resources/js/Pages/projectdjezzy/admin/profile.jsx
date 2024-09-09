import "./user.css";
import user from "../images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg"
import back from "../images/arrow-left-line.png";
import up from "../images/arrow-up-line (1).png";
import earth from "../images/earth-line.png";
import logo from "../images/DjezzyLogo copie.png";


function User() {
    return (
      <div className="bodyuser">
            <div className="headeruser">
            <img src={back} className="user-back"></img>            
           <img src={user} className="user-image"></img>            
        </div>
        <h1 className="nameus">Zoui Mohamed</h1>
        <h1 className="nameusj">ADMINISTRATOR</h1>
        <p className="nameusdis">zouimouha14@gmail.com.Joined Us In 2019.@zoui_mohamed</p>
        <div className="divisionflex">
              <div className="divisionabout">
                  <h1 className="divisionabouttitle">About</h1>
                  <p className="divisionaboutp">A paragraph is a series of sentences that are organized and 
                  <br></br>   coherent, and are all related to a single topic. Almost every
                  <br></br>  piece of writing you do that is longer than a few sentences should
                  <br></br>  be organized into paragraphs. This is because paragraphs show a 
                  <br></br>      reader where the subdivisions of an essay begin and end, and thus
                  <br></br>    help the reader see the organization of the essay and grasp its main points <a className="linkabout">Linkdin</a> or <a className="linkabout">Gmail</a></p>
              </div>
              <div className="divisionabout2">
                <h1 className="divisionabouttitle2">Expertize</h1>
                <div className="divexpertize1">
                <div className="divexpertize">
                    <img src={up} className="divexpertizeimgg"></img>
                    <h2 className="divexpertizetitlee">Comunication</h2>
                </div>
                <div className="divexpertize">
                    <img src={up} className="divexpertizeimgg"></img>
                    <h2 className="divexpertizetitlee">Comunication</h2>
                </div> <div className="divexpertize">
                    <img src={up} className="divexpertizeimgg"></img>
                    <h2 className="divexpertizetitlee">Comunication</h2>
                </div>
                </div>
                <h1 className="divisionabouttitle3">Language Speaking</h1>
                <div className="divexpertize1">
                <div className="divexpertize">
                    <img src={earth} className="divexpertizeimg"></img>
                    <h2 className="divexpertizetitle">Francais</h2>
                </div>
                <div className="divexpertize">
                    <img src={earth} className="divexpertizeimg"></img>
                    <h2 className="divexpertizetitle">English</h2>
                </div> <div className="divexpertize">
                    <img src={earth} className="divexpertizeimg"></img>
                    <h2 className="divexpertizetitle">Spanish</h2>
                </div>
                </div>
              </div>
              
        </div>
        <div className="fooyter">
        <img src={logo} className="logof"></img>
        <p className="disf">For More Details You Can Cheeck our <strong className="s">HELP</strong> Page</p>
        </div>
        
      </div>
    );
  }
  
  export default User;