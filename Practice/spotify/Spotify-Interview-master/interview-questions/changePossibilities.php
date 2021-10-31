#!/usr/bin/php
<?php
/*
Solution taken from
https://www.geeksforgeeks.org/dynamic-programming-set-7-coin-change/


Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 
 */
$S = readline("Enter comma sperated values:");
$arr= explode(',',$S);
$n = readline("Enter n:");
$res = changePossibilities($arr,count($arr),$n);
echo "$res\n";
function changePossibilities($S,$m,$n){
	$memo = array_fill(0,$n+1,0);

	$memo[0] = 1;

	for($i =0; $i < $m;$i++){
		for($j =$S[$i]; $j<=$n; $j++) {
			$memo[$j] += $memo[$j-$S[$i]];
		}
	}
	return $memo[$n];
}
?>
