function acmTeam(topic) {
    let totTopics = 0;
    let teams = 0;
    let len = topic[0].length;
  
    //finding total topics
    for (let i = 0; i < topic.length - 1; i++) {
      for(let j = i+1; j <topic.length; j++){
        if (totTopics < totalTopics(topic[i], topic[j])) {
          totTopics = totalTopics(topic[i], topic[j]);
        }
        console.log(totalTopics(topic[i], topic[j]))
      }
      
      if (totTopics == len) {
        break;
      }
    }
  
    //finding total teams
    for (let i = 0; i < topic.length - 1; i++) {
      for (let j = i + 1; j < topic.length; j++) {
        if (totalTopics(topic[i], topic[j]) == totTopics) {
          teams++;
        }
      }
    }
  
    let answer = [totTopics, teams];
    return answer;
  }
  
  function totalTopics(s1, s2) {
    let total = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] == 1 || s2[i] == 1) {
        total++;
      }
    }
    return total;
  }