<?php

function equilizeArray($arr){
    $total = 1;
    $largestTotal = 1;
    sort($arr);

    for( $i = 0; $i < (count($arr)-1); $i++){
        if($arr[$i]==$arr[$i+1]){
            $total++;
        }else{
            $total = 1;
        }
        if($total > $largestTotal){
            $largestTotal = $total;
        }
    }

    $answer = count($arr) - $largestTotal;
    return $answer;
}

echo equilizeArray([3, 3, 2, 1, 3]);