var languagesArrayCreation = function () {
  var tableau = ["Html","CSS","Java","PHP"];
  return tableau;
}

var numbersArrayCreation = function () {
  var tableau = [0,1,2,3,4,5];
  return tableau;
}

var ElementReplacement = function (languages) {
  languages[2]="Javascript";
  return languages;
}

var AddElementToLanguagesArray = function (languages) {
  languages[languages.length] = "Ruby";
  languages[languages.length] = "Python";
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
numbers.unshift(-1);
numbers.unshift(-2);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {

  return languages.splice(1,languages.length-1);
}

var deleteArrayLastElement = function (languages) {

  return languages.splice(0,languages.length-1);
}

var stringToArray = function (socialMediaInString) {

  return socialMediaInString.split(',');
}

var arrayToString = function (languages) {

  return ""+languages;
}

var arraySort = function (socialMedia) {
  return socialMedia.sort();
}

var arrayInvert = function (languages){
  var i=0;
  var aInvert = [];
  for(i;i<languages.length;i++){
    aInvert[i]=languages[languages.length-i-1];
  }
  return aInvert;
}
