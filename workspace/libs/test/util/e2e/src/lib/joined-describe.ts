export type FunctionWithoutArguments = () => void;

export const joinedDescribe = (testName: string, ...suites: FunctionWithoutArguments[]) =>
  describe(testName, () => suites.forEach((fn, index) => describe(`Suite #${index + 1}`, fn)));
