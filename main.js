// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Functions

// Function 1 - It checks that the credit card is valid or invalid using the Luhn algorithm: https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%201.svg?_gl=1*11d1fqf*_ga*MTI2NzU2ODIxMy4xNjcyNDAwMzgy*_ga_3LRZM6TM9L*MTY4NjkxNjY4My4xNDYuMS4xNjg2OTE3OTU2LjAuMC4w


const validateCred = array => {
  let total = 0;
  for (let i = array.length-1; i >= 0; i--) {
    let value = array[i];
    if ((array.length - 1 - i) % 2 === 1) {
      value *= 2;
      if (value > 9) {
        value -= 9;
      }
    }
    total += value;
  }
  return total % 10 === 0;
}


// Comment out for testing!

//console.log(validateCred(valid1)); should print true

//console.log(validateCred(invalid1)); should print false


// Function 2 - it gathers the invalid cards to a new array

const findInvalidCards = cards => {
  let invalid = []
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    if (!validateCred(card)) {
      invalid.push(card);
    }
  }
   return invalid;
 }

// Comment out for testing!

//console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything

//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print the arrays


// Function 3 - it assign a company name to the credit cards based on their first digit to find out which companies have invalid cards

const idInvalidCardCompanies = array => {
  let companies = [];
  for (let i = 0; i < array.length; i++) { 
    if (array[i][0] === 3) {
      companies.push('Amex');
    } else if (array[i][0] === 4) {
      companies.push('Visa');
    } else if (array[i][0] === 5) {
      companies.push('Mastercard');
    } else if (array[i][0] === 6) {
      companies.push('Discover');
    } else {
      console.log('Company not found');
    }
  }
  return companies;
}


// Comment out for testing!

//console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']

//console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']

//console.log(idInvalidCardCompanies(batch)); // Find out which companies have invalid cards

//Don't forget to test the mystery cards, they might be a scam!