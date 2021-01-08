import React, { Component } from 'react'
import axios from 'axios';
import loading_text from '../pokemon/loading-text.gif';
import '../pokemon/pokemon.css';
import Loading from '../pokemon/Loading'

import PokemonCard from './PokemonCard'


export default class PokemonList extends Component {

    state = {
        url : 'https://pokeapi.co/api/v2/pokemon?limit=54&offset=0',
        nextUrl: '',
        prevUrl: '',
        pokemon: null
    }

    async componentDidMount(){
        const res = await axios.get(this.state.url); // "await": wait for request done
        this.setState({
            pokemon : res.data['results'],
            nextUrl: res.data.next,
            prevUrl: res.data.previous
        });
        console.log(res.data['results']);
    }

    async componentDidUpdate(){
        const res = await axios.get(this.state.url); // "await": wait for request done
        this.setState({
            pokemon : res.data['results'],
            nextUrl: res.data.next,
            prevUrl: res.data.previous
        });
    }

    handleNext = () => {
        this.setState({
            url: this.state.nextUrl
        })
    }

    handlePrev = () => {
        this.setState({
            url: this.state.prevUrl
        })
    }

    

    render() {
        return (
            <React.Fragment>
                <div>
                    
                {this.state.pokemon ? (
                    <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <PokemonCard  
                            key = {pokemon.name}  //ignore key may cause an error 
                            name = {pokemon.name}
                            url = {pokemon.url}
                        
                        />
                    ))}
                    <div className="button_set">
                        <button className="prev-button" onClick={this.handlePrev} disabled={this.state.prevUrl === null}>Prev</button>
                        <button className="next-button" onClick={this.handleNext} disabled={this.state.nextUrl === null}>Next</button>
                        
                    </div>
                    
                </div>
                ) : (<Loading />)}
                
                {/* <img src={loading_text}
                    style = {{width: '20em', height: '20em'}}
                   className = "card-img-top rounded mx-auto d-block mt-2" /> */}
            </div>
            </React.Fragment>
            
        )
    }
}

//React.Fragment : A common pattern in React is for a component to return multiple elements... 
//...Fragments let you group a list of children without adding extra nodes to the DOM.