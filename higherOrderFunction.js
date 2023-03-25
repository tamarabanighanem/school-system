// Q5 
//by using for loop
function ArrayPowerTow(arr){
    for (let i=0; i<arr.length; i++) {
        
        arr[i]=Math.pow(2, arr[i]);}  
    return arr;}
    console.log(ArrayPowerTow([1,2,3,4,5,6,7,8,9,10]));
    
    //by using forEach method 
   
    let NewArray = [];
    function ArrayPowerTow1(arr){
     arr.forEach((value)=>{NewArray.push( Math.pow(2, value))});
    return NewArray }
    console.log(ArrayPowerTow1([1,2,3,4,5,6,7,8,9,10]));

    //by using map method
    
    
    function ArrayPowerTow2(arr){
        return arr.map((value)=>{return Math.pow(2, value)});}
    console.log(ArrayPowerTow2([1,2,3,4,5,6,7,8,9,10]));
    


    //Q6 
    
    function oddEvenString(arr){
    return (arr.map((value)=>{
        if(typeof value ==="string") return "N/A";
        else if (typeof value==="number"&& value % 2==0) return "even";
        else return "odd";
    }));}
    console.log(oddEvenString([1,2,3,4,5,"wesam",6,"saddam"]));

    
    //Q7  

    function fizzbuzz(arr){
        return (arr.map((value)=>{
            if(value%3==0&&value%5==0) return "fizzbuzz";
            else if(value%3==0) return "fizz";
            else if(value%5==0) return "buzz";
            else return value;

        }));
    }
    console.log(fizzbuzz([9,3,7,5,15,20]));
    
    
