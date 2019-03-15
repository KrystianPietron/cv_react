import React from "react"
import Name from '../Name'
import Contact from '../Contact'
import Foto from '../Foto'
import './Head.css'

const Head = (props) => (
    <section>
        <div className='Head__section'>
            <Foto />
            <Name />
            <Contact />
        </div>
    </section>
)
export default Head