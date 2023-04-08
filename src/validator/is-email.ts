import { IsEmail as validator } from 'class-validator';
export const IsEmail = (options: any = {}) =>
  validator(options, {
    message: ({ property }) =>
      `${property} debe ser un correo electrónico válido`,
  });
