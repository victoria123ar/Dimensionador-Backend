import { Prisma } from '@prisma/client';
import { prisma } from '@/config';

async function getNames(): Promise<string[]> {
  const specificMassLiquidComponents = await prisma.specificMassLiquidComponent.findMany();
  const names = specificMassLiquidComponents.map(component => component.name);
  return names;
}

async function specificMassVapor(name: string){
  return prisma.specificMassVaporComponent.findFirst({
    where: {
      name,
    },
  });
}

async function specificMassLiquid(name: string){
  return prisma.specificMassLiquidComponent.findFirst({
    where: {
      name,
    },
  });
}

async function viscosityVapor(name: string){
  return prisma.vaporComponentViscosity.findFirst({
    where: {
      name,
    },
  });
}

async function viscosityLiquid(name: string){
  return prisma.viscosityLiquidComponent.findFirst({
    where: {
      name,
    },
  });
}

const componentRepository = {
  getNames,
  specificMassVapor,
  specificMassLiquid,
  viscosityVapor,
  viscosityLiquid
};

export default componentRepository;