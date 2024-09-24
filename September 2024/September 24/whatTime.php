<?php

function timeInWords($h, $m){
    $mins = [
        "o' clock",
        "one minute",
        "two minutes",
        "three minutes",
        "four minutes",
        "five minutes",
        "six minutes",
        "seven minutes",
        "eight minutes",
        "nine minutes",
        "ten minutes",
        "eleven minutes",
        "twelve minutes",
        "thirteen minutes",
        "fourteen minutes",
        "quarter",
        "sixteen minutes",
        "seventeen minutes",
        "eighteen minutes",
        "ninteen minutes",
        "twenty minutes",
        "twenty one minutes",
        "twenty two minutes",
        "twenty three minutes",
        "twenty four minutes",
        "twenty five minutes",
        "twenty six minutes",
        "twenty seven minutes",
        "twenty eight minutes",
        "twenty nine minutes",
        "half",
      ];
      $hrs = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
      ];

    $answer = "";

    if($m === 0) {
        $answer = $hrs[$h] . " " . $mins[$m];
    }
    if($m <= 30 && $m > 0){
        $answer = $mins[$m] . " past " . $hrs[$h];
    }
    if($m > 30){
        $answer = $mins[60-$m] . " to " . $hrs[$h+1];
    }
    return $answer;
}

echo timeInWords(5,47);