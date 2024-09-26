const sumAll = function(a,b) {
    let sum=0,i;
    if(typeof a=='number' && typeof b=='number' && a%1==0 && b%1==0 && a>=0 && b>=0){
    if(a<b){
     for(i=a;i<=b;i++){
        sum=sum+i;
     }}
     else{
        for(i=b;i<=a;i++){
            sum=sum+i;
     }}
     return sum;}
     else{
      return "ERROR"
     }
};

// Do not edit below this line
module.exports = sumAll;
