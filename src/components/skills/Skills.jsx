import Backend from "./Backend"
import Frontend from "./Frontend"
import "./skills.css";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades Técnicas</h2>
            
            <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div>

        </section>
    )
}

export default Skills
