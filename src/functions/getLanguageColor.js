import rgb from "./rgb";

/*
    {
        entry#1: background,
        entry#2: text-color
    }
*/

const LanguageColors = {
    lua: [rgb(170, 74, 68), rgb(220,220,220)],
    ex: [rgb(136,120,195), rgb(255,255,255)],
    lol: [rgb(224, 188, 91), rgb(23,23,23)],
    cpp: [rgb(114,137,218), rgb(220,220,220)],
    go: [rgb(96, 130, 182), rgb(220,220,220)],
}

const defaultColors = [rgb(220,220,220), rgb(0,0,0)];

const getLanguageColor = (language) => LanguageColors[language] || defaultColors;

export default getLanguageColor;