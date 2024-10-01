<?php

function gradingStudents($grades){
    $finalGrades = [];
    for($i = 0; $i < count($grades); $i++){
        if($grades[$i]< 38){
            array_push($finalGrades, $grades[$i]);
        }else{
            if(($grades[$i]+1)%5===0){
                $grades[$i] += 1;
            }elseif(($grades[$i]+2)%5===0){
                $grades[$i]+=2;
            }
            array_push($finalGrades, $grades[$i]);
        }
    }
    print_r($finalGrades);

}

echo gradingStudents([73, 67, 38, 33]);
