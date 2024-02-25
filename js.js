let balance = 14000000;
const money = document.querySelector('.money');
const buyCola = document.querySelector('.buyCola');
const buyTig = document.querySelector('.buyTig');
const buyShao = document.querySelector('.buyShao');
const buyCeas = document.querySelector('.buyCeas');
const buyHanorac = document.querySelector('.buyHanorac');
const buyIph = document.querySelector('.buyIph');
const buy = function(value, quantity) {

    const quantityNumber = parseFloat(quantity);

    if (!isNaN(quantityNumber) && quantityNumber > 0) {
        balance -= quantityNumber * value;
        money.textContent = `${balance} RON`;
    } else {
        console.log("Invalid input. Please enter a valid quantity.");
    }
}


buyCola.addEventListener('click', function() {
    const quantity = document.querySelector('.inputCola').value;
    buy(5, quantity);
});

buyTig.addEventListener('click', function() {
    const quantity = document.querySelector('.inputTig').value;
    buy(26, quantity);
});

buyShao.addEventListener('click', function() {
    const quantity = document.querySelector('.inputShao').value;
    buy(36, quantity);
});

buyCeas.addEventListener('click', function() {
    const quantity = document.querySelector('.inputCeas').value;
    buy(2100, quantity);
});

buyHanorac.addEventListener('click', function() {
    const quantity = document.querySelector('.inputHanorac').value;
    buy(4800, quantity);
});

buyIph.addEventListener('click', function() {
    const quantity = document.querySelector('.inputIph').value;
    buy(8200, quantity);
    });




