// Instructions here: https://adventofcode.com/2019/day/2#part2

const data = require('./data.js') ;

// need to permute the data with noun and verb
const findProgram = (output, arr) => {
  cleanArr = arr.slice();
  workingArr = arr.slice();

  for (let n=0; n < 100; n++) {
    workingArr[1] = n;
    for (let v=0; v < 100; v++) {
      workingArr[2] = v;

      res = analyze(workingArr);

      // check if it gives the right result
      // console.log(`output for ${n} and ${v}`, res[0])
      if (res[0] == output) {
        // if yes - submit
        console.log("noun:", n);
        console.log("verb:", v);
        return
      }

      // if not reset original array
      workingArr = cleanArr.slice();
      workingArr[1] = n;
    }
  }
  // if no more - say it's not possible
  console.log("no output matches")
}




// helper functions todo: move these to their own seperate files (import them)
const analyze = (ints) => {
  let ret = ints;
  for (let i=0; i < ints.length; i += 4) {

    if (ret[i] === 99) {
      break
    }

    ret = intComputer(ret[i], i, ret)
    if (ret == -1) {
       break
    }
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
      console.log("Error: unkown opcode. Aborting calc.")
      return -1
  }
  return array
}


findProgram(19690720, data.intArr)
