
export const Home = () => {

    return (
        <div className="home__content">
            <div className="home__image"></div>
            <div className="home__perfil">
                <h1 className="home__perfil-name">
                    Abel Cañas
                </h1>
                <p className="home__perfil-text">Desarrollador Frontend <br /> en Bogotá Colombia</p>
                <p className="home__perfil-text"><em>Open to Work</em></p>

                <ul className="home__perfil-icons">
                    {/* <li>
                        <a href="{{ site.twitter_path }}" target="blank"><i className="fab fa-twitter"></i></a>
                    </li> */}
                    <li>
                        <a href="https://wa.me/573028289084/?text=Hola%21%20deseo%20crear%20mi%20p%C3%A1gina%20web%20" target="blank"><i className="fab fa-whatsapp"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/abelstor" target="blank"><i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/abelstor" target="blank"><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/abelstor" target="blank"><i className="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
