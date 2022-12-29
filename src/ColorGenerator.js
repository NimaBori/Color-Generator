import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Colors from "./Colors";
import addShadeToColor from "./convertors/addShadeToColor";
import hexToRgb from "./convertors/hexToRgb";
import colorCodeValidator from "./colorCodeValidator";
import Row from "react-bootstrap/Row";

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colorGroup, setColorGroup] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleOnClick = (e) => {
    e.preventDefault();
    setAlert(false);
    let colorsSet = [];
    let c = ""; // base color
    let codeIsValid = colorCodeValidator(color);
    // validating input color code
    if (Array.from(color)[0] === "#" && codeIsValid) {
      const rgbColor = `(${hexToRgb(color).r}, ${hexToRgb(color).g}, ${
        hexToRgb(color).b
      })`;
      c = rgbColor;
    } else if (Array.from(color)[0] === "(" && codeIsValid) {
      c = color;
    } else setAlert(true);
    // generating dark and white shades
    for (let i = 0; i < 1; i += 0.1) {
      const newColor = addShadeToColor(c, i);
      const colorPara = {
        percentage: Math.round(i * 100),
        rgbTag: newColor,
        clipboard: "",
      };
      colorsSet.unshift(colorPara);
    }
    for (let i = -0.1; i > -1; i -= 0.1) {
      const newDarkerColor = addShadeToColor(c, i);
      const darkerColors = {
        percentage: Math.round(Math.abs(i * 100)),
        rgbTag: newDarkerColor,
        clipboard: "",
      };
      colorsSet.push(darkerColors);
    }
    setColorGroup(() => colorsSet);
  };

  return (
    <Container className="color-container">
      <Container className="my-5 bg-light p-4">
        <form>
          <label>color generator</label>
          <input
            type="text"
            placeholder="HEX or RGB color format"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${alert ? "border-danger" : "border-0"}`}
            autoFocus
          />
          <Button
            variant="info"
            type="submit"
            onClick={(e) => handleOnClick(e)}
          >
            Submit
          </Button>
        </form>
        {alert && (
          <Container className="text-center text-danger mt-3">
            Please enter a valid HEX or RGB color code!
          </Container>
        )}
      </Container>
      <Row>
        {colorGroup &&
          !alert &&
          colorGroup.map((color, index) => {
            return <Colors key={index} {...color} />;
          })}
      </Row>
    </Container>
  );
};

export default ColorGenerator;
