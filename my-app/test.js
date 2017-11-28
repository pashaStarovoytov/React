function GetSum( a,b )
{
   if(a === b){
     return a;
   } else {
      var sum=0;
      var start = a < b ? a : b;
      var end = a > b ? a : b;
      for(var i=start; i<=end; i++ ){
         sum += i;
       }
       return sum;
     }  
}

console.log(GetSum(0, -1));