import componentRepository from "@/repositories/componentRepository";

async function getNames(): Promise<NameObject[]> {
  const names = await componentRepository.getNames();
  const nameObjects = names.map((name) => ({ name }));
  return nameObjects;
}

async function orificeCalculation(
  inletPressure: string,
  ddp: string,
  flow: string,
  orificeDiameter: string,
  pipeDiameter: string,
  l1: string,
  l2: string,
  beta: string,
  inletTemperature: string,
  outletTemperature: string,
  typeFase: string,
  typeTaps: string,
  component1: string,
  component2: string,
  component3: string,
  component4: string,
  component5: string,
  composition1: string,
  composition2: string,
  composition3: string,
  composition4: string,
  composition5: string,
  calculationType: string
) {
  const InletTemperature = Number(inletTemperature) + 273.15;
  const OutletTemperature = Number(outletTemperature) + 273.15;
  const InletPressure = Number(inletPressure) * 101325;
  const PressureDifference = Number(ddp) * 248.84;
  const OutletPressure = InletPressure - PressureDifference;
  const InletPressureBar = InletPressure / 100000;
  const OutletPressureBar = (InletPressure - PressureDifference) / 100000;
  const Tm = (InletTemperature + OutletTemperature) / 2; // in Kelvin
  const Pm = (InletPressure + OutletPressure) / 2; // in Pascal
  const PmBar = (InletPressureBar + OutletPressureBar) / 2; // in Bar
  let viscosity;
  let specificMass;
  let betaCalculation: number;
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
    case "Orifice":
      let FB = 0;
      let pipeVelocity =
        Number(flow) /
        ((specificMass * Math.PI * Math.pow(Number(pipeDiameter), 2)) / 4);
      let PipeReynoldsNumber =
        (Number(pipeDiameter) * pipeVelocity * specificMass) / viscosity;
      betaCalculation = 0.5;
      let erro = 0;
      do {
        let orificeDiameter1 = betaCalculation * Number(pipeDiameter);
        let M2 = (2 * L2) / (1 - betaCalculation); // M2
        let A = Math.pow((19000 * betaCalculation) / PipeReynoldsNumber, 0.8);

        let dischargeCoefficient;
        if (Number(pipeDiameter) > 0.07112) {
          dischargeCoefficient =
            0.5961 +
            0.0261 * Math.pow(betaCalculation, 2) -
            0.216 * Math.pow(betaCalculation, 8) +
            0.000521 * Math.pow((10 ** 6 * betaCalculation) / PipeReynoldsNumber, 0.7) +
            (0.0188 + 0.0063 * A) *
              Math.pow(betaCalculation, 3.5) *
              Math.pow(10 ** 6 / PipeReynoldsNumber, 0.3) +
            (0.043 +
              0.08 * Math.pow(Math.E, -10 * L1) -
              0.123 * Math.pow(Math.E, -7 * L1)) *
              (1 - 0.11 * A) *
              (Math.pow(betaCalculation, 4) / (1 - Math.pow(betaCalculation, 4))) -
            0.031 * (M2 - 0.8 * Math.pow(M2, 1.1)) * Math.pow(betaCalculation, 1.3) +
            0.011 * (0.75 - betaCalculation) * (2.8 - Number(pipeDiameter) / 25.4);
          dischargeCoefficient =
            0.5961 +
            0.0261 * Math.pow(betaCalculation, 2) -
            0.216 * Math.pow(betaCalculation, 8) +
            0.000521 * Math.pow((10 ** 6 * betaCalculation) / PipeReynoldsNumber, 0.7) +
            (0.0188 + 0.0063 * A) *
              Math.pow(betaCalculation, 3.5) *
              Math.pow(10 ** 6 / PipeReynoldsNumber, 0.3) +
            (0.043 +
              0.08 * Math.pow(Math.E, -10 * L1) -
              0.123 * Math.pow(Math.E, -7 * L1)) *
              (1 - 0.11 * A) *
              (Math.pow(betaCalculation, 4) / (1 - Math.pow(betaCalculation, 4))) -
            0.031 * (M2 - 0.8 * Math.pow(M2, 1.1)) * Math.pow(betaCalculation, 1.3);
        }

        let pressureDropCoefficient = Math.pow(
          (1 - Math.pow(betaCalculation, 4) * (1 - Math.pow(dischargeCoefficient, 2))) **
            0.5 /
            (dischargeCoefficient * Math.pow(betaCalculation, 2)) -
            1,
          2
        );
        let expansionFactor =
          1 -
          (0.351 + 0.256 * Math.pow(betaCalculation, 4) + 0.93 * Math.pow(betaCalculation, 8)) *
            (1 -
              Math.pow(
                OutletPressure / InletPressure,
                1 / pressureDropCoefficient
              ));

        FB =
          Number(flow) -
          (dischargeCoefficient / Math.pow(1 - Math.pow(betaCalculation, 4), 0.5)) *
            expansionFactor *
            (Math.PI / 4) *
            Math.pow(orificeDiameter1, 2) *
            Math.pow(2 * PressureDifference * specificMass, 0.5);

        // Derivada
        let db = 0.0001;
        let bdb = betaCalculation + db;

        let orificeDiameter1L = bdb * Number(pipeDiameter);
        let M2L = (2 * L2) / (1 - bdb);
        let AL = Math.pow((19000 * bdb) / PipeReynoldsNumber, 0.8);

        let dischargeCoefficientL;
        if (Number(pipeDiameter) > 0.07112) {
          dischargeCoefficientL =
            0.5961 +
            0.0261 * Math.pow(bdb, 2) -
            0.216 * Math.pow(bdb, 8) +
            0.000521 * Math.pow((10 ** 6 * bdb) / PipeReynoldsNumber, 0.7) +
            (0.0188 + 0.0063 * AL) *
              Math.pow(bdb, 3.5) *
              Math.pow(10 ** 6 / PipeReynoldsNumber, 0.3) +
            (0.043 +
              0.08 * Math.pow(Math.E, -10 * L1) -
              0.123 * Math.pow(Math.E, -7 * L1)) *
              (1 - 0.11 * AL) *
              (Math.pow(bdb, 4) / (1 - Math.pow(bdb, 4))) -
            0.031 * (M2L - 0.8 * Math.pow(M2L, 1.1)) * Math.pow(bdb, 1.3) +
            0.011 * (0.75 - bdb) * (2.8 - Number(pipeDiameter) / 25.4);
        } else {
          dischargeCoefficientL =
            0.5961 +
            0.0261 * Math.pow(bdb, 2) -
            0.216 * Math.pow(bdb, 8) +
            0.000521 * Math.pow((10 ** 6 * bdb) / PipeReynoldsNumber, 0.7) +
            (0.0188 + 0.0063 * AL) *
              Math.pow(bdb, 3.5) *
              Math.pow(10 ** 6 / PipeReynoldsNumber, 0.3) +
            (0.043 +
              0.08 * Math.pow(Math.E, -10 * L1) -
              0.123 * Math.pow(Math.E, -7 * L1)) *
              (1 - 0.11 * AL) *
              (Math.pow(bdb, 4) / (1 - Math.pow(bdb, 4))) -
            0.031 * (M2L - 0.8 * Math.pow(M2L, 1.1)) * Math.pow(bdb, 1.3);
        }

        let pressureDropCoefficientL = Math.pow(
          (1 - Math.pow(bdb, 4) * (1 - Math.pow(dischargeCoefficientL, 2))) **
            0.5 /
            (dischargeCoefficientL * Math.pow(bdb, 2)) -
            1,
          2
        );
        let expansionFactorL =
          1 -
          (0.351 + 0.256 * Math.pow(bdb, 4) + 0.93 * Math.pow(bdb, 8)) *
            (1 -
              Math.pow(
                OutletPressure / InletPressure,
                1 / pressureDropCoefficientL
              ));

        let fbdb =
          Number(flow) -
          (dischargeCoefficientL / Math.pow(1 - Math.pow(bdb, 4), 0.5)) *
            expansionFactorL *
            (Math.PI / 4) *
            Math.pow(orificeDiameter1L, 2) *
            Math.pow(2 * PressureDifference * specificMass, 0.5);

        let fbL = (fbdb - FB) / db;

        let betaCalculationC = betaCalculation - FB / fbL;

        erro = Math.abs((betaCalculationC - betaCalculation) / betaCalculationC);

        betaCalculation = betaCalculationC;
      } while (erro > 0.0001);
      console.log("Beta1 " + betaCalculation);
      break;
  }
  console.log("Beta " + betaCalculation);
}

export type NameObject = {
  name: string;
};

const componentService = {
  getNames,
  orificeCalculation,
};

export default componentService;
