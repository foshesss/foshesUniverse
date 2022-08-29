import rgb from "./rgb";

/*
    {
        entry#1: background,
        entry#2: text-color
    }
*/

const CompanyColors = {
    tele: [rgb(25,174,108), rgb(254,254,254)],
    twitch: [rgb(145, 70, 255), rgb(254,254,254)],
    blox: [rgb(226,35,26), rgb(220,220,220)],
}

const defaultColors = [rgb(220,220,220), rgb(23,23,23)];

const getCompanyColor = (company) => CompanyColors[company] || defaultColors;

export default getCompanyColor;