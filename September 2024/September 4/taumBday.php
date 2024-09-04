<?php

function taumBday($b, $w, $bc, $wc, $z){
    $blackCost = 0;
    $whiteCost = 0;

    if($wc+$z<$bc){
        $blackCost = ($wc + $z)*$b;
    }else{
        $blackCost = $bc * $b;
    }

    if($bc+$z < $wc){
        $whiteCost = ($bc + $z) * $w;
    }else{
        $whiteCost = $wc * $w;
    }

    return $blackCost + $whiteCost;
}