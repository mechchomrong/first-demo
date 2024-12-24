document.addEventListener('DOMContentLoaded', () => {
    const orderList = document.getElementById('order-list');
    const orderButtons = document.querySelectorAll('.order-btn');

    orderButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const foodItem = event.target.parentElement;
            const foodCode = foodItem.getAttribute('data-code');
            const foodPrice = foodItem.getAttribute('data-price');

            const listItem = document.createElement('li');
            listItem.textContent = `Code: ${foodCode} - Price: $${foodPrice}`;
            orderList.appendChild(listItem);
        });
    });
});
