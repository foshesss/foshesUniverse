import getLanguageColor from "./getLanguageColor";

const onHover = buttonID => {
    const buttonElements = document.getElementById("socials-buttons").childNodes;
    const background = document.getElementById(buttonID + "-background");
    const color = getLanguageColor(buttonID)[1];

    background.style.opacity = 1;
    for (let i = 0; i < buttonElements.length; i++) {
        const button = buttonElements[i];
        button.style.color = color;
        button.style.opacity = button.id === buttonID ? 1 : .25;

        const buttonContainer = button.firstChild;
        buttonContainer.style.borderTop = "1px solid " + color;
        buttonContainer.style.borderBottom = "1px solid " + color;

        const image = buttonContainer.firstChild;
        image.style.filter = "invert(0%)";
        image.style["-webkit-filter"] = "invert(0%)";
    }

    const header = document.getElementById("socials-header");
    header.style.color = color;
};

export default onHover;