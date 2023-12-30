Difference between innerhtml and innertext in javascript

In JavaScript, both innerHTML and innerText are properties used to manipulate or retrieve content within HTML elements, but they have some key differences:

Content vs. Text:
innerHTML: Represents the HTML content inside an element. It includes HTML tags and their content.
innerText: Represents the text content of an element, excluding HTML tags.

HTML vs. Plain Text:
innerHTML: Deals with HTML markup and allows you to set or retrieve the HTML content of an element, including tags.
innerText: Deals with plain text and provides only the textual content without any HTML tags.

// Example using innerHTML
var element1 = document.getElementById('example1');
element1.innerHTML = '<strong>Hello</strong> World!';

// Example using innerText
var element2 = document.getElementById('example2');
element2.innerText = 'Hello World!';

=====================================================================================================
Document Object Properties and Methods in javascript

https://www.w3schools.com/jsref/dom_obj_document.asp

=====================================================================================================