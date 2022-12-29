const colorCodeValidator = (c) => {
  const trimCode = c.slice(1, -1).split(",");
  const identicator = Array.from(c);
  if (identicator[0] === "#" && identicator.length !== 7) {
    return false;
  } else if (identicator[0] === "(" && Object.values(trimCode).length !== 3) {
    return false;
  } else {
    return true;
  }
};

export default colorCodeValidator;
