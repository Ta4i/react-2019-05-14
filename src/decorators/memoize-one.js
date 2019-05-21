export default function memoizeOne(f) {
  let prevResult = null;
  let prevArgs = [];
  return (...args) => {
    let isArgsNoChange = false;
    if (prevResult && prevArgs && prevArgs.length === args.length) {
      isArgsNoChange = true;
      for (let i = 0; i < args.length; i++) {
        if (args[i] !== prevArgs[i]) {
          isArgsNoChange = false;
          break;
        }
      }
    }
    let result = isArgsNoChange ? prevResult : f.call(this, ...args);
    prevArgs = args;
    prevResult = result;
    return result;
  };
}
