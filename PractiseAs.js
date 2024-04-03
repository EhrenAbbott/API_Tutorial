
//#########################################################################

// #1 Createa basic fetch request using the following URL: https://dog.ceo/api/breeds/image/random

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => console.log(data))

// NOTE: Fetch is a built in JS function, and the following two .then's can be chained 
// on after it, but they are comonly put on their own lines for better readability. 
// -This process will return an object, and the exact structure of the object will vary 
// depending on the API. You will have to access the correct property using dot notation.
// - The fetch request is asynchronous, which in this case essentially means the lines of code 
// done have to run in top down order-- it can ocurr out of order
// - If you had a block of code before and after the fetch request, those woudl run *BEFORE* the 
// fetch request; this is bc the fetch request is asynchronous, and the function of the  .then blocks 
// is to allow the other lines of code in the program to run while the fetch request is awaiting a response
// from the server. 

//#########################################################################

// #2 Using the same URL as the previous question, create a fetch request and 
// render the resulting image on the page. Assume the corresponding 
// HTML document has a div with the ID "img-div", and that the fetch request 
// will return and object with the image URL stored in a property called 'message'

fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img-div").innerHTML = `
            <img src="${data.message}" />
        `
    })

// NOTE: Rememeber that bc the second .then block returns multiple lines of 
// code, wou will need to open curly brackets and put the contents inside, unlike 
// the first .then wich only spans one line and accordingly does not require curly brackets.

//#########################################################################
