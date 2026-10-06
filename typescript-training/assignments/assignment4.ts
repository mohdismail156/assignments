// Bank Transactions
// Positive value refers Credit and Negative refers Debit Transaction
// Transactions Amount
// 1 50000
// 2 -2000
// 3 3000
// 4 -15000
// 5 -200
// 6 -300
// 7 4000
// 8 -3000
// First Store all the transactions in any data structure of Your Choice from collections, and by using
// Loops and conditional statements
// 1. Print total number of credit and debit transactions completed
// 2. Print the total amount credited and debited in account
// 3. Print total amount remaining at the end in Bank Account
// 4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
// Transaction with Amount” and also print total number of suspicious transactions

const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditamount: number = 0;
let debitamount: number = 0;
let creditCount: number = 0;
let debitCount: number = 0;
let balance: number = 0;
let suspiciousCount: number = 0;
for (let amount of transactions) {
    if (amount > 0) {
        creditamount += amount;
        creditCount++;
    } else {
        debitamount += Math.abs(amount);
        debitCount++;
    }
    balance += amount;
    if (Math.abs(amount) > 10000) {
        suspiciousCount++;
        console.log(`Suspicious ${amount > 0 ? 'credit' : 'debit'} Transaction with Amount: ${Math.abs(amount)}`);
    }
}

console.log(`Total Credit Transactions: ${creditCount}`);
console.log(`Total Debit Transactions: ${debitCount}`);
console.log(`Total Amount Credited: ${creditamount}`);
console.log(`Total Amount Debited: ${debitamount}`);
console.log(`Total Amount Remaining: ${balance}`);
console.log(`Total Suspicious Transactions: ${suspiciousCount}`);