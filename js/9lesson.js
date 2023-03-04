
// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ];

//   const playerIdToUpdate = 'player-3';

//   players.map((player) => {
//     if(playerIdToUpdate === player.id ){
//         return {
//             ...player,
//             timePlayed: player.timePlayed += 100
//         }
//     }
//   })
//   console.log(players);


  const numbers = [5, 10, 15, 20, 25];
  const number  = numbers.find((number)=>{
    return number ===15;
  })
  console.log(number);

  const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];


//   const playerWithName = players.find((player)=>{
//     return player.name === 'Kiwi'
//   })
//   console.log(playerWithName);
//   const findPlayerById = players.find((player)=> {
//     return player.id === 'player-1'
//   })

// const findPlayerById = function(allPlayers, playerId){
// return allPlayers.find((player)=> {return player.id ===player.id} )
// }

// console.log(findPlayerById);
//   console.log(findPlayerById(players, 'player-1'));
//   console.log(findPlayerById(players, 'player-4'));
//   const onlinePlayer = players.filter(player => {
//     return player.online 
//   })
//   console.table(onlinePlayer)

//   const oflinePlayers = players.filter(player => {
//     return !player.online;
// });
// console.log(oflinePlayers);


// Отримуємо масив всіх хардкорних гравців з часом більше 250

const hardcorePlayers = players.filter((player)=> {
    return player.timePlayed >=250;
})

console.log(hardcorePlayers);


  



/*
 * Рахуємо загальну зп
 */

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
  };

const salaryArray = Object.values(salary)
console.log(salaryArray);

  const total = salaryArray.reduce((tt,salary)=>{
    return tt +=salary
  })
  console.log(total);






