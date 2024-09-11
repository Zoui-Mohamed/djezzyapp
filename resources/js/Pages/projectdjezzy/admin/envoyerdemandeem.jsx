import "./admin.css";
import illustartion from'../images/illustration.png';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import Directeurgenerale from "./directeurgeneral";
import Employer from "./employer";


function Envoyerdemandeem(){
  const { data, setData, post, processing, errors, reset } = useForm({
    utlisateur: '',
    nomdemande: '',
    discriptiondemande: '',
    remember: false,
});

const submit = (e) => {
    e.preventDefault();

    post('/demandeemployer', {
        onFinish: () => reset('password'),
    });
};
    return(
        <Employer>
     <div >
      <form onSubmit={submit}>
       <h1 className="helpstyle">Let's Help You</h1>
       <div className="formcontain">
        <div className="inputcontain">
        <input placeholder="Utilisateur" class="input2" name="text" type="text" value={data.utlisateur} onChange={(e) => setData('utlisateur', e.target.value)}/>
       <input placeholder="Titre de demande" class="input4" name="text" type="text" value={data.nomdemande} onChange={(e) => setData('nomdemande', e.target.value)}/>
       <input placeholder="Discription" class="input3" name="text" type="text" value={data.discriptiondemande} onChange={(e) => setData('discriptiondemande', e.target.value)}/>
       <button className="buttonenvoyer">
        <span className="envoyer">Envoyer</span>
       </button>
        </div>
       
         <img src={illustartion} className="ilustartionimg"></img>
       </div>
       </form>
    </div>
    </Employer>
    )
}


export default Envoyerdemandeem;