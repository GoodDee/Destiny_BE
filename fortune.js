const fortunes = [
  {Title: "You may look inside the mirror at your own risk!",
   Content: "Things to come are not a coincidence, but a choice. Do not wait - achieve! It's time to make a decision.",
  Color: "Red",
  Text: "Yellow",
  Image: "White_choco.png"},
  {Title: "Yes, the mirror is glistening so brightly!",
   Content: "Your victory is at hand. Move forward with courage.",
  Color: "Green",
  Text: "White",
  Image: "brave.png"},
  {Title: "Keep your soul pure.",
   Content: "An event of great importance is approaching. Trust your pure instinct, and you will succeed.",
  Color: "Yellow",
  Text: "Black",
  Image: "pure_vanilla.png"},
  {Title: "Destiny doesn't smile upon those who cannot understand its signs. ",
   Content: "Hone your knowledge and skill and you will reach your goal.",
  Color: "Blue",
  Text: "White",
  Image: "avocado.png"},  
];

function tellFortune() {
  
  // generate a random number between 0 and the number of the array items
  var randomNumber = Math.floor(Math.random() * fortunes.length);

  // print the random number to the console log to make sure it's working
  console.log("random number: " + randomNumber);

  // take the fortune at the random spot in the array and insert it into the "fortune" div
 document.getElementById("Header").innerHTML = fortunes[randomNumber].Title;
 document.getElementById("Content").innerHTML = fortunes[randomNumber].Content;

 document.getElementById("fortune").style.backgroundColor = fortunes[randomNumber].Color;
 document.getElementById("fortune").style.color = fortunes[randomNumber].Text;

 document.getElementById("image").src = fortunes[randomNumber].Image;

 document.getElementById("button").disabled = true;
}
