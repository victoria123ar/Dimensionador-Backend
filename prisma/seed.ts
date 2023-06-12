import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.specificMassLiquidComponent.createMany({
    data: [
      {
        name: 'Acetona',
        molecularMass: 58.08,
        A: 1.2298,
        B: 0.2576,
        C: 508.2,
        D: 0.29903,
        E: 0.0,
      },
      {
        name: 'Ácido acético',
        molecularMass: 60.05,
        A: 1.5791,
        B: 0.26954,
        C: 592.71,
        D: 0.26843,
        E: 0.0,
      },
      {
        name: 'Água',
        molecularMass: 18.02,
        A: 4.6137,
        B: 0.26214,
        C: 647.29,
        D: 0.23072,
        E: 0.0,
      },
      {
        name: 'Benzeno',
        molecularMass: 78.11,
        A: 0.97619,
        B: 0.26071,
        C: 562.16,
        D: 0.27357,
        E: 0.0,
      },
      {
        name: 'Clorofórmio',
        molecularMass: 119.38,
        A: 1.0545,
        B: 0.25274,
        C: 536.4,
        D: 0.28766,
        E: 0.0,
      },
      {
        name: 'Dióxido de carbono',
        molecularMass: 44.01,
        A: 2.4251,
        B: 0.24879,
        C: 304.2,
        D: 0.25834,
        E: 0.0,
      },
      {
        name: 'Etano',
        molecularMass: 30.069,
        A: 1.8257,
        B: 0.2733,
        C: 305.42,
        D: 0.2833,
        E: 0.0,
      },
      {
        name: 'Etanol',
        molecularMass: 46.07,
        A: 1.5223,
        B: 0.26395,
        C: 516.25,
        D: 0.2367,
        E: 0.0,
      },
      {
        name: 'Fenol',
        molecularMass: 94.11,
        A: 1.4174,
        B: 0.32162,
        C: 694.25,
        D: 0.3212,
        E: 0.0,
      },
      {
        name: 'Hidrogênio',
        molecularMass: 2.016,
        A: 4.96,
        B: 0.332,
        C: 33.25,
        D: 0.272,
        E: 0.0,
      },
      {
        name: 'Metano',
        molecularMass: 16.043,
        A: 2.873,
        B: 0.2881,
        C: 190.58,
        D: 0.277,
        E: 0.0,
      },
      {
        name: 'Metanol',
        molecularMass: 32.04,
        A: 1.2057,
        B: 0.19779,
        C: 512.63,
        D: 0.17272,
        E: 0.0,
      },
      {
        name: 'Monóxido de carbono',
        molecularMass: 28.01,
        A: 2.944,
        B: 0.27655,
        C: 132.92,
        D: 0.29053,
        E: 0.0,
      },
      {
        name: 'm-Xileno',
        molecularMass: 106.16,
        A: 0.5807,
        B: 0.24025,
        C: 617.06,
        D: 0.2493,
        E: 0.0,
      },
      {
        name: 'Naftaleno',
        molecularMass: 128.1705,
        A: 0.5981,
        B: 0.25037,
        C: 748.35,
        D: 0.273,
        E: 0.0,
      },
      {
        name: 'n-Butano',
        molecularMass: 58.12,
        A: 1.1103,
        B: 0.27881,
        C: 425.18,
        D: 0.28377,
        E: 0.0,
      },
      {
        name: 'n-Decano',
        molecularMass: 142.284,
        A: 0.4129,
        B: 0.2524,
        C: 618.45,
        D: 0.2857,
        E: 0.0,
      },
      {
        name: 'n-Heptano',
        molecularMass: 100.21,
        A: 0.55506,
        B: 0.24946,
        C: 540.26,
        D: 0.27128,
        E: 0.0,
      },
      {
        name: 'n-Hexano',
        molecularMass: 86.18,
        A: 0.65782,
        B: 0.25474,
        C: 507.43,
        D: 0.26474,
        E: 0.0,
      },
      {
        name: 'Nitrogênio',
        molecularMass: 28.013,
        A: 3.625,
        B: 0.3039,
        C: 126.1,
        D: 0.3162,
        E: 0.0,
      },
      {
        name: 'n-Nonano',
        molecularMass: 128.2,
        A: 0.46554,
        B: 0.25556,
        C: 595.65,
        D: 0.28571,
        E: 0.0,
      },
      {
        name: 'n-Octano',
        molecularMass: 114.23,
        A: 0.4745,
        B: 0.2467,
        C: 568.83,
        D: 0.2576,
        E: 0.0,
      },
      {
        name: 'n-Pentano',
        molecularMass: 72.15,
        A: 0.8636,
        B: 0.26923,
        C: 469.65,
        D: 0.28215,
        E: 0.0,
      },
      {
        name: 'Oxigênio',
        molecularMass: 31.999,
        A: 4.356,
        B: 0.3025,
        C: 154.58,
        D: 0.3158,
        E: 0.0,
      },
      {
        name: 'o-Xileno',
        molecularMass: 106.16,
        A: 0.55829,
        B: 0.2342,
        C: 630.39,
        D: 0.24446,
        E: 0.0,
      },
      {
        name: 'Propano',
        molecularMass: 44.1,
        A: 1.3937,
        B: 0.27744,
        C: 369.82,
        D: 0.287,
        E: 0.0,
      },
      {
        name: 'p-Xileno',
        molecularMass: 106.16,
        A: 0.6859,
        B: 0.2601,
        C: 616.26,
        D: 0.2791,
        E: 0.0,
      },
      {
        name: 'Tolueno',
        molecularMass: 92.14,
        A: 0.88257,
        B: 0.27108,
        C: 591.79,
        D: 0.29889,
        E: 0.0,
      },
    ],
  });
  await prisma.viscosityLiquidComponent.createMany({
    data: [
      {
        name: 'Acetona',
        molecularMass: 58.08,
        A: -14.918,
        B: 1023.4,
        C: 0.5961,
        D: 0,
        E: 0,
      },
      {
        name: 'Ácido acético',
        molecularMass: 60.05,
        A: -9.03,
        B: 1212.3,
        C: -0.322,
        D: 0,
        E: 0,
      },
      {
        name: 'Água',
        molecularMass: 18.02,
        A: -52.267,
        B: 3665.2,
        C: 5.786,
        D: 0,
        E: 10,
      },
      {
        name: 'Benzeno',
        molecularMass: 78.11,
        A: 6.764,
        B: 336.4,
        C: -2.687,
        D: 0,
        E: 0,
      },
      {
        name: 'Clorofórmio',
        molecularMass: 119.38,
        A: -14.109,
        B: 1049.2,
        C: 0.5377,
        D: 0,
        E: 0,
      },
      {
        name: 'Dióxido de carbono',
        molecularMass: 44.01,
        A: 18.775,
        B: -402.9,
        C: -4.6854,
        D: 0,
        E: 10,
      },
      {
        name: 'Etano',
        molecularMass: 30.069,
        A: -7.748,
        B: 303.5,
        C: -0.5005,
        D: 0,
        E: 10,
      },
      {
        name: 'Etanol',
        molecularMass: 46.07,
        A: 8.049,
        B: 776,
        C: -3.068,
        D: 0,
        E: 0,
      },
      {
        name: 'Fenol',
        molecularMass: 94.11,
        A: -6.26,
        B: 2083.3,
        C: -1.006,
        D: 0,
        E: 0,
      },
      {
        name: 'Hidrogênio',
        molecularMass: 2.016,
        A: -11.988,
        B: 26.28,
        C: -0.1774,
        D: 0,
        E: 10,
      },
      {
        name: 'Metano',
        molecularMass: 16.043,
        A: -1.722,
        B: 84.5,
        C: -1.7095,
        D: 0,
        E: 10,
      },
      {
        name: 'Metanol',
        molecularMass: 32.04,
        A: -7.288,
        B: 1065.3,
        C: -0.6657,
        D: 0,
        E: 0,
      },
      {
        name: 'Monóxido de carbono',
        molecularMass: 28.01,
        A: -4.9735,
        B: 97.67,
        C: -1.1088,
        D: 0,
        E: 0,
      },
      {
        name: 'm-Xileno',
        molecularMass: 106.16,
        A: -9.647,
        B: 983,
        C: -0.1928,
        D: 0,
        E: 0,
      },
      {
        name: 'Naftaleno',
        molecularMass: 128.175,
        A: -19.308,
        B: 1822.5,
        C: 1.218,
        D: 0,
        E: 0,
      },
      {
        name: 'n-Butano',
        molecularMass: 58.12,
        A: 0.75,
        B: 218.7,
        C: -1.7882,
        D: 0,
        E: 10,
      },
      {
        name: 'n-Decano',
        molecularMass: 142.284,
        A: -16.468,
        B: 1533.5,
        C: 0.7511,
        D: 0,
        E: 0,
      },
      {
        name: 'n-Heptano',
        molecularMass: 100.21,
        A: -24.451,
        B: 1533.1,
        C: 2.0087,
        D: 0,
        E: 0,
      },
      {
        name: 'n-Hexano',
        molecularMass: 86.18,
        A: -19.116,
        B: 1154.3,
        C: 1.2482,
        D: 0,
        E: 0,
      },
      {
        name: 'Nitrogênio',
        molecularMass: 28.013,
        A: -32.165,
        B: 496.9,
        C: 3.9069,
        D: 0,
        E: 10,
      },
      {
        name: 'n-Nonano',
        molecularMass: 128.2,
        A: -21.149,
        B: 0.001658,
        C: 1.454,
        D: 0,
        E: 0,
      },
      {
        name: 'n-Octano',
        molecularMass: 114.23,
        A: -20.463,
        B: 0.001497,
        C: 1.379,
        D: 0,
        E: 0,
      },
      {
        name: 'n-Pentano',
        molecularMass: 72.15,
        A: -21.707,
        B: 1104.4,
        C: 1.6862,
        D: 0,
        E: 0,
      },
      {
        name: 'Oxigênio',
        molecularMass: 31.999,
        A: -17.27,
        B: 287.5,
        C: 1.229,
        D: 0,
        E: 10,
      },
      {
        name: 'o-Xileno',
        molecularMass: 106.16,
        A: -15.678,
        B: 1404,
        C: 0.6641,
        D: 0,
        E: 0,
      },
      {
        name: 'Propano',
        molecularMass: 44.1,
        A: -12.832,
        B: 566.34,
        C: 0.34688,
        D: 0,
        E: 10,
      },
      {
        name: 'p-Xileno',
        molecularMass: 106.16,
        A: -5.775,
        B: 826.2,
        C: -0.7739,
        D: 0,
        E: 0,
      },
      {
        name: 'Tolueno',
        molecularMass: 92.14,
        A: -13.362,
        B: 1183,
        C: 0.333,
        D: 0,
        E: 0,
      },
    ],
  });
  await prisma.specificMassVaporComponent.createMany({
    data: [
      {
        name: 'Acetona',
        molecularMass: 58.08,
        w: 0.307,
        Pc: 47.01,
        Tc: 508.2
    },
    {
        'name': 'Ácido acético',
        molecularMass: 60.05,
        w: 0.67,
        Pc: 57.86,
        Tc: 592
    },
    {
        name: 'Água',
        molecularMass: 18.02,
        w: 0.345,
        Pc: 220.55,
        Tc: 647.1
    },
    {
        name: 'Benzeno',
        molecularMass: 78.11,
        w: 0.21,
        Pc: 48.98,
        Tc: 562.2
    },
    {
        name: 'Clorofórmio',
        molecularMass: 119.38,
        w: 0.222,
        Pc: 54.72,
        Tc: 536.4
    },
    {
        name: 'Dióxido de carbono',
        molecularMass: 44.01,
        w: 0.224,
        Pc: 73.83,
        Tc: 304.2
    },
    {
        name: 'Etano',
        molecularMass: 30.069,
        w: 0.1,
        Pc: 48.72,
        Tc: 305.3
    },
    {
        name: 'Etanol',
        molecularMass: 46.07,
        w: 0.645,
        Pc: 61.48,
        Tc: 513.9
    },
    {
        name: 'Fenol',
        molecularMass: 94.11,
        w: 0.444,
        Pc: 61.3,
        Tc: 694.3
    },
    {
        name: 'Hidrogênio',
        molecularMass: 2.016,
        w: -0.216,
        Pc: 13.13,
        Tc: 33.19
    },
    {
        name: 'Metano',
        molecularMass: 16.043,
        w: 0.012,
        Pc: 45.99,
        Tc: 190.6
    },
    {
        name: 'Metanol',
        molecularMass: 32.04,
        w: 0.564,
        Pc: 80.97,
        Tc: 512.6
    },
    {
      name: 'Monóxido de carbono',
      molecularMass: 28.01,
      w: 0.048,
      Pc: 34.99,
      Tc: 132.9
  },
  {
    name: 'm-Xileno',
    molecularMass: 106.16,
    w: 0.326,
    Pc: 35.36,
    Tc: 617.1
},
{
  name: 'Naftaleno',
  molecularMass: 128.1705,
  w: 0.302,
  Pc: 40.51,
  Tc: 748.4
},
{
  name: 'n-Butano',
  molecularMass: 58.12,
  w: 0.2,
  Pc: 37.96,
  Tc: 425.1
},
{
  name: 'n-Decano',
  molecularMass: 142.284,
  w: 0.492,
  Pc: 21.1,
  Tc: 617.7
},
{
  name: 'n-Heptano',
  molecularMass: 100.21,
  w: 0.35,
  Pc: 27.4,
  Tc: 540.2
},
{
  name: 'n-Hexano',
  molecularMass: 86.18,
  w: 0.301,
  Pc: 30.25,
  Tc: 507.6
},
    {
        name: 'Nitrogênio',
        molecularMass: 28.013,
        w: 0.038,
        Pc: 34,
        Tc: 126.2
    },
    {
      name: 'n-Nonano',
      molecularMass: 128.2,
      w: 0.444,
      Pc: 22.9,
      Tc: 594.6
  },
    {
        name: 'n-Octano',
        molecularMass: 114.23,
        w: 0.4,
        Pc: 24.9,
        Tc: 568.7
    },
    {
      name: 'n-Pentano',
      molecularMass: 72.15,
      w: 0.252,
      Pc: 33.7,
      Tc: 469.7
  },
    {
        name: 'Oxigênio',
        molecularMass: 31.999,
        w: 0.022,
        Pc: 50.43,
        Tc: 154.6
    },
    {
      name: 'o-Xileno',
      molecularMass: 106.16,
      w: 0.31,
      Pc: 37.34,
      Tc: 630.3
  },
    {
        name: 'Propano',
        molecularMass: 44.10,
        w: 0.152,
        Pc: 42.48,
        Tc: 369.8
    },
    {
      name: 'p-Xileno',
      molecularMass: 106.16,
      w: 0.322,
      Pc: 35.11,
      Tc: 616.2
  },
    {
        name: 'Tolueno',
        molecularMass: 92.14,
        w: 0.262,
        Pc: 41.06,
        Tc: 591.8
    }
    ],
  });
  await prisma.vaporComponentViscosity.createMany({
    data: [
      {
        name: 'Acetona',
        molecularMass: 58.08,
        A: 0,
        B: 0.9762,
        C: 23.139,
        D: 0,
        E: 0
    },
    {
        name: 'Ácido acético',
        molecularMass: 60.05,
        A: 0,
        B: 1.1126,
        C: 436,
        D: 0,
        E: 0
    },
    {
        name: 'Água',
        molecularMass: 18.02,
        A: 0,
        B: 0.92758,
        C: 211.6,
        D: -4670,
        E: 0
    },
    {
        name: 'Benzeno',
        molecularMass: 78.11,
        A: 0,
        B: 0.9676,
        C: 7.9,
        D: 0,
        E: 0
    },
    {
        name: 'Clorofórmio',
        molecularMass: 119.38,
        A: 0.00001,
        B: 0.8449,
        C: 56.8,
        D: 0,
        E: 0
    },
    {
        name: 'Dióxido de carbono',
        molecularMass: 44.01,
        A: 0.000002,
        B: 0.46,
        C: 290,
        D: 0,
        E: 0
    },
    {
        name: 'Etano',
        molecularMass: 30.069,
        A: 0.000008,
        B: 0.273,
        C: 981,
        D: -30300,
        E: 0
    },
    {
        name: 'Etanol',
        molecularMass: 46.07,
        A: 0,
        B: 0.8066,
        C: 52.7,
        D: 0,
        E: 0
    },
    {
        name: 'Fenol',
        molecularMass: 94.11,
        A: 0,
        B: 0.7371,
        C: 170.81,
        D: 0,
        E: 0
    },
    {
        name: 'Hidrogênio',
        molecularMass: 2.016,
        A: 0,
        B: 0.708,
        C: -5.87,
        D: 210,
        E: 0
    },
    {
        name: 'Metano',
        molecularMass: 16.043,
        A: 0.000013,
        B: 0.1798,
        C: 718,
        D: -8900,
        E: 0
    },
    {
        name: 'Metanol',
        molecularMass: 32.04,
        A: 0,
        B: 0.69655,
        C: 205,
        D: 0,
        E: 0
    },
    {
        name: 'Monóxino de carbono',
        molecularMass: 28.01,
        A: 0.000001,
        B: 0.5338,
        C: 94.7,
        D: 0,
        E: 0
    },
    {
        name: 'm-Xileno',
        molecularMass: 106.16,
        A: 0.000012,
        B: 0.195,
        C: 1139,
        D: 130000,
        E: 0
    },
    {
        name: 'Naftaleno',
        molecularMass: 128.1705,
        A: 0.000001,
        B: 0.5375,
        C: 592,
        D: 0,
        E: 0
    },
    {
        name: 'n-Butano',
        molecularMass: 58.12,
        A: 0.00001,
        B: 0.2077,
        C: 1005.5,
        D: 8100,
        E: 0
    },
    {
        name: 'n-Decano',
        molecularMass: 142.284,
        A: 0,
        B: 0.9487,
        C: 71,
        D: 0,
        E: 0
    },
    {
        name: 'n-Heptano',
        molecularMass: 100.21,
        A: 0.000001,
        B: 0.4665,
        C: 502,
        D: 0,
        E: 0
    },
    {
        name: 'n-Hexano',
        molecularMass: 86.18,
        A: 0,
        B: 0.3537,
        C: 718.3,
        D: 0,
        E: 0
    },
    {
        name: 'Nitrogênio',
        molecularMass: 28.013,
        A: 0.000001,
        B: 0.58823,
        C: 67.75,
        D: 0,
        E: 0
    },
    {
        name: 'n-Nonano',
        molecularMass: 128.20,
        A: 0,
        B: 0.9853,
        C: 52.5,
        D: 0,
        E: 0
    },
    {
        name: 'n-Octano',
        molecularMass: 114.23,
        A: 0,
        B: 1.076,
        C: -0.365,
        D: 0,
        E: 0
    },
    {
        name: 'n-Pentano',
        molecularMass: 72.15,
        A: 0.000001,
        B: 0.5236,
        C: 273.67,
        D: 0,
        E: 0
    },
    {
        name: 'Oxigênio',
        molecularMass: 31.999,
        A: 0.000001,
        B: 0.60478,
        C: 70.3,
        D: 0,
        E: 0
    },
    {
        name: 'o-Xileno',
        molecularMass: 106.16,
        A: 0.0092,
        B: -0.584,
        C: 3130,
        D: 3980000,
        E: 0
    },
    {
        name: 'Propano',
        molecularMass: 44.10,
        A: 0.000002,
        B: 0.3824,
        C: 405,
        D: 0,
        E: 0
    },
    {
        name: 'p-Xileno',
        molecularMass: 106.16,
        A: 0.000001,
        B: 0.4737,
        C: 862,
        D: 0,
        E: 0
    },
    {
        name: 'Tolueno',
        molecularMass: 92.14,
        A: 0,
        B: 0.9648,
        C: 0,
        D: 0,
        E: 0
    }
    
    ],
  });
  console.log('Seed concluído com sucesso!');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });