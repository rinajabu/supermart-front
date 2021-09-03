import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h4>Rina Joy Abu &#x24B8;</h4>
            <div className="footer_logosContainer">
                <a href="https://github.com/rinajabu?tab=repositories" target="_blank"><img className="footer_logo" src="https://image.flaticon.com/icons/png/512/38/38401.png" alt="Github logo"/></a>
                <a href="https://www.linkedin.com/in/rinajoyabu" target="_blank"><img className="footer_logo" src="https://image.flaticon.com/icons/png/512/61/61109.png" alt="LinkedIn logo"/></a>
            </div>
        </div>
    )
}

export default Footer
