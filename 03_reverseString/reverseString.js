const reverseString = function(a) {
    n=a.length;word='';
    for(i=n-1;i>=0;i--){
        word= word+a.charAt(i);
    }
    return word;
};

// Do not edit below this line
module.exports = reverseString;
