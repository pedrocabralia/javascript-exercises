const sumAll = function(number1,number2) {

    sum = 0;
    if(typeof number1 !== 'number' || typeof number2 !== 'number' ){

        return "ERROR";

    }
    else  if(number1 < 0 || number2 < 0){

        return "ERROR";
    }

    else  if(!Number.isInteger(number1) || !Number.isInteger(number2)){

        return "ERROR";
    }

    else if(number1 > number2)
    {   
        const temp = number1;
        number1 = number2;
        number2 = temp;


        for(i = number1;i<=number2;i++){

            sum +=i; 

        }
        return sum;


    }
    
      
    else{
        for(i = number1;i<=number2;i++){

            sum +=i; 

        }
        return sum;
    }
    
    

};

// Do not edit below this line
module.exports = sumAll;
