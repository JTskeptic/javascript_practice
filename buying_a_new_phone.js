//purchasing a new phone

var itemPrice = 999.99
const CA_TAX = .0725

var bankAccount = parseFloat(prompt( "How much money is in your bank account?" ));

console.log("bank account balance is $" + bankAccount.toFixed(2));

itemPrice = parseFloat(prompt( "How much does the item cost?" ));

console.log("the cost of the item is $" + itemPrice.toFixed(2));

function calculateTax() {
    return itemPrice * CA_TAX;
}

var totalCost = itemPrice + calculateTax();

console.log("the total cost of the item with California sales tax is $" + totalCost.toFixed(2));

var tally = 0;

while (totalCost < bankAccount) {
    bankAccount = bankAccount - totalCost;
    tally++;
}

console.log("you are able to purchase " + tally + " items total.");
console.log("your leftover bank account balance is $" + bankAccount.toFixed(2));
