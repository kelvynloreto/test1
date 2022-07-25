const generateNewColor = () => {
  let simbols, color;
  simbols = "0123456789ABCDEF";
  color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + simbols[Math.floor(Math.random() * 16)];

  }
  return color
}
export default generateNewColor;
