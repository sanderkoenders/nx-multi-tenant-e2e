export const joinedDescribe = (testName: string, ...fns: (() => void)[]) =>
  describe(testName, () => fns.forEach((fn) => fn()));
