<?php

function libraryFine($d1, $m1, $y1, $d2, $m2, $y2){
    $fine = 0;

    if ($y1 > $y2) {
        $fine = 10000;
        return $fine;
      } else if ($y1 < $y2) {
        return $fine;
      } else if ($m1 > $m2) {
        $fine = 500 * ($m1 - $m2);
        return $fine;
      } else if ($m1 < $m2) {
        return $fine;
      } else if ($d1 > $d2) {
        $fine = 15 * ($d1 - $d2);
        return $fine;
      }

    return $fine;
}