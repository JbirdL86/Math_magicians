const updateObject = (look, input) => {
  const lookArray = Object.keys(look);
  console.log(look);
  const inputArray = Object.keys(input);
  console.log(input);
  const inputObj = {};
  for (let i = 0; i < lookArray.length; i += 1) {
    inputObj[lookArray[i]] = look[lookArray[i]];
  }
  for (let i = 0; i < inputArray.length; i += 1) {
    inputObj[inputArray[i]] = input[inputArray[i]];
  }
  console.log(inputObj);
  return inputObj;
};

export default updateObject;
