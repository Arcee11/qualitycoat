/* Quality Coat site scripts: mobile nav toggle + quote form (FormSubmit AJAX). */


document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }


  var form = document.getElementById("quote-form");
  if (!form) return;


  // Live inbox: qualitycoat27@gmail.com via FormSubmit.
  var QUOTE_FORM_ENDPOINT = "https://formsubmit.co/ajax/qualitycoat27@gmail.com";


  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var status = document.getElementById("quote-status");
    var data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      service: form.service.value,
      details: form.details.value.trim(),
      _subject: "New quote request from the Quality Coat website"
    };
    if (!data.name || !data.phone || !data.details) {
      status.textContent = "Please add your name, phone number, and a few project details.";
      status.className = "form-status error";
      return;
    }
    status.textContent = "Sending your request...";
    status.className = "form-status";
    try {
      var res = await fetch(QUOTE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("send failed");
      status.textContent = "Thank you. Your quote request is on its way. Expect a call back soon.";
      status.className = "form-status ok";
      form.reset();
    } catch (err) {
      status.textContent = "Something went wrong sending the form. Please call 239-222-1439 and we will take care of you.";
      status.className = "form-status error";
    }
  });
});

