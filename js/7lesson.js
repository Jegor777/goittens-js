// const  obj1 = {

// };


// const class1 = {
//     name: '10-A',
//     studentCount: 4,
//     students: ['Vlad','Fedir','Nastia','Matvii' ] ,
    
// }

// class1.raiting = 10;
// console.log(class1);
// // console.log(class1.name);
// // class1.name = '10-B';
// // console.log(class1.name);
// console.log(class1['raiting']);

// class1.students.push('Yelisey')

// const a ={};
// const b = a;
// console.log(a===b);

// const arr4 = [1,2,3,4,5];
// console.log(arr4);

// arr4.greats = 'Hello';
// console.log(arr4);

// function name(params){

// }
// console.dir(hello1);

const playlist = {
    name: 'Плейлист',
    rating: 5,
    tracks: ['трек-1', 'трек-2', 'трек-3'],

    getName() {
      console.log(this.name);
    },

    changeName(newName){
     return this.name = newName;
    },
    getTracksCount(){
        return this.tracks.length;
    },
    addNewTracks(newTrack){
        this.tracks.push();
    },
}
playlist.addNewTracks('Трек-4');
console.log (playlist.getTracksCount());

console.log(playlist.tracks);


const feedback = {
    good: 5,
    neutral: 10,
    bad: 3, 
}
const allKeys =Object.keys(feedback);
console.log(allKeys);

// for (let i = 0; i < allKeys.length; i += 1 ) {
//    console.log(i)
//    console.log(feedback.allKeys[i]);
// }
let total = 0;
for (const key  of allKeys) {
    console.log(feedback[key])
    total += feedback[key];
}
console.log(total);
const values = Object.values(feedback);
console.log(values);

for (const value of values) {
    console.log(value);
    total += value;
}


const entries = Object.entries(feedback)

console. log(entries) ;


const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
    const findFriendByName = function(allFriends,nameToFind){
        for (const friend of allFriends) {
            if(friend.name === nameToFind){
                console.log('Ви знайшли друга');
                return nameToFind;
            }else{
                console.log('Такого друга немає');
            }
        }
    }
    const getAllNames = function(allFriends){
        const allName = [];
        for (const friend of allFriends) {
          names.push(friend.name)
        }
        return names;
    }
    
    console.log(getAllNames(friends));
  console.log(findFriendByName(friends, 'Poly'));
//   console.log(findFriendByName(friends, 'Chelsy'));

