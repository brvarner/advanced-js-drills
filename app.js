name = 'Brandon Varner';
var name ;

setName();
function setName() {
    var name = 'Covalence';
    console.log(name)
};

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b){
    console.log('some text');
    var answer = (a + b) / 2;
    return answer
};

let fruits = ['banana', 'orange', 'apple'];

function fruitPrinter (){
    let favFruit = fruits[2];
    console.log(fruits[0]);
    
    function favFruitPrinter (){
        let leastFav = fruits[0]
        console.log(favFruit)
    }

    console.log(leastFav)
};

myName()

function myName (){
    console.log('Hello ' + name)
}


let lastFunc = function(){
    alert('What they on, moe?')
}

lastFunc() 
fruitPrinter()
