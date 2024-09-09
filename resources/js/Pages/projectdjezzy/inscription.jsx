import Logo from './images/DjezzyLogo copie.png';
import Inter from './images/djezzy-interface.png';
import { useTypewriter , Cursor } from "react-simple-typewriter";
import { Head, Link, useForm } from '@inertiajs/react';
import "./inc.css";
import { useState,useEffect} from 'react';
import NProgress from 'nprogress'
import { router } from '@inertiajs/react'
import { InertiaProgress } from '@inertiajs/progress';
import AppLayout from './admin/applay';





function Inscription() {
   const [text]= useTypewriter({
    words: ['Djezzy Team',],
    loop:{},
    typeSpeed:120,
   })

   const { data, setData, post, processing, errors, reset } = useForm({
    username: '',
    password: '',
    remember: false,
});

const submit = (e) => {
    e.preventDefault();

    post(route('login.custom'), {
        onFinish: () => reset('password'),
    });
};





    return (
      <AppLayout>
      <div className="bodyi">
        <div className="headeri">
              <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className='container'>
            <h1 className='title'>Connect Your Team , Task & Project <br></br>Together With <span>{text}</span> <span><Cursor cursorStyle='_'></Cursor></span> </h1>
            <p className='par'>to ensure a good project and have a well-connected <br></br>
            team,let's beggin </p>
            <form className='formulaire' onSubmit={submit}>
                   <h1 className='titlewelcome'>Welcome , Who Are You ???</h1>
                   <input placeholder="Enter your Email" class="input" name="text" type="text" value={data.username} onChange={(e) => setData('username', e.target.value)}/>
                   <input placeholder="Enter your Password" class="input" name="text" type="text" value={data.password} onChange={(e) => setData('password', e.target.value)}></input>
                   <button className='button'> <span>Connexion</span> </button>
            </form>
            <div className="footer">
              <img src={Inter} alt="logo" className="inter" />
        </div>
        </div>
      </div>
      </AppLayout>
    );
  }
  
  export default Inscription;