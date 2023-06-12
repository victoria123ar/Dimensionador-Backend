-- CreateTable
CREATE TABLE "SpecificMassLiquidComponent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "molecularMass" DECIMAL(65,30) NOT NULL,
    "A" DECIMAL(65,30) NOT NULL,
    "B" DECIMAL(65,30) NOT NULL,
    "C" DECIMAL(65,30) NOT NULL,
    "D" DECIMAL(65,30) NOT NULL,
    "E" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SpecificMassLiquidComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpecificMassVaporComponent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "molecularMass" DECIMAL(65,30) NOT NULL,
    "w" DECIMAL(65,30) NOT NULL,
    "Pc" DECIMAL(65,30) NOT NULL,
    "Tc" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SpecificMassVaporComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VaporComponentViscosity" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "molecularMass" DECIMAL(65,30) NOT NULL,
    "A" DECIMAL(65,30) NOT NULL,
    "B" DECIMAL(65,30) NOT NULL,
    "C" DECIMAL(65,30) NOT NULL,
    "D" DECIMAL(65,30) NOT NULL,
    "E" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "VaporComponentViscosity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ViscosityLiquidComponent" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "molecularMass" DECIMAL(65,30) NOT NULL,
    "A" DECIMAL(65,30) NOT NULL,
    "B" DECIMAL(65,30) NOT NULL,
    "C" DECIMAL(65,30) NOT NULL,
    "D" DECIMAL(65,30) NOT NULL,
    "E" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ViscosityLiquidComponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpecificMassLiquidComponent_name_key" ON "SpecificMassLiquidComponent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SpecificMassVaporComponent_name_key" ON "SpecificMassVaporComponent"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VaporComponentViscosity_name_key" ON "VaporComponentViscosity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ViscosityLiquidComponent_name_key" ON "ViscosityLiquidComponent"("name");
