import { useEffect } from 'react';

export const Menu = () => {

    let toggleButton;
    let navWrapper;

    useEffect(() => {
        toggleButton = document.getElementById('button-menu');
        navWrapper = document.getElementById('nav');
    }, []);

    const handleShowMenu = () => {
        toggleButton.classList.toggle('close');
        navWrapper.classList.toggle('show');
    }

    return (
        <button
            id="button-menu"
            className="button__menu"
            onClick={handleShowMenu}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}
