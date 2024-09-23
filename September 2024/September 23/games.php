<?php

function howManyGames($p, $d, $m, $s){
    $games = 0;
    $funds = $s;
    $price = $p;

    while( $funds > 0){
        $funds -= $price;
        if($price -$d < $m){
            $price = $m;
        }else{
            $price -= $d;
        }
        if($funds < 0){
            break;
        }else{
            $games++;
        }
    }
    return $games;
}

echo howManyGames(20, 3, 6, 85);