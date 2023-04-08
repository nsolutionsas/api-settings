import { IsEnum as IsEnumValidator } from 'class-validator';
import { enumToArray } from '../utils/enum-to-array';
export const IsEnum = (enumObject: any) => {
  return IsEnumValidator(enumObject, {
    message: (args) => {
      const enumValues = enumToArray(enumObject);
      return `${
        args.property || 'El campo'
      } debe ser uno de los siguientes valores: ${enumValues.join(', ')}`;
    },
  });
};
