

var readline= require('readline-sync');
var BL= require('./anagramBL');
var firstString= readline.question("Enter the first string");
var secondString=readline.question("enter second string");

if (BL.isAnagram(firstString,secondString)){
    console.log(firstString+" and "+secondString+" are anagrams of each other");
}

else console.log(firstString+" and "+secondString+" are not anagrams of each other")