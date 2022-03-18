let challenge = '30 Days Of JavaScript';
let challenge2 = ' 30 Days Of JavaScript ';
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let word02 = 'You cannot end a sentence with because because because is a conjunction';
let word1 = '30 Days of '
let word2 = 'JavaScript'

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0, 3));
console.log(challenge.includes('Script'));
console.log(challenge.split(''))
console.log(challenge.split(' '))
console.log(social.split(','))
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
console.log(word02.indexOf('because'));
console.log(word02.lastIndexOf('because'));
console.log(word02.search('because'));
console.log(challenge2.trim(' '));
console.log(challenge.startsWith(''));
console.log(challenge2.endsWith(' '));
console.log(challenge.match('a'));
console.log(word1.concat(word2));
console.log(challenge.repeat(2));