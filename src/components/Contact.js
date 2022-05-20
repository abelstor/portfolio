import { ContactForm } from "./ContactForm"

export const Contact = () => {
    return (
        <div className="background__image">
            <section className="contact container">
                <div className="contact__left">
                    <div className="contact__left-info">
                        <div className="contact__left-details">
                            <h2 style={{ marginBottom: "10px" }} className="contact__title">
                                Contacto
                            </h2>
                            <p
                                style={{ marginBottom: "10px" }}>
                                Si deseas comunicarte conmigo, no dudes en hacerlo a través de los siguientes medios.
                            </p>

                            <div className="mt-5">
                                <p>
                                    <a href="tel:+573028289084">
                                        <i className="mb-5 fas fab fa-mobile-alt"></i>
                                    </a>
                                    +57 302 8289084
                                </p>
                            </div>

                            <div className="mt-3 mb-3">
                                <p>
                                    <a href="mailto:abelstor@gmail.com">
                                        <i className="mb-5 far fab fa-envelope"></i>
                                    </a>
                                    abelstor@gmail.com
                                </p>
                            </div>
                        </div>
                        <ul className="contact__left-icons">
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
                <div className="contact__right">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
