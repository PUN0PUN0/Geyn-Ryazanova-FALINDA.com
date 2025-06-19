// Функции для работы модальных окон
function openModal() {
    document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none";
    document.getElementById("successModal").style.display = "none";
}

// Обработчик формы заказа
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    closeModal();
    document.getElementById("successModal").style.display = "block";
});

// Обработчик формы сотрудничества
document.getElementById("collaborationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successModal").style.display = "block";
});

// Обработчик формы контактов
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("successModal").style.display = "block";
});

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    if (event.target.className === "modal") {
        closeModal();
    }
};