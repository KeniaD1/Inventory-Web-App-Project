// newRmvBttn.addEventListener('click', () => { alert('Removing item'); });

//     const allRemoveButtons = document.querySelectorAll('#rmv');
//     allRemoveButtons.addEventListener('click', (event) => {
//         for (const rmvBttn of allRemoveButtons) {
//             if (rmvBttn) {
//                 alert('Removing item');
//                 event.target.parentNode.parentNode.remove();
//                 // newItem.remove();
//             }
//         }

//     })
//     //all remove bttns to remove div on click

//     let instockOrOutstock = true

//     const allInstockButtons = document.querySelectorAll('#stock')

//     for (const stockBttn of allInstockButtons) {
//         stockBttn.addEventListener('click', () => {

//             instockOrOutstock = !instockOrOutstock

//             if (instockOrOutstock) {
//                 stockBttn.innerText = "InStock"
//                 stockBttn.style.color = 'black'
//             } else {
//                 stockBttn.innerText = "Out Of Stock"
//                 stockBttn.style.color = 'red'
//             }

//         })
//     }
// })


// // ///add functionality to color changing buttons

// // ""





























// // const formSubmit = document.querySelector('.add-BAG');
// // console.log("initial", formSubmit);

// // formSubmit.addEventListener('submit', (event) => {
// //   event.preventDefault();

// //   const bagSection = document.querySelector('section');
// //   const newItem = document.createElement('div');
// //   newItem.classList.add('bag-with-text');

// //   const bagImage = document.createElement('img');
// //   bagImage.src = document.querySelector('#form3').value;
// //   bagImage.alt = 'default image';

// //   const bagName = document.createElement('h2');
// //   bagName.innerText = document.querySelector('#form1').value;

// //   const newForm = document.createElement('form');
// //   newForm.action = 'bag_inventory2';
// //   newForm.method = 'post';

// //   const newStckBttn = document.createElement('button');
// //   newStckBttn.id = 'stock';
// //   newStckBttn.type = 'button';
// //   newStckBttn.innerText = 'Instock';

// //   const newRmvBttn = document.createElement('button');
// //   newRmvBttn.id = 'rmv';
// //   newRmvBttn.type = 'button';
// //   newRmvBttn.innerText = 'Remove';

// //   newForm.append(newStckBttn);
// //   newForm.append(newRmvBttn);

// //   newItem.append(bagImage);
// //   newItem.append(bagName);
// //   newItem.append(newForm);

// //   bagSection.append(newItem);

// //   formSubmit.reset();

// //   console.log("after reset", formSubmit);
// //   newRmvBttn.addEventListener('click', () => {
// //     alert('Removing item');
// //     newItem.remove();
// //   })
// //   newStckBttn.addEventListener('click', () => {
// //     newStckBttn.innerText = newStckBttn.innerText === 'Instock' ? 'Out Of Stock' : 'Instock';
// //     newStckBttn.style.color = newStckBttn.innerText === 'Instock' ? 'black' : 'red';
// //   });
// //   console.log("end", formSubmit);
// // });

