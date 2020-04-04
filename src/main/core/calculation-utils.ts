export const formatNumber = (n: number, precise: number = 2): number => {
  return parseFloat(n.toFixed(precise));
};
