#!/usr/bin/php
<?php 
/*  Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg". */
$S = readline("Enter S: ");
$T = readline("Enter T: ");

$new_string = sortByStrings($S,$T);
echo "$new_string\n";

function sortByStrings($S,$T) {
	$S= str_split($S);
	$cache = array_fill(0,26,0);
	foreach ($S as $s_letter) {
		$cache[ord(strtoupper($s_letter)) - ord('A')] += 1;
	} 
	$new_string = '';
	$T = str_split($T);
	foreach ($T as $t_letter) {
		while($cache[ord(strtoupper($t_letter)) - ord('A')] > 0) {
			$new_string .= $t_letter;
			$cache[ord(strtoupper($t_letter)) - ord('A')] -= 1;
		}
	}
	for($i = 0; $i < 26; $i++) {
		while($cache[$i] > 0) {
			$new_string .= chr($i+'96');
			$cache[$i] -= 1;
		}
	}
	return $new_string;
}

?>
