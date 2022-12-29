const addShadeToColor = (c, s) => {
  const arr = c.slice(1, -1).split(",");
  let newArr = [];
  arr.forEach((element) => {
    const indicationNum = parseInt(element);
    if (s >= 0) {
      const addWhiteShade = Math.round(
        (255 - indicationNum) * s + indicationNum
      );
      newArr.push(addWhiteShade);
    } else if (s < 0) {
      const addBlackShade = Math.round(
        indicationNum - Math.abs(indicationNum * s)
      );
      newArr.push(addBlackShade);
    }
  });
  let newStr = `(${newArr.toString()})`;
  return newStr;
};

export default addShadeToColor;
