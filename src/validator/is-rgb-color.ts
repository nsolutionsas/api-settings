import { IsRgbColor as isRgbColor } from 'class-validator';
export const IsRgbColor = () =>
  isRgbColor(true, {
    message: ({ property }) => `${property} debe ser un color RGB válido`,
  });
