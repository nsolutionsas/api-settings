import { IsNumber as validator } from 'class-validator';

export const IsNumber = (options = {}) =>
  validator(options, {
    message: ({ property }) => `${property} debe ser un número válido`,
  });
