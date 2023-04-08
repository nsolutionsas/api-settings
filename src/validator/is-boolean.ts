import { IsBoolean as validate } from 'class-validator';

export const IsBoolean = () =>
  validate({
    message: ({ property }) => `${property} debe ser un booleano`,
  });
