<?php

function beautifulTriplets($d, $arr){
    $answer = 0;

    for($i = 0; $i < count($arr); $i++){
        for($j = $i+1; $j < count($arr); $j++){
            if ($arr[$j]-$arr[$i]=== $d){
                for($k = $j+1; $k < count($arr); $k++){
                    if($arr[$k]-$arr[$j]===$d){
                        $answer++;
                    }
                }
            }
        }
    }

    return $answer;
}

echo beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);