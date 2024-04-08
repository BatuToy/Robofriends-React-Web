import React , { useState , useEffect } from "react";
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';


function App(){
    
        const [robots , setRobots] = useState([]);
        const [searchfield , setSearchfield] = useState('');
        const [count , setCount] = useState(0);

        useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then( respone => respone.json())
                .then( users => {setRobots(users)});
            console.log(count);
        }, [count]);

        const onSearchChange = (event) => {
            setSearchfield(event.target.value);
        }

        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !robots.length ?
            <h1  id="SegaLogo" className="tc mt-5">Loading...</h1> :
            <div className="tc">
                <h1 id="SegaLogo">RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <button onClick={() => setCount(count + 1)}>{count}</button>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>  
}
export default App;