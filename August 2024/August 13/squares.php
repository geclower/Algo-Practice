<?php

function squares($a, $b){
    $start = ceil(sqrt($a));
    $end = floor(sqrt($b));
    return($end - $start + 1);
}