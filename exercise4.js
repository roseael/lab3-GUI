const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
    /* // BUG: this.classList.add('active') throws an error
 this.classList.add('active');
});
       The arrow function does not create its own 'this' context. Instead, it 
       inherits 'this' from the surrounding global scope (window), where 
       'classList' does not exist, causing the error.
    */

    // FIX: Use event.currentTarget instead of 'this'
    event.currentTarget.classList.add('active');

    /* Solution: 
       event.currentTarget returns the element that the event listener was 
       attached to (the .box div). This solves the problem because it provides 
       a reliable reference to the element regardless of how the function is defined.
    */
});