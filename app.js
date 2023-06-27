function renderBags() {
    var div = document.getElementById("bag-inventory");
    for (var i = 0; i < bags.length; i++) {
      var bag = bags[i];
      var li = document.createElement("li");
      li.textContent = bag.name + " " + bag.color + " " + bag.price;
      div.appendChild(li);
    }}