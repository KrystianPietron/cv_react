import React from 'react'
import './Abilities.css'

const Abilities = props => (
    <section className="Abilities__section">
        <h3 className="Abilities__section--h3">Abilities</h3>
        <span className="Abilities__section--span">
            <p>Dobra znajomość
                <strong className="Abilities__section--span--li--tag">HTML</strong>,
                <strong className="Abilities__section--span--li--tag">CSS</strong> i
                <strong className="Abilities__section--span--li--tag">JavaScript</strong>
            </p>
            <p>Praca w zespole
                <strong className="Abilities__section--span--li--tag">SCRUM</strong>
            </p>
            <p>Obsługa systemu kontorli wersji
                <strong className="Abilities__section--span--li--tag">GIT</strong>
            </p>
            <p>Narzędzia programistyczne
                <strong className="Abilities__section--span--li--tag">GitHub</strong>,
                <strong className="Abilities__section--span--li--tag">JIRA</strong>,
                <strong className="Abilities__section--span--li--tag">GIT</strong>,
                <strong className="Abilities__section--span--li--tag">IDE</strong>.
            </p>
        </span>
    </section>
)

export default Abilities