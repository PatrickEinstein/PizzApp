const Factors = (clickedLabel) => {
  switch (clickedLabel) {
    case "CY":
      return +18;
      break;
    case "ADY":
      return +15;
      break;
    case "IDY":
      return +12;
      break;
    case "FSD":
      return +23;
      break;
    case "LSD":
      return +7;
      break;
    default:
      return +0.1;
  }
};
export const Factors2 = (clickedLabel) => {
    switch (clickedLabel) {
      case "CY":
        return +0.5;
        break;
      case "ADY":
        return +0.3;
        break;
      case "IDY":
        return +0.4;
        break;
      case "FSD":
        return +10;
        break;
      case "LSD":
        return +7;
        break;
      default:
        return +0.1;
    }
  };

export default Factors;
