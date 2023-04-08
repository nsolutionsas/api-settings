import { IsHexColor as validator } from 'class-validator';
export const IsHexColor = () =>
  validator({
    message: ({ property }) =>
      `${property} debe ser un color hexadecimal válido`,
  });
