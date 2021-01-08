import React, { Component } from 'react';
import '../pokemon/pokemonLoading.css';

export default class Loading extends Component {
    render() {
        return (
            <div class="poke_body">
                <div class="shadow"></div>
                    <div class="pokeball">
                    <div class="top"></div>
                    <div class="bottom"></div>
                    <div class="middle"></div>
                </div>
            </div>
        )
    }
}