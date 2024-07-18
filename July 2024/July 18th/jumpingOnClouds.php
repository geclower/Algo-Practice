<?php

function jumpingOnClouds($cloudArr, $jump){
    $e = 99;

    if($cloudArr[0]===1){
        $e -= 2;
    }

    for($i = $jump; $i !=0; $i += $jump){
        if($i >= count($cloudArr)){
            $i -= count($cloudArr);
        }
        if($i===0){
            break;
        }
        if($cloudArr[$i]===1){
            $e-=2;
        }
        $e--;
    }

    return $e;
}

echo jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);