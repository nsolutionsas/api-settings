import { IsArray as validator } from 'class-validator';
export const IsArray = () =>
  validator({
    message: ({ property }) => `${property} debe ser un arreglo`,
  });
