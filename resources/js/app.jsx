import React from 'react';
import ReactDOM from 'react-dom';
import Inscription from './Components/projectdjezzy/inscription';
import Admin from './Components/projectdjezzy/admin/admin';
import Posts from './Components/projectdjezzy/admin/admin';


function App() {
    return (
        <div>
            {/* <Inscription /> */}
            {/* <Admin></Admin> */}
            <Posts></Posts>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));