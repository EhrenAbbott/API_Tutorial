//#########################################################################

// #1 Create a basic fetch request using the following URL: https://dog.ceo/api/breeds/image/random

//#########################################################################

// #2 Using the same URL as the previous question, create a fetch request and 
// render the resulting image on the page. Assume the corresponding 
// HTML document has a div with the ID "img-div", and that the fetch request 
// will return and object with the image URL stored in a property called 'message'

//#########################################################################

// #3 Write a fetch request but explicity state the type of request that you are making 

//#########################################################################

// #4 Make a fetch request but limit the number of object you retrieve to 5

//#########################################################################

// #5 Building off of the previous question, render the  titles of 
// the first five items retrieved from the fetch request. Assume you want 
// to render to a div with the id of "blog-list"

//#########################################################################

// #6 Create a post request  to https://apis.scrimba.com/jsonplaceholder/todos. 
//  In the options objects (the second fetch argument), add a body property containing
// two pieces of data. 

//#########################################################################

// #8 Building off of the previosu question, add some code
// to the PUT request that would update the DOM to display the new data. 
// Assume the id of the the div we want to render to is "blog-list"

//#########################################################################

// #9 Looking at a and b, what is the difference in how the code run for each example?

// a) 
// myButton.addEventListener("click", handleClick())

// b) 
// myButton.addEventListener("click", handleClick)

//#########################################################################

// #10 Looking at the documentation for the following API, what endpoint would
// you use to draw three new cards?

// https://deckofcardsapi.com/

//#########################################################################

// #11 Make the fetch request in the following function asynchronous and refactor 
// it so that it avoids using .then 

// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             deckId = data.deck_id
//         })
// }

//#########################################################################



