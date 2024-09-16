<?php

function isKaprekar($num){
    if($num === 1){
        return true;
    }

    $sqNum = strval($num*$num);
    $len = floor(strlen($sqNum)/2);
    $num1 = substr($sqNum, 0, $len);
    $num2 = substr($sqNum, $len);
    
    if(intval($num1) + intval($num2)===$num){
        return true;
    }else{
        return false;
    }

}

function kaprekarNumbers($p, $q){
    $answer = "";

    while($p <= $q){
        if(isKaprekar($p)){
            $answer = $answer . $p . " ";
        }
        $p++;
    }
    echo $answer;
    if(strlen($answer) > 0){
        echo $answer;
    }else{
        echo "INVALID RANGE";
    }
}

// echo isKaprekar(9);
echo kaprekarNumbers(1, 100);