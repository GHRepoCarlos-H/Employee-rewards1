/* Activity - Employee Rewards - Starter Code */
/* Construct conditional statements that meet the requirements: */
/* ================================== */

/*1. If the employee has 1 year or less with the company, 1 new checking account: Output: 'Ship 50.00 Gift Card'
Otherwise output:'Incentives not met'

/*2. If the employee has 2 years with the company, 3+ new checking accounts:  Output: 'Ship 50.00 Gift Card'
Otherwise output:'Ship $100.00 Gift Card'

/*3. If the employee has 3 years with the company, 2+ new checking accounts:  Output: 'Ship 700.00 Gift Card'
Otherwise output:'Ship $350.00 Gift Card'

/*4. If the employee has 4+ years with the company, 1+ new checking accounts:  Output: 'Ship 3500.00 Gift Card'
Otherwise output:'Ship set of knives'
*/


// Variable declaration
let associateBanker = [56123, 5, 1]; //employeeId, checking, years
let empId = associateBanker[0]       //employee Id number
let empChecking = associateBanker[1] //number of new checking 
let empYears = associateBanker[2];   //years employed

// Continue same pattern/naming convention for each banker
// leaving only one variable declaration section uncommented each 'Run'

/* 
let seniorBanker = [77227, 1, 2]
let empId = seniorBanker[0]       
let empChecking = seniorBanker[1]
let empYears = seniorBanker[2];   
*/

/*
let juniorBanker = [66225, 5, 3];
let empId = juniorBanker[0];
let empChecking = juniorBanker[1];
let empYears = juniorBanker[2];

*/

/*
let temporaryBanker = [56677, 5, 0];
let empId = temporaryBanker[0];
let empChecking = temporaryBanker[1];
let empYears = temporaryBanker[2];  
*/

/*
let Mid-LevelBanker = [22151, 2, 6];
let empId = Mid-LevelBanker[0];
let empChecking = Mid-LevelBanker[1];.
let empYears = Mid-LevelBanker[2];
*/

if (empYears == 1){
    if (empChecking >= 1){
        console.log("Ship $50.00 Amazon Gift Card")
    }else{
        console.log("Incentive not met")
    }
}

else if (empYears == 2){
    if (empChecking >= 3){
        console.log("Ship $400.00 Visa Gift Card")
    }else{
        console.log("Ship $100 Visa Gift Card")
    }
}

else if (empYears == 3){
    if(empChecking >= 2){
        console.log("Shit $700.00 Visa Gift Card")
    }else{
        console.log("Ship $350.00 Visa Gift Card")
    }
}

else if (empYears == 5){
    if(empChecking !== 0){
        console.log("Ship $3500.00 Visa Gift Card")
    }else{
        console.log("Ship set of knives")
    }
}

else if (empYears == 0){
    console.log("Not elegible for gift");
}


// Output when activity is complete
console.log(`${empId}: Processed`)