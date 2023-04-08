import { IsString as validator } from 'class-validator';
export const IsString = () =>
  validator({
    message: ({ property }) => `${property} debe ser un texto`,
  });
