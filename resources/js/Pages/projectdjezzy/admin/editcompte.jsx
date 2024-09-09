import "./admin.css";
import back from '../images/arrow-left-red.png';
import plus from '../images/add-fill.png';
import Gestioncompte from "./gestioncompte";




export default function Editcompte({editpopupedit}){
    return(
        <div className="containerajoter">
            <div className="ajoutercontainer">
                <div className="leftajoutercompte">
                     <div className="retourecompte" onClick={()=>editpopupedit(false)}>
                        <img src={back} className="backcompte"/>
                        <h1 className="retourcompte">Retour</h1>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Nom & Prenom</h1>
                         <input placeholder="Nom & Prenom" class="inputcompte" name="text" type="text"/>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Email</h1>
                         <input placeholder="Email" class="inputcompte" name="text" type="email"/>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Mot de Passe</h1>
                         <input placeholder="Mot de Passe" class="inputcompte" name="text" type="text"/>
                     </div><div className="formulairecompte">
                         <h1 className="nomprenomcompte">Numero de Telephone</h1>
                         <input placeholder="Numero de Telephone" class="inputcompte" name="text" type="tel"/>
                     </div><div className="formulairecompte">
                         <h1 className="nomprenomcompte">Poste d'Employer</h1>
                         <select placeholder="Mot de Passe" class="inputcompte" name="text" type="text" list="myliste">
                              <option value="directeur generale">Directeur Generale</option>
                              <option value="chef de projet">Chef de Projet</option>
                              <option value="administartor">Administartor</option>
                              <option value="trafic manager">Trafic Manager</option>
                              <option value="employer">Employer</option>
                              </select>
                              <div className="flexcalender">
                              <div className="formulairecompte2">
                         <h1 className="nomprenomcompte">Photo de Profile</h1>
                         <input placeholder="Photo" class="inputcompte2"type="file"/>
                     </div><div className="formulairecompte2">
                         <h1 className="nomprenomcompte">Date Recrutement</h1>
                         <input placeholder="Numero de Telephone" class="inputcompte2" name="text" type="date"/>
                     </div>
                              </div>
                     </div>
                </div>
                <div className="rightajoutercompte">
                        <h1 className="ajoutercomptetitle">Modifier Un Nouveau Compte</h1>
                        <h1 className="ajoutercomptetitle2">En Remplisont Le Formulaire</h1>
                        <p className="ajoutercompteparag">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the
                        </p>
                        <button className="buttonajoutercompte"> <img src={plus} className="buttonajoutercompteimg"></img>MODIFIER</button>
                </div>
            </div>
        </div>
    );
}