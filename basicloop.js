//counts to 100

let i = 0

while(i > 100){
  i++;
  }

let bobsFollowers = ['Fred', 'Adam', 'Josh', 'David'];
let tinasFollowers = ['Brenda', 'Fred', 'Josh'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);
