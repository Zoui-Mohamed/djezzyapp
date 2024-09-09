import { InertiaProgress } from '@inertiajs/progress';
import load from '../images/DjezzyLogo copie.png';



import React from 'react';
import './admin.css'; // Import your custom CSS for styling

const LogoLoader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="logo-loader-container">
            <div className="logo-animation">
                <img src={load} alt="Logo" />
            </div>
        </div>
    );
};

export default LogoLoader;