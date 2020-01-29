import React, {Component} from 'react';

class ScoreBoard extends Component {
    render () {
        return (
            <div className='row mr-2'>
                <h3>Score: {this.props.score}</h3>
                <h3 className='mx-1'>|</h3>
                <h3>TopScore: {this.props.topScore}</h3>
            </div>
        )
    }
}

export default ScoreBoard;