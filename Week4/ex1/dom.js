const myEmptyDiv = document.querySelector('#myEmptyDiv');

// h1 inside
const heading = document.createElement('h1');
heading.innerHTML = 'Welcome to Llama World!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick () {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = 'cadetblue';
}

