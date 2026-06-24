import React from 'react'
import '../css/Event.css'

const Event = ({ title, date, time, image_url }) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <article className='event-information'>
            <img src={image_url} />
            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate}</p>
                    <p>{time}</p>
                </div>
            </div>
        </article>
    )
}

export default Event