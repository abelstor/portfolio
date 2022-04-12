import ComicApp from '../assets/images/portfolio/comicApp.gif';
import Recetas from '../assets/images/portfolio/recetas.gif';
import YouGif from '../assets/images/portfolio/yougif.gif';
import Hangman from '../assets/images/portfolio/hangman.png';
import Encryptor from '../assets/images/portfolio/encryptor.gif';
import BlackJack from '../assets/images/portfolio/blackjack.gif';

export const Portfolio = () => {

    return (
        <div className="portfolio__content">
            <div className="container">
                <div className="portfolio__title">
                    <h1>Portafolio</h1>
                </div>
                <div className="portfolio__cards">

                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/comic-app/"
                                target="blank">
                                <img src={ComicApp} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/comic-app/"
                                target="blank">
                                <h4 className="card__body-title">Comic App</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/comic-app"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/recetas/"
                                target="blank">
                                <img src={Recetas} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/recetas/"
                                target="blank">
                                <h4 className="card__body-title">Recetas</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/recetas"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/YouGif/"
                                target="blank">
                                <img src={YouGif} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/YouGif/"
                                target="blank">
                                <h4 className="card__body-title">You Gif</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/YouGif"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/hangman-alura-challenge/"
                                target="blank">
                                <img src={Hangman} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/hangman-alura-challenge/"
                                target="blank">
                                <h4 className="card__body-title">Hangman</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/hangman-alura-challenge"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/encryptor-alura-challenge/"
                                target="blank">
                                <img src={Encryptor} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/encryptor-alura-challenge/"
                                target="blank">
                                <h4 className="card__body-title">Encryptor</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/encryptor-alura-challenge"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>
                    <div className="portfolio__card">
                        <div className="card__header">
                            <a
                                href="https://abelstor.github.io/BlackJack/"
                                target="blank">
                                <img src={BlackJack} className="card__header-image"
                                    alt="ComicApp" />
                            </a>
                        </div>
                        <div className="card__body">
                            <a href="https://abelstor.github.io/BlackJack/"
                                target="blank">
                                <h4 className="card__body-title">BlackJack Game</h4>
                            </a>
                            <a
                                href="https://github.com/abelstor/BlackJack"
                                target="blank"
                                className="card__body-text">Repositorio
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
