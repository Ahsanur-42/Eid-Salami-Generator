function generateSalami() {
    const name = document.getElementById("nameInput").value.trim();
    if (name === "") {
        showAlert("Please enter your name!");
        return;
    }

    // Generate random salami amount
    const salami = Math.floor(Math.random() * 100) + 1;
    console.log(salami);

    // Update the salami amount in the UI
    document.getElementById("salamiAmount").innerText = salami;

    // Check if the name contains Bangla characters
    const isBangla = /[ঀ-৿]/.test(name);
    const greetingText = isBangla
        ? `আসসালামু-আলাইকুম! আল্লাহ্‌ আপনার সকল দোয়া কবুল করুন এবং আপনাকে অফুরন্ত সুখ দান করুন। ঈদ মোবারক!`
        : `Assalamu-alaikum! May Allah accept your prayers and bless you with endless happiness this Eid and always. Eid Mubarak!`;

    document.getElementById("greeting").innerText = greetingText;

    // Call to update the text based on the language
    generateAmount(isBangla);

    // Show the result div
    document.getElementById("result").classList.remove("hidden");
}

function generateAmount(isBangla) {
    // Set the label text dynamically based on the language
    const amountText = isBangla ? `🎁 মোট সালামির পরিমাণঃ ` : `🎁 Total amount of Salami: `;

    // Update the label text for the amount
    document.getElementById("amountText").innerText = amountText;
}

function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");
    alertBox.innerText = message;

    // Append alert box to body
    document.body.appendChild(alertBox);

    // Show the alert by changing its display to block
    alertBox.style.display = "block";

    // Automatically remove the alert after 2 seconds with the hide animation
    setTimeout(() => {
        alertBox.classList.add("hide-alert");
        setTimeout(() => {
            alertBox.remove();
        }, 300);  
    }, 2000); 
}


function showPayment() {
    document.getElementById("paymentPopup").style.display = "flex";
}


function closePayment() {
    document.getElementById("paymentPopup").style.display = "none";
}
