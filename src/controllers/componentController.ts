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

export async function calculation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  interface RequestBody {
    inletPressure: number;
    ddp: number;
    flow: number;
    orificeDiameter: number;
    pipeDiameter: number;
    l1: number;
    l2: number;
    beta: number;
    inletTemperature: number;
    outletTemperature: number;
    typeFase: string;
    typeTaps: string;
    component1: string;
    component2: string;
    component3: string;
    component4: string;
    component5: string;
    composition1: number;
    composition2: number;
    composition3: number;
    composition4: number;
    composition5: number;
    calculationType: string;
  }

  const reqBody = req.body as RequestBody;

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
  } = reqBody;

  try {
   const result =  await componentService.calculation(
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
    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}
