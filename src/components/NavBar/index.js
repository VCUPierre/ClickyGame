import React, {Component} from 'react';
import ScoreBoard from '../ScoreBoard';

class NavBar extends Component {
    render () {
        return (
            <nav className='navbar navbar-light bg-light'>
                <a className='navbar-brand' href="/#">ClickyGame</a>
                <h2>REACT CLICKY GAME</h2>
                <ScoreBoard 
                score={this.props.score}
                topScore={this.props.topScore}
                />
            </nav>
        )
    }
}

export default NavBar;