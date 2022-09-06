// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};
const rgb = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

export default rgb;