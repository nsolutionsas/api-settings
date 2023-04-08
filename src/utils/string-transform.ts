export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const camelCase = (str: string) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

export const pascalCase = (str: string) => capitalize(camelCase(str));
