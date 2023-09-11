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
  Fats
) {
  const Sigma =
    doughBalls1 * ballWeight1 + doughBalls2 * ballWeight2;

  //define the intial ratios
  const waterRatio = waterPercentage / 100;
  const saltRatio = saltPercentage / 100;
  const FatsRatio = Fats / 100;

  //define the actual weights
  const flourWeight =
    Sigma * (1 - waterRatio - saltRatio - CY - (Fats ? +FatsRatio : +0)); ///Original value
  const saltWeight = Sigma * saltRatio; ///Original value
  const yeastWeight = Sigma * CY; ///Original value
  const Fatss = +FatsRatio * +Sigma; ///Original value
  const waterWeight = Sigma * waterRatio; ///Original value

  // define the autolysis parameters
  const autolysisflourmass = (+autolysisflour * Sigma) / 100;
  const autolysiswatermass = (+autolysiswater * autolysisflourmass) / 100;
  const autolysisdose = autolysisflourmass + autolysiswatermass;


  const maindoughdose =
    flourWeight +
    waterWeight +
    yeastWeight +
    CY +
    saltWeight +
    (Fats ? Fatss : 0) - autolysisflourmass;

  console.log(
    `flourWeight==>`,
    flourWeight,
    `waterWeight==>`,
    waterWeight,
    `yeastWeight==>`,
    yeastWeight,
    `CY==>`,
    CY,
    `saltWeight==>`,
    saltWeight,
    `Fats==>`,
    Fats,
    `maindoughness==>`,maindoughdose
  );

  const flour1mass = (+flour1 / 100) * +flourWeight;
  const flour2mass = (+flour2 / 100) * +flourWeight;
  const flour3mass = (+flour3 / 100) * +flourWeight;
  const flour4mass = (+flour4 / 100) * +flourWeight;
  const flour5mass = (+flour5 / 100) * +flourWeight;
  const flour6mass = (+flour6 / 100) * +flourWeight;

  // Return the dough ingredient amounts
  return {
    flourWeight,
    waterWeight,
    saltWeight,
    yeastWeight,
    autolysisflourmass,
    flour1mass,
    flour2mass,
    flour3mass,
    flour4mass,
    flour5mass,
    flour6mass,
    Fatss,
    autolysiswatermass,
    autolysisdose,
    Sigma,
    maindoughdose,
  };
}
