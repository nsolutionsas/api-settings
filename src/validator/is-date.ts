import { IsDateString } from "class-validator";

export const IsDate = (options = {}) =>
  IsDateString(options, {
    message: ({ property }) =>
      `${property.toUpperCase()} debe ser una fecha válida`,
  });
