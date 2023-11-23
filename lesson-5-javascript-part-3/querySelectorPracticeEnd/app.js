// Selecting by Tag Name
var firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent);

// Selecting by Class Name
var specialElement = document.querySelector('.special');
specialElement.style.color = 'blue';

// Selecting by ID
var uniqueElement = document.querySelector('#unique');
uniqueElement.style.fontSize = '20px';

// Changing Text on Button Click
document.querySelector('#changeText').addEventListener('click', function() {
    var myElement = document.querySelector('#unique');
    myElement.textContent = 'New Text after Click';
});
