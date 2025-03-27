
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




// 7. What are different ways to take input from users?
// Ans :
// Ways to take input from user ->

// keyboard
// ex:
// window.addEventListener("keydown", handleKeyDown, true);
// window.addEventListener("keyup", handleKeyUp, true);

// Mouse
// You can also capture mouse and other pointer events.

// Finger Touch
// To provide additional support for touchscreen devices.
// ex:
// element.addEventListener("touchstart", handleStart, false);
// element.addEventListener("touchcancel", handleCancel, false);
// element.addEventListener("touchend", handleEnd, false);
// element.addEventListener("touchmove", handleMove, false);

// Drag and Drop
// A common user interaction is the physical dragging of elements to be dropped elsewhere on the screen.
// ex:
// <div
//   draggable="true"
//   ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
//   This text <strong>may</strong> be dragged.
// </div>




// 8. How can you make an upload file button?
// Ans:
// <input type="file" id="idFor" hidden>
// <label for="idFor" class="click-to-select">Click to select </label>

// .click-to-select {
//    background - color: #34b1eb;
//    padding: 10px 15px;
//    color: white;
//    border: none;
//    border-radius: 10px;
// }

// .click-to-select:hover {
//    background - color: #348ceb;
// }




// 9. How can you restrict users to only select a .jpg file when a file
// upload picker is opened?
// Ans : 
{/* <input type="file" accept="image/jpeg, .jpg"> */ }




// 10. What does rowspan and colspan do?
// Ans:
// The rowspan and colspan are the attributes of <td> tag. These
// are used to specify the number of rows or columns a cell should merge.
// colspan ->
//     <table border="1">
//         <tr>
//             <th>Time Slot</th>
//             <th colspan="2">Day 1</th>
//             <th colspan="2">Day 2</th>
//         </tr>
//         <tr>
//             <td>9:00 AM</td>
//             <td>Session 1</td>
//             <td>Session 2</td>
//             <td>Session 3</td>
//             <td>Session 4</td>
//         </tr>
//         <tr>
//             <td>9:00 AM</td>
//             <td>Keynote</td>
//             <td>Workshop</td>
//             <td>Panel</td>
//             <td>Networking</td>
//         </tr>
//     </table>

// rowspan ->
//     <table border="1">
//         <tr>
//             <th>Task</th>
//             <th>Status</th>
//             <th>Assigned To</th>
//         </tr>
//         <tr>
//             <td rowspan="2">Development</td>
//             <td>In Progress</td>
//             <td>John Doe</td>
//         </tr>
//         <tr>
//             <td>Review</td>
//             <td>Jane Doe</td>
//         </tr>
//     </table>





// 11.  Explain Marquee tag and its usage.
// Ans:
// ex ->
// 1.
// <marquee>This text will scroll from right to left</marquee>
// 2.
// <marquee direction="up">This text will scroll from bottom to top</marquee>
// 3.
// <marquee
//   direction="down"
//   width="250"
//   height="200"
//   behavior="alternate"
//   style="border:solid">
//   <marquee behavior="alternate">This text will bounce</marquee>
// </marquee>





// 12. Semantic and Non Semantic Elements?
// Ans :
// A semantic element clearly describes its meaning to both the browser and the developer.
// Examples of non-semantic elements:
//    <div> and <span> - Tells nothing about its content.
// Examples of semantic elements:
//    <img>, <table>, and <article> - Clearly defines its content.





// 13.  What is the significance of the <noscript> tag?
// Ans : 