//click 
const btn = document.querySelector('#buttonClick');
btn.addEventListener('click', myEventHandler);

function myEventHandler(event){
    console.log(event)

    const h2 = document.querySelector('.sub-title');
    h2.style.backgroundColor = 'red';

    console.log("Click event");
}

//mousemove



























