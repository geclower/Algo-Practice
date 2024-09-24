function timeInWords(h, m) {
  let mins = [
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
  let hrs = [
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

  let answer = "";

  if (m == 0) {
    answer = hrs[h] + " " + mins[m];
  }
  if (m <= 30 && m > 0) {
    answer = mins[m] + " past " + hrs[h];
  }
  if (m > 30) {
    answer = mins[60 - m] + " to " + hrs[h + 1];
  }
  `  `;
  return answer;
}
