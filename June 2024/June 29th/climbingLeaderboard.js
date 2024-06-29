// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// Example



// The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

// Function Description

// Complete the climbingLeaderboard function in the editor below.

// climbingLeaderboard has the following parameter(s):

// int ranked[n]: the leaderboard scores
// int player[m]: the player's scores
// Returns

// int[m]: the player's rank after each new score

function climbingLeaderboard(ranked, player) {
    let playerRank = []
  
    for(let i=0; i<ranked.length;i++){
      if(ranked[i]==ranked[i+1]){
        ranked.splice(i+1,1)
        i--
      }
    }
  
    for(let i=0; i<player.length; i++){
      for (let j=0; j<ranked.length; j++){
        if(player[i]>=ranked[j]){
          playerRank.push(String(j+1))
          break
        }
        if(player[i]<ranked[(ranked.length - 1)]){
          playerRank.push(String(ranked.length+1))
          break
        }
      }
    }
    return playerRank
  
  }