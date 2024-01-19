import "./footer.css";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">ROBERT MARCHINO</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">Inicio</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Habilidades</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Proyectos</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contacto</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/robertmarchino/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/RMARCHINO95/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-facebook"></i>
                    </a>
                    <a href="#" className="footer__social-link" target="_blank">
                        <i className="uil uil-instagram-alt"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+51972487645&text=Hola, necesito más información quiero comunicarme con un asesor!" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-whatsapp-alt"></i>
                    </a>
                    <a href="https://github.com/rsteyker" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="uil uil-github"></i>
                    </a>
                </div>
                <p className="footer__copy">
                    Todos los derechos reservados &copy; RSML - {currentYear}
                </p>
            </div>
        </footer>
    )
}

export default Footer
