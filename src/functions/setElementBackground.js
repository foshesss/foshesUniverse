const setElementBackground = (elementId, background) => {
    const element = document.getElementById(elementId);

    if (element == null) return;

    if (background !== null && background !== undefined) {
        const currentValue = element.style.getPropertyValue('--gradient-goal');
        element.style.setProperty('--gradient-goal', background ? background : currentValue);
    }

    element.style.setProperty('--opacity', background ? 1 : 0);
};

export default setElementBackground;