// CHAPTER # 01


// TASK 01: Write a script to greet your website visitor using JS alert box

// alert("Welcome to my website!"); 

// TASK 02: Write a script to display following message on your web page:

// alert("Error! Please enter a valid password.");

// TASK 03: Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS land...\nHappy Coding!");

// TASK 04: Write a script to display following messages in sequence:

// alert("Welcome to JS land.");
// alert("Happy Coding!\nPrevent this page fromadditional dialogs"); 

//----------------------------//
// TASK 05: Generate the following message through browser’s developer console:

// console.log("Hello... I can run js through my web browser's console.");
// alert("Hello... I can run js through my web browser's console.");

// Task :06 In HTML page

//------------------------------------------//

// CHAPTER # 02 

// Task 01: Declare a variable called username.

// var usernName;

// Task 02 : Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName = "S.M. Haris Ahmed";

// Task 03: Write script to (a) Declare a JS variable, titled message. (b) Assign “Hello World” to variable message. (c) Display the message in alert box.

// var message = "Hello World";
// alert(message);

// Task 04: Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// var name = prompt("Enter a Student Name");
// var age = prompt("Enter a Student Age");
// var edu = prompt("Enter a Student education");

// var stdName = name;
// alert(stdName);

// var stdAge = age;
// alert(stdAge);

// var stdEdu = edu;
// alert(stdEdu);

//Task 05: Write a script to display the following alert using one JS variable: 

// var food = "PIZZA \n PIZZ \n PIZ \n PI \n P";
// alert(food);

//Task 06: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).Show the blow mentioned message in an alert box.(Hint: use string concatenation)

// var email = "harisahmed@gmail.com";
// alert("My Email address is " + email);

//Task 07: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

//Task 08: Write a script to display this in browser through JS

// document.write("Yah! I can write HTML content JavaScript");

//Task 09: Store following string in a variable and show in alert andbrowser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//-------------------------------------------------//

// CHAPTER: 03

//Task 01: Declare a variable called age & assign to it your age. Show your age in an alert box.

// var age = 18;
// alert("I am " + age + " years old");

//Task 02: 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

// var visit = 14;
// alert("You have visited this site " + visit + " times");

//Task 03: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 2000;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

//Task 04: A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// alert("Welcome to XYZ clothong Store!")
// var name = prompt("Enter your name");
// var pro = prompt("Enter the Product title");
// var quan = prompt("How many products you order");


// document.write(name + " ordered " + quan + " " + pro + " on  XYZ Clothing store");

//----------------------------------------------------//

// CHAPTER 04:

//Task 01: Declare 3 variables in one statement.

// var firstName = "haris",
//     lastName = "Ahmed",
//     age = 18;
// alert(firstName + lastName + age);

//Task 02: Declare 5 legal & 5 illegal variable names.
// Legal Varisble Names:

// var user_alert;
// var _name;
// var  firstName;
// var  product1st;
// var batch;

// Illegal Varisble Names:

// var 1stname;
// var +name;
// var First;
// var 5names;
// var 0percent;

//Task 03: Display this in your browser.

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("Variable names can only contain Number, underscore, Alphbet and underscore.<br>");
// document.write("Variable names are case sensitive <br>");
// document.write("ariable names should not be JS Keyword <br>");

//==============================================================//

// CHAPTER 05:

//Task 01: Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

// var a = +prompt("Enter a First Number :");
// var b = +prompt("Enter a Second Number :");

// var sum = a + b;

// document.write("Sum of " + a + " and " + b + " is " + sum);

//Task 02:Repeat task1 for subtraction, multiplication, division & modulus.

// var sub = a - b;

// document.write("Subtraction of " + a + " and " + b + " is " + sub);

// var mul = a * b;

// document.write("Multiplication of " + a + " and " + b + " is " + mul);

// var div = a / b;

// document.write("Division of " + a + " and " + b + " is " + div);

// var mod = a % b;

// document.write("Modulus of  " + a + " and " + b + " is  " + mod);

//Task 03: Do the following using JS Mathematic Expressions.

// var value;
// document.writeln("Value after variable declaration is: " + value);

// value = 5;
// document.writeln("<br> Initial value:" + value);

// value++;
// document.writeln("<br> Value after increment is: " + value);

// value += 7;
// document.writeln("<br> Value after addition is: " + value);

// value--;
// document.writeln("<br> Value after decrement is : " + value);

// value = value % 3;
// document.writeln("<br> The remainder is : " + value);

//Task 04: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.

// var ticketPrice = 600;
// var totalTicket = 5;
// var ticketPrice = ticketPrice * totalTicket;

// document.write(" Total Cost to buy " + totalTicket + " tickets to a movie is " + ticketPrice + "PKR");

//Task 05: Write a script to display multiplication table of any number in your browser.

// var a = +prompt("Enter any number: ");

// document.write("<h1> Table of " + a + "<br>");

// for (var i = 1; i <= 10; i++) {
//     document.write(a + "x" + i + "=" + a * i + "<br>");
// }

//Task 06:The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

// var celsius = +prompt("Enter the temperature in Celcius :");
// var convert1 = (celsius * 9 / 5) + 32;
// document.write(celsius + "<sup>o</sup>" + "C is " + convert1 + "<sup>o</sup>" + "F" + "<br>");

// var fahrenheit = +prompt("Enter the temperature in Fahrenheit :");
// var convert2 = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "<sup>o</sup>" + "F is " + convert2 + "<sup>o</sup>" + "C");

//Task 07: 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered Quantity of item 2
//e. Shipping charges. Compute the total cost & show the receipt in your browser.

// var priceOfItemOne = +prompt("Enter the Price of Item 1");
// var quantOfItemOne = +prompt("Enter the Quantity of Item 1");
// var priceOfItemTwo = +prompt("Enter the Price of Item 2");
// var quantOfItemTwo = +prompt("Enter the Quantity of Item 2");
// var shippngCharges = 100;
// var totalBill = (priceOfItemOne * quantOfItemOne) + (priceOfItemTwo * quantOfItemTwo) + shippngCharges;

// document.write("<h1>Shopping Cart </h1>")
// document.write("<br> Price of Item 1 is : " + priceOfItemOne);
// document.write("<br> Quantity of Item 1 is : " + quantOfItemOne);
// document.write("<br> Price of Item 2 is : " + priceOfItemTwo);
// document.write("<br> Quantity of Item 2 is : " + quantOfItemTwo);
// document.write("<br> Shipping charges is : " + shippngCharges);
// document.write("<br><br> Total Cost of Your Order is : " + totalBill);

//task 08: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var marksObtained = +prompt("Enter the Marks Obtained");
// var totalMarks = +prompt("Enter the Total Marks ");
// var per = (marksObtained / totalMarks) * 100;

// document.write("<h1>Mark Sheet</h1>");
// document.writeln("<br> Total Marks : " + totalMarks);
// document.writeln("<br> Marks Obtained : " + marksObtained);
// document.writeln("<br> Percentage : " + per + "%");

//Task 09: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
//(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usDollar = +prompt("Enter the dollars you have ");
// var saudiRiyals = +prompt("Enter the saudi Riyals you have");
// var currencyInPkr = (usDollar * 104.80) + (saudiRiyals * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("<br><br> Total Currency in PKR :" + currencyInPkr);

//Task 10:Write a program to initialize a variable with some number and do arithmetic in following sequence:
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2 Perform all calculations in a single expression+

// var number = 5;
// var calculations = number + 5 * 10 / 2;
// document.writeln("Result is : " + calculations);

//Task 11:  The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.

// var currYear = prompt("Enter the Current Year");
// var birthYear = prompt(" Enter the Birth Year");
// var ageCal = currYear - birthYear;
// document.write("<h1>Age Calculator</h1>");
// document.write("<br> The Current Year is :" + currYear);
// document.write("<br> The Birth Year is : " + birthYear);
// document.write("<br> TheAge is : " + ageCal);

// Task 12. The Geometrizer: Calculate properties of a circle.
//a. Store a radius into a variable.
//b. Calculate the circumference based on the radius, and
//output “The circumference is NN”.
//(Hint : Circumference of a circle = 2 π r , π = 3.142)
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = +prompt("Enter the Radius Of a Circle");
// var pie = 3.142;
// var circumOfCircle = 2 * pie * radius;
// var areaOfCircle = pie * (radius * radius);

// document.write("<h1>The Geometrizer</h1>");
// document.write("<br> The Radius of circle is : " + radius);
// document.write("<br> The Cicumference is : " + circumOfCircle);
// document.write("<br> The Area of circle is : " + areaOfCircle);

//Task 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// var favSnack = prompt("Enter your Favourite Snack : ");
// var currAge = +prompt("Enter Current Age: ");
// var maxAge = +prompt("Enter Maximum Age : ");
// var snacks = +prompt("Enter Amounts of Snacks per Day : ");
// var toatl = (maxAge - currAge) * 3;

// document.write("<h1> The Lifetime Supply Calculator </h1>");
// document.write("<br> Favourite Snack : " + favSnack);
// document.write("<br> Current Age : " + currAge);
// document.write("<br> Estimated Age : " + maxAge);
// document.write("<br> You will need " + favSnack + " to last you until the ripe old age of : " + toatl);

//===================================================================//

// CHAPTER 6-9:

//Task 01: Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = +prompt("Enter the numbers : ");
// document.write("Result: ");
// document.write("<br> The value of a is : " + a);
// document.write("<br>----------------------------------------------");
// document.write("<br> The value of ++a is : " + ++a);
// document.write("<br> Now the value of a is : " + a);
// document.write("<br><br>");
// document.write("<br><br>");
// document.write("<br> The value of a++ is : " + a++);
// document.write("<br> Now the value of a is : " + a);
// document.write("<br><br>");
// document.write("<br><br>");
// document.write("<br> The value of --a is : " + --a);
// document.write("<br> Now the value of a is : " + a);
// document.write("<br><br>");
// document.write("<br><br>");
// document.write("<br> The value of a-- is : " + a--);
// document.write("<br> Now the value of a is : " + a);

//Task 02: What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b =  1;
// var c;
// --a;
// document.write("--a : "+ a);
// c = --a - --b;
// document.write("<br> --a - --b  :"+ c);
// c = --a - --b + ++b;
// document.write("<br> --a - --b + ++b  :"+ c);
// c = --a - --b + ++b + b--;
// document.write("<br> --a - --b + ++b + b--  :" + c);

//Task 03: Write a program that takes input a name from user & greet the user.

// var yourName = prompt("Enter your name :");
// alert("Thanks to visit the Website :"+ yourName);

//Task 04: Missing from pdf.

//Task 05:5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5 should be displayed by default.

// var num = +prompt("Enter any number you want to display its multiplication:");

// if(num===0){
//     num = 5;
//     document.write("<h1>Table of : 5</h1>");
//     for(var i = 1; i<=10; i++){
//       document.write("<br>"+num + " x " + i + " : " + num*i);
//     }
// }
// else{
//     document.write("<h1>Table of : "+num +"</h1>");
//     for(var i = 1; i<=10; i++){
//       document.write("<br>"+num + " x " + i + " : " + num*i);
//     }
// }

//Task 06: Take : a) Take three subjects name from user and store them in 3different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table).

// var firstSub = prompt("Enter First subject name : ");
// var secondSub = prompt("Enter Second subject name : ");
// var thirdSub = prompt("Enter Third subject name : ");

// var totalMarksOfAllSub = 300;
// var firstSuubjectNum = +prompt("Enter the obtained marks of First subject : "); 
// var secondSuubjectNum = +prompt("Enter the obtained marks of Second subject : "); 
// var thirdSuubjectNum = +prompt("Enter the obtained marks of Third subject : "); 

// var obtMarks = firstSuubjectNum + secondSuubjectNum + thirdSuubjectNum;
// var per = (obtMarks/totalMarksOfAllSub) * 100;
// document.write("<table>");
// document.write("<tr>");
// document.write("<th>Subject</th>");
// document.write("<th>Total Marks</th>");
// document.write("<th>Obtained Marks</th>");
// document.write("<th>Percentage</th>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+ firstSub +"</td>");
// document.write("<td>100</td>");
// document.write("<td>"+ firstSuubjectNum +"</td>");
// document.write("<td>"+ firstSuubjectNum + "%" +"</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+ secondSub +"</td>");
// document.write("<td>100</td>");
// document.write("<td>"+ secondSuubjectNum +"</td>");
// document.write("<td>"+ secondSuubjectNum+ "%" +"</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td>"+ thirdSub +"</td>");
// document.write("<td>100</td>");
// document.write("<td>"+ thirdSuubjectNum +"</td>");
// document.write("<td>"+ thirdSuubjectNum+ "%" +"</td>");
// document.write("</tr>");
// document.write("<tr>");
// document.write("<td></td>");
// document.write("<td>300</td>");
// document.write("<td>"+ obtMarks +"</td>");
// document.write("<td>"+ Math.round(per) + "%" +"</td>");
// document.write("</tr>");
// document.write("</table>");

//==================================================================================//


// Chapter 9-11

//Task 01: Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
//“Welcome to city of lights”

// var city = prompt("Enter the city name :");

// if(city==="Karachi" || gender==="KARACHI"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome to "+ city);
// }

//Task 02: Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
//user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your Geneder : ");
// if(gender==="male" || gender==="Male"){
//     alert("Good Morning Sir");
// }
// else if(gender==="female" || gender==="Female"){
//     alert("Good Morning Ma'am");
// }

//Task 03:Write a program to take input color of road traffic signal//from the user 
//& show the message according to this table:

// var roadTrafficSignal = prompt("Enter the color of road traffic signal :");

// if(roadTrafficSignal==="Red" || roadTrafficSignal==="RED" || roadTrafficSignal==="red"){
//     alert("Must Stop");
// }
// else if(roadTrafficSignal==="Yellow" || roadTrafficSignal==="YELLOW" || roadTrafficSignal==="yellow"){
//     alert("Ready to move");
// }
// else if(roadTrafficSignal==="Green" || roadTrafficSignal==="GREEN" || roadTrafficSignal==="green"){
//     alert("Move now");
// }

//Task 04: Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”.

// var currentFuel = +prompt("Enter the Current Fuel : ");

// if(currentFuel < 0.25){
//    alert("Please refill the fuel in your car");
// }
// else{
//     alert("Donot fill the fuel");
// }

//Task 05: Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a)
// var a = 4;
// if (++a === 5) { alert("given condition for variable a is true"); } // alert massege is running

// // b)
// var b = 82;
// if (b++ === 83) { alert("given condition for variable b is true"); } // not running condition false

// // c)
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// } // not running
// if (c === 13) {
//     alert("condition 2 is true");
// } // condition 2 is true
// if (++c < 14) {
//     alert("condition 3 is true");
// } // not running
// if (c === 14) {
//     alert("condition 4 is true");
// } // condition 4 is true

// // d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) { // condition running (true)
//     alert("The cost equals");
// }

// // e)
// if (true) { alert("True"); } // running
// if (false) { alert("False"); } // not running

// // f)
// if ("car" < "cat") { 
//     alert("car is smaller than cat"); 
// } //running

//Task 06: Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:

// var obtMarks = +prompt("Enter the Obtained Marks in three subjects : ");
// var totalMarks = +prompt("Enter the Total Marks of three subjects :");
// percentage = (obtMarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>")

// if(percentage >= 80){
//     document.write("<br> Total marks : " + totalMarks);
//     document.write("<br> Marks Obtained : " + obtMarks);
//     document.write("<br> Percentage : "+ Math.round(percentage) +"%");
//     document.write("<br> Grade : A-one");
//     document.write("<br> Remarks : Excellent");

// }
// else  if(percentage >= 70){
//     document.write("<br> Total marks : " + totalMarks);
//     document.write("<br> Marks Obtained : " + obtMarks);
//     document.write("<br> Percentage : "+ Math.round(percentage) +"%");
//     document.write("<br> Grade : A");
//     document.write("<br> Remarks : Good");

// }
// else if(percentage >= 60){
//     document.write("<br> Total marks : " + totalMarks);
//     document.write("<br> Marks Obtained : " + obtMarks);
//     document.write("<br> Percentage : "+ Math.round(percentage) +"%");
//     document.write("<br> Grade : B");
//     document.write("<br> Remarks : You need to improve");

// }
// else if(percentage < 60){
//     document.write("<br> Total marks : " + totalMarks);
//     document.write("<br> Marks Obtained : " + obtMarks);
//     document.write("<br> Percentage : "+ Math.round(percentage) +"%");
//     document.write("<br> Grade : Fail");
//     document.write("<br> Remarks : Sorry");

// }

//Task 07: Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

// var num = +prompt(" Guess the secret number ..\n [Hint: number is in between 1-10]");

// if(num===3){
//     alert("Bingo! Correct answer");
// }
// else if(num===4){
//    alert("Close enough to the correct answer");
// }
// else{
//     alert("SORRY! Try again.");
// }

//Task 08: Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var number = +prompt("Enter the number :");

// if(number % 3 == 0){
//     alert("The number is Divisible by 3");
// }
// else{
//    alert("The number is not divisible by 3");
// }

//Task 09:Write a program that checks whether the given input is an even number or an odd number.

// var anyNumber = +prompt("Enter any number");

// if(anyNumber % 2 == 0){
//     alert("The number is Even!");
// }
// else {
//  alert("The number is Odd!");
// }

//Task 10:Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("Enter the Temperature in  °C ");

// if(temp > 40){
//    alert("It is too hot outside.");
// }
// else if(temp > 30){
//     alert("The Weather today is Normal.");
//  }
//  else if(temp > 20){
//     alert("Today’s Weather is cool.");
//  }
//  else if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.");
//  }

//Task 011:Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %) //Compute & show the calculated result to user.

// var firstNumber = +prompt("Enter the First Number");
// var secondNumber = +prompt("Enter the Second Number");
// var operation = prompt("Enter Operation (+, -, *, /, %) ");
// if (operation === '+') {
//     var result = firstNumber + secondNumber;
//     document.write("Result :  " + firstNumber + " " + operation + " " + secondNumber + " = " + result);

// } else if (operation === '-') {
//     var result = firstNumber - secondNumber;
//     document.write("Result :  " + firstNumber + " " + operation + " " + secondNumber + " = " + result);

// } else if (operation === '*') {
//     var result = firstNumber * secondNumber;
//     document.write("Result :  " + firstNumber + " " + operation + " " + secondNumber + " = " + result);

// } else if (operation === '/') {
//     var result = firstNumber / secondNumber;
//     document.write("Result :  " + firstNumber + " " + operation + " " + secondNumber + " = " + result);

// } else if (operation === '%') {
//     var result = firstNumber % secondNumber;
//     document.write("Result :  " + firstNumber + " " + operation + " " + secondNumber + " = " + result);
// }


//==================================================================================//

      // CHAPTER 12-13

//Task 01:Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var char = prompt("Enter a Charcter : ");
// var inputTxt =char.charCodeAt(char);
// if (inputTxt >= 65 && inputTxt <= 90){
//    document.write("The letter is Upper Case :" +char);
// }
// else if (inputTxt >= 97 && inputTxt  <= 122 ){
//     document.write("The letter is Lower Case:" +char);
   
// }
// else{
//     document.write("This number :" + char);

// }

//Task 02:Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.

// var firstInteger = +prompt("Enter a First Integer : ");
// var secondInteger = +prompt("Enter a Second Integer : ");

// if(firstInteger > secondInteger){
//     document.write("The Largest number is : " + firstInteger);
// }
// else if(secondInteger > firstInteger){
//     document.write("The Largest number is : " + secondInteger);

// }
// else if(firstInteger===secondInteger){
//     document.write("Both  numbers are equal is :" );

// }

//Task 03: Write a program that takes input a number from user &
//state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number : ");

// if(number > 0){
//    document.write("The number is Positive : " + number);
// } 
// else if(number < 0){
//     document.write("The number is Negative : " + number);
//  } 
//  else if(number === 0){
//     document.write("The number is Zero : " + number);     
// }

//Task 04: Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise.

// var character = prompt("Enter a Character :");

// if(character === "a" || character === "e"  || character === "i"  || character === "o"  || character === "u" || 
// character === "A" || character === "E"  || character === "I"  || character === "O"  || character === "U"  ){
//    document.write("It is a vowel "+ true);
// }
// else{
//     document.write("It is not a vowel " + false);
// }

//Task 05: Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password
//c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”  ii. Check if both passwords are same. If they are  same, show message “Correct! The password you
// entered matches the original password”. Show  “Incorrect password” otherwise

// var userPassword = "messi-234";
// var checkPassword = prompt("Enter your Passsword");

// if(checkPassword === ""){
//    alert("Please Enter your Password");
// }
// else if( checkPassword === userPassword){
//      alert("Correct! The password you entered matches the original password");
// }
// else if(checkPassword!== userPassword){
//  alert("Incorrect password");
// }

//Task 06: This if/else statement does not work. Try to fix it:

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = alert( "Good day");
// }
// else {
//   greeting = alert("Good evening");
// }

//Task 07: Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements.

// var time = +prompt("Enter a current time  in 24 hours clock format like: 1900");

// if(time >= 0000 && time < 1200){
//    alert("Good morning!");
// }
// else if(time >= 1200 && time < 1700){
//     alert("Good afternoon!");
//  }
//  else if(time >= 1700 && time < 2100){
//     alert("Good evening!");
//  }
//  else if(time >= 2100 && time < 2359){
//     alert("Good night!");
//  }

//======================================================================================//

         // CHAPTER 14-16

//Task 01: Declare an empty array using JS literal notation to store student names in future.

// var studentName = [];

//Task 02: Declare an empty array using JS object notation to store student names in future.

// var studentName = new Array();

//Task 03: Declare and initialize a strings array.

// var stringArray = ["Apple" , "Mango" , "Orange"];

//Task 04: Declare and initialize a numbers array.

//  var numArray = [ 1 , 2 , 3 , 4 , 5 ];

//Task 05:Declare and initialize a boolean array.

// var booleanArray = [true,false];

//Task 06: Declare and initialize a mixed array.

// var mixedArray = ["Apple" ,  1 , "Mango" , true , "Orange" , 3, "43" , false ];

//Task 07: Declare and Initialize an array and store available education qualifications in Pakistan
 //(e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// var educationQualificationsInPakistan = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
// document.write("<h1>Qualifications</h1>");
// document.write("<br> 1) " + educationQualificationsInPakistan[0]);
// document.write("<br> 2) " + educationQualificationsInPakistan[1]);
// document.write("<br> 3) " + educationQualificationsInPakistan[2]);
// document.write("<br> 4) " + educationQualificationsInPakistan[3]);
// document.write("<br> 5) " + educationQualificationsInPakistan[4]);
// document.write("<br> 6) " + educationQualificationsInPakistan[5]);
// document.write("<br> 7) " + educationQualificationsInPakistan[6]);
// document.write("<br> 8) " + educationQualificationsInPakistan[7]);

//Task 08:Write a program to store 3 student names in an array.Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students like:
// var stdName1 =  prompt("Enter First Student Name  : ");
// var stdName2 =  prompt("Enter Second Student Name : ");
// var stdName3 =  prompt("Enter Third Student Name : ");
// var stdScore1 =  prompt("Enter First Student Score : ");
// var stdScore2 =  prompt("Enter Second Student Score : ");
// var stdScore3 =  prompt("Enter Third Student Score : ");
// var studentName = [stdName1 , stdName2 , stdName3];
// var studentScore = [ stdScore1 , stdScore2 , stdScore3 ];

// var per0 = (studentScore[0]/500) * 100;
// var per1 = (studentScore[1]/500) * 100;
// var per2 = (studentScore[2]/500) * 100;

// document.write("Score of " + studentName[0] + " is " + studentScore[0] + "." + " Percentage: " + Math.round(per0) + "%" );
// document.write("<br>Score of " + studentName[1] + " is " + studentScore[1] + "." + " Percentage: " + Math.round(per1) + "%" );
// document.write("<br>Score of " + studentName[2] + " is " + studentScore[2] + "." + " Percentage: " + Math.round(per2) + "%" );

//Task 09:Initialize an array with color names. Display the array elements in your browser.................

// var color = ["Red", "Blue", "Green"];
// document.write("initial array </br>");
// console.log("initial array \n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write("</br>" + color[i] + " </br>");
// }


// var add_Start = prompt("enter color to add at start");
// color.unshift(add_Start); //adding color at start
// document.write("After adding a color at start</br>");
// console.log("After adding a color at start\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var add_end = prompt("enter color to add at end");
// color.push(add_end); //adding colorat end
// document.write("After adding a color at end</br>");
// console.log("After adding a color at end\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var add_Start1 = prompt("enter one color to add at start");
// var add_Start2 = prompt("enter another color to add at start");
// color.unshift(add_Start1); //adding two color at start add1
// color.unshift(add_Start2); //adding two color at start add2
// document.write("After adding two color at start</br>");
// console.log("After adding two color at start\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var delete_Start = prompt("press enter or ok for delete first color");
// color.shift(delete_Start); //delete color at start
// document.write("After deleted a color at start</br>");
// console.log("After deleted a color at start\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var delete_last = prompt("press enter or ok for delete last color");
// color.pop(delete_last); //delete color at start
// document.write("After deleted a color at end</br>");
// console.log("After deleted a color at end\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var Add_Any_position_index = +prompt("Enter color at any position\nplease enter index");
// var color_name = prompt("enter color name");
// color.splice(Add_Any_position_index, 0, color_name); //add color at any position
// document.write("After add a color at " + Add_Any_position_index + "position </br>");
// console.log("After add a color at " + Add_Any_position_index + " position\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
// }

// var delete_color_at_Any_index = +prompt("Enter index where you delete color");
// var How_many_color = +prompt("enter number how many color you delete");
// color.splice(delete_color_at_Any_index, How_many_color); //delete color(s) at any position
// document.write("After deleted  color(s) from " + delete_color_at_Any_index + " position to " + How_many_color + " position </br>");
// console.log("After delete color(s) from " + delete_color_at_Any_index + " position to " + How_many_color + " position\n");
// for (var i = 0; i < color.length; i++) {
//     console.log(color[i]);
//     document.write(" </br>" + color[i] + "  </br>");
//}

//Task 10: Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// var student_Score = [];
// var size = 5;

// for (var i = 0; i < size; i++) {
//     //Taking Input from user
//     student_Score[i] = prompt('Enter Score ' + (i + 1));
// }
// document.write(student_Score.sort()); // for sorting i n assending order

// Task 11: Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array

// var cities = ["karachi", "Lahore", "Islamabad", "Quetta", "Peshawer"];
// document.write("Cities list.</br></br> ");
// for (var i = 0; i < cities.length; i++) {
//     document.write(cities[i] + " </br>");
// }
// var selected_Cities = cities.slice(1, 4);
// document.write("</br>selected cities </br></br>");
// document.write(selected_Cities);

//Task 12:Write a program to create a single string from the below mentioned array:var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//(Use array’s join method)

// var arr = ["This", "is", "my", "cat"];
// document.write("Array </br>");
// document.write(arr);
// var sentence = arr.join(" ");
// document.write("</br></br> String </br>");
// document.write(sentence);

//Task 13:Create a new array. Store values one by one in such a way that you can access the values in the order in which they
//were stored. (FIFO-First In First Out).

// var devices = [];
// var size = 5;
// document.write("Devices:</br></br>");
// for (var i = 0; i < size; i++) {
//     // 	//Taking Input from user
//     devices[i] = prompt('Enter device ' + (i + 1));
//     console.log(devices[i]);
//     document.write(" " + devices[i] + " ,");
// }
// for (var j = 0; j < size; j++) {
//     var choice = +prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
//     if (choice === 1) {
//         var deleted = devices.shift();
//         document.write("</br> Out: </br>");
//         document.write(deleted + " </br>");
//     } else if (choice === 0) {
//         document.write("Devices in list:</br>");
//         document.write(" </br> " + devices + " ,</br>");
//         size--;
//     }
// }

//Task 14: . Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out).

// var devices = [];
// var size = 5;
// document.write("Devices:</br></br>");
// for (var i = 0; i < size; i++) {
//     // 	//Taking Input from user
//     devices[i] = prompt('Enter device ' + (i + 1));
//     console.log(devices[i]);
//     document.write(" " + devices[i] + " ,");
// }
// for (var j = 0; j < size; j++) {
//     var choice = +prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
//     if (choice === 1) {
//         var deleted = devices.pop();
//         document.write("</br> Out: </br>");
//         document.write(deleted + " </br>");
//     } else if (choice === 0) {
//         document.write("Devices in list:</br>");
//         document.write(" </br> " + devices + " ,</br>");
//         size--;
//     }
// }

//Task 15:Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.
//Display the following dropdown/select menu in your browser using document.write() method:
// document.write("Dropdown menu </br>");

// document.write("<select>");
// document.write("<option>Apple</option>");
// document.write("<option>Samsung</option>");
// document.write("<option>Motorola</option>");
// document.write("<option>Nokia</option>");
// document.write("<option>Sony</option>");
// document.write("<option>Haier</option>");
// document.write("</select>");

//==================================================================================//

     //CHAPTER 17-20

// Task 1;

// var arr = [
//       [1],
//       [2],
//       [3],
//       [4],
//   ];
  
  // Task 2;
  
//   var arr = [ ///// 2D array
//       [0, 1, 2, 3],
//       [1, 0, 1, 2],
//       [2, 1, 0, 1],
//   ];
//   document.write("2D Array:</br>");
//   for (var i = 0; i < arr.length; i++) {
  
//       for (var j = 0; j < arr.length + 1; j++) {
//           document.write(" " + arr[i][j]);
//       }
//       document.write("</br>");
//   }
  
//   // Task 3;
  
//   for (var i = 1; i <= 10; i++) { // counting 1-10
//       document.write(i + " </br>");
//   }
  
  
//   // Task 4;
  
//   var number = +prompt("enter number"); //////// table of any num from any length
//   var length = +prompt("Enter length of table");
//   if (number >= 1) {
//       document.write("Table of " + " " + number + "</br> Length " + length + " </br></br>");
//       for (var i = 1; i <= length; i++) {
//           document.write(" " + number + " X " + i + " = " + number * i + "</br>");
//       }
//   }
  
  
//   // Task 5;
  
//   var fruit = ["Apple", "Mango", "Banana", "Orange", "strawberry"];
//   document.write("Fruits name:</br></br>");
//   for (var i = 0; i < fruit.length; i++) {
//       document.write("" + fruit[i] + " </br>");
//   }
//   document.write("</br>");
  
//   for (var i = 0; i < fruit.length; i++) {
//       document.write(" Element of index " + i + " is " + fruit[i] + " </br>");
//   }
  
//   // Task 6;
  
//   document.write("Counting: </br></br>"); //a)
//   for (var i = 1; i <= 15; i++) {
//       document.write(i + ", ");
//   }
  
//   document.write("</br></br> Reverse Counting: </br></br>"); //b)
//   for (var j = 10; j >= 1; j--) {
//       document.write(j + ", ");
//   }
  
//   document.write("</br></br> Even Counting: </br></br>"); //c)
//   for (var i = 0; i <= 20; i = i + 2) {
//       document.write(i + ", ");
//   }
  
//   document.write("</br></br> odd Counting: </br></br>"); //d)
//   for (var i = 0; i <= 20; i++) {
//       if (i % 2 != 0) {
//           document.write(i + ", ");
//       }
//   }
//   document.write("</br></br> Series: </br></br>"); //c)
//   for (var i = 2; i <= 20; i = i + 2) {
//       document.write(i + "k, ");
//   }
  
  
//   // Task 7;
  
//   var arr = ["cake", "pine apple", "cookie", "chips", "patties"];
  
//   var input = prompt("Enter iteam name");
  
  
//   // console.log(arr[0]);
//   if (input === "cake") {
//       alert(input + " is available at index  0  in our bakery");
  
//   }
  
//   if (input === "pine apple") {
//       alert(input + " is available at index  1  in our bakery");
  
//   }
  
//   if (input === "cookies") {
//       alert(input + " is available at index  2  in our bakery");
  
//   }
  
//   if (input === "chips") {
//       alert(input + " is available at index  3  in our bakery");
  
//   }
  
//   if (input === "patties") {
//       alert(input + " is available at index  4  in our bakery");
  
//   } else {
  
//       alert("We are sorry, " + input + " is not available in our bakery.");
  
//   }
  
  
//   // Task 8;
  
//   var arr = []; // finding large value
//   var size = 5;
//   for (var i = 0; i < size; i++) {
//       arr[i] = +prompt("Enter number " + (i + 1));
//   }
  
//   var max_value = arr[0];
  
//   for (var i = 0; i < 5; i++) {
//       if (arr[i] > max_value) {
//           max_value = arr[i];
//       }
//   }
//   document.write("Array items: </br> </br>");
//   document.write(arr + ", </br></br>");
//   document.write("</br> The Largest number is : " + max_value);
  
//   // Task 9;
  
//   var arr = []; // finding smallest value
//   var size = 5;
//   for (var i = 0; i < size; i++) {
//       arr[i] = +prompt("Enter number " + (i + 1));
//   }
  
//   var min_value = arr[0];
  
//   for (var i = 0; i < 5; i++) {
//       if (arr[i] < min_value) {
//           min_value = arr[i];
//       }
//   }
//   document.write("Array items: </br> </br>");
//   document.write(arr + ", </br></br>");
//   document.write("</br> The smallest number is : " + min_value);
  
  
//   // Task 10;
  
//   document.write("Multiples of  5 (Range: 1-100) </br>"); //// multiples of 5 (Range :1-100)
//   for (var i = 1; i <= 100; i++) {
//       if (i % 5 == 0) {
//           document.write(i + " , ");
//       }
// }


//===========================================================//

//                                             // Chapters 21 to 25

// // task 1                                            
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");

// // task 2
// var userInput = prompt("Enter Your Favorite mobile Phone Model");
// document.write("My favorite phone is: " + userInput + "<br>");
// var length = userInput.length;
// document.write("Length of string is: " + length);

// task 3
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>")
// nationality = nationality.indexOf("n");
// document.write("Index of 'n' is: " + nationality);

// // task 4
// var greet = "Hello World";
// document.write("String: " + greet + "<br>");
// greet = greet.lastIndexOf("l");
// document.write("Last index of 'l' is: " + greet);

// // tsak 5
// var nationality = "Pakistani";
// document.write("String: " + nationality + "<br>");
// nationality = nationality.charAt(3);
// document.write("Character at index 3 is: " + nationality);

// // task 6
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(" " + lastName);
// document.write("Welcome " + fullName + "!");

// // task 7
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// city = city.replace("Hyder", "Islam");
// document.write("After replacement " + city);

// // task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message + "<br>");
// message = message.replace(/and/g, "&");
// document.write("Message after replacement: " + message);

// // task 9
// var num = 472;
// document.write("Value: " + num.toString() + "<br>" + "Type: String" + "<br><br>");
// num = Number(num);
// document.write("Value: " + num + "<br>" + "Type: Number" + "<br><br>");

// // task 10
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>");
// userInput = userInput.toUpperCase();
// document.write("Upper Case: " + userInput);

// // task 11
// var userInput = prompt("Enter your word");
// document.write("User Input is: " + userInput + "<br>")
// var firstLetter = userInput.slice(0, 1);
// firstLetter = firstLetter.toUpperCase();
// var otherLetters = userInput.slice(1);
// otherLetters = otherLetters.toLocaleLowerCase();
// document.write("Title Case: " + firstLetter + otherLetters);

// // task 12
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var newNum = num.toString();
// document.write("Result: " + newNum.replace(".", ""));

// // task 13
// var userName = prompt("Please Enter Your Username");
// userName = userName.split("");
// for (i = 0; i < userName.length; i++) {
//     if (userName[i] === String.fromCharCode(33) || userName[i] === String.fromCharCode(44) || userName[i] === String.fromCharCode(46) || userName[i] === String.fromCharCode(64)) {
//         alert("Please Enter Valid Username");
//     }else {
//         document.write("Correct");
//     }
// }

// // task 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am?");
// userInput = userInput.toLowerCase();
// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(userInput + " is <strong>available</strong> at index " + i + " in our bakery");
//         break
//     }
// }
// if (userInput !== arr[i]) {
//     document.write("We are sorry. " + userInput + " is <strong>not available</strong> in our bakery");
// }

// // task 15
// var password = prompt("Enter Your Password");
// if (password >= String.fromCharCode(65) || password <= String.fromCharCode(90) && password >= 0 || password <= 9) {
//     document.write(password);
// }
// else {
//       alert("Please Enter valid Password!");
// }

// // task 16
// var university = "University of Karachi";
// document.write(university.split("").join("<br>"));

// // task 17
// var userInput = prompt("Enter Your Word");
// document.write("User input: " + userInput + "<br>");
// userInput = userInput.split("").reverse();
// document.write("Last character of input: " + userInput.slice(0,1));

// // task 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// var text1 = text.toLowerCase();
// document.write("There are " + text1.match(/the/g).length + " occurence(s) of word 'the'");

//                                             // Chapters 26 to 30

// // task 1
// var num = +prompt("Enter positive integer");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 2
// var num = +prompt("Enter negative number");
// document.write("Number: " + num + "<br>");
// var num1 = Math.round(num);
// document.write("Round off value: " + num1 + "<br>");
// var num2 = Math.floor(num);
// document.write("Floor value: " + num2 + "<br>");
// var num3 = Math.ceil(num);
// document.write("Ceil value: " + num3 + "<br>");

// // task 3
// var num = +prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// // task 4
// var dice = Math.random() * 6;
// document.write("Random dice value: " + Math.ceil(dice) + "<br>");
// var dice1 = Math.random(dice) * 6;
// document.write("Random dice value: " + Math.ceil(dice1) + "<br>");
// var dice2 = Math.random(dice1) * 6;
// document.write("Random dice value: " + Math.ceil(dice2));

// // task 5
// var toss = Math.random() * 2;
// toss = Math.ceil(toss);
// if (toss === 1) {
//     document.write(toss + "<br>" + "random coin value: Tails")
// }else {
//     document.write(toss + "<br>" + "random coin value: Heads")
//}

// // task 6
// var num = Math.random() * 100;
// num = Math.ceil(num);
// document.write("random num between 1 and 100: " + num);

// // task 7
// var weight = prompt("Enter your weight in kilograms");
// document.write("The weight of user is " + Number(weight));

// // task 8
// var num = 5;
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

// var num = Math.random() * 10;
// num = Math.ceil(num);
// var userInput = +prompt("Enter secret number between 1 to 10");
// if (userInput === num) {
//     document.write("Congratulation you guess the number!");
// }else {
//     document.write("Try again!");
// }

//                                             // Chapters 31 to 34

// // task 1
// var date = new Date();
// document.write(date);

// // task 2
// var date = new Date();
// date = date.toString();
// var month = date.slice(4, 8);
// alert("Current Month: " + month);

// // task 3
// var date = new Date();
// date = date.toString();
// var day = date.slice(0, 4);
// alert("Today is " + day);

// // task 4
// var day = prompt("Enter Day");
// day = day.toLowerCase();
// if (day === "saturday" || day === "sunday") {
//     alert("It's Fun day");
// }else {
//     alert("It's not a Fun day");
// }

// // task 5
// var day = new Date();
// day = day.getDate();
// if (day < 16) {
//     document.write("First fifteen days of the month");
// }else {
//     document.write("Last days of the month");
// }

// // task 6
// var date = new Date();
// document.write("Current Date: " + date + "<br>");
// var milliSeconds = date.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br>");
// var minutes = milliSeconds / (1000 * 60 * 60);
// document.write("Elapsed minutes since January 1, 1970: " + minutes);

// // task 7
// var time = new Date();
// time = time.getHours();
// if (time < 12) {
//     alert("It's AM");
// }else {
//     alert("It's PM")
// }

// // task 8
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);

// // task 9
// var ramadan = new Date("June 18, 2015");
// var ramadanMili = ramadan.getTime();
// var date = new Date();
// var dateMili = date.getTime();
// var dif = dateMili - ramadanMili;
// dif = dif / (1000*60*60*24);
// document.write(Math.floor(dif) + " days have passed since 1st Ramadan, 2015");

// // task 10
// var begDate = new Date("Jan 01, 2015");
// var begDateMili = begDate.getTime();
// var refDate = new Date("Sat Dec 05, 2015 22:50:16");
// document.write("On reference date " + refDate + ", <br>")
// var refDateMili = refDate.getTime();
// var dif = refDateMili - begDateMili;
// dif = dif / (1000*60);
// document.write(Math.ceil(dif) + " seconds has passed since beginning of 2015");

// // task 11
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var hour = new Date("Jun 18, 2020 11:30:00");
// document.write("1 hour ago, it was " + hour);

// // task 12
// var date = new Date("Jun 18, 2020 12:30:00");
// document.write("current date: " + date + "<br>");
// var year = new Date("Jun 18, 1920 11:30:00");
// document.write("100 years back , it was " + year);

// // task 13
// var userInput = new Date(prompt("Enter Your Birth Year"));
// var userInputMili = userInput.getTime();
// userInput = userInput.getFullYear();
// var todayDate = new Date();
// var todayDateMili = todayDate.getTime();
// var dif = todayDateMili - userInputMili;
// dif = dif / (1000*60*60*24*30*12);
// document.write("Your age is " + Math.floor(dif) + "<br>");
// document.write("Your birth year is " + userInput);

// // task 14
// document.write("<h1>K-Electric Bill</h1> <br>");
// var name = prompt("Enter your name");
// document.write("Costumer Name: " + "<strong>" + name + "</strong>" + "<br>")
// var month = "June";
// document.write("Month: " + "<strong>" + month + "</strong>" + "<br>");
// var numOfUnits = +prompt("Enter consumed units");
// document.write("Number of units: " + "<strong>" + numOfUnits + "</strong>" + "<br>");
// var charges = 16;
// document.write("Charges per unit: " + "<strong>" + charges + "</strong>" + "<br><br>");
// var netAmount = numOfUnits * charges;
// document.write("Net Amount Payable (within Due Date): " + "<strong>" + netAmount + "</strong>" + "<br>");
// var latePay = 350;
// document.write("Late Payment Surcharge: " + "<strong>" + latePay + "</strong>" + "<br>");
// var grossAmount = netAmount + latePay;
// document.write("Gross Amount Payable (after Due Date): " + "<strong>" + grossAmount + "</strong>");

//                                             // Chapters 35 to 38

// // task 1
// function date() {
//     document.write(new Date());
// }

// date();

// // task 2
// function greet(firstName, lastName) {
//     firstName = firstName.toUpperCase()
//     lastName = lastName.toUpperCase()
//     document.write("Hello " + firstName + " " + lastName + "!");
// }
// greet(prompt("Enter your first name"), prompt("Enter your last name"));

// // task 3
// var sum;
// function greet(firstNum, secondNum) {
//     document.write("First Number is : " + firstNum + "<br>")
//     document.write("Second Number is : " + secondNum + "<br>")
//     sum = firstNum + secondNum
//     document.write("Sum: " + sum);
// }
// greet(+prompt("Enter first number"), +prompt("Enter second number"));

// // task 4
// function calculator(num1, operator, num2) {
//     switch (operator) {
//         case "+":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 + num2);

//         case "-":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 - num2);

//         case "*":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 * num2);

//         case "/":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 / num2);

//         case "5":
//             return document.write(num1 + " " + operator + " " + num2 + " = "), document.write(num1 % num2);

//         default:
//             return document.write("Grr an error accurred")
//         }
// }

// calculator(+prompt("Enter 1st Number"), prompt("Enter Operator: + - * / %"), +prompt("Enter 2nd Number"));

// // task 5
// function square(argu) {
//     document.write("Input is: " + argu + "<br>")
//     document.write("Square is: " + argu * argu);
// }
// square(+prompt("Enter number for square"));

// // task 6
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }else {
//         return num * factorial(num-1);
//     }
// }
// var num = +prompt("Enter Number for factorial");
// var answer = factorial(num);
// document.write("The factorial of " + num + " is " + answer);

// // task 7
// function counting(num1, num2) {
// document.write("Starting number is: " + num1 + "<br>")
// document.write("Ending number is: " + num2 + "<br>")
//     for (var i = num1; i <= num2; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(+prompt("Enter starting number"), +prompt("Enter ending number"));

// // task 8
// function hypotenuse(base, perpendicular) {
//     function square(v1, v2) {
//         document.write("First value is: " + v1 + "<br>");
//         var v1Square = v1*v1;
//         document.write("Sqaure root of " + v1 + " is: " + v1Square + "<br><br>");
//         document.write("Second value is: " + v2 + "<br>");
//         var v2Square = v2*v2;
//         document.write("Sqaure root of " + v2 + " is: " + v2Square + "<br><br>");
//         var sqrt = v1*v1 + v2*v2;
//         document.write("Sum of " + v1Square + " and " + v2Square + " is " + sqrt + "<br><hr>");
//     }
//     square(base, perpendicular)
//     document.write("Hypotenuse: " + Math.hypot(base, perpendicular))
// }
// hypotenuse(+prompt("Enter Base"), +prompt("Enter Perpendicular"));

// // task 9
// var height = 5;
// function area(width, height) {
//     document.write("Area of a rectangle is: " + width * height);
// }
// area(10, height);

// // task 10
// function palindrome(word) {
//     var reverse = word.split("").reverse().join("");
//     switch (word) {
//         case reverse:
//             return document.write(word + " and " + reverse + " is same so this is a Palindrome word");

//         default:
//             return document.write(word + " and " + reverse + " is not same so this is not a Palindrome word");

//     }
// }
// palindrome(prompt("Enter word"));

// // task 11
// function titleCase(string) {
//     string = string.split(" ");
//     for (var i = 0; i < string.length; i++) {
//         var firstLetter = string[i].slice(0, 1);
//         firstLetter = firstLetter.toUpperCase();
//         var otherLetters = string[i].slice(1);
//         otherLetters = otherLetters.toLowerCase();
//         var result = firstLetter + otherLetters;
//         document.write(result + " ");
//     }
//     // var capitalized = string.replace("the", "The").replace("quick", "Quick").replace("brown", "Brown").replace("fox", "Fox").replace("jumps", "Jumps").replace("over", "Over").replace("the", "The").replace("lazy", "Lazy").replace("dog", "Dog");
//     // document.write(capitalized);
// }
// titleCase("the quick brown fox jumps over the lazy dog" + "<br>");
// // titleCase(prompt("Enter some text"));

// // task 12
// function longestWord(word) {
//   word = word.split(" ");
//   var result = word[0];
//   for(var i = 1 ; i < word.length ; i++) {
//     if(result.length < word[i].length) {
//     result = word[i];
//     } 
//   }
//   return document.write(result);
// }
// longestWord('Web Development Tutorial');

// // task 13
// function check(string, letter) {
//     var lett = letter;
//     string = string.toLowerCase();
//     letter = string.match(/s/g).length;
//     document.write("There are " + letter + " occurence(s) of word " + '"' + lett + '"');
// }
// check("JSResourceS.com", "s")

// // task 14
// document.write("<h1>The Geometrizer</h1> <br>")
// function calcCircumference(radius) {
//     var circumference = 2 * 3.142 * radius
//     document.write("The circumference is " + circumference.toFixed(3) + "<br>");
//     function calcArea(radius) {
//         radius = radius * radius
//         var area = 3.142 * radius;
//         document.write("The area is " + area);
//     }
//     calcArea(20);
// }
// calcCircumference(20);

//                    CHAPTER 38-42

//Task 01:

// function powers(a,b){ //a is base and b is exponent
//   var result = 1;
//   while(b != 0){
//     result *= a;
//     --b;
//   }
//   document.write("<h3>The value of a^b is : "+ result + "</h3>" + "  where a = " + a + " , b = " + 5);
// }
// powers(2,5);

//Task 02:

// function checkLeapYear(leapYear){
//   if(leapYear % 4 == 0){
//     document.write(leapYear + " is Leap Year. ");
    
//   }
//   else{
//     document.write(leapYear + " is not Leap Year :");
//   }
// }
// var year = +prompt("Enter a year to check whether it is leap year or not :");

// checkLeapYear(year);

//Task 03:
// function areaOfTriangle(a,b,c){
//   var s = (parseInt(a) + parseInt(b) + parseInt(c)) / 2;
//   var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
//   document.write("The Area of  Triangle is :" + Math.round(area));
//   document.write("  where a = "+ a + "," + "  b = " + b + "," +"  c = " + c); 
// }
// areaOfTriangle(prompt("Enter the value of side 1 of a triangle "),prompt("Enter the value of side 2 of a triangle "),prompt("Enter the value of side 3 of a triangle "));

//Task 04:

// var total;
// function average(sub1,sub2,sub3){
//     total = sub1 + sub2 + sub3;
//       var aveg = (total)/3;
//        console.log(aveg);
// }

// function percentage(){
//   var perce = ((total)/300) * 100;
//   console.log(perce);
// }
// function main(){
//   // average(55,45,47);
// // percentage();

// }
// main();
//Task 5
//var a = prompt("Enter the string")/
//var b = prompt("Enter any character for finding index")
//for (var i=0;i<a.length;i++){
 //   if (b==a[i])
  //  { console.log("The index of "+ b + " is "+ i );}
//}

//Task 6
//var a = prompt("Enter the string which contain max 25 characters")
//a=a.replace(/[aeiou]/gi, '');
//console.log("Removing of vowels from " + a + " will become ")

//Task 7
//var a = prompt("Enter any string ")
//var b=0
//function Myfunction(){
//    for (var i=0;i<a.length;i++){
//    switch(a[i]){        
//        case "a":
//        case "e":
//        case "i":
//        case "o":
//        case "u":
//            if(a[i-1]=="a" || a[i-1]=="e" || a[i-1]=="i" || a[i-1]=="o" || a[i-1]=="u")
//            {
//                b++;
//            }  
//    }
//}
//}
//Myfunction()
//console.log(a)
//console.log(b)

//Task 8
//var km=prompt("Enter distance between two cities in Km")
//function meter(){return km*1000}
//function feet(){}
//function inches(){}
//function cm(){return km*100000}
//console.log("Km: " + km +"kilometer"+"\nmeter: " + meter()+"meter"+"\nfeet: "+ feet()+"feet"+"\ninches: "+inches()+"inches"+"\nCentimeter: " + cm()+"cm")

//Task 9
//var income= 0;
//var hours = prompt("Enter an overtime hours of emmployee: ")
//if (hours>40)
//    {income= hours *12.0
//    console.log("Your income is " + income)}
//else
//    console.log("You are unelligible")


//Task 10
//var val= prompt("Ene=ter the ammount to be withdraw: ")
//var a=0,b=0,c=0
//if (val%100>=0)
//    a= val/100
//    val=val%100
//    if(val%50>=0)
//        b= val/50
//        val = val %50
//        if(val%10>=0)
//        c= val/10
//        val = val % 10
//console.log("You will have " + parseInt(a) +" hundred notes " + parseInt(b) +" fifty notes "+ parseInt(c) +" ten notes")


//=======================================//


            //    43 to 48 
            1. //Task 1

            // function alertBox() {
            //     var a = document.getElementById('alerts');
            //     alert("Welcome to Website!");
            // }
            
            //Task 2:
            
            // function clickImage() {
            //     var image = document.getElementsByClassName('image');
            //     alert("Thanks for purchasing a phone from us!")
            // }
            
            //Task 3:
            // function deleteBtn1(){
            //    var delRow1 = document.getElementById('deleterow1')
            //    delRow1.remove();
            
            // }
            // function deleteBtn2(){
            //     var delRow2 = document.getElementById('deleterow2')
            //     delRow2.remove();
             
            //  }
            
            //  function deleteBtn3(){
            //     var delRow3 = document.getElementById('deleterow3')
            //     delRow3.remove();
             
            //  }
            //  function deleteBtn4(){
            //     var delRow4 = document.getElementById('deleterow4')
            //     delRow4.remove();
             
            //  }
            
            //Task 4:
            
            // function showImage2() {
            //     var carImage1 = document.getElementById('car1');
            //     carImage1.src = "https://specials-images.forbesimg.com/imageserve/5d35eacaf1176b0008974b54/960x0.jpg?cropX1=790&cropX2=5350&cropY1=784&cropY2=3349"
            // }
              
            // function showImage1() {
            //     var carImage2 = document.getElementById('car1');
            //     carImage2.src = "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
            //  }
            
            
            //Task 05:
            // var count = 0;
            // function counterIncrease(){
            //     var val1 = document.getElementById('counter');
            //     count++;
            //     val1.innerHTML = count;
               
            // }
            // function counterDecrease(){
            //     var val2 = document.getElementById('counter');
            //     count--;
            //     val2.innerHTML = count;
               
            // }
            //=====================================================================//
            
            //                Chapter 49 -52
            
            //Task 1 
            // function show() {
            //     var emailId = document.getElementById("Email");
            //     var userName = document.getElementById("uname");
            //     var password = document.getElementById("pwd");
            //     var confirmPassword = document.getElementById("confirmPwd");
            //     console.log(emailId.value);
            //     console.log(userName.value);
            //     console.log(password.value);
            //     emailId.value = "";
            //     userName.value = "";
            //     password.value = "";
            
            // }  
            
            // Task 2:
            // function readMore() {
            //      var paragraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates doloremque vitae provident  consectetur! Architecto possimus laboriosam itaque, tenetur nostrum quibusdam ea? Earum doloremque cumque eligendi unde quos rerum corrupti expedita";
            //       document.getElementById('para').innerHTML = paragraph;
            //     }
            // function addMessage(){
            //     var val = document.getElementById("val");
            //     var p = document.createElement("p")
            //     var text = document.createTextNode(val.value)
            //     p.appendChild(text)
            //     var messages = document.getElementById("messages")
            //     messages.appendChild(p)
            //  }
            {/* <div id="messages">
            
            </div>
            <input type="text" id="val" />
            <button onclick="addMessage()">Send</button> */}
            
            //Task 3:
            
            // var arrHead = new Array();
            //     arrHead = ['', 'Student Name', 'Roll No', 'Class']; // table headers.
            
            //     // first create a TABLE structure by adding few headers.
            //     function createTable() {
            //         var empTable = document.createElement('table');
            //         empTable.setAttribute('id', 'empTable');  // table id.
            
            //         var tr = empTable.insertRow(-1);
            
            //         for (var h = 0; h < arrHead.length; h++) {
            //             var th = document.createElement('th'); // the header object.
            //             th.innerHTML = arrHead[h];
            //             tr.appendChild(th);
            //         }
            
            //         var div = document.getElementById('cont');
            //         div.appendChild(empTable);    // add table to a container.
            //     }
            
            //     // function to add new row.
            //     function addRow() {
            //         var empTab = document.getElementById('empTable');
            
            //         var rowCnt = empTab.rows.length;    // get the number of rows.
            //         var tr = empTab.insertRow(rowCnt); // table row.
            //         tr = empTab.insertRow(rowCnt);
            
            //         for (var c = 0; c < arrHead.length; c++) {
            //             var td = document.createElement('td');          // TABLE DEFINITION.
            //             td = tr.insertCell(c);
            
            //             if (c == 0) {   // if its the first column of the table.
            //                 // add a button control.
            //                 var button = document.createElement('input');
            
            //                 // set the attributes.
            //                 button.setAttribute('type', 'button');
            //                 button.setAttribute('value', 'Remove');
            
            //                 // add button's "onclick" event.
            //                 button.setAttribute('onclick', 'removeRow(this)');
            
            //                 td.appendChild(button);
            //             }
            //             else {
            //                 // the 2nd, 3rd and 4th column, will have textbox.
            //                 var ele = document.createElement('input');
            //                 ele.setAttribute('type', 'text');
            //                 ele.setAttribute('value', '');
            
            //                 td.appendChild(ele);
            //             }
            //         }
            //     }
            
            //     // function to delete a row.
            //     function removeRow(oButton) {
            //         var empTab = document.getElementById('empTable');
            //         empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
            //     }
            
            //     // function to extract and submit table data.
            //     function submit() {
            //         var myTab = document.getElementById('empTable');
            //         var arrValues = new Array();
            
            //         // loop through each row of the table.
            //         for (row = 1; row < myTab.rows.length - 1; row++) {
            //             // loop through each cell in a row.
            //             for (c = 0; c < myTab.rows[row].cells.length; c++) {
            //                 var element = myTab.rows.item(row).cells[c];
            //                 if (element.childNodes[0].getAttribute('type') == 'text') {
            //                     arrValues.push("'" + element.childNodes[0].value + "'");
            //                 }
            //             }
            //         }
                    
            //         // finally, show the result in the console.
            //         console.log(arrValues);
            //     }

     //======================================================================//   

                  //Chapters 53-57
  // function showImage(e){
  // var a = document.getElementById('modelImg');
  // a.src = e.src;
  // }
  //=======================================//
  
     // chapters  58-67            

    //  /Q : 1

    //  //i
    //  var context= document.childNodes[1].childNodes[2].childNodes[1].childNodes[5];    
    //  console.log(context)
     
     
     
    //  ii
    //  console.log(context.childNodes);
     
    //  iii
    //  var val=document.getElementsByClassName("render");
    //  for(var i=0;i<val.length;i++)
    //     console.log(val[i].innerHTML);
     
    // //  //iv
     
    // //  //v
     
    // //  //Q :2
    // //  //i
    //  var context= document
    //  childNodes[1].childNodes[2].childNodes[1].childNodes[3];    
    //  console.log(context.nodeType)
    //  console.log(context.childNodes);
     
    // //  ii
    //  var val = document.getElementById("lastName");
    //  console.log(val.childNodes);
    //  console.log(val.nodeType);
    //  val2=val.childNode;
    //  console.log(val2.nodeType);
     
     
    // //  iii
     
     
    // //  iv
    //  var context= document.childNodes[1].childNodes[2].childNodes[1].childNodes[5];    
    //  console.log(context.firstChild);
    //  console.log(context.lastChild);
     
    // //  v
    //  var v = document.getElementById("last-name");
    //  console.log(v.previousSibling);
    //  console.log(v.nextSibling);
     
    // //  vi
    //  var email = document.getElementById("email");
    //  console.log(email.parentNode);
    //  console.log(email.nodeType);



                    //------------The End -----------------//