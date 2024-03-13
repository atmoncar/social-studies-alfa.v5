let button = document.querySelector('#button');

button.addEventListener('click',function() {
    let inputs = document.querySelectorAll('#test input');

    for (let input of inputs) {
        input.classList.remove('correct');
        input.classList.remove('incorrect');
        input.classList.remove('normal');

        if (input.value == input.dataset.right) {
            input.classList.add('correct');
        } else {
            input.classList.add('incorrect');
        }
    }
});

document.querySelectorAll(".clear-button")
.forEach(function (elem) {
  elem.onclick = function (e) {
    let selector = this.dataset.clearSelector;
    document.querySelectorAll(selector)
    .forEach(function (item) {
      item.value = "";
    });
  };
});

let clear = document.querySelector('#clear');

clear.addEventListener('click',function() {
    let inputs = document.querySelectorAll('#test input');

    for (let input of inputs) {
      input.classList.add('normal');
    }
});

