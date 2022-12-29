import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";

const Colors = ({ rgbTag, percentage }) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsClicked(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [isClicked]);

  return (
    <Col
      className="p-3"
      xs={6}
      sm={4}
      md={3}
      xl={2}
      style={{ backgroundColor: `rgb${rgbTag}` }}
      onClick={() => {
        setIsClicked(true);
        navigator.clipboard.writeText(rgbTag);
      }}
    >
      <Col className="info-container">
        <p className="info">{percentage}%</p>
        <p className="info">{rgbTag}</p>
        {isClicked && (
          <p style={{ fontSize: "14px" }} className="text-secondary mt-2">
            Copied to clipboard
          </p>
        )}
      </Col>
    </Col>
  );
};

export default Colors;
