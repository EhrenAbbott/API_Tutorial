
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

// !VOCAB! 

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