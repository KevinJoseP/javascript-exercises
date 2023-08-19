const reverseString = function(str) {
    let arrStr = str.split("");
    let revStr = arrStr.reverse();
    let joinStr = revStr.join("");
    return joinStr;

};

// Do not edit below this line
module.exports = reverseString;
