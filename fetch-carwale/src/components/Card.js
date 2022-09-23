import React from 'react'
import "../Styles/Card.css"

function Card({ cardImg, email, firstName, lastName }) {
    return (
        <div className="img-card icard">
            <div className="card-content">
                <div className="card-image">
                    <img src={cardImg} alt='car' />
                </div>

                <div className="card-text">
                    <p>{email}</p>
                    <span className="card-title">{firstName}</span>
                    <div>{lastName}</div>
                </div>

            </div>

            {/* <div class="card-link">
                            
                        </div> */}
        </div>
    )
}

export default Card