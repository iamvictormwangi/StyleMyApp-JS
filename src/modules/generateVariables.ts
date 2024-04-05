export const generateVariables = (variable) => {
  const x = variable.replace(":", "\\:");
  return x.replace("\\", "")
};
