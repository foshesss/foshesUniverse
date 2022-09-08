const onLeave = buttonID => {
    const buttonElements = document.getElementById("socials-buttons").childNodes;
    const background = document.getElementById(buttonID + "-background");

    background.style.opacity = null;
    for (let i = 0; i < buttonElements.length; i++) {
        const button = buttonElements[i];
        button.style.color = null;
        button.style.opacity = null;

        const buttonContainer = button.firstChild;
        buttonContainer.style.borderTop = null;
        buttonContainer.style.borderBottom = null;

        const image = buttonContainer.firstChild;
        image.style.filter = null;
        image.style["-webkit-filter"] = null;
    }

    const header = document.getElementById("socials-header");
    header.style.color = null;
}

export default onLeave;