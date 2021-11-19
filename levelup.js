//Sets the max level
let MAX_LEVEL = 99

// Generate levels automatically
let level = {}
for(i = 2; i < 100; i++) {
	level[i] = i * 100;
}

let player = {
	name: 'Cloud Strife',
  level: 1,
  lvlProgress: 0,
}


function levelUp(player, exp){
	// Get the experience required to reach next level
  let nextLvlExp = level[player.level + 1];
  
  // Check if this player reached max level
  if (player.level >= MAX_LEVEL) {
  	return
  }
  
  let percentProgress = exp / nextLvlExp
  
  let sum = player.lvlProgress + percentProgress
  
  if (sum >= 1) {
  	player.level++
    player.lvlProgress = 0
    
    let expRemainder = (nextLvlExp * sum) - nextLvlExp
    levelUp(player, expRemainder)
  } else {
  	player.lvlProgress = sum
  }
  
}

levelUp(player, 1200);
console.log(player)
