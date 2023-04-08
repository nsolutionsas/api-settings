export const enumToArray = (enumObject: any) =>
  Object.keys(enumObject).map((key) => enumObject[key]);
