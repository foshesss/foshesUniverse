import rgb from "./rgb";

/*
    {
        entry#1: background,
        entry#2: text-color
    }
*/

const LanguageColors = {
    lua: [rgb(170, 74, 68), rgb(255,255,255)],
    ex: [rgb(136,120,195), rgb(255,255,255)],
    lol: [rgb(224, 188, 91), rgb(255,255,255)],
    cpp: [rgb(114,137,218), rgb(255,255,255)],
    go: [rgb(96, 130, 182), rgb(255,255,255)],
    tele: [rgb(25,174,108), rgb(255,255,255)],
    twitch: [rgb(145, 70, 255), rgb(255,255,255)],
    blox: [rgb(226,35,26), rgb(255,255,255)],
    in: [rgb(0,114,177), rgb(255,255,255)],
    git: [rgb(46, 139, 87), rgb(255,255,255)]
}

const defaultColors = [rgb(220,220,220), rgb(255,255,255)];

const getLanguageColor = (language) => LanguageColors[language] || defaultColors;

export default getLanguageColor;
