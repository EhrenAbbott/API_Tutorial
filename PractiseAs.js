
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

fetch("https://dog.ceo/api/breeds/image/random", {method: "GET"})

// NOTE: the second paramter here is an object where you can specify the type of 
// request being made by stating the value fo the "method" ket 

//#########################################################################

// !VOCAB! 

// HTTP: 
    // Stands for Hypertect Trasnfer Protocol, which essentially just refers to 
    // the method of moving/sending text via the internet

// HTTP Request: 
    // Has multiple components: 
    // 1. Path(URL) - this is like a location/address of the server you are sending the request to 
    // 2. Method - include things like GET, POST, PUT, DELETE, the method refers to what specific action you are trying to take
    // 3. Body - this is optional, as some requests require this and some don't
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