import React from 'react'
import './style.css'

function CharacterImgs(props) {
        return (
            <div className="card style pr-2 pb-2">
                <img src={props.image} className="card-img-top imgstyle" alt={props.name} />
                    <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <a href="#" className="btn btn-primary" onClick={() => props.characterRemove(props.id)} >Remove</a>
                    </div>
                    {/* <span onClick={() => props.characterRemove(props.id)} className="remove">
                        𝘅
                    </span> */}
            </div>
        )
}


export default CharacterImgs;