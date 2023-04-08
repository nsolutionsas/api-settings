import { IsNumberString as validator } from 'class-validator';

export const IsNumberString = () =>
  validator(
    {},
    {
      message: ({ property }) => `${property} debe ser un número válido`,
    },
  );
