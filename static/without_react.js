
function createButton() {
    const button = document.createElement('button')

    /* 
    clickCount is not an attribute that already exists for this object,
    but Javascript lets us create it on the fly, like adding
    a new key to a dictionary.
    */
    button.clickCount = 0;
    button.innerText = `I've been clicked ${button.clickCount} time(s)!`;

    button.addEventListener('click', (event) => {
        button.clickCount += 1;
        button.innerText = `I've been clicked ${button.clickCount} time(s)!`;
    });

    document.querySelector('#root').appendChild(button);
}

