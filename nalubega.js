//Show message when page loads
window.addEventListener("load", function () {
    console.log("Page Loaded Successfully!");
    alert("Welcome! Please fill in the form responsibly.");
});

// Select the form
const form = document.querySelector("form");

//  Listen for form submission
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullname = document.querySelector("input[placeholder='Full Names']");
        const email = document.querySelector("#exampleInputEmail1");
        const password = document.querySelector("#exampleInputPassword1");

        // validation
        if (!email.value || !password.value) {
            alert("Please fill in all required fields before submitting.");
            return;
        }
// alert for successful submission
        alert("Form submitted successfully! Thank you.");

        form.submit();
    });
}