// && - AND operator - Both sides needs to be true
// || - OR operator - any one side need to be true to get true result

let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

//! used to reverse the result 

if(isVerified && isLoggedIn & hasPaymentToken){
    console.log("Greeting message to user")
    console.log("Grant access to the item")
} else if(isVerified || isGuest){
    console.log("Allow previews")
} else{
    console.log(" Message : Please contact Admin")
}