const toggleHamburgerMenu = (newState) => {
    const primaryNav = document.querySelector('#primary-navigation');
    const navToggle = document.querySelector('#mobile-nav-toggle');

    if (primaryNav === null || navToggle === null) return;

    let newVisibility;

    if (newState === true || newState === false) {
        newVisibility = newState
    } else {
        let visible = primaryNav.getAttribute('data-visible');
        newVisibility = visible === "false" ? true : false;
    }
    
    primaryNav.setAttribute('data-visible', newVisibility);
    navToggle.setAttribute('aria-expanded', newVisibility);
}

export default toggleHamburgerMenu;