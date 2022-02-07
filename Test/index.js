let array = [];
let charData = 0;

array.push(5,2,3,4,8,10,2000,19,22,54,1,0,1000);

for(let i = 0; i < array.length; i++){
    console.log(charData)
    if(array[i] > charData){
        charData = array[i]
    }
}

console.log(charData);