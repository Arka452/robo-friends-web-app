// eslint-disable-next-line no-unused-vars
import React from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from "./ErrorBoundry";



class App extends React.Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            Searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
           return response.json()
        }).then(users =>{
            this.setState({robots:users})
        })
    }

    onSearchChange = (event)=> {
        this.setState({Searchfield:event.target.value})
    
    }
    render(){

        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1 className='ba pa3 b--green bg-lightest-blue br4 tc'>
                Loading...
            </h1>
        }else{
            return(
                <div className="tc">
                    <h1 >Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        <CardList robots={filteredRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
        
       
    }

}
export default App;