//purchasing a new phone
//STILL UNDER CONSTRUCTION! - OCTOBER 26, 2019

const PHONE_PRICE = 999.99
const CA_TAX = .0725

var bankAccount = parseFloat(prompt( "How much money is in your bank account?" ));

console.log("bank account balance is " + bankAccount);

function calculateTax() {
    return PHONE_PRICE * CA_TAX;
}

var totalCost = PHONE_PRICE + calculateTax();

console.log("the total cost of one phone with tax is " + totalCost.toFixed(2));

