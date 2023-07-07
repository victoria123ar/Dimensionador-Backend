import componentRepository from "@/repositories/componentRepository";

async function getNames(): Promise<NameObject[]> {
  const names = await componentRepository.getNames();
  const nameObjects = names.map((name) => ({ name }));
  return nameObjects;
}

async function calculation(
  inletPressure: number,
  ddp: number,
  flow: number,
  orificeDiameter: number,
  pipeDiameter: number,
  l1: number,
  l2: number,
  beta: number,
  inletTemperature: number,
  outletTemperature: number,
  typeFase: string,
  typeTaps: string,
  component1: string,
  component2: string,
  component3: string,
  component4: string,
  component5: string,
  composition1: number,
  composition2: number,
  composition3: number,
  composition4: number,
  composition5: number,
  calculationType: string
) {
  const InletTemperature = Number(inletTemperature) + 273.15;
  const OutletTemperature = Number(outletTemperature) + 273.15;
  let InletPressure = Number(inletPressure) * 101325; // in Pascal
  let PressureDifference = Number(ddp) * 248.84; //in Pascal
  let OutletPressure = InletPressure - PressureDifference; // in Pascal
  const InletPressureBar = InletPressure / 100000; // in Bar
  const OutletPressureBar = InletPressure - PressureDifference; // in Bar
  const Tm = (InletTemperature + OutletTemperature) / 2; // in Kelvin
  const Pm = (InletPressure + OutletPressure) / 2; // in Pascal
  const PmBar = (InletPressureBar + OutletPressureBar) / 2; // in Bar
  const flowKg = Number(flow) / 3600;
  const pipeDiameterNum = Number(pipeDiameter);
  orificeDiameter = Number((beta * pipeDiameterNum).toFixed(4));
  let viscosity;
  let specificMass;
  let erro = 0;
  let pipeVelocity = 0;
  let pipeReynoldsNumber = 0;

  if (typeFase === "Vapor") {
    const resultMassVaporComponent1 =
      await componentRepository.specificMassVapor(component1);
    const TrComponent1 = Tm / Number(resultMassVaporComponent1.Tc);
    const PrComponent1 = PmBar / Number(resultMassVaporComponent1.Pc);
    const B0Component1 = 0.083 - 0.422 / Math.pow(TrComponent1, 1.6);
    const B1Component1 = 0.139 - 0.172 / Math.pow(TrComponent1, 4.2);
    const Z0Component1 = 1 + B0Component1 * (PrComponent1 / TrComponent1);
    const Z1Component1 = B1Component1 * (PrComponent1 / TrComponent1);
    const ZComponent1 =
      Z0Component1 + Number(resultMassVaporComponent1.w) * Z1Component1;

    const resultMassVaporComponent2 =
      await componentRepository.specificMassVapor(component2);
    const TrComponent2 = Tm / Number(resultMassVaporComponent2.Tc);
    const PrComponent2 = PmBar / Number(resultMassVaporComponent2.Pc);
    const B0Component2 = 0.083 - 0.422 / Math.pow(TrComponent2, 1.6);
    const B1Component2 = 0.139 - 0.172 / Math.pow(TrComponent2, 4.2);
    const Z0Component2 = 1 + B0Component2 * (PrComponent2 / TrComponent2);
    const Z1Component2 = B1Component2 * (PrComponent2 / TrComponent2);
    const ZComponent2 =
      Z0Component2 + Number(resultMassVaporComponent2.w) * Z1Component2;

    const resultMassVaporComponent3 =
      await componentRepository.specificMassVapor(component3);
    const TrComponent3 = Tm / Number(resultMassVaporComponent3.Tc);
    const PrComponent3 = PmBar / Number(resultMassVaporComponent3.Pc);
    const B0Component3 = 0.083 - 0.422 / Math.pow(TrComponent3, 1.6);
    const B1Component3 = 0.139 - 0.172 / Math.pow(TrComponent3, 4.2);
    const Z0Component3 = 1 + B0Component3 * (PrComponent3 / TrComponent3);
    const Z1Component3 = B1Component3 * (PrComponent3 / TrComponent3);
    const ZComponent3 =
      Z0Component3 + Number(resultMassVaporComponent3.w) * Z1Component3;

    const resultMassVaporComponent4 =
      await componentRepository.specificMassVapor(component4);
    const TrComponent4 = Tm / Number(resultMassVaporComponent4.Tc);
    const PrComponent4 = PmBar / Number(resultMassVaporComponent4.Pc);
    const B0Component4 = 0.083 - 0.422 / Math.pow(TrComponent4, 1.6);
    const B1Component4 = 0.139 - 0.172 / Math.pow(TrComponent4, 4.2);
    const Z0Component4 = 1 + B0Component4 * (PrComponent4 / TrComponent4);
    const Z1Component4 = B1Component4 * (PrComponent4 / TrComponent4);
    const ZComponent4 =
      Z0Component4 + Number(resultMassVaporComponent4.w) * Z1Component4;

    const resultMassVaporComponent5 =
      await componentRepository.specificMassVapor(component5);
    const TrComponent5 = Tm / Number(resultMassVaporComponent5.Tc);
    const PrComponent5 = PmBar / Number(resultMassVaporComponent5.Pc);
    const B0Component5 = 0.083 - 0.422 / Math.pow(TrComponent5, 1.6);
    const B1Component5 = 0.139 - 0.172 / Math.pow(TrComponent5, 4.2);
    const Z0Component5 = 1 + B0Component5 * (PrComponent5 / TrComponent5);
    const Z1Component5 = B1Component5 * (PrComponent5 / TrComponent5);
    const ZComponent5 =
      Z0Component5 + Number(resultMassVaporComponent5.w) * Z1Component5;

    const specificMassVaporComponent1 =
      ((Pm * Number(resultMassVaporComponent1.molecularMass)) / ZComponent1) *
      0.08205 *
      Tm *
      Number(composition1);
    const specificMassVaporComponent2 =
      ((Pm * Number(resultMassVaporComponent2.molecularMass)) / ZComponent2) *
      0.08205 *
      Tm *
      Number(composition2);
    const specificMassVaporComponent3 =
      ((Pm * Number(resultMassVaporComponent3.molecularMass)) / ZComponent3) *
      0.08205 *
      Tm *
      Number(composition3);
    const specificMassVaporComponent4 =
      ((Pm * Number(resultMassVaporComponent4.molecularMass)) / ZComponent4) *
      0.08205 *
      Tm *
      Number(composition4);
    const specificMassVaporComponent5 =
      ((Pm * Number(resultMassVaporComponent5.molecularMass)) / ZComponent5) *
      0.08205 *
      Tm *
      Number(composition5);

    const resultViscosityVaporComponent1 =
      await componentRepository.viscosityVapor(component1);
    const resultViscosityVaporComponent2 =
      await componentRepository.viscosityVapor(component2);
    const resultViscosityVaporComponent3 =
      await componentRepository.viscosityVapor(component3);
    const resultViscosityVaporComponent4 =
      await componentRepository.viscosityVapor(component4);
    const resultViscosityVaporComponent5 =
      await componentRepository.viscosityVapor(component5);

    const viscosityVaporComponent1 =
      ((Number(resultViscosityVaporComponent1.A) *
        Math.pow(Tm, Number(resultViscosityVaporComponent1.B))) /
        (1 +
          Number(resultViscosityVaporComponent1.C) / Tm +
          Number(resultViscosityVaporComponent1.D) / Math.pow(Tm, 2))) *
      Number(composition1);
    const viscosityVaporComponent2 =
      ((Number(resultViscosityVaporComponent2.A) *
        Math.pow(Tm, Number(resultViscosityVaporComponent2.B))) /
        (1 +
          Number(resultViscosityVaporComponent2.C) / Tm +
          Number(resultViscosityVaporComponent2.D) / Math.pow(Tm, 2))) *
      Number(composition2);
    const viscosityVaporComponent3 =
      ((Number(resultViscosityVaporComponent3.A) *
        Math.pow(Tm, Number(resultViscosityVaporComponent3.B))) /
        (2 +
          Number(resultViscosityVaporComponent3.C) / Tm +
          Number(resultViscosityVaporComponent3.D) / Math.pow(Tm, 2))) *
      Number(composition3);
    const viscosityVaporComponent4 =
      ((Number(resultViscosityVaporComponent4.A) *
        Math.pow(Tm, Number(resultViscosityVaporComponent4.B))) /
        (3 +
          Number(resultViscosityVaporComponent4.C) / Tm +
          Number(resultViscosityVaporComponent4.D) / Math.pow(Tm, 2))) *
      Number(composition4);
    const viscosityVaporComponent5 =
      ((Number(resultViscosityVaporComponent5.A) *
        Math.pow(Tm, Number(resultViscosityVaporComponent5.B))) /
        (1 +
          Number(resultViscosityVaporComponent5.C) / Tm +
          Number(resultViscosityVaporComponent5.D) / Math.pow(Tm, 2))) *
      Number(composition5);
    specificMass =
      specificMassVaporComponent1 +
      specificMassVaporComponent2 +
      specificMassVaporComponent3 +
      specificMassVaporComponent4 +
      specificMassVaporComponent5;
    viscosity =
      viscosityVaporComponent1 +
      viscosityVaporComponent2 +
      viscosityVaporComponent3 +
      viscosityVaporComponent4 +
      viscosityVaporComponent5;
  } else if (typeFase === "Líquido") {
    const resultMassLiquidComponent1 =
      await componentRepository.specificMassLiquid(component1);
    const resultMassLiquidComponent2 =
      await componentRepository.specificMassLiquid(component2);
    const resultMassLiquidComponent3 =
      await componentRepository.specificMassLiquid(component3);
    const resultMassLiquidComponent4 =
      await componentRepository.specificMassLiquid(component4);
    const resultMassLiquidComponent5 =
      await componentRepository.specificMassLiquid(component5);

    const specificMassLiquidComponent1 =
      (Number(resultMassLiquidComponent1.A) /
        Math.pow(
          Number(resultMassLiquidComponent1.B),
          1 +
            Math.pow(
              1 - Tm / Number(resultMassLiquidComponent1.C),
              Number(resultMassLiquidComponent1.D)
            )
        )) *
      Number(resultMassLiquidComponent1.molecularMass) *
      Number(composition1);

    const specificMassLiquidComponent2 =
      (Number(resultMassLiquidComponent2.A) /
        Math.pow(
          Number(resultMassLiquidComponent2.B),
          1 +
            Math.pow(
              1 - Tm / Number(resultMassLiquidComponent2.C),
              Number(resultMassLiquidComponent2.D)
            )
        )) *
      Number(resultMassLiquidComponent2.molecularMass) *
      Number(composition2);

    const specificMassLiquidComponent3 =
      (Number(resultMassLiquidComponent3.A) /
        Math.pow(
          Number(resultMassLiquidComponent3.B),
          1 +
            Math.pow(
              1 - Tm / Number(resultMassLiquidComponent3.C),
              Number(resultMassLiquidComponent3.D)
            )
        )) *
      Number(resultMassLiquidComponent3.molecularMass) *
      Number(composition3);

    const specificMassLiquidComponent4 =
      (Number(resultMassLiquidComponent4.A) /
        Math.pow(
          Number(resultMassLiquidComponent4.B),
          1 +
            Math.pow(
              1 - Tm / Number(resultMassLiquidComponent4.C),
              Number(resultMassLiquidComponent4.D)
            )
        )) *
      Number(resultMassLiquidComponent4.molecularMass) *
      Number(composition4);

    const specificMassLiquidComponent5 =
      (Number(resultMassLiquidComponent5.A) /
        Math.pow(
          Number(resultMassLiquidComponent5.B),
          1 +
            Math.pow(
              1 - Tm / Number(resultMassLiquidComponent5.C),
              Number(resultMassLiquidComponent5.D)
            )
        )) *
      Number(resultMassLiquidComponent5.molecularMass) *
      Number(composition5);

    const resultViscosityLiquidComponent1 =
      await componentRepository.viscosityLiquid(component1);
    const resultViscosityLiquidComponent2 =
      await componentRepository.viscosityLiquid(component2);
    const resultViscosityLiquidComponent3 =
      await componentRepository.viscosityLiquid(component3);
    const resultViscosityLiquidComponent4 =
      await componentRepository.viscosityLiquid(component4);
    const resultViscosityLiquidComponent5 =
      await componentRepository.viscosityLiquid(component5);

    const viscosityLiquidComponent1 =
      Math.exp(
        Number(resultViscosityLiquidComponent1.A) +
          Number(resultViscosityLiquidComponent1.B) / Tm +
          Number(resultViscosityLiquidComponent1.C) * Math.log(Tm) +
          Number(resultViscosityLiquidComponent1.D) *
            Math.pow(Tm, Number(resultViscosityLiquidComponent1.E))
      ) * Number(composition1);
    const viscosityLiquidComponent2 =
      Math.exp(
        Number(resultViscosityLiquidComponent2.A) +
          Number(resultViscosityLiquidComponent2.B) / Tm +
          Number(resultViscosityLiquidComponent2.C) * Math.log(Tm) +
          Number(resultViscosityLiquidComponent2.D) *
            Math.pow(Tm, Number(resultViscosityLiquidComponent2.E))
      ) * Number(composition2);
    const viscosityLiquidComponent3 =
      Math.exp(
        Number(resultViscosityLiquidComponent3.A) +
          Number(resultViscosityLiquidComponent3.B) / Tm +
          Number(resultViscosityLiquidComponent3.C) * Math.log(Tm) +
          Number(resultViscosityLiquidComponent3.D) *
            Math.pow(Tm, Number(resultViscosityLiquidComponent3.E))
      ) * Number(composition3);
    const viscosityLiquidComponent4 =
      Math.exp(
        Number(resultViscosityLiquidComponent4.A) +
          Number(resultViscosityLiquidComponent4.B) / Tm +
          Number(resultViscosityLiquidComponent4.C) * Math.log(Tm) +
          Number(resultViscosityLiquidComponent4.D) *
            Math.pow(Tm, Number(resultViscosityLiquidComponent4.E))
      ) * Number(composition4);
    const viscosityLiquidComponent5 =
      Math.exp(
        Number(resultViscosityLiquidComponent5.A) +
          Number(resultViscosityLiquidComponent5.B) / Tm +
          Number(resultViscosityLiquidComponent5.C) * Math.log(Tm) +
          Number(resultViscosityLiquidComponent5.D) *
            Math.pow(Tm, Number(resultViscosityLiquidComponent5.E))
      ) * Number(composition5);
    specificMass =
      specificMassLiquidComponent1 +
      specificMassLiquidComponent2 +
      specificMassLiquidComponent3 +
      specificMassLiquidComponent4 +
      specificMassLiquidComponent5;
    viscosity =
      viscosityLiquidComponent1 +
      viscosityLiquidComponent2 +
      viscosityLiquidComponent3 +
      viscosityLiquidComponent4 +
      viscosityLiquidComponent5;
  }
  let L1, L2;
  switch (typeTaps) {
    case "Flange":
      L1 = 25.4 / (Number(pipeDiameter) * 1000);
      L2 = L1;
      break;
    case "Radius taps":
      L1 = 1;
      L2 = 0.47;
      break;
    case "Canto":
      L1 = 0;
      L2 = L1;
      break;
    case "Pipe taps":
      L1 = 2.5 * Number(pipeDiameter);
      L2 = 8 * Number(pipeDiameter);
      break;
    case "Outros":
      L1 = Number(l1) / Number(pipeDiameter);
      L2 = Number(l2) / Number(pipeDiameter);
      break;
  }
  switch (calculationType) {
    case "orifice":
      let FB;
      pipeVelocity =
        flowKg / ((specificMass * Math.PI * pipeDiameterNum ** 2) / 4);
      pipeReynoldsNumber =
        (pipeDiameterNum * pipeVelocity * specificMass) / viscosity;
      let betaCalculation = 0.5;
      do {
        orificeDiameter = betaCalculation * pipeDiameterNum;
        let M2 = (2 * L2) / (1 - betaCalculation);
        let A = ((19000 * betaCalculation) / pipeReynoldsNumber) ** 0.8;
        let dischargeCoefficient;
        if (pipeDiameter > 0.07112) {
          dischargeCoefficient =
            0.5961 +
            0.0261 * betaCalculation ** 2 -
            0.216 * betaCalculation ** 8 +
            0.000521 *
              ((10 ** 6 * betaCalculation) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              betaCalculation ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (betaCalculation ** 4 / (1 - betaCalculation ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * betaCalculation ** 1.3 +
            0.011 * (0.75 - betaCalculation) * (2.8 - pipeDiameterNum / 25.4);
        } else {
          dischargeCoefficient =
            0.5961 +
            0.0261 * betaCalculation ** 2 -
            0.216 * betaCalculation ** 8 +
            0.000521 *
              ((10 ** 6 * betaCalculation) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              betaCalculation ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (betaCalculation ** 4 / (1 - betaCalculation ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * betaCalculation ** 1.3;
        }
        let pressureDropCoefficient =
          ((1 - betaCalculation ** 4 * (1 - dischargeCoefficient ** 2)) ** 0.5 /
            (dischargeCoefficient * betaCalculation ** 2) -
            1) **
          2;
        let expansionFactor =
          1 -
          (0.351 + 0.256 * betaCalculation ** 4 + 0.93 * betaCalculation ** 8) *
            (1 -
              (OutletPressure / InletPressure) **
                (1 / pressureDropCoefficient));
        FB =
          flowKg -
          (dischargeCoefficient / (1 - (betaCalculation ** 4) ** 0.5)) *
            expansionFactor *
            (Math.PI / 4) *
            orificeDiameter ** 2 *
            (2 * PressureDifference * specificMass) ** 0.5;

        //_______________________________________________________________________________________________________________________________________
        //Derivada

        let betaDerivate = 0.0001;

        let betaDerivedBeta = beta + betaDerivate;
        let orificeDiameterL = betaDerivedBeta * pipeDiameter;
        let M2L = (2 * L2) / (1 - betaDerivedBeta);
        let AL = ((19000 * betaDerivedBeta) / pipeReynoldsNumber) ** 0.8;

        let dischargeCoefficientL;
        if (pipeDiameter > 0.07112) {
          dischargeCoefficientL =
            0.5961 +
            0.0261 * betaDerivedBeta ** 2 -
            0.216 * betaDerivedBeta ** 8 +
            0.000521 *
              ((10 ** 6 * betaDerivedBeta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * AL) *
              betaDerivedBeta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * AL) *
              (betaDerivedBeta ** 4 / (1 - betaDerivedBeta ** 4)) -
            0.031 * (M2L - 0.8 * M2L ** 1.1) * betaDerivedBeta ** 1.3 +
            0.011 * (0.75 - betaDerivedBeta) * (2.8 - pipeDiameterNum / 25.4);
        } else {
          dischargeCoefficientL =
            0.5961 +
            0.0261 * betaDerivedBeta ** 2 -
            0.216 * betaDerivedBeta ** 8 +
            0.000521 *
              ((10 ** 6 * betaDerivedBeta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * AL) *
              betaDerivedBeta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * AL) *
              (betaDerivedBeta ** 4 / (1 - betaDerivedBeta ** 4)) -
            0.031 * (M2L - 0.8 * M2L ** 1.1) * betaDerivedBeta ** 1.3;
        }
        let pressureDropCoefficientL =
          ((1 - betaDerivedBeta ** 4 * (1 - dischargeCoefficientL ** 2)) **
            0.5 /
            (dischargeCoefficientL * betaDerivedBeta ** 2) -
            1) **
          2;
        let expansionFactorL =
          1 -
          (0.351 + 0.256 * betaDerivedBeta ** 4 + 0.93 * betaDerivedBeta ** 8) *
            (1 -
              (OutletPressure / InletPressure) **
                (1 / pressureDropCoefficientL));
        let fBetaDerivedBeta =
          flowKg -
          (dischargeCoefficientL / (1 - (betaDerivedBeta ** 4) ** 0.5)) *
            expansionFactorL *
            (Math.PI / 4) *
            orificeDiameterL ** 2 *
            (2 * PressureDifference * specificMass) ** 0.5;
        let fbL = (fBetaDerivedBeta - FB) / betaDerivate;
        let betaC = betaCalculation - FB / fbL;
        console.log(
          `v = ${pipeVelocity}  Red = ${pipeReynoldsNumber}  d1=${orificeDiameter}  M2 = ${M2}  A = ${A}  C = ${dischargeCoefficient}  k = ${pressureDropCoefficient}  
        e = ${expansionFactor}  FB = ${FB}  bdb = ${betaDerivedBeta}  d1L =${orificeDiameterL}  M2L = ${M2L}  AL = ${AL}  CL = ${dischargeCoefficientL}  
        kL=${pressureDropCoefficientL}  eL = ${expansionFactorL}  fbdb = ${fBetaDerivedBeta}  fbL = ${fbL}  betaC = ${betaC}`
        );
        erro = Math.abs((betaC - betaCalculation) / betaC);
        betaCalculation = betaC;
        let beta1 = betaCalculation;
        beta = Number(beta1.toFixed(4));
        orificeDiameter = Number((beta * pipeDiameterNum).toFixed(4));
        console.log(`erro = ${erro}  beta = ${beta}  d1 = ${orificeDiameter}`);
      } while (erro != 0);
      break;

    case "flow":
      orificeDiameter = Number((beta * pipeDiameterNum).toFixed(4));
      let flowCalculation = 1;
      do {
        let pipeVelocity =
          flowCalculation /
          ((specificMass * Math.PI * pipeDiameterNum ** 2) / 4);
        let pipeReynoldsNumber =
          (pipeDiameterNum * pipeVelocity * specificMass) / viscosity;
        let M2 = (2 * L2) / (1 - beta);
        let A = ((19000 * beta) / pipeReynoldsNumber) ** 0.8;
        let dischargeCoefficient;
        if (pipeDiameter > 0.07112) {
          dischargeCoefficient =
            0.5961 +
            0.0261 * beta ** 2 -
            0.216 * beta ** 8 +
            0.000521 * ((10 ** 6 * beta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              beta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (beta ** 4 / (1 - beta ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * beta ** 1.3 +
            0.011 * (0.75 - beta) * (2.8 - pipeDiameterNum / 25.4);
        } else {
          dischargeCoefficient =
            0.5961 +
            0.0261 * beta ** 2 -
            0.216 * beta ** 8 +
            0.000521 * ((10 ** 6 * beta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              beta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (beta ** 4 / (1 - beta ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * beta ** 1.3;
        }
        let pressureDropCoefficient =
          ((1 - beta ** 4 * (1 - dischargeCoefficient ** 2)) ** 0.5 /
            (dischargeCoefficient * beta ** 2) -
            1) **
          2;
        let expansionFactor =
          1 -
          (0.351 + 0.256 * beta ** 4 + 0.93 * beta ** 8) *
            (1 -
              (OutletPressure / InletPressure) **
                (1 / pressureDropCoefficient));

        let flowL =
          (dischargeCoefficient / (1 - beta ** 4) ** 0.5) *
          expansionFactor *
          (Math.PI / 4) *
          orificeDiameter ** 2 *
          (2 * PressureDifference * specificMass) ** 0.5;

        erro = Math.abs((flowL - flowCalculation) / flowL);
        console.log(
          `v = ${pipeVelocity}  Red = ${pipeReynoldsNumber}  M2 = ${M2}  A = ${A}  C = ${dischargeCoefficient}  k = ${pressureDropCoefficient}  e = ${expansionFactor}  
          qL = ${flowL}`
        );
        flowCalculation = flowL; // in Kg/h
        flow = Number((flowCalculation * 3600).toFixed(4));
        console.log(`erro = ${erro}  flow = ${flow}  d1 = ${orificeDiameter}`);
      } while (erro != 0);
      console.log(flow);
      break;

    case "ddp":
      orificeDiameter = Number((beta * pipeDiameterNum).toFixed(4));
      pipeVelocity =
        flowKg / ((specificMass * Math.PI * pipeDiameterNum ** 2) / 4);
      pipeReynoldsNumber =
        (pipeDiameterNum * pipeVelocity * specificMass) / viscosity;
      OutletPressure = InletPressure - 0.1 * 101325;
      let pressureDifferenceCalculation;
      do {
        let M2 = (2 * L2) / (1 - beta); // M2
        let A = ((19000 * beta) / pipeReynoldsNumber) ** 0.8;
        let dischargeCoefficient;
        if (pipeDiameter > 0.07112) {
          dischargeCoefficient =
            0.5961 +
            0.0261 * beta ** 2 -
            0.216 * beta ** 8 +
            0.000521 * ((10 ** 6 * beta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              beta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (beta ** 4 / (1 - beta ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * beta ** 1.3 +
            0.011 * (0.75 - beta) * (2.8 - pipeDiameterNum / 25.4);
        } else {
          dischargeCoefficient =
            0.5961 +
            0.0261 * beta ** 2 -
            0.216 * beta ** 8 +
            0.000521 * ((10 ** 6 * beta) / pipeReynoldsNumber) ** 0.7 +
            (0.0188 + 0.0063 * A) *
              beta ** 3.5 *
              (10 ** 6 / pipeReynoldsNumber) ** 0.3 +
            (0.043 +
              0.08 * Math.E ** (-10 * L1) -
              0.123 * Math.E ** (-7 * L1)) *
              (1 - 0.11 * A) *
              (beta ** 4 / (1 - beta ** 4)) -
            0.031 * (M2 - 0.8 * M2 ** 1.1) * beta ** 1.3;
        }

        let pressureDropCoefficient =
          ((1 - beta ** 4 * (1 - dischargeCoefficient ** 2)) ** 0.5 /
            (dischargeCoefficient * beta ** 2) -
            1) **
          2;
        let expansionFactor =
          1 -
          (0.351 + 0.256 * beta ** 4 + 0.93 * beta ** 8) *
            (1 -
              (OutletPressure / InletPressure) **
                (1 / pressureDropCoefficient));
        pressureDifferenceCalculation =
          (8 * flowKg ** 2 * (1 - beta ** 4)) /
          (specificMass *
            (dischargeCoefficient *
              expansionFactor *
              Math.PI *
              orificeDiameter ** 2) **
              2);

        let OutletPressureL = InletPressure - pressureDifferenceCalculation;
        console.log(
          `d1 = ${orificeDiameter}  v = ${pipeVelocity}  Red = ${pipeReynoldsNumber}  P2 = ${OutletPressure}  M2 = ${M2}  A = ${A}  C = ${dischargeCoefficient}  
          k = ${pressureDropCoefficient}  e = ${expansionFactor}`
        );
        erro = Math.abs((OutletPressureL - OutletPressure) / OutletPressureL);
        OutletPressure = OutletPressureL;
        ddp = Number((pressureDifferenceCalculation / 248.84).toFixed(4));
        console.log(`erro = ${erro}  ddp = ${ddp}`);
      } while (erro != 0);
      break;
  }
  return { ddp, flow, orificeDiameter, beta };
}

export type NameObject = {
  name: string;
};

const componentService = {
  getNames,
  calculation,
};

export default componentService;
