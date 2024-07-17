<?php

function permutationEquation($p){
    $result = [];
    $x = 1;
    $temp = 0;

    while($x<=count($p)){
        for($i = 0; $i < count($p); $i++){
            if($p[$i]===$x){
                $temp = $i + 1;
                for($j = 0; $j < count($p); $j++){
                    if($p[$j]===$temp){
                        array_push($result, ($j+1));
                    }
                }
            }
        }
        $x++;
    }

    print_r($result);
}

echo permutationEquation([4,3,5,1,2]);