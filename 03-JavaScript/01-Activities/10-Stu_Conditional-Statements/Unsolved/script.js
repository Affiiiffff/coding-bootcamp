// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = x < 25;
var expression2 = x > 50;

// Write Your JavaScript Code Here
// Check if both expressions are true using &&

if (expression1 && expression2) {
  console.log("True ✅ True ✅");
} else if (expression1) {
  console.log("true false");
} else if (expression2) {
  console.log("false true");
} else {
  console.log("false false");
}
