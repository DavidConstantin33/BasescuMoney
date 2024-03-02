let balance = 14000000;
const money = document.querySelector('.money');
const buyCola = document.querySelector('.buyCola');
const buyTig = document.querySelector('.buyTig');
const buyShao = document.querySelector('.buyShao');
const buyCeas = document.querySelector('.buyCeas');
const buyHanorac = document.querySelector('.buyHanorac');
const buyIph = document.querySelector('.buyIph');
const buyDacia = document.querySelector('.buyDacia');
const buyRolex =document.querySelector('.buyRolex');
const buyApt = document.querySelector('.buyApt');
const buy = function(value, quantity) {

    const quantityNumber = parseFloat(quantity);

    if (!isNaN(quantityNumber) && quantityNumber > 0) {
        balance -= quantityNumber * value;
        money.textContent = `${balance} RON`;
    } else {
        console.log("Invalid input. Please enter a valid quantity.");
    }
}

const showModal = function() {
    if (balance < 0) {
        const audio = new Audio('pinguin2.mp3');
        const datorii = document.querySelector('.datorii');
        datorii.textContent = `Tocmai ai bagat Romania in datorii de ${Math.abs(balance)} RON`;
        document.getElementById('myModal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        audio.play();
    }
}

const closeModal = function() {
    document.getElementById('myModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    location.reload();
}

buyCola.addEventListener('click', function() {
    const quantity = document.querySelector('.inputCola').value;
    buy(5, quantity);
    showModal()
});

buyTig.addEventListener('click', function() {
    const quantity = document.querySelector('.inputTig').value;
    buy(26, quantity);
    showModal()
});

buyShao.addEventListener('click', function() {
    const quantity = document.querySelector('.inputShao').value;
    buy(36, quantity);
    showModal()
});

buyCeas.addEventListener('click', function() {
    const quantity = document.querySelector('.inputCeas').value;
    buy(2100, quantity);
    showModal()
});

buyHanorac.addEventListener('click', function() {
    const quantity = document.querySelector('.inputHanorac').value;
    buy(4800, quantity);
    showModal()
});

buyIph.addEventListener('click', function() {
    const quantity = document.querySelector('.inputIph').value;
    buy(8200, quantity);
    showModal()
    });

buyDacia.addEventListener('click', function() {
    const quantity = document.querySelector('.inputDacia').value;
    buy(42000, quantity);
    showModal()
});

buyRolex.addEventListener('click', function() {
    const quantity = document.querySelector('.inputRolex').value;
    buy(120000, quantity);
    showModal()
});

buyApt.addEventListener('click', function() {
    const quantity = document.querySelector('.inputApt').value;
    buy(400000, quantity);
    showModal()
});







