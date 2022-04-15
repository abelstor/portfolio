
export const Contact = () => {
    return (
        <div className="background__image">
            <section className="contact container">
                <div className="contact__left">
                    <div className="contact__left-info">
                        <div className="contact__left-details">
                            <h2
                                style={{ marginBottom: "10px" }}
                                className="contact__title"
                            >
                                Contacto
                            </h2>
                            <p
                                style={{ marginBottom: "10px" }}>
                                Si deseas comunicarte conmigo, no dudes en hacerlo a través de los siguientes medios.
                            </p>
                            <i
                                className="fas fab fa-mobile-alt">
                            </i>
                            <span
                                style={{ marginLeft: "5px" }}>
                                Teléfono
                            </span>
                            <p>+57 302 8289084</p>
                            <i
                                className="far fab fa-envelope">
                            </i>
                            <span
                                style={{ marginLeft: "10px" }}>
                                Email
                            </span>
                            <p>abelstor@gmail.com</p>
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
                    <div className="contact__right-form">
                        <h2 style={{ marginLeft: "20px" }}
                            className="contact__title">
                            Form</h2>
                        <form action="https://formspree.io/abelstorg@gmail.com"
                            method="POST"
                            className="contact__right-form">
                            <div className="form-group">
                                {/* <label for="name">Nombre</label> */}
                                <input type="text" className="form-control" name="name" aria-describedby="name" placeholder="Nombre" />
                            </div>
                            <div className="form-group">
                                {/* <label for="exampleInputEmail1">Email</label> */}
                                <input type="email" name="_replyto" className="form-control" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                {/* <label for="comment">Commentario:</label> */}
                                <textarea name="message" placeholder="Mensage" className="form-control" rows="4" id="comment"></textarea>
                            </div>
                            <div className="form-group">
                                <label>
                                    <button type="submit" value="Send" className="btn pointer">
                                        Enviar
                                    </button>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
