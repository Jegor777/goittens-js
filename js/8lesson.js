const numbers = [1,2,34,57,9];
const numbersa = [3,4,5,12,8];


const numbers2 = numbers.concat(numbersa);
console.log(numbers2);



const lastWeekTemps = [1, 2, 3];
  const currentTemps = [4, 5, 6];
  const nextWeekTemps = [7, 8, 9];

  const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
  console.log(allTemps);

  const allTemps1 =[...lastWeekTemps,...currentTemps,...nextWeekTemps];
  console.log(allTemps);


  const cart = {
    items: [],
    getItems() {},
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        const newProduct = {
            ...product,
            quantity: 1,
        }

        this.items.push(newProduct)

    },
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };

  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍇', price: 70 });
  cart.add({ name: '🍋', price: 60 });



console.log(cart.items);
//   * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }

  
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
  console.table(players);


  const playersName = players.map(function({name}){
    
    return name;
    
  })

  const updatedPlayers = players.map(function(player){

    return {
        ...player ,
       points: player.points +10,
    }
  })
  console.log(updatedPlayers);