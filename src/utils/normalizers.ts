export const normalizeData = (data: any) => JSON.stringify(data, null, 4);

export const numberValidator = (v: string, options?: { low: number, high: number }) => {
  const numberValue = +v;
  if (isNaN(numberValue)) {
    return false;
  }
  if (options && (numberValue < options.low || numberValue > options.high)) {
    return false;
  }
  return true;
};