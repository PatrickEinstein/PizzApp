// Neapolitan Pizza Calculator

// Function to calculate dough ingredients
export function calculateDoughIngredients(
  doughBalls1,
  doughBalls2,
  ballWeight1,
  ballWeight2,
  CY,
  waterPercentage,
  saltPercentage,
  leaveningHours,
  leaveningTemperature,
  flour1,
  flour2,
  flour3,
  flour4,
  flour5,
  flour6,
  autolysisflour,
  autolysiswater,
  fat
) {
  const Sigma = doughBalls1 * ballWeight1 + doughBalls2 * ballWeight2;
  // Convert percentages to decimal values
  const waterRatio = waterPercentage / 100;
  const saltRatio = saltPercentage / 100;
  const fatRatio = fat / 100;

  //   const leaveningfactor =
  //     1 + (leaveningHours / 24) * (leaveningTemperature / 24);

  // Calculate flour and water amounts
  const flourWeight =
    Sigma / (1 + waterRatio + saltRatio + CY + (fat ? +fatRatio : +0));

  // Calculate salt and yeast amounts
  const saltWeight = flourWeight * saltRatio; ///Original value
  const yeastWeight = flourWeight * CY; ///Original value

  // Calculate the final dough hydration level
  const doughHydration = waterWeight / flourWeight;

  // Calculate the final dough salt level
  const doughSaltPercentage = (saltWeight / flourWeight) * 100;

  // Calculate the final dough temperature
  const doughTemperature = leaveningTemperature + (leaveningHours * 0.5 - 1);

  const autolysisflourmass = (+autolysisflour * flourWeight) / 100;

  const autolysiswatermass = (+autolysiswater * autolysisflourmass) / 100;
  const waterWeight = flourWeight * waterRatio - autolysiswatermass;

  const remains = flourWeight - +autolysisflourmass;

  const autolysisdose = autolysisflourmass + autolysiswatermass;
  const maindoughdose =
    remains + waterWeight + yeastWeight + saltWeight + (fats ? fats : 0);
  const flour1mass = (+flour1 / 100) * +remains;
  const flour2mass = (+flour2 / 100) * +remains;
  const flour3mass = (+flour3 / 100) * +remains;
  const flour4mass = (+flour4 / 100) * +remains;
  const flour5mass = (+flour5 / 100) * +remains;
  const flour6mass = (+flour6 / 100) * +remains;
  const fats = +fatRatio * +remains;

  // Return the dough ingredient amounts
  return {
    flourWeight,
    waterWeight,
    saltWeight,
    yeastWeight,
    doughHydration,
    doughSaltPercentage,
    doughTemperature,
    autolysisflourmass,
    flour1mass,
    flour2mass,
    flour3mass,
    flour4mass,
    flour5mass,
    flour6mass,
    fats,
    autolysiswatermass,
    autolysisdose,
    Sigma,
    maindoughdose,
  };
}
