masses = [
  139195,
  139828,
  68261,
  122523,
  122363,
  92345,
  57517,
  96771,
  109737,
  106466,
  79011,
  131515,
  77564,
  128967,
  76455,
  140143,
  94188,
  102483,
  116410,
  102343,
  75009,
  132926,
  124193,
  141396,
  94715,
  144192,
  61123,
  112401,
  139101,
  99152,
  124424,
  95233,
  92024,
  145901,
  101966,
  113963,
  79648,
  76216,
  140625,
  72982,
  89179,
  123060,
  133118,
  96191,
  55839,
  141615,
  107191,
  130028,
  65641,
  106080,
  122329,
  63873,
  56237,
  55959,
  71941,
  86453,
  50127,
  61463,
  128084,
  127326,
  118094,
  69727,
  96157,
  85522,
  122926,
  90449,
  108978,
  69085,
  119108,
  81331,
  143962,
  119929,
  100978,
  77036,
  99555,
  77342,
  75274,
  148490,
  94110,
  104057,
  142323,
  87000,
  123416,
  113491,
  69569,
  136231,
  124140,
  62041,
  130474,
  77480,
  76624,
  111762,
  117950,
  144316,
  149407,
  96042,
  63783,
  62694,
  142257,
  92563
]


// find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
const fuelCalc = (sum, mass) => {

  return (sum + parseInt(mass/3) - 2)
}

masses.reduce(fuelCalc, 0)