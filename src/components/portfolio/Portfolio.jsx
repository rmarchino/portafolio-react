import { Data } from "./Data";
import "./portfolio.css";


const Portfolio = () => {

    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Proyectos</h2>

            <div className="portfolio__section container grid">
                {Data.map((project) => (
                    <div className="portfolio__item" key={project.id}>
                        <img src={project.image} alt={project.title} className="portfolio__image" />
                        <div className="portfolio__details">
                            <h3 className="portfolio__title">{project.title}</h3>
                            <div className="portfolio__buttons">
                                <a href={project.codeLink} className="portfolio__button" target="_blank" rel="noreferrer">Ver código</a>
                                <a href={project.previewLink} className="portfolio__button" target="_blank" rel="noreferrer">Ver demo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio
