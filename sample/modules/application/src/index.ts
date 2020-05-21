import { Calc } from 'typescript-module-calc';

const PI = 3.14;

enum TipoFiguraGeométrica {
  CÍRCULO,
  TRIÂNGULO,
  RETÂNGULO,
}

interface FiguraGeométrica {
  area: number;
  perímetro: number;
  tipo: TipoFiguraGeométrica;
}

function gerarCírculo(raio: number): FiguraGeométrica {
  return {
    area: 2 * PI * raio,
    perímetro: PI * Math.pow(raio, 2),
    tipo: TipoFiguraGeométrica.CÍRCULO
  }
}

const círculo: FiguraGeométrica = gerarCírculo(30);

console.log('círculo', círculo);