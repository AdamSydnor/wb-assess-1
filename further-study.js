// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const newArr = [];
    for (const arrItem of array1) {
        for (const arrItem2 of array2) {
            if (arrItem === arrItem2) {
              newArr.push(arrItem2);
            }
        }
    }
    return newArr.filter((value, index) => newArr.indexOf(value) === index)
  }

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const newArr = []
      for (let i = 0; i <= 100; i++) {
        if ((i % a) === 0 && i > 0) {
          newArr.push(i)
        }
        if ((i % b) === 0 && i > 0) {
          newArr.push(i)
        }
        if ((i % c) === 0 && i > 0) {
          newArr.push(i)
        }
      }
      return newArr
  }

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
  const newArr = [];
  let num = 1;
  for (let i = 0; i < string.length; i++) {
    let j = i + 1;
    if (string[i] !== string[j]) {
      if (num !== 1) {
        newArr.push(num);
      }
      newArr.push(string[i]);
      num = 1;
    } else {
      num++;
    }
  }
  const finString = newArr.join('');
  return finString;
}

export { commonStrings, compressString, divisibleByEither };
