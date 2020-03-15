export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[testing='${attr}']`);
  return wrapper;
};
