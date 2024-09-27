<?php

function chocolateFantasy($n, $c, $m){
    $bars = floor($n/$c);
    $wrappers = $bars;

    while($wrappers >= $m){
        $add = floor($wrappers / $m);
        $bars += $add;
        $wrappers -= $add * $m;
        $wrappers += $add;
    }
    return $bars;
}

echo chocolateFantasy(15, 3, 2);