export const transformRatioToPercentage = (ratio: number) => {
  return Number((Math.round(ratio * 100) / 100).toFixed(2)) * 100;
};
