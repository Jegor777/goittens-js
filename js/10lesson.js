const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
  ];


  const calculateTotaltime = players.reduce((totalTime , player ) =>{
    return totalTime + player.timePlayed
  },0 )
  console.log(calculateTotaltime);


//   const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
//   ];
//   const calculateTotalQuantity = cart.reduce((price , product) => {
//     return totalQuantity + price.quantity
//   },0 )
 
//  console.log(calculateTotalQuantity);


const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

  const allTags = tweets.reduce((tags , tweet)=>{
    return [...tags, ...tweet.tags]
  },[])
  console.log(allTags);


  const number = [1,8,3,4,7]
  number.sort()
  console.log(number)

  const players7 = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
const time = [...players7].sort((prevPlayer,nextPlayer)=>
{
    return prevPlayer.timePlayed - nextPlayer.timePlayed
})

    
       // Знайти вченого який народився найпізніше.
    const arr = [
        { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
        { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
        { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
        { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
        { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
        { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
        { name: "Max", surname: "Planck", born: 1858, dead: 1947,id: 7},
        { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
        { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
        { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
        { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
        { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
        ];
        
        const latestBornScientist = arr.reduce((latest, scientist) => {
            return (latest.born > scientist.born) ? latest : scientist;
          });
          
          console.log(latestBornScientist);
