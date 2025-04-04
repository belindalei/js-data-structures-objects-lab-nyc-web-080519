// Write your solution in this file!
const driver = {
  firstName: "belinda",
  lastName: "lei"
};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver };
  newDriver[key] = value;

  return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value; 
  return driver;
};


function deleteFromDriverByKey(driver, key){
  const newDriver = Object.assign({}, driver);
  delete newDriver[key]
  return newDriver
}; 


function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}