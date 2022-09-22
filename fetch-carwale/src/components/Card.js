import React from 'react'
import "../Styles/Card.css"

function Card({ cardImg, email, firstName, lastName }) {
    return (
        <div class="img-card icard">
            <div class="card-content">
                <div class="card-image">

                    <img src={cardImg} alt='car' />
                </div>

                <div class="card-text">
                    <p>{email}</p>
                    <span class="card-title">{firstName}</span>
                    <div>{lastName}</div>
                </div>

            </div>

            {/* <div class="card-link">
                            
                        </div> */}
        </div>
    )
}

export default Card