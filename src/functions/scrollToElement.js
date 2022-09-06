const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element == null) return;
    element.scrollIntoView({block: "center"});
};

export default scrollToElement;