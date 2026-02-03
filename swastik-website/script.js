document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appointmentForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const company = document.getElementById("company").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const requirement = document.getElementById("requirement").value;
    const message = document.getElementById("message").value.trim();

    if (name === "" || phone === "") {
      alert("Please fill required fields.");
      return;
    }

    const whatsappNumber = "91XXXXXXXXXX"; // replace

    const text =
      "Factory Appointment Request - Swastik Lubricants\n\n" +
      "Name: " + name + "\n" +
      "Company: " + (company || "N/A") + "\n" +
      "Phone: " + phone + "\n" +
      "Requirement: " + requirement + "\n" +
      "Message: " + (message || "N/A");

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank");
    form.reset();
  });
});