export const extractKeyFromUrl = (url: string) => {
  return new URL(url).pathname.substring(1);
};
