import React, { Component } from 'react'
import styled from 'styled-components';
import loading_icon from '../pokemon/loading_icon.gif';
import '../pokemon/pokemon.css';
import { Link } from 'react-router-dom';

// const Sprite = styled.img`
//     width: 5em;
//     height: auto;
//     display :none
// `; 

// const Card = styled.div`
//     box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
//     transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25 ,1);
//     &:hover { 
//         box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.22); 
//     }
// `;


const StyledLink = styled(Link) `
    text-decoration: none;
    color: black;
    &:hover,
    &:focus,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    }

    componentDidMount(){
        const { name, url }= this.props;  //props from pokemonList
        const pokemonIndex = url.split('/')[url.split('/').length - 2]; 
        const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name: name,
            imageUrl: imageUrl,
            pokemonIndex: pokemonIndex
        })
    }


    render() {

        return (
            <div>

            <StyledLink to={`/pokemon/${this.state.pokemonIndex}`}>
                <div className="poke-container">
                
                <div className="pokemon">
                { this.state.imageLoading ? (
                        <img src={loading_icon}
                            alt=""
                             style = {{width: '5em', height: '5em'}}
                            className = "card-img-top rounded mx-auto d-block mt-2" />
                    ) : null}
                    <div className="img-container">
                        <img 
                            src={this.state.imageUrl}
                            onLoad = {() => this.setState({imageLoading: false})}
                            onError = {() => this.setState({toManyRequests: true})}
                            style = {
                            this.state.toManyRequests ? { display: "none"} :
                            this.state.imageLoading ? null : { display: "block"}
                            }
                        ></img>
                    </div>
                    {this.state.toManyRequests ? (
                        <h6 className="mx-auto">
                            <span className="badge badge-danger mt-2">To Many Requests</span>
                        </h6>
                    ) : null}
                    <div className="info">
                        <span className="number">#{this.state.pokemonIndex.toString().padStart(4, '0')}</span>
                        <h3 className="name">{this.state.name.toLowerCase().split(' ').map(letter => 
                                letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}</h3>
                    </div>
                </div>
            </div>
            </StyledLink>
            </div>
            
            
            
        )
    }
}
