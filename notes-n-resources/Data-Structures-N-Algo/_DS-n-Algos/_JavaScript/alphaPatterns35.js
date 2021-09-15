/* 35. Write a JS program to print the below patterns

    1.  	AABCDEA
	2.  	B AB ABCD BA
	3.      CC  ABC  ABC  CBA
	4.      DDD ABCD AB DCBA
	5.      EEEEABCDEA  EDCBA



function alphaPattern1(){
    result="";
    for(let i = 65; i<=69; i++){
        let str = String.fromCharCode(i);
        result += str;  
    }

    let result1 = (result.split(""));
    result1.unshift("A");
    result1.push("A");

    console.log(result1.join("").toString());


}

alphaPattern1();


function alphaPattern2(){
    
    let str1,str2,str3,str4,result2="", result3="",result4="";
    
    let num1 = 66;
    str1 = String.fromCharCode(num1);
    
    for(let num2 = 65; num2 <=66 ; num2++){
        str2 = String.fromCharCode(num2);
        result2 += str2;
    }

    for(let num3 = 65; num3 <=68 ; num3++){
        str3 = String.fromCharCode(num3);
        result3 += str3; 
    }

    for(let num4 = 66; num4 >=65 ; num4--){
        str4 = String.fromCharCode(num4);
        result4 += str4;
    }

    console.log(str1+" "+result2+" "+result3+" "+result4);
}

alphaPattern2();


function alphaPattern3(){
    let str1, str2,str3, result2="", result3="";

    let num1 = 67;
    str1 = String.fromCharCode(num1);

    for(let num2 = 65; num2 <=67 ; num2++){
        str2 = String.fromCharCode(num2);
        result2 += str2; 
    }
    
    for(let num3 = 67; num3 >=65 ; num3--){
        str3 = String.fromCharCode(num3);
        result3 += str3; 
    }

    console.log(`${str1}${str1}  ${result2}  ${result2}  ${result3}`)
}

alphaPattern3();


function alphaPattern4(){
    let str1,str2,str3,str4, result2="", result3="", result4="";

    let num1 = 68;
    str1 = String.fromCharCode(num1);

    for(let num2 = 65; num2 <=68 ; num2++){
        str2 = String.fromCharCode(num2);
        result2 += str2; 
    }

    for(let num3 = 65; num3 <=66 ; num3++){
        str3 = String.fromCharCode(num3);
        result3 += str3;
    }

    for(let num4 = 68; num4 >=65 ; num4--){
        str4 = String.fromCharCode(num4);
        result4 += str4; 
    }

    console.log(`${str1}${str1}${str1} ${result2} ${result3} ${result4}`);
}

alphaPattern4();
*/

function alphaPattern5() {
  let str1,
    str2,
    str3,
    str4,
    result3 = '',
    result4 = '';

  let num1 = 65;
  str1 = String.fromCharCode(num1);

  let num2 = 69;
  str2 = String.fromCharCode(num2);

  for (let num3 = 65; num3 <= 69; num3++) {
    str3 = String.fromCharCode(num3);
    result3 += str3;
  }

  for (let num4 = 69; num4 >= 65; num4--) {
    str4 = String.fromCharCode(num4);
    result4 += str4;
  }

  console.log(`${str2}${str2}${str2}${str2}${result3}${str1}  ${result4}`);
}

alphaPattern5();
