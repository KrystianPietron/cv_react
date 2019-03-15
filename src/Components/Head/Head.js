import React from "react"
import Name from '../Name'
import Contact from '../Contact'
import Foto from '../Foto'
import './Head.css'

const Head = (props) => (
    <section className='Head__section'>
        <div className='Head__section--div'>
            <Foto />
            <Name />
            <Contact />
        </div>
        <h2 className='Head__section--h2'>Junior Front-End Developer</h2>
    </section>
)
export default Head