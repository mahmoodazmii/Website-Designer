document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector(
      'input[placeholder="Your Email"]'
    ).value;
    const message = document.querySelector("textarea").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields");
    } else {
      alert(
        "Thank you for contacting us, " +
          name +
          "! We will get back to you soon."
      );
      // Here you can add an actual submission action, like sending the form data to an API.
    }
  });
