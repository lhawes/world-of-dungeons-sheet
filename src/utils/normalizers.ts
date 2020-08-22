export const normalizeData = (data: any) => JSON.stringify(data, null, 4);

export const numberValidator = (v: string) => {
  return !isNaN(+v);
};