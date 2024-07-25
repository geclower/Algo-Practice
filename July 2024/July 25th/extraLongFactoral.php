<?php

function extraLongFactoral($n){
    $answer = $n;
    $x = $n -1;

    while($x > 0){
        $answer *= $x;
        $x--;
    }
    echo strval($answer);
}

extraLongFactoral(45);