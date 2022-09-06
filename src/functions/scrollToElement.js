const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element == null) return;
    element.scrollIntoView(true);
};

export default scrollToElement;
