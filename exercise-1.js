// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp() {
            
            let max = 100;
            
            for (i = 1; i <= max; i++) {
                if (i % 3 == 0) {
                    console.log("TEK");
                }
                if (i % 5 == 0) {
                    console.log("camp");
                }
                if (((i % 3) && (i % 5 ) == 0)) {
                    console.log("TEKcamp");
                }
            }
        }
        tekCamp();
        
        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius() {
            const fah = 10;
            const cel = ((fah - 32) *  (5/9));
            console.log(cel);
        }
        farenheitCelsius();

        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit() {
            const cel = 0;
            const fah = ((cel) * (9/5) + 32);
            console.log(fah);
        }
        celsiusFarenheit();

        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            if (age < 18) {
                return false;
            } else {
                return true;
            }
        }
        canVote(21);

        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr() {
            const color = "blue red orange yellow green brown purple";
            const colorArr = color.split(" ");
            console.log(colorArr);
            return colorArr;
        }
        strToArr();

        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            const phoneArr = number.split(" ");
            phoneArr.reverse();
            console.log(phoneArr);
        }
        reversePhone("7 5 5 0 6 5 1");

        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...
        function carObject(make, model, year, color) {
            // Define desired object
            let carObj = new Object();
            carObj = {
              make: "Mazda",
              model: "Sedan",
              year: 2010,
              color: "black"
            };
            // Return it
            console.log(carObj);
            return carObj;
          }
          carObject();

        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
        function keyValuePairs(nums){
            const kv = {};
            for (i = 0; i < nums.length; i++) {
                if (nums[i] % 2 == 0) {
                    kv[nums[i]] = "even";
                } else {
                    kv[nums[i]] = "odd";
                }
            }
            console.log(kv);
        }
        keyValuePairs([3, 5, 10, 23, 40, 61]);

        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...
        for (i=0; i <= numbers.length; i++) {
            if (numbers[i] % 3 == 0) {
                console.log(numbers[i]);
            }
        }

        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
        let school = foodArray[foodArray.length - 1];
        console.log(school);


        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        function foodAdSentence() {
            for (i=0; i < foodArray.length; i++) {
                let str = foodArray[i];
                let lastItem = "TEKcamp";
                //push 
                foodArray.pop([6]);
                foodArray.push(lastItem);
                //console.log(foodArray[6]);

                if (str.charAt(str.length-1) === 's') {
                //str.charAt(str.length-1);
                    console.log(foodArray[i], "are", adjectiveArray[i]);
                } else {
                    console.log(foodArray[i], "is", adjectiveArray[i]);
                } 
            }
        }
        foodAdSentence();

        /************************************************************* */
        // Refactor the for() loop to be a while loop.
        //for(let i=0; i<10; i++) {
                //console.log(" the value of i in the loop is : " + i);
        //}

        //your code...
        function whileLoop() {
            let i = 0;
            while(i < 10) {
                console.log(" the value of i in the loop is : " + i);
                i++;
            }
            
        }
        whileLoop();

        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
        function sumation(a, b, c) {
            let tot = (a + b) * c;
            return tot;
        }
        
        function divide(sum) {
            let tot = sum / 10;
            return tot;
        }
        
        function power(divTot) {
            let tot = Math.pow(divTot, 2);
            return tot;
        }
        let sum = sumation(30, 2, 20);
        let divTot = divide(sum);
        let final = power(divTot);
        console.log(final);



        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.
        function tF() {
            
            // 0
            let z = 0;
            let zVal = z ? 'is truthy': 'is falsey';
            console.log(`0 ${zVal} because 0 is a false value`);
            // "zero";
            let zS = "zero";
            let zSVal = zS ? 'is truthy': 'is falsey';
            console.log(`"zero" ${zSVal} because it is a filled string`);
            // const zero = 20;
            const zero = 20;
            let zeroVal = zero ? 'is truthy': 'is falsey';
            console.log(`20 ${zeroVal} because it is a number despite the variable name being zero`);
            // null
            let n = null;
            let nVal = n ? 'is truthy': 'is falsey';
            console.log(`null ${nVal} because it is lacks any value at all`);
            // "0"
            let zStrNum = "0";
            let zStrNumVal = zStrNum ? 'is truthy': 'is falsey';
            console.log(`"0" ${zStrNumVal} because it is a string that contains a character`);
            // !""
            let excl = !"";
            let exclVal = excl? 'is truthy': 'is falsey';
            console.log(`!"" ${exclVal} because the "!" reverts the false value of the empty string to be true`);
            // {}
            let brack = {};
            let brackVal = brack? 'is truthy': 'is falsey';
            console.log(`{} ${brackVal} because JavaScript recognizes it as truthy (honestly i dont understand why it is this way, it seems it should be falsey since no value is contained)`);
            // () => {console.log("hello TEKcamp!");
            let fun = () => {console.log("hello TEKcamp!")};
            let funVal = fun? 'is truthy': 'is falsey';
            console.log(`() => {console.log("hello TEKcamp!")} ${funVal} because the function contains contains a return (console)`);
            // 125
            let onetwofive = 125;
            let otfVal = onetwofive? 'is truthy': 'is falsey';
            console.log(`125 ${otfVal} because it is a number and numbers other than 0 are truthy`);
            // undefined
            let und = undefined;
            let undVal =  und? 'is truthy': 'is falsey';
            console.log(`undefined ${undVal} because it doesnt recognize a value being assigned`);
            // ""
            let empt = "";
            let emptVal = empt? 'is truthy': 'is falsey';
            console.log(`"" ${emptVal} because it it is an empty string`);
        }
        tF();
        /************************************************************* */
        // Refactor the following code using a switch statement:

        
        /*
        if(day === "monday") {
            console.log("we got a long week ahead of us...");
        } else if(day === "tuesday") {
            console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        } else if (day === "wednesday") {
            console.log("We are smack dab in the middle of the week");
        } else if (day === "thursday") {
            console.log("Thursday night... the mood is right");
        } else if (day === "friday") {
            console.log("TGIF.  Friday truly is the best day of the week!")
        } else {
            console.log("It's a weekend!")
        }
        */

        const day = "friday";

        switch (day) {
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!");
                break;
            default:
                console.log("It's a weekend!")
        }



        /************************************************************* */
        // Refactor the following statements to use ternary expressions:
        function ternary() {
            const age = 10;
            let ageTitle = age > 21 ? 'adult' : 'minor';
            console.log(ageTitle);
            //if (age > 21) console.log("adult"); else {
                //console.log("minor");
            //}
            ageTitle = age > 13 && age < 19 ? 'teen' : 'not a teenager';
            console.log(ageTitle);
            //if (age > 13 && age < 19) console.log('teen'); else {
                //console.log("not a teenager");
            //};
            ageTitle = age > 65 ? 'retired' : 'still working...';
            //if (age > 65) console.log("retired"); else {
                //console.log("still working...");
            //}
            }
        ternary();


        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...
        let me = {
            name: 'Alex',
            age: 22,
            gender: 'Male',
            healthy: 'Yes',
            hobbies: ['soccer', 'videogames', 'drawing'],
            profession: 'TEKcamp',
            education: 'Bachelor in IT',
            nameF : function() {
                return this.name + " " + "is learning JavaScript";
              },
            aboutMe : function() {
                return this.name + " is " + this.age + " years old and is currently in the " + this.profession; 
            }
        }
        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            if(year > 2000 && year < 2100) {
                console.log("welcome to the 21st century");
            }
            
            // 2.
            for(let i=0; i<nums.length; i++) {
                sum += nums[i];
            }
            console.log(sum);
            
            
            // 3.
            while(i < nums.length) {
                doubled.push(nums[i]*2);
                i++;
            }
            
            console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        function sqNum(number){
            let arr = number;
            const square_it = (element) => element ** 2;
            arr = number.map(square_it);
            console.log(arr);
            //console.log(number);
        }
        sqNum(nums);



        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...
        const fivePlusNew = fivePlus.filter(function(number) {
            return number < 5;
          });
        console.log(fivePlusNew);






        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...
        function randInt() {
            const maxLen = 20
            const randomArray = []
            let sum = 0;
            for(let i = 0; i < maxLen; i++) {
                randomArray.push(Math.floor(Math.random()))
            }
            for (j = 0; j < randomArray.length; j++) {
                sum = sum + randomArray[j];
            }
            console.log(sum);

        }
        randInt();

        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        function arrDiv(nums) {
            for (i=0; i < nums.length; i++) {
                let val = nums[i] / 2;
                console.log(val);
            }
        }
        arrDiv(showNums);



        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

        function chessCalc(pieces) {
            //your code here
            let pawn = 1;
            let rook = 5;
            let bishop = 3;
            let knight = 3;
            let queen = 9;
            //let king = 'N/A';
            let sum = 0;
            for (i = 0; i < pieces.length; i++) {
                switch (pieces[i]) {
                    case "pawn":
                        sum = sum + pawn;
                        break;
                    case "rook":
                        sum = sum + rook;
                        break;
                    case "bishop":
                        sum = sum + bishop;
                        break;
                    case "knight":
                        sum = sum + knight;
                        break;
                    case "queen":
                        sum = sum + queen;
                        break;
                    default: 
                        sum = sum + 0;
                }
            }
            console.log(sum);
        }

        let pieceArr = ["queen", "rook", "pawn", "pawn"];
        chessCalc(pieceArr);




        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.
        function reverseMutate() {
            let newOnes = ones.slice().reverse();
            console.log(ones);
            console.log(newOnes);
        }
        reverseMutate();




        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        function performer(cb) {
            cb();
        }
        performer(() => 1+1 === 2 ? console.log("the value is true") : console.log("the value is false"));


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...
        function findOlder() {
            //let arr = [];
            //console.log(val);
            for (i = 0; i < devs.length; i++) {
                //let val = devs[i].age;
                //arr.push(val);
                if (devs[i].age > 24) {
                    console.log(devs[i]);
                }
            }
            //console.log(arr);
        }
        findOlder();

        console.log("------------------------------------------")
        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        function removeNonDev() {
            //let arr = devs;
            //const actualDev = devs.filter(dev => devs.tech_stack === null);
            //console.log(actualDev);
            for (i = 0; i < devs.length; i++) {
                if (devs[i].tech_stack === null) {
                    devs.splice([i], 1);
                }
            }
            console.log(devs);
            //console.log(arr);
        }
        removeNonDev();


        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        function totAge() {
            let sum = 0;
            for (i = 0; i < devs.length; i++) {
                sum = devs[i].age + sum;
            }
            return sum;
        }
        let totAges = totAge();
        console.log(totAges);


        /************************** */  
        // Find all female devs

        //your code here...
        function femDev() {
            for (i = 0; i < devs.length - 1; i++) {
                if (devs[i].gender == 'f' || devs[i].gender == 'F') {
                    console.log(devs[i]);
                }
            }
        }
        femDev();


        /************************** */  
        // lowercase the genders of every dev

        //your code here...

        function lowerCase() {
            let arr = devs;
            //console.log(arr);
            for (i = 0; i < arr.length; i++) {
                arr[i].gender = arr[i].gender.toLowerCase();
            }
            console.log(arr);
        }
        lowerCase();
        



        /************************** */  
        // Sort the developers by name

        //your code here
        devs.sort((a, b) => (a.name > b.name) ? 1 : -1);
        console.log(devs);

        /************************** */  
        // Sort the devs by age in descending order

        //your code here

        devs.sort((a, b) => b.age - a.age);
        console.log(devs);

        /************************** */  
        // Sort the male coders by age

        //your code here
        function maleAge(){
            for (i=0; i<devs.length; i++){
                if (devs[i].gender == 'm'){
                    devs.sort((a, b) => a.age - b.age);
                }
            }
            console.log(devs);
        }
        maleAge();
        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here
        function printRole() {
            for (i=0; i<devs.length; i++){
                let name = devs[i].name;
                let tech = devs[i].tech_stack;
                console.log(`${name} specializes is ${tech}.`);
            }
        }
        printRole();
        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            let onlyNumbers = [];
            //console.log(numbers);
            for (i=0; i < numbers.length; i++) {
                if (typeof numbers[i] == 'number') {
                    onlyNumbers.push(numbers[i]);
                } else if (numbers[i] === "one") {
                    onlyNumbers.push(1);
                } else if (numbers[i] === "two") {
                    onlyNumbers.push(2);
                } else if (numbers[i] === "three") {
                    onlyNumbers.push(3);
                } else if (numbers[i] === "3"){
                    onlyNumbers.push(3);                    
                }
            }
            return onlyNumbers;
        }
        let justNumbers = maxNumber(numbersMixed); // NEED TO FINISH
        console.log(Math.max(...justNumbers));

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            numbers.sort(function(a, b){return a-b});
            numbers.sort(function(a, b){return b-a});
        };
        sortNums(justNumbers);



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
            //your code...
            //ES7
            // this is the object.entries method. It takes in objects as an argument (Object.entries(CARS)) and truns it into an array of arrays. 
            // this is useful because it allows you to be able to use the map function with it
            // the map function takes the entries and maps it for an object.
            let cars = {
                honda: 5,
                mazda: 6,
                chevy: 7,
                ford: 9 //additionally, you can add a comma here for the last element. But you dont have too.
            }
            for (let [key, val] of Object.entries(cars)) {
                console.log(key, val);
            }
        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set('company', "TEKsystems");
        mapObj.set('number', 5);
        mapObj.set('string', "this is a string");
        mapObj.set('boolean', true);
        mapObj.set("array", [1,2,3,4,"hello"]);

        console.log(mapObj.has("company"));
        console.log(mapObj.has("number"));
        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.
        
        //your code...
        console.log("the key and value are automatically set with the set method based on there location. It converts the keys to strings and therefore you can search by string value");

        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
       
        let dataArr = mapObj.keys();
        console.log(dataArr);

        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, 
        //and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  
        //The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function 
        //should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5       

        //your code...
        const add = function(x, y) {return x + y;};
        const subtract = function(x, y) {return x - y;};
        const multiply = function(x, y) {return x * y;};
        const divides = function(x, y) {return x / y;};
        const operations = [add, subtract, multiply, divides];
        function doMath(x,y) {
            const randomElement = operations[Math.floor(Math.random() * operations.length)];
            let val = randomElement(x,y);
            console.log(`${randomElement} ${val}`);
        };
        doMath(5,2);
        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  
        //This HOF should return another function fn(y) that accepts another single parameter y.  
        //This inner function should compute the product of it's parameter with the parameter passed into multiple.  
        //Use this returned "first-class" function to compute triples of any given number.

        //your code...
        
            function multiple(x) {
                let result = fn(5);
                function fn(y) {
                    let value = x * y;
                    return value
                }
                return result;
            }
        
        let result = multiple(5);
        console.log(result);

        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds 
        //" is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate 
        //(r) of 5%. Console log your calculation.

        //your code'
        function stockGain(basis){
            //let message = " is how much the stock has increased";
            function years(yrs) {
                let growth = (basis * 0.05) * yrs;
                return growth;
            }
            let value = years(4);
            //console.log(value + message);
            return value;
        }        
        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the 
        //cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...
        let futureValue = stockGain(600);
        console.log(futureValue + " is how much the stock has increased");


// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



