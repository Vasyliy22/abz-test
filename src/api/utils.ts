export const extendApiEndPoint = (queries: Record<string, string> = {}) => {
  const keys = Object.keys(queries);

    if (!keys.length) {
      return '';
    }

    return keys.reduce((acc, item) => acc += `&${item}=${queries[item]}`, '');
};
