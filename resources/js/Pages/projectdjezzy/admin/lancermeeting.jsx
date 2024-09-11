import "./admin.css";
import illustartion from'../images/illustration.png';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";
import Chefprojet from "./chefdeprojet";


function Meeting(){
  const { data, setData, post, processing, errors, reset } = useForm({
    utilisateurmeeting: '',
    titremeeting: '',
    discriptionmeeting: '',
    membremeeting: '',
    remember: false,
});

const submit = (e) => {
    e.preventDefault();

    post('/lancermeeting', {
        onFinish: () => reset('password'),
    });
};
    return(
        <Chefprojet>
     <div >
      <form onSubmit={submit}>
       <h1 className="helpstyle">Let's Help You</h1>
       <div className="up">
       <div className="formcontain">
        <div className="inputcontain">
        <input placeholder="Utilisateur" class="input2" name="text" type="text" value={data.utilisateurmeeting} onChange={(e) => setData('utilisateurmeeting', e.target.value)}/>
       <input placeholder="Titre de meeting" class="input4" name="text" type="text" value={data.titremeeting} onChange={(e) => setData('titremeeting', e.target.value)}/>
       <input placeholder="Membre du meeting" class="input4" name="text" type="text" value={data.membremeeting} onChange={(e) => setData('membremeeting', e.target.value)}/>
       <input placeholder="Discription" class="input3" name="text" type="text" value={data.discriptionmeeting} onChange={(e) => setData('discriptionmeeting', e.target.value)}/>
       <button className="buttonenvoyer">
        <span className="envoyer">Envoyer</span>
       </button>
        </div>
       
         <img src={illustartion} className="ilustartionimg"></img>
       </div>
       </div>
       </form>
    </div>
    </Chefprojet>
    )
}


export default Meeting;