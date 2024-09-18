<?php

function minimumDistance($a){
    $answer = count($a);
    $temp = 0;

    for($i = 0; $i < count($a); $i++){
        for($j = $i+1; $j <count($a); $j++){
            
            if($a[$i]===$a[$j]){
                $temp = $j-$i;
                if($temp < $answer){
                    $answer = $temp;
                    $temp = 0;
                }
            }
        }
    }

    if($answer === count($a)){
        return -1;
    }else{
        return $answer;
    }

}

echo minimumDistance([7, 1, 3, 4, 1, 7]);