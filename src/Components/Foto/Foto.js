import React from 'react'
import foto from '../../img/KrystianPietron.jpeg'
import './Foto.css'

const Foto = props => (
    <section className="Foto__div">
        <img className="Foto__div-img" src={foto} alt="my_foto" />
    </section>
)

export default Foto