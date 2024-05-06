// src/components/Card.jsx
import React from 'react'
import cardData from '../data/cardData.json'

function Card() {
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{cardData.title}</h2>
                {cardData.sections.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-bold">{section.heading}</h3>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
