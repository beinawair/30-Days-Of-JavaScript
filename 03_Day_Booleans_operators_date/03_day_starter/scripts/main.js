// this is your main.js script

//LEVEL 1
const firstName = "",
    lastName = "",
    country = "",
    city = "",
    age = 0,
    isMarried = true,
    year = new Date().getFullYear();

const nickName = 'bei',
    currentAge = 25,
    interests = ['coding', 'design'],
    occupancy = ['freelancer', 'design teacher'],
    hobby = "planting",
    yearsOfExperience = 3;

console.log(typeof(firstName), typeof(lastName), typeof(country), typeof(city), typeof(age), typeof(isMarried), typeof(year));

console.log(typeof('10') == typeof(10));

console.log(parseInt('9.8') == 10);

console.log(typeof(nickName) == typeof(currentAge));
console.log(currentAge != 25);
console.log(hobby == ['music']);
console.log(typeof(interests) == typeof(occupancy));
console.log(typeof(yearsOfExperience) == typeof(year));
console.log(typeof(interests) == typeof(['frontend', 'backend']));

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(4 === '4');
const py = "python".length;
const jar = "jargon".length;
console.log(py != jar);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log("dragon".indexOf('on') > -1 && "python".indexOf('on') > -1);

console.log(`What is the year today? --> ` + new Date().getFullYear());
console.log(`What is the month today as a number? --> ` + Number(new Date().getMonth()));
console.log(`What is the date today? --> ` + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear());
console.log(`What is the day today as a number? --> ` + new Date().getDate());
console.log(`What is the hours now? --> ` + new Date().getHours());
console.log(`What is the minutes now? --> ` + new Date().getMinutes());
console.log(`Find out the numbers of seconds elapsed from January 1, 1970 to now. --> ` + new Date().getTime());

//LEVEL 2
let base = prompt("Please enter base number");
let height = prompt("Please enter height");
let area = 0.5 * base * height;
console.log(area)