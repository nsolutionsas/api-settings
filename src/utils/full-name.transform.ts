export const getFullName = (
  nombres: string,
  apellidos: string,
): { nombreCompleto: string; alias: string } => {
  return {
    nombreCompleto: `${nombres} ${apellidos}`.trim(),
    alias: `${nombres.split(' ').at(0) || ''} ${
      apellidos.split(' ')[0] || ''
    }`.trim(),
  };
};
