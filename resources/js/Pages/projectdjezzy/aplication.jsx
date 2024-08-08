import React from 'react';
import ReactDOM from 'react-dom';
import Inscription from './inscription';
import Admin from './admin/admin';
import Posts from './admin/admin';


function Exectutable() {
    return (
        <div>
            {/* <Inscription /> */}
            {/* <Admin></Admin> */}
            <Posts></Posts>
        </div>
    );
}

ReactDOM.render(<Appp />, document.getElementById('Exectutable'));