const companies = [
	{name: "Company One", category: "Finance", start: 1981, end: 2003},
	{name: "Company Two", category: "Retail", start: 1992, end: 2008},
	{name: "Company Three", category: "Finance", start: 1981, end: 2003},
	{name: "Company Four", category: "Retail", start: 1992, end: 2008},
	{name: "Company Five", category: "Finance", start: 1981, end: 2003},
	{name: "Company Six", category: "Retail", start: 1992, end: 2008}
];

const ages = [33, 12, 33, 12, 33, 12, 21, 20, 44, 19];

/*------------------------------------------------------*/

// for(let i = 0; i < companies.length; i++) {
// 	console.log(companies[i]);
// }

// forEach

companies.forEach(function(company) {
	console.log(company);
});

/*------------------------------------------------------*/
// Version 1

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
// 	if(ages[i] >= 21) {
// 		canDrink.push(ages[i]);
// 	}
// }

// filter Version 2

// const canDrink = ages.filter(function(age) {
// 	if (age >= 21) {
// 		return true;
// 	}
// });

// Version 3 filter with arrow function

const canDrink = ages.filter(age => age >= 21);


// Filter retail companies

// const retailCompanies = companies.filter(function(company) {
// 	if(company.category === 'Retail') {
// 		return true;
// 	}
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');
const eighties = companies.filter(company => company.start === 1981);


console.log(canDrink);
console.log(retailCompanies);
console.log(eighties);

// map
// sort
// reduce

