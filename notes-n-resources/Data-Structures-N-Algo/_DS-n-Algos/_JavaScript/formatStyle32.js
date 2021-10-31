/* Write a javaScritt Program to print following formats 

1       1           *       54321
12      22          **      5432
123     333         ***     543
1234    4444        ****    54
12345   55555       *****   5

55555   54321   1       1       1
4444    4321    21      21      2 3
333     321     321     321     4 5 6
22      21      4321    4321    7 8 9 10
1       1       54321   54321   11 12 13 14 15



function pattern1(){
    
    let result = "";
    for ( let i =1 ;i < 6; i++){
        
        for ( let j = 1; j<i+1; j++){  
            result += j+" ";
        }
        console.log(result);
        result=""; 
    } 
}



function pattern2(){
    
    let result2 = "";
    for ( let i =1 ;i < 6; i++){
        for ( let j = 1; j<i+1; j++){  
            result2 += i+" ";
        }
        
        console.log(result2);
        result2="";
       
    } 
}



function pattern3(){
    result3="";
    for(let i=1; i<6; i++){
        for(let j=1; j<=i; j++){
            result3 += "*";
        }
        console.log(result3);
        result3="";
    }
}

pattern3();


function pattern4(){
    
    let result = "";
    for ( let i =5 ;i > 1; i--){
        
        for ( let j = 1; j<i+1; j++){  
            result += i+" ";
        }
        console.log(result);
        result=""; 
    } 
}




 function pattern5(){
    
    let result = "";
    for ( let i =5 ;i >= 1; i--){
        
        for ( let j = 1; j<i+1; j++){  
            result += i+" ";
        }
        
        console.log(result);
        result=""; 
    } 
}

pattern5();

function pattern6(){
    
    let result = "";
    for ( let i=5; i >=1; i--){
        for ( let j=i; j >= 1; j--){
            result += j+" ";
            
        }
        
        console.log(result);
        result="";
    }
}

pattern6();
*/
