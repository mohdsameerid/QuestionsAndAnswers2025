
// 1. What does H, T, M , L stand for in HTML and explain each word in detail. ?
// Ans :
// HTML stands for **HyperText Markup Language**:

// - **Hyper** → Links between web pages (hyperlinks).
// - **Text** → Content displayed on web pages.
// - **Markup** → Tags (`<p>`, `<h1>`, etc.) that structure content.
// - **Language** → Standard set of rules for web page creation.

// It's the foundation of web development, used to structure web pages.



// 2. Is HTML case sensitive or case in-sensitive?
// Ans :
// case in-sensitive, But It follow the lower case tag.



// 2.  Explain <head> tag?
// Ans :
// The <head> HTML element contains machine-readable information (metadata) about the
// document, like its title, scripts, and style sheets. There can be only one <head> element in an HTML document.




// 4. How can I refresh my page every 60 seconds using HTML?
// Ans :
// The meta tag in HTML can be used to automatically refresh a web page at specified
// intervals.By setting the http - equiv attribute to “refresh” and the content attribute to the
// desired time in seconds, the page will reload at the defined interval.

// Syntax :
//     < meta http - equiv="refresh" content = "(time in seconds)" >

// Code :
//     <html>
//         <head>
//             <title>Page Title</title>
//             <meta http-equiv="refresh" content="10">
//         </head>

//         <body>
//             <h2>Welcome To Code</h2>
//             <p>The code will reload after 10s.</p>
//         </body>
//     </html>

// By using javascript:
//   <html>
//     <head>
//        <title>
//          Reloading page after 2 seconds
//        </title >

//     <script>
//         function autoRefresh() {
//             window.location = window.location.href;
//         }
//         setInterval('autoRefresh()', 2000);
//     </script>
//     </head >
//     <body>
//         <h1>Welcome to code</h1>
//     </body>
// </html >




// 5. What are inline and block elements?
// Ans :
// block-level element ->
// A block-level element always starts on a new line, and the browsers
//  automatically add some space (a margin) before and after the element.

// A block-level element always takes up the full width
//  available (stretches out to the left and right as far as it can).
// ex: <p>, <div>

// Inline Elements ->
// An inline element does not start on a new line.
// An inline element only takes up as much width as necessary.
// ex: <span>, <b>, <strong> 



// 6. What is a table tag? And what is the importance of table tag.
// Ans : 
// The <table> tag in HTML is used to create tables, which are essential for
//  displaying tabular data in a structured format. A table consists of rows and columns, 
//  allowing data to be organized in a grid-like structure.

