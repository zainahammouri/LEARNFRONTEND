// how to create variables?

var myName = "John";
console.log(myName);

var myAge = 30;
console.log(myAge);
// ---------------------------


var myAge = 30;
console.log(typeof myAge);

var myName = "John";
console.log(typeof myName);
// DATA types IN JS
    // string
        var name2="zaina";
        console.log("my name : "+ name2);
        console.log(typeof name2);
        console.log(name2.length);
        console.log(name2.toUpperCase());
        console.log(name2.toLowerCase());
        console.log(name2[0]);

    // number
       
        var age2 = 30;
        console.log("my age : "+ age2);
        console.log(typeof age2);
        console.log(age2 + 10);
        console.log(age2 - 10);
        console.log(age2 * 10);
        console.log(age2 / 10);
        console.log(age2 % 10);
        console.log(age2 ** 10);
        console.log(age2 % 2);
    // boolean
       
        var isMarried2 = true;
        console.log("my isMarried : "+ isMarried2);
        console.log(typeof isMarried2);
        console.log(isMarried2 == true);
        console.log(isMarried2 == false);
        console.log(isMarried2!= true);
        console.log(isMarried2!= false);
        console.log(isMarried2 === true);
        console.log(isMarried2 === false);
        console.log(isMarried2!== true);
        console.log(isMarried2!== false);
        console.log(isMarried2 && true);
        console.log(isMarried2 && false);
        console.log(isMarried2 || true);
        console.log(isMarried2 || false);
    // array 
        var arr1=[1,2,3,4,5,"zaina"];
        console.log(arr1);
        console.log(typeof arr1);
        console.log(arr1.length);
        console.log(arr1[0]);
        var arr2 =["a","b","c","d","e",arr1];
        console.log(arr2);
        console.log(typeof arr2);
        console.log(arr2.length);
        console.log(arr2[0]);
        console.log(arr2[5][5]);
    // object
        // key: value;
        var obj1 = {
            name: "zaina",
            age: 30,
        };
        console.log(obj1);
        console.log(obj1.age);
        console.log(obj1.name);
        //array of objects:
        var arr3 = [
            {
                name: "zaina",
                age: 30,
            },
            {
                name: "salma",
                age: 40,
            },
        ];
        console.log(arr3);
        console.log(arr3.length);
        console.log(arr3[0].age);
        console.log(arr3[1].age);
        console.log(arr3[0].name);
        console.log(arr3[1].name);
    
