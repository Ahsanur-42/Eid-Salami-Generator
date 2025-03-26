function generateSalami() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        showAlert("Please enter your name!");
        return;
    }
    const salami = Math.floor(Math.random() * 100) + 1;
    document.getElementById("salamiAmount").innerText = salami;
    const isBangla = /[ঀ-৿]/.test(name);
    const greetingText = isBangla ? `হেই, ${name}! আল্লাহ্‌ আপনার সকল দোয়া কবুল করুন এবং আপনাকে অফুরন্ত সুখ দান করুন। ঈদ মোবারক!, ` : `Hey, ${name}! May Allah accept your prayers and bless you with endless happiness this Eid and always. Eid Mubarak!, `;
    document.getElementById("greeting").innerText = greetingText;
    document.getElementById("result").classList.remove("hidden");
}

function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");
    alertBox.innerText = message;
    document.body.appendChild(alertBox);

    // Show the alert in the middle
    alertBox.style.display = "block";

    // Automatically remove the alert after 2 seconds with the hide animation
    setTimeout(() => {
        alertBox.classList.add("hide-alert");  // Add class to trigger popOut animation
        // Remove alert after the animation duration (2 seconds)
        setTimeout(() => {
            alertBox.remove();
        }, 300); // This should match the duration of the hide animation
    }, 2000); // Alert will disappear after 2 seconds
}

function showPayment() {
    document.getElementById("paymentPopup").style.display = "flex";
}

function closePayment() {
    document.getElementById("paymentPopup").style.display = "none";
}
