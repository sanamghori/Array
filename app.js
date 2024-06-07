var vegetable = ["gajar", "moli", "khera", "methi", "allo", "palak",];
console.log(vegetable[4]);
console.log(vegetable.length);
//push . say last main add hota
vegetable.push("matar");
console.log(vegetable);
//pop. say last wala delet 
vegetable.pop();
console.log(vegetable);
//.shift sy start wala delet
vegetable.shift();
console.log(vegetable);
//.unshift sy start main add hoga
vegetable.unshift("imli");
console.log(vegetable);
//slice k liy veraible bany gay phir .slice k bad jitna print chhy os ka index likhy gy
var slice = vegetable.slice(2, 4);
console.log(slice);
// splice k liy bhi alag virable bany ga phir jag ko define karny k bad
// string main name likhy gy
var splice = vegetable.splice(2, 2, "garpes,manogo");
console.log(vegetable);
// tuples is main multipal data type lety or ossy define karty
var fruittuples = ["apple", 2, "mango", 4];
console.log(fruittuples);
