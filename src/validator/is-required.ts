import { IsNotEmpty } from 'class-validator';

export const IsRequired = () =>
  IsNotEmpty({
    message: ({ property }) => `${property} es requerido`,
  });
