import hexToRgb from "assets/theme/functions/hexToRgb";

const rgba = (color, opacity) => {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
};

export default rgba;
