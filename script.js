document.addEventListener("DOMContentLoaded", function () {
    const calendarDays = document.querySelectorAll(".day");
    const popup = document.getElementById("task-popup");
    const closePopup = document.querySelector(".popup-content .close");
    const taskDay = document.getElementById("task-day");
    const taskContent = document.getElementById("task-content");

    // Data startowa i treści zadań
    const startDate = new Date("2024-12-01");
    const tasks = {
        1: "Zadanie 1: Oblicz pole trójkąta równobocznego o boku 5 cm.",
        2: "Zadanie 2: Znajdź długość przekątnej kwadratu o boku 10 cm.",
        3: "Zadanie 3: Oblicz promień koła o obwodzie 31.4 cm.",
        4: "Zadanie 4: Oblicz objętość stożka o wysokości 12 cm i promieniu podstawy 6 cm.",
        // Dodaj zadania aż do 24 dnia
        24: "Zadanie 24: Znajdź pole powierzchni całkowitej kuli o promieniu 7 cm.",
    };

    // Funkcja do sprawdzania daty i odblokowywania dni
    const today = new Date();
    calendarDays.forEach((day) => {
        const dayNumber = parseInt(day.dataset.day, 10);
        const dayDate = new Date(startDate);
        dayDate.setDate(startDate.getDate() + dayNumber - 1);

        if (today >= dayDate) {
            day.classList.remove("locked");
            day.addEventListener("click", () => {
                taskDay.textContent = dayNumber;
                taskContent.textContent = tasks[dayNumber] || "Zadanie niedostępne.";
                popup.classList.remove("hidden");
            });
        } else {
            day.classList.add("locked");
        }
    });

    // Zamknięcie popupu
    closePopup.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
});
