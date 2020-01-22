const data = require('./data.js') ;

const testcase1 = [1, 0, 0, 0, 99]; // 2,0,0,0,99
const testcase2 = [2, 3, 0, 3, 99]; // 2,3,0,6,99
const testcase3 = [2, 4, 4, 5, 99, 0]; // 2,4,4,5,99,9801
const testcase4 = [1, 1, 1, 4, 99, 5, 6, 0, 99]; // 30,1,1,4,2,5,6,0,99
realData = data.intArr

const analyze = (ints) => {
  let ret = ints;
  for (let i=0; i < ints.length; i += 4) {

    if (ret[i] === 99) {
      break
    }

    // console.log("i:", i)
    // console.log("input val", ret[i])
    // console.log("array:", ret)
    ret = intComputer(ret[i], i, ret)
  }
  return ret
}


const intComputer = (value, index, array) => {

  switch (value) {

    case 1:
      // addition
      array[array[index + 3]] = array[array[index + 1]] + array[array[index + 2]]
      break;
    case 2:
      // multiplication
      array[array[index + 3]] = array[array[index + 1]] * array[array[index + 2]]
      break;
    default:
      throw ("UNKNOWN OP CODE")
  }
  return array
}




console.log(analyze(realData));
