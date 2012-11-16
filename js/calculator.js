function calculate() {
   //get input from user
   var listPrice = document.getElementById('listPrice').valueAsNumber;  // using document object method

   
   var discountPercent = document.getElementById('discountPercent').valueAsNumber;  //calculate discount amount and discount price
   
   //calculate discount amount and discount price
   var discount = listPrice * discountPercent * .01;
   var discountPrice = listPrice - discount;
   
   //set output in currency format (sort of)
   discount = discount.toFixed(2);  //convert number value to string value keeping 2 dec places
   discount = '$'+discount;  // concatenate $ to string variable (no easy way to add commas)
   document.getElementById('discount').value = discount;
   
   discountPrice = '$'+discountPrice.toFixed(2);
   document.getElementById('discountPrice').value = discountPrice;
} //end calculate
