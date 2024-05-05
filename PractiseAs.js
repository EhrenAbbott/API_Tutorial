
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
// - If no other info or parameters besides the URL is provided in a fetch request, it will assume
// that the type of a request is a GET request

//#########################################################################

// #2 Using the same URL as the previous question, create a fetch request and 
// render the resulting image on the page. Assume the corresponding 
// HTML document has a div with the ID "img-div", and that the fetch request 
// will return and object with the image URL stored in a property called 'message'

// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.getElementById("img-div").innerHTML = `
//             <img src="${data.message}" />
//         `
//     })

// NOTE: Rememeber that bc the second .then block returns multiple lines of 
// code, wou will need to open curly brackets and put the contents inside, unlike 
// the first .then wich only spans one line and accordingly does not require curly brackets.

//#########################################################################

// #3 Write a fetch request but explicity state the type of request that you are making 

// fetch("https://dog.ceo/api/breeds/image/random", {method: "GET"})

// NOTE: the second paramter here is an object where you can specify the type of 
// request being made by stating the value fo the "method" ket 

//#########################################################################

// #4 Make a fetch request but limit the number of object you retrieve to 5

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
//         console.log(postsArr)
//     })

//NOTE: The .slice method take two arguments: the starting index (inclusive), 
// and the ending index (*NOT* inclusive!)

//#########################################################################

// #5 Building off of the previous question, render the  titles of 
// the first five items retrieved from the fetch request. Assume you want 
// to render to a div with the id of "blog-list"

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then(res => res.json())
//     .then(data => {
//         const postsArr = data.slice(0, 5)
//         let html = ""
//         for (let post of postsArr) {
//             html += `
//                 <h3>${post.title}</h3>
//             `
//         }
//         document.getElementById("blog-list").innerHTML = html
//     })

//#########################################################################

// #6 Create a post request  to https://apis.scrimba.com/jsonplaceholder/todos. 
//  In the options objects (the second fetch argument), add a body property containing
// two pieces of data. 

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

// NOTE: Notice that what we have are two properties stores in a object as the value of
// "body". "Body" is already a property inside the options object, which is itself the second 
// argument of the fetch method. 
// -The data that we are sending in the body object is whatever we want it to be 
// -Notice that the contents of the body property need to be converted into JSON bc it gets sent; 
// some libraries do this automaically, but fetch does not, so you just need to wrap the whole object in 
// JSON.stringify()
// -If you console log it as is, it will just give you an object with an id number. 
// This is because we have not set the headers to provide it with the appropriate metadata. 

//#########################################################################

// #7 Building off of the previous question, and a headers object
// that tells the server what type of data we are sending.

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

// NOTE: The Content-Type property in headers is critical bc it
// tells the server what type of data we are sending; without this, 
// the server won't really know how to handle the request body. 
// -Notice that the property in the headers object is "Content-Type" in quotes, 
// with both words written with the first letter capitalized (unclear as to if this
// is syntactically necessary or just strong convention, so it is best to stick to it 
// anyway)

//#########################################################################

// #8 Building off of the previosu question, add some code
// to the PUT request that would update the DOM to display the new data. 
// Assume the id of the the div we want to render to is "blog-list"

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "Buy Milk",
//         completed: false
//     }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
//     .then(res => res.json())
//     .then(post => { 
//         document.getElementById("blog-list").innerHTML = `
//                 <h3 class="blah">${post.title}</h3>
//                 <p>${post.body}</p>
//                 <hr />
//                 ${document.getElementById("blog-list").innerHTML}
//             `
//     })

    // NOTE: In the second .then block, you coudl do += after innerHTML, 
    // but this woudl add the new post to the bottom of the page; the above 
    // way of writing it just ensures that the new information is displayed
    // above the posts that are already being displayed.  

//#########################################################################

// #9 Looking at a and b, what is the difference in how the code run for each example?

// a) 
// myButton.addEventListener("click", handleClick())

// b) 
// myButton.addEventListener("click", handleClick)

// When the parentheses are incldued, as in example a, 
// the function will be run *RIGHT NOW*, so if this function is the argument 
// of an event listener, the function will not wait for the button to be clicked
// in order to run, it will run as soon as the page loads. In b, 
// the contents of the function are passed in just by using the function name
// without the parentheses; using it this way, as a callback function, allows it 
// to be called  later, when appropriate, in this case after a click.


//#########################################################################

// #10 Looking at the documentation for the following API, what endpoint would
// you use to draw three new cards?

// https://deckofcardsapi.com/

//The endpoint would be: https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=3
// We know this from going to the documentation and looking under the "draw a card" section, where
// the number of cards is established with the /?count=2 parameter and and the deck_id is
// retrieved through using the endpoint outlined in the first section "shuffle the cards"

//#########################################################################

// #11 Make the fetch request in the following function asynchronous and refactor 
// it so that it avoids using .then 

//BEFORE:
// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             deckId = data.deck_id
//             console.log(deckId)
//         })
// }

//AFTER: 
// async function handleClick() {
//     const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     const data = await res.json()
//     remainingText.textContent = `Remaining cards: ${data.remaining}`
//     deckId = data.deck_id
//     console.log(deckId)
// }


//NOTE: The async keyword goes before a before. The await keyword is *ENABLED* by the
// async keyword, and await goes before a method/function that returns a promise. 
// - If you try to use await without first using async in the above function, you will get 
// an error message.
// - Before, with .then, we could not have saved the result fo the fetch request to a variable, 
// but not with await we can assign the response to a variable. This also means we no longer 
// need to indentations to denotes the nesting of code, so we have essentially written
// an async function so it looks/reads like a synchronous function 

//#########################################################################

// #12 Retrieve an image from the following API and set it as the background image
// for the body of the html document: https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature

// fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
//     .then(res => res.json())
//     .then(data => {
//         document.body.style.backgroundImage = `url(${data.urls.full})`
//     })

//#########################################################################

// !VOCAB! 

// promise: 
    // an object that represents the eventual completion or failure 
    // or an asynchronous operation. It is a proxy for a value that is not 
    // necessarily known when the promise is created. 
    // A promise is in one of these states: 
    // pending-- the initial state, it is neither fulfilled nor rejected
    // fulfilled-- the operation was completed successfully
    // rejected-- the operation failed
    // A promise is 'settled' if it is fulfilled or rejected (just not pending)
    // .then is a method specifically for promises, which happens to also return a promise. 
    // Bc of this, the usage of .then constitutes promise chaining.
    // When you are chaining .then blocks, whateevr is returns from the first .then block 
    // will be passed in as the argument of the callback function for the second .then.

// query strings (AKA query parameters): 
    // allows us to filter the results that we are retrieving when using URL to make 
    // fetch requests. Query string always start with a question mark.
    // EX: /bikes?types=mountain   returns all of the bikes that have a type property of mountain. 
    // The part that comes after the ? is the query string 
    // more queries can be added with a &:    /bikes?type=road&brand=trek  returns all of the bikes
    // that are roadbikes made by trek.
    // Different APIs can have slight variable in the implementation of their query strings.

// URL Parameter: 
    // a variables inside the URL that acts as a placeholder for the real value

// REST: 
    // REpresentational State Transfer
    //
    // This is a standardized protocol for clients 
    // and servers to communicate with one another
    //  
    // Principles of REST:
    //
    // client and server separation- a client requests JSON data from the server and the 
    // server responds with JSON data; the server isn't really concerned with how the JSON
    // data gets used; this way, the client isn't relying on the server to render the HTML page with the 
    // data and send it back in one big bundle. Almost all
    // 
    // statelessness- whent he client makes a request to the server, the server doesn't retain 
    // any memory of that request of the client. If the client needs more information, it will
    // need to send the request again. This concept is also called 'session state' 
    // 
    // accessing/interacting with resources-  
    // establishes a stadardizes way of setting up URL endpoints
    // EX:   /bikes   is a noun, so a GET request would return an array of bikes; a collection of that noun
    // A POST request would add a new bike to the bikes collection
    //  EX: /bikes/:id  (AKA /bikes/123) paired with a GET request would return an object on one specific bike
    // A PUT or DELETE could also be used with this
    // Good API design will not include things like verbs in the endpoints, as the action you are taking is indicated
    // in the request method. 
    //
    // nested resources- 
    // after specifying the id number of (using the example above) bikes, you can continue to 
    // specify certain properties that you need, so you could say /bikes/123/reviews to get 
    // all of the reviews of a bike with a specific id


// HTTP: 
    // Stands for Hypertect Trasnfer Protocol, which essentially just refers to 
    // the method of moving/sending text via the internet

// HTTP Request: 
    // Has multiple components: 
    // 1. Path(URL) - this is like a location/address of the server you are sending the request to 
    // 2. Method - include things like GET, POST, PUT, DELETE, the method refers to what specific action you are trying to take
    // 3. Body - this is optional, as some requests require this and some don't. It is the data that we want to send to the server.
    // 4. Headers - metainformation about the request, like an authentication token or info about the browser or operating system

// Path (URL): 
    // This is the address where your desired resoruce "lives"
    // Comprised of two parts: 
    // 1. Base URL - this is the portion of the URL that will not change-- regardless of 
    //    what kind of resource you are getting from the API
    // 2. Endpoint - the specific resource at the end of the base URL that you want to get

// Request Methods: 
    // This is how you tell the server what kind of request you are making, or what your
    // intention of the request is.
    // Some types include:
    // GET - retrieving data 
    // POST - adding new data 
    // PUT - updating existing data
    // DELETE - remove data

// Request body: 
    // Data that gets sent to the server; only included with a POST or PUT request 
    // Needs to be turned into JSON first. 

// Request headers: 
    // Meta data about the outgoing request 
    // Can be things like authentificaiton info, body info, client data, etc.