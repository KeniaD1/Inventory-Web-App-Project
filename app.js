
// Element.addEventListener('click', function)
// const removeBtn = document.getElementById('rmv')
// //console.log(removeBtn)
// const clear = document.getElementById('num1')
// //console.log(clear)
// // removeBtn.addEventListener('click', (event) => {
//     if (event) {
//         clear.remove()
//     }
// })


const allRemoveButtons = document.querySelectorAll('#rmv')
console.log(allRemoveButtons)

for (const rmvBttn of allRemoveButtons) {
    rmvBttn.addEventListener('click', (event) => {
        // console.log(event.target.parentNode.parentNode)
        event.target.parentNode.parentNode.remove()
    })
}
//all remove bttns to remove div on click













// function renderBags() {
//     var div = document.getElementById("bag-inventory");
//     for (var i = 0; i < bags.length; i++) {
//       var bag = bags[i];
//       var li = document.createElement("li");
//       li.textContent = bag.name + " " + bag.color + " " + bag.price;
//       div.appendChild(li);
//     }}