
import React from 'react'

export default function ToyCard(props) {

    return (
        <div className="card" id={`toy-${props.iid}`}>
        <h2>{props.toy.name}</h2>
        <img src={props.toy.image} alt="toy" className="toy-avatar"/>
        <p>{props.toy.likes} Likes</p>
        <button onClick={(e)=>props.increaseLikes(props.toy.id)} className="like-btn">Like &lt;3</button>      
        </div>
    )
}
