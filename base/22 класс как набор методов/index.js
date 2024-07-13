class ArrHelper {
  getSum(arr) {
    let res = 0;
    for (let num of arr) {
      res += num;
    }
    return res;
  }

  getAvg(arr) {
    if (arr.length > 0) {
      let sum = this.getSum(arr);
      return sum / arr.length;
    } else {
      return 0;
    }
  }
}

const p1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrHelper = new ArrHelper();
let sum = arrHelper.getSum(p1);

console.log(sum);
console.log(arrHelper.getAvg(p1));
