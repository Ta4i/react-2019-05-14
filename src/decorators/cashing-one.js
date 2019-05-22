function cashingOne(f) {
  let cashOne = {};
  return (key, data) => {
    let isDataNoChange = false;
    if (
      cashOne[key] &&
      cashOne[key].result &&
      cashOne[key].data.length === data.length
    ) {
      isDataNoChange = true;
      for (let i = 0; i < data.length; i++) {
        if (data[i] !== cashOne[key].data[i]) {
          isDataNoChange = false;
          console.warn(data[i]);
          break;
        }
      }
    }

    let result = isDataNoChange ? cashOne[key].result : f.call(this, data);
    cashOne[key] = {
      result,
      data
    };

    console.log(isDataNoChange);
    console.dir(cashOne);
    return result;
  };
}

let ratingCalculate = cashingOne(ratings => {
  let averageRate = ratings.length
    ? ratings.reduce((average, current) => {
        return average + current / ratings.length;
      }, 0)
    : 0;
  const value =
    (averageRate ^ 0) === averageRate ? averageRate : (averageRate ^ 0) + 0.5;
  averageRate =
    (averageRate ^ 0) === averageRate ? averageRate : averageRate.toFixed(1);
  console.warn("new calculate");
  return { averageRate, value };
});

export { ratingCalculate };
