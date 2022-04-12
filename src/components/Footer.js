
export const Footer = () => {

    const anio = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__copy">
                &copy;&nbsp;
            </p>
            <h4 className="footer__description">
                {anio} abelstor
            </h4>
            {/* <p className="footer__rights">All Right Reserved</p> */}
        </footer>
    )
}
