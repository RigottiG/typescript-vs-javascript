function somar(números: Array<number> = []): number {
  return números.reduce((soma, número) => soma + número, 0);
}

function multiplicar(fatores: Array<number> = []): number {
  return fatores.reduce((produto, fator) => produto * fator, 1);
}

function potenciar(base: number, expoente: number) {
  return Math.pow(base, expoente);
}

export default {
  somar,
  multiplicar,
  potenciar
};