<?php

function jumpingOnClouds($c){
    $answer = 0;
    $i = 0;
    while($i < count($c)-1){
        if($c[$i+2]==0){
            $answer++;
            $i+=2;
        }else{
            $answer++;
            $i++;
        }
    }
    return $answer;
}

echo(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));