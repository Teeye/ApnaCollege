/*//Qs 1
let num=8;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}

//Qs 2

let name=prompt("enter your name: ");
let age=prompt("enter your age: ");
let result=`${name} is ${age} years old `;
console.log(alert(result));


//Qs 3
let quarter=5;
switch(quarter){
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("No months in this Quarter");
}

Qs  4
let str="Bapples";
if((str[0]=='a'|| str[0]=='A') && str.length>5){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

Qs 5
let a=3;
let b=5;
let c=1;
if(a>b && a>c){
    console.log(`a ${a} is greater`);
}
else if(b>a && b>c){
    console.log(`b ${b} is greater`);
}
else{
    console.log(`c ${c} is greater`);
}

Qs 6
let num1=35;
let num2=4785;
if(num1%10==num2%10){
    console.log(`${num1%10} is the same last digit for two numbers` );
}
else{
    console.log(`is not the same last digit number`);
}
    function outerFunc(){
    let x=5;
    let y=3;
    function innerFunc(){
        console.log(x);
    }
    innerFunc();
}
    function multiGreet(func, n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greet=function(){
    console.log("hello!!");
}
multiGreet(greet,10);

const cal={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};

let arr=[10,20,30,20,50,60];
let result= arr.every( (el)=>(el%10==0));

let num=[1,2,3,4,5,6,-1,0];
let output=num.reduce( (min,el)=>{
    if(el<min){
        return el;
    }else{
        return min;
    }
});*/


/*
function oddEven(request){
    if(request=="odd"){
       let odd=function(n){
   console.log(!(n%2==0));
} 
return odd;
    }
    else if(request=="even"){
        let even=function(n){
   console.log(n%2==0);
}
return even;
    }
    else{
        console.log("wrong request");
    }
}
let request="odd";
*/

let arr=[..."hello"];
























/*const car={type:"yuzi", color:"black", weight:350, model:"suzuki",
fullName: function(){
    return this.type +" "+ this.model;

}
 };
 document.getElementById("demo2").innerHTML=car.fullName();
document.getElementById("demo1").innerHTML= "the car is " +car.color+ " colour and it is  "+ car.weight+ " and it is "+ car.model + " model";
//array object*/


/*
const house={type:"lambodia", model:"karina", city:"yongja", country:"australia", 
fullName: function(){
    return this.model +" "+ this.type;
}}
document.getElementById("demo3").innerHTML=house.fullName();
document.getElementById("demo2").innerHTML="The house is situated in " + house.city+" in "+ house.country;


let name="jdfk"
let repoCount=40
console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)
*/



/*
##Array + Loops

const car=[
    {
        name:'akash',
        payment:100
    },{
        name:'lara',
        payment:350
    },{
        name:'keti',
        payment:200
    }
]

for(let i = 0; i<car.length; i++){
    car[i].payment=car[i].payment - 50;
    console.log(car[i])
}

car.forEach(carey => {
    carey.payment=carey.payment-10
});
console.log(car);

 for (let carey of car) {
 }
 console.log(car)


//filter

const car=[
    {
        fname:'john',
        lname:'doe',
        name:'stu1',
        marks:45
    },
    {
        fname:'jane',
        lname:'doe',
        name:'stu2',
        marks:35
    },
    {
        fname:'lara',
        lname:'mog',
        name:'stu3',
        marks:78
    },{
        fname:'katy',
        lname:'berley',
        name:'stu4',
        marks:54
    },
    {
        fname:'sam',
        lname:'john',
        name:'stu5',
        marks:80
    }
]
const failed= car.filter((student)=> student.marks>=45);
console.log(failed)

const fullName= car.map((users)=>{
    return {
        full: users.fname+" "+ users.lname
    }
})
 console.log(fullName)

 //Reduce 
 let total=0;
actor.forEach(actors => {
    total=total+actors.payment;
});
console.log(total);

const total= actor.reduce((ac, actors)=>{
    ac+=actors.payment;
    return ac;
},0)
console.log(total)


//IndexOf
const admin=[ 1,2,3,5,4]
const user={
    name:'abc',
    id:3
}
const isAdmin= admin.indexOf(user.id)>-1
console.log(isAdmin)
//console.log(admin.indexOf(user.id));
console.log(admin.includes(user.id));

//Find
const find=actor.find(actors=>{
    if(actors.name==='lara'){
        return true;
    }
    else{
        return false;
    }
    
})
console.log(find);


//Sort and Splice
const names=['john','jane','lata','karma','shyam','mahesh','ram','kattar']
//console.log(names.sort()) -->sort
console.log(names.splice(3,3))  ---splice
console.log(names);

*/

/*function lem(f){
    return (10/5)*(f-10);
}

let result=lem(30);
document.getElementById("demo1").innerHTML=result;



let carName=4;
let text1="outside:"+ typeof carName;
document.getElementById("demo1").innerHTML=text1;

function myFunction(){
    let carName="Volvo";
    let  text1="inside:"+ typeof carName;
    document.getElementById("demo2").innerHTML=text1;
}
myFunction();*/

/*
const car=[
    {
        fname:'abc',
        lname:'abce',
        payment:350
    },
    {
        fname:'xyz',
        lname:'xyze',
        payment:200
    },
    {
        fname:'mno',
        lname:'mnoe',
        payment:190
    }
]



const admin=[2,3,5,1]

const user={
    name:'xyz',
    id:5
}


const user=[
    {
        name:'abc',
        id:3
    },
    {
        name:'lmno',
        id:2
    },
    {
        name:'rts',
        id:1
    },
]
*/
/*
function myFunction(user, pass){
    console.log(`${pass}`);
    console.log(`${user} Logged in successfully`);
}
myFunction('john', 'secret');

function leb(str){
   return str.toUpperCase();
}
let result= leb('javascript');
console.log(result)


function calc(width, height=1){
   //height= height===undefined? 1 : height
    return width*height
}
let result=calc(30);
console.log(result);

let myString="hello world"
console.log(myString);

console.log(myString.length);
let lastChar= myString.length;
console.log(myString.charAt(myString.length-1))
console.log(myString.charAt(myString.length-2))


let num=6271;
let count=0;
while(num>0){
    num=Math.round(num/10);
    count++;
}
console.log(count);

*/

