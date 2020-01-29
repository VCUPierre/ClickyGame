import React, { Component } from "react";
import NavBar from '../NavBar';
import characters from '../../characters.json'
import CharacterImgs from "../CharacterImgs";


class Body extends Component {
    state = {
        score: 0,
        topScore: 0,
        characters
    }

  characterRemove = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const character = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ character });
  };

    render () {
        return (
            <div>
                <NavBar 
                score={this.state.score} 
                topScore={this.state.topScore}
                />
                <div id='imageHolder' className="row">
                    {this.state.characters.map(character => (
                        <CharacterImgs
                        characterRemove={this.characterRemove}
                        id={character.id}
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Body;