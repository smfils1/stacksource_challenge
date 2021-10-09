let ranges = (sortedArray) => {
  let min = null;
  let max = null;
  let prev = null;
  let i = 0;
  result = [];
  sortedArray = Array.from(new Set(sortedArray));
  while (i < sortedArray.length) {
    let item = sortedArray[i];
    if (prev == null) {
      min = max = prev = item;
      i++;
    } else if (prev + 1 == item) {
      max = item;
      prev = item;
      i++;
    } else {
      result.push([min, max]);
      min = max = prev = item;
      i++;
    }
  }
  result.push([min, max]);

  return result;
};

let toRangeString = (ranges) => {
  let string = "";
  return ranges.reduce((prev, curr, index) => {
    if (curr[0] == curr[1]) prev += curr[0];
    else prev += `${curr[0]}-${curr[1]}`;
    if (index < ranges.length - 1) prev += ", ";
    return prev;
  }, "");
};
module.exports = { ranges, toRangeString };
