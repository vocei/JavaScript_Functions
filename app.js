console.log("Goodbye World!\n==========\n");


// Exercise 1 Section Odd Numbers
console.log("EXERCISE 1 Odds:\n==========\n");
function printOdds(count)
{
if (count < 0 )
{
    for (let i = -1; i >= count; i--)
    {
        if (i % 2 != 0)
        console.log(i);
}

}
else {
    for (let i = 1; i <= count; i++)
    {
        if (i % 2 != 0)
        console.log(i); 
    
    }
}
}

printOdds(-10);
printOdds(10);


/*    FREEZES GOOGLE CHROME for (let i = 1; Math.abs(count); i++)
  {
      if (i % 2 != 0)
      console.log(i * Math.sign(count));
  } */

  console.log("\n")

// Exercise 2 Section Check Age
console.log("EXERCISE 2 OldNuff?:\n==========\n");
function checkAge(name, age)
{
    let oldEnough = `${name}, thats cool you're ${age} year(s) old, you're able to drive at that age!`
    let tooYoung = `Sorry ${name}, thats too young to drive so have to wait ${16 - age} year(s) before you can.`

    if (age < 16)
    {
        console.log(tooYoung);
    } else {
        console.log(oldEnough);
    }
}
console.log(`Lets check everyones age!:`)
checkAge("Mario", 45);
checkAge("Luigi", 42);
checkAge("Toad", 4);

console.log(``)

function oldEnough(age, targetAge)
{
    return age >= targetAge;

}

function checkLicense(name,age){
    let candrive = oldEnough(age, 16);
    let permitHolder = oldEnough(age, 15);
    let canDrink = oldEnough(age, 21);

    if (canDrink){
    console.log(`${name} dont drink and drive...`)
    }
    else if (permitHolder){
        console.log(`${name} can drive with a valid license holder.`)
        }
else {
    console.log(`${name} is too young, you gotta wait until you're older to drive.`)
    }
}
console.log(`Alright here's some driving advice!:`)
checkLicense("Mario", 45);
checkLicense("Luigi", 42);
checkLicense("Toad", 4);
console.log("\n")

// Exercise 3 Section Check Quadrant
console.log("EXERCISE 3 Which Quadrant?:\n==========\n");
function checkQuad(x, y) {
    if (x > 0 && y > 0) {
    return "Quadrant 1";
    } else if (x < 0 && y > 0) {
        return "Quadrant 2";
    } else if (x < 0 && y < 0) {
        return "Quadrant 3";
    } else if (x > 0 && y < 0) {
        return "Quadrant 4";
    } else if (x == 0 && y != 0) {
        return "X-Axis";
    } else if (x != 0 && y == 0) {
        return "Y-Axis";
    } 
    else {
        return "Origin";
    }
}


console.log(checkQuad(0, 0));
console.log(checkQuad(-1, 2));
console.log(checkQuad(-3, 6));
console.log(checkQuad(4, 7));
console.log("\n")

// Exercise 4 Section Triangles
console.log("EXERCISE 4 Triangle?:\n==========\n");
const isRealTriangle = (a, b, c) => a + b >c && a + c > b && b + c > a;
const checkTriangle = (a, b, c) => {
    let real = isRealTriangle(a, b ,c)
    if(real)
    {
        if (a == b && b == c){
            return `Equilateral`;
        } else if ( a == b || b == c || a == c) {
        return `Isosceles`;
    } else {
        return `Scalene`;
    }
} else {
    return `Thats not even a triangle`;
}
}

console.log(checkTriangle(2, 3, 4));
console.log(checkTriangle(2, 5, 5));
console.log(checkTriangle(1, 5, 5));
console.log(checkTriangle(8, 8, 8));
console.log(checkTriangle(2, 5, 7));
console.log("\n")

// Exercise 5 Data Plan
console.log("EXERCISE 5 Data Plans:\n==========\n");
function dataUse(planLimit, day, usage)
{
let periodLength = 30;
let currentAvg = usage / day;
let projectedAvg = planLimit / periodLength;
let remainingDays = periodLength - day;
let remainingData = planLimit - usage;
let projectedUsage = remainingDays * currentAvg;
let statusMsg;

if (currentAvg > projectedAvg){
statusMsg = "EXCEEDING";
} else if (currentAvg < projectedAvg){
    statusMsg = "UNDER";
} else {
    statusMsg = "AT";
}

console.log(`Welcome to your Phone Plan:\n${day} day(s) used, ${remainingDays} day(s) remaining
Average daily use: ${projectedAvg.toFixed(2)} GB/day.
You are ${statusMsg} your average daily use (${currentAvg.toFixed(2)} GB/day),
continuing this high usage, you'll exceed your data plan by ${(planLimit - (usage + projectedUsage)) * -1} GB.
To stay below your data plan, use no more than ${(remainingData / remainingDays).toFixed(2)} GB/day.`);
}

dataUse(100, 15, 56);

