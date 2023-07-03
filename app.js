


// // const allRemoveButtons = document.querySelectorAll('#rmv');

// // for (const rmvBttn of allRemoveButtons) {
// //     rmvBttn.addEventListener('click', (event) => {

// //         event.target.parentNode.parentNode.remove()
// //     })
// // }
// // //all remove bttns to remove div on click

// // let instockOrOutstock = true

// // const allInstockButtons = document.querySelectorAll('#stock')

// // for (const stockBttn of allInstockButtons) {
// //     stockBttn.addEventListener('click', (event) => {
// //         instockOrOutstock = !instockOrOutstock

// //         if (instockOrOutstock) {
// //             stockBttn.innerText = "InStock"
// //             stockBttn.style.color = 'black'
// //         } else {
// //             stockBttn.innerText = "Out Of Stock"
// //             stockBttn.style.color = 'red'
// //         }

// //     })
// // }

// // //provide error message if required fields arent filled 







// /// select the div to submit form on click to box a 


// const formSubmit = document.querySelector('.add-BAG');
// //.wrapper
// console.log(formSubmit)



// formSubmit.addEventListener('submit', (event) => {
//     event.preventDefault();

//     console.log(formSubmit)

//     const bagSection = document.querySelector('section');
//     console.log(bagSection)
//     const newItem = document.createElement('div');
//     newItem.classList.add('bag-with-text');

//     bagSection.append(newItem);
   
//     const bagImage = document.createElement('img');
//     bagImage.src = document.querySelector('#form3').value
//     bagImage.alt = 'default image'


//     const bagName = document.createElement('h2');
//     bagName.innerText = document.querySelector('#form1').value


//     const newForm = document.createElement('form');
//     newForm.action = 'bag_inventory2';
//     newForm.method = 'post'

//     const newStckBttn = document.createElement('button')
//     newStckBttn.id = 'stock'
//     newStckBttn.type = 'button'
//     newStckBttn.innerText = 'Instock'

//     // newRmvBttn.addEventListener('click', () => { alert('Removing item'); });

//     const newRmvBttn = document.createElement('button')
//     newRmvBttn.id = 'rmv'
//     newRmvBttn.type = 'button'
//     newRmvBttn.onclick = "alert('Removing item')"
//     newRmvBttn.innerText = 'Remove'

//     newItem.append(bagImage);
//     newItem.append(bagName);

//     newForm.append(newStckBttn)
//     newForm.append(newRmvBttn);

//     newItem.append(newForm);

//     bagSection.append(newItem);

//     // formSubmit.append(bagSection);


// })

// const allRemoveButtons = document.querySelectorAll('#rmv');

// for (const rmvBttn of allRemoveButtons) {
//     rmvBttn.addEventListener('click', (event) => {

//         event.target.parentNode.parentNode.remove()
//     })
// }
// //all remove bttns to remove div on click

// let instockOrOutstock = true

// const allInstockButtons = document.querySelectorAll('#stock')

// for (const stockBttn of allInstockButtons) {
//     stockBttn.addEventListener('click', (event) => {
//         instockOrOutstock = !instockOrOutstock

//         if (instockOrOutstock) {
//             stockBttn.innerText = "InStock"
//             stockBttn.style.color = 'black'
//         } else {
//             stockBttn.innerText = "Out Of Stock"
//             stockBttn.style.color = 'red'
//         }

//     })
// }
// ///add functionality to color changing buttons

// ""

const formSubmit = document.querySelector('.add-BAG');
console.log(formSubmit)

formSubmit.addEventListener('submit', (event) => {
    event.preventDefault();

    const bagSection = document.querySelector('section');
    console.log(bagSection)
    const newItem = document.createElement('div');
    newItem.classList.add('bag-with-text');

    const bagImage = document.createElement('img');
    bagImage.src = document.querySelector('#form3').value;
    bagImage.alt = 'default image';

    const bagName = document.createElement('h2');
    bagName.innerText = document.querySelector('#form1').value;

    const newForm = document.createElement('form');
    newForm.action = 'bag_inventory2';
    newForm.method = 'post';

    const newStckBttn = document.createElement('button');
    newStckBttn.id = 'stock';
    newStckBttn.type = 'button';
    newStckBttn.innerText = 'Instock';
    newStckBttn.addEventListener('click', () => {
        instockOrOutstock = !instockOrOutstock;

        if (instockOrOutstock) {
            newStckBttn.innerText = "InStock";
            newStckBttn.style.color = 'black';
        } else {
            newStckBttn.innerText = "Out Of Stock";
            newStckBttn.style.color = 'red';
        }
    });

    const newRmvBttn = document.createElement('button');
    newRmvBttn.id = 'rmv';
    newRmvBttn.type = 'button';
    newRmvBttn.addEventListener('click', () => {
        alert('Removing item');
        newRmvBttn.parentNode.parentNode.remove();
    });
    newRmvBttn.innerText = 'Remove';

    newForm.append(newStckBttn);
    newForm.append(newRmvBttn);

    newItem.append(bagImage);
    newItem.append(bagName);
    newItem.append(newForm);

    bagSection.append(newItem);
});