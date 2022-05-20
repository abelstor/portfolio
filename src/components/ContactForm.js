import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {

    const [state, handleSubmit] = useForm('xyyolqpe');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <div className="contactform__container">
            <h2
                className="contactform__title">
                Formulario
            </h2>
            <form
                onSubmit={handleSubmit}
                className="contactform">

                <div className="input-container">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="input"
                        autoComplete="off"
                        required
                    />
                    <label
                        htmlFor="name"
                        className="input-label">
                        Nombre
                    </label>
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                    />
                </div>
                <div className="input-container">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="input"
                        autoComplete="off"
                        required
                    />
                    <label
                        htmlFor="email"
                        className="input-label">
                        Correo
                    </label>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="input-container">
                    <textarea
                        id="message"
                        name="message"
                        className="input input-textarea"
                        autoComplete="off"
                        required
                    />
                    <label
                        htmlFor="message"
                        className="input-label label-textarea input-textarea">
                        Mensaje
                    </label>
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className="content__button">
                    <button
                        type="submit"
                        disabled={state.submitting}
                        className="form-button pointer">
                        Enviar Mensaje
                    </button>
                </div>
            </form>
        </div>
    )
}
