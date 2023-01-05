/**
    Accessing Elements by ID

    The easiest way to access a single element 
    in the DOM is by its unique ID. You can get an 
    element by ID with the getElementById() method of the document object.
    document.getElementById()
 */

/**
  In order to be accessed by ID, the HTML element must have an id attribute.
  You have a div element with an ID of demo you can use:
  <div id="demo">Access me by ID</div>
 */

// In the Console, get the element and assign it to the demoId variable.

// const demoId = document.getElementById('demo')

// Logging demoId to the console will return our entire HTML element.
// console.log(demoId)

// You can be sure you’re accessing the correct element by changing the border property to purple.

// demoId.style.border = '1px solid purple'

/*
 Accessing an element by ID is an effective
 way to get an element quickly in the DOM. However, 
 it has drawbacks: an ID must always be unique to the page, 
 and therefore you will only ever be able to access a single element 
 at a time with the getElementById() method. If you wanted to add a function
 to many elements throughout the page, your code would quickly become repetitious.
 */

//  Accessing Elements by Class

/*

The class attribute is used to access one or more specific elements in the DOM. 
You can get all the elements with a given class name with the getElementsByClassName() method.

*/

// Access these elements in the Console and put them in a variable called demoClass.

// const demoClass = document.getElementsByClassName('demo')

/*
If you execute: 
demoClass.style.border = '1px solid orange'

It will not work...
The reason this doesn’t work is
because instead of just getting one element,
you have an array-like object of elements.
*/

// console.log(demoClass)

/*
JavaScript arrays must be accessed
with an index number. You can change
the first element of this array by using an index of 0.
*/

// demoClass[0].style.border = '1px solid orange'

/*
Generally when accessing elements by class, we want 
to apply a change to all the elements in the document with that particular class, 
not just one. 
You can do this by creating a for loop, and looping through every item in the array.
*/

// for (i = 0; i < demoClass.length; i++) {
//     demoClass[i].style.border = '1px solid orange'
// }

// Accessing Elements by Tag

/*
A less specific way to access multiple elements on the page would be by its HTML
tag name. You access an element by tag with the getElementsByTagName() method.

Just like accessing an element by its class, getElementsByTagName() will return an 
array-like object of elements, and you can modify every tag in the document with a for loop.
*/

// const demoTag = document.getElementsByTagName('article')

// for (i = 0; i < demoTag.length; i++) {
//     demoTag[i].style.border = '1px solid blue'
// }

// Query Selectors

/*
If you have any experience with the jQuery API,
you may be familiar with jQuery’s method of accessing the DOM with CSS selectors.
*/

// $('#demo') // returns the demo ID element in jQuery

/*
You can do the same in plain JavaScript with the querySelector() and querySelectorAll() methods.
document.querySelector();
document.querySelectorAll();

To access a single element, you can use the querySelector() method.

In the case of a selector with multiple elements, such as a class or a tag,
querySelector() will return the first element that matches the query. 
You can use the querySelectorAll() method to collect all the elements that match a specific query.

In the example file, you have two elements with the demo-query-all class applied to them.
*/

// const demoQuery = document.querySelector('#demo-query')

/*
The selector for a class attribute is a period or full stop (.), 
so you can access the class with .demo-query-all.
*/
// const demoQueryAll = document.querySelectorAll('.demo-query-all')

/*
Using the forEach() method, 
you can apply the color green to the border 
property of all matching elements.
*/

// demoQueryAll.forEach((query) => {
//     query.style.border = '1px solid green'
// })

/*

With querySelector(), comma-separated values function as an OR operator.
For example, querySelector('div, article') will match div or article, whichever appears first 
in the document. With querySelectorAll(), comma-separated values function as an AND operator,
and querySelectorAll('div, article') will match all div and article values in the document.

Using the query selector methods is extremely powerful, as you can access any element or group
of elements in the DOM the same way you would in a CSS file. For a complete list of selectors, 
review CSS Selectors on the Mozilla Developer Network.

*/

// Assign all elements
const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll = document.querySelectorAll('.demo-query-all')

// Change border of ID demo to purple
demoId.style.border = '1px solid purple'

// Change border of class demo to orange
for (i = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '1px solid orange'
}

// Change border of tag demo to blue
for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '1px solid blue'
}

// Change border of ID demo-query to red
demoQuery.style.border = '1px solid red'

// Change border of class query-all to green
demoQueryAll.forEach((query) => {
    query.style.border = '1px solid green'
})
