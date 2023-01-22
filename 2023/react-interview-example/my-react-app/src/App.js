import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {
    useEffect( () => {
        fetch( "https://jsonplaceholder.typicode.com/users" ).then( ( response ) => response.json() ).then( ( json ) => console.log( json ) )
    }, [] );
    return (
        <div className="App">
            <h1>Users</h1>
            <div className="card">
                <div className="card-inner">
                    <p>Bryan</p>
                    <p>Bryan 777</p>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default App;
