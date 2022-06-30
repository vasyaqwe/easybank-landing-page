const nav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    const attribute = nav.getAttribute('data-visible');
    if (attribute === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
        navToggle.firstChild.src = 'icon-close.672c8e2b.svg';
        overlay = document.createElement('span');
        document.body.appendChild(overlay);
        overlay.classList.add('dim');
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
        navToggle.firstChild.src = 'icon-hamburger.4d46a600.svg';
        document.body.prepend(overlay);
        document.body.removeChild(document.querySelector('.dim'));
    }
})