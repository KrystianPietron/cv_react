import React from 'react'
import './Contact.css'

const Contact = props => (
    <section className='Contact__section' >
        <ul className="Contact__section--ul">
            <li><p>Tel.: 722 366 109</p></li>
            <li className="Contact__section--ul--li">
                <p>Email: </p>
                <a className="Contact__section--ul--li--a" href="mailto:'krystianpietr@gmail.com" > krystianpietr@gmail.com</a>
            </li>
        </ul>
    </section>
)

export default Contact