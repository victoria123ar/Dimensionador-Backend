import componentService from "@/services/componentService";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function getNames(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await componentService.getNames();
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function specificMassAndViscosity(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const {
    inletPressure,
    ddp,
    flow,
    orificeDiameter,
    pipeDiameter,
    l1,
    l2,
    beta,
    inletTemperature,
    outletTemperature,
    typeFase,
    typeTaps,
    component1,
    component2,
    component3,
    component4,
    component5,
    composition1,
    composition2,
    composition3,
    composition4,
    composition5,
    calculationType,
  } = req.body as Record<string, string>;

  try {
    componentService.orificeCalculation(
      inletPressure,
      ddp,
      flow,
      orificeDiameter,
      pipeDiameter,
      l1,
      l2,
      beta,
      inletTemperature,
      outletTemperature,
      typeFase,
      typeTaps,
      component1,
      component2,
      component3,
      component4,
      component5,
      composition1,
      composition2,
      composition3,
      composition4,
      composition5,
      calculationType
    );
    return res.status(httpStatus.OK).send("Dados recebidos com sucesso");
  } catch (error) {
    next(error);
  }
}
