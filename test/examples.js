function sort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] < arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
      }
    }
    return arr;
  }
  
  const arr = [3, 2, 6, 1, 5];
//   sort(arr);
  
arr.forEach(el => {
    if (el == 5 || el===3 || el===1) {
    console.log(el)
}
})
  
let array = [1, 2];
let lengthArr = array.length;


for (let i = 1; array[i] < 32; i++) {

    array.push = array[i] * 2;
    
}

console.log(array);



const objectA = {
    array, 
    b: true,
    c: 'info'
}




const copyofA = objectA;
for (let i = 1; i < 5; i++){
    
    array[lengthArr] = array[i] * 2;
    lengthArr = lengthArr + 1;

}
delete copyofA.b;

console.log(objectA)

const json = JSON.stringify(objectA);

console.log(json); 
console.log(JSON.parse(json));



function myFn(a, b) {
    let c;
    a = a + 1;
    c = a + b;
    return c;
    
}



answer = myFn(20, 45);
console.log(answer);

function nameV (){
    console.log('Kirill');
}

setTimeout(nameV, 1000)


let hello = 'hello';
let world = 'world';
let greeting = `gff ${hello} ${world}`;
console.log(greeting);

const newPost = (post, addedAd = Date()) => ({

    ...post,
    addedAd
    
})

const firstPost = {
    id: 1,
    author: 'Ivan'
}


function fnError() {
    throw new Error('some error')
}
try {
    fnError();
} catch (error) {
    console.error(error);
}

console.log(newPost(firstPost));


//Деструктуризация

const userProfile = {
    userName: 'Kirill',
    commentsQty:42
}

const userInfoComments = function ({ userName, commentsQty }) {
    return `User ${userName} has ${commentsQty} comments`
}
console.log(userInfoComments(userProfile));

const destArray = ['milk', 'pie'];
const [itemOne, itemTwo] = destArray;
console.log(itemOne);

//Условные инструкции

let month = 12;

switch (month) {
    case 1:
        console.log('January')
        break
    case 12:
        console.log('December')
        break
    default:
        console.log(' . ')
}

const eleven = 11;

eleven
    ? console.log('true')
    : console.log('false')

const value1 = 20;
const value2 = 35;
value1&&value2
    // ? myFunction1(value1, value2)
    // : myFunction2()
    
let value = -5;
const res = value >= 0 ? value : -value

Object.keys(userProfile).forEach(key => {
    console.log(key, userProfile[key])
})
Object.values(userProfile).forEach
    (value => {
    console.log(value)
    })

    //Классы

class Comment {
    constructor(text) {
        this.text = text;
        this.votesQty = 0;
    }    

    upvote() {
    this.votesQty += 1;
    }

    static mergeComments(first, second) {
        return `${first} ${second}`;
    }

}
    
const commentOne = new Comment('First comment');
const commentTwo = new Comment('Second comment');
Comment.mergeComments('First comment', ' Second comment');

commentOne.upvote();
console.log(commentOne);

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc+= el, 0)
    }
}

const myArray = new NumbersArray(3, 6, 4, 5);
console.log(myArray.sum());

//Промисы

const myPromise = new Promise((resolve, rejecet) => {

});