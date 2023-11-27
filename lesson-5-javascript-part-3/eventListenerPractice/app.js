function makeDark() {
    const toggleButton = document.getElementById('darkModeToggle');
    const content = document.getElementById('content');
    content.classList.toggle('dark-mode');
};

// CODE BREAKDOWN
// function makeDark()
    // Here, we create a function named 'makeDark' that is called when our "dark mode" button is clicked.
// const toggleButton = document.getElementById('darkModeToggle');
    // This line declares a constant variable named toggleButton. 
    // It uses document.getElementById('darkModeToggle') to find an element in your HTML with the ID darkModeToggle (which is your button).

// const content = document.getElementById('content');
    // Similar to the previous line, this declares a constant named content and assigns to it the element in your HTML with the ID content. 
    // This is the part of your page where the dark mode effect will be applied

// content.classList.toggle('dark-mode');
    // This line is the heart of the toggle functionality. 
    // It accesses the classList of the content element, which is a list of all the CSS classes applied to that element. 
    // The .toggle('dark-mode') method will add the class 'dark-mode' to the content element if it’s not already there, and remove it if it is. 
    // This is what changes the appearance of the content section when you click the button.