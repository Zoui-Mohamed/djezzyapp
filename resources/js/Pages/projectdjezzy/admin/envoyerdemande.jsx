import "./admin.css";
import illustartion from'../images/illustration.png';


function Envoyerdemande(){
    return(
     <div >
       <h1 className="helpstyle">Let's Help You</h1>
       <div className="formcontain">
        <div className="inputcontain">
        <input placeholder="Utilisateur" class="input2" name="text" type="text"/>
       <input placeholder="Titre de demande" class="input4" name="text" type="text"/>
       <input placeholder="Discription" class="input3" name="text" type="text"/>
       <div className="buttonenvoyer">
        <h1 className="envoyer">Envoyer</h1>
       </div>
        </div>
       
         <img src={illustartion} className="ilustartionimg"></img>
       </div>
    </div>
    )
}


export default Envoyerdemande;