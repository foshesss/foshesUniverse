const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element == null) return;
    element.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
    });
};

export default scrollToElement;
