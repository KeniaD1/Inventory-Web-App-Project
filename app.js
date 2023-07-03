


const allRemoveButtons = document.querySelectorAll('#rmv');

for (const rmvBttn of allRemoveButtons) {
    rmvBttn.addEventListener('click', (event) => {

        event.target.parentNode.parentNode.remove()
    })
}
//all remove bttns to remove div on click

let instockOrOutstock = true

const allInstockButtons = document.querySelectorAll('#stock')

for (const stockBttn of allInstockButtons) {
    stockBttn.addEventListener('click', (event) => {
        instockOrOutstock = !instockOrOutstock

        if (instockOrOutstock) {
            stockBttn.innerText = "InStock"
        } else {
            stockBttn.innerText = "Out Of Stock"
            stockBttn.style.color = 'red'
        }

    })
}

// //provide error message if required fields arent filled 







/// select the div to submit form on click to box a 


const formSubmit = document.querySelector('form');

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const submitForm = document.querySelector('section');
    //console.log(submitForm)
    const newItem = document.createElement('div');
    newItem.classList.add('bag-with-text');

    submitForm.append(newItem);

    const bagImage = document.createElement('img');
    bagImage.src = "https://www.qualitylogoproducts.com/images/_promo-university/tote-bags/tote-material-made-outof.png"
    bagImage.setAttribute()
    newItem.append(bagImage);

    const bagName = document.createElement('h2');
    bagName.innerText = event.target.name.value;
    newItem.append(bagName);

    const newForm = document.createElement('form');


    newItem.append(submitForm);




})
///add functionality to color changing buttons

""

