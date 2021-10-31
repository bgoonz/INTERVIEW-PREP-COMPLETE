#!/usr/bin/php
<?php
/*
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
 */

$S = readline("Enter S: ");
decodeString($S,strlen($S),0);
echo "\n";

function decodeString($S,$n,$i) {
	if($i>=$n) return $i;
	else if($S[$i] == ']') return $i;
	if(ctype_alpha($S[$i])){
		echo "$S[$i]";
		$i = decodeString($S,$n,$i+1);
		return $i;
	}
	if(is_numeric($S[$i])) {
		$repeatCount = 0;
		while($S[$i] != '[' && $i<$n){
			$repeatCount = intval($S[$i]);
			$i++;
		}
		$leftOver = $i;
		for($j = 0; $j < $repeatCount; $j++){
			$leftOver = decodeString($S,$n,$i+1);
		}
		return decodeString($S,$n,$leftOver+1);
	}
}
?>
