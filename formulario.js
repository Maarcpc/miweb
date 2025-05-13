document.addEventListener("DOMContentLoaded", () => {
  const name_field = document.getElementById("name-field");
  const birthday_field = document.getElementById("birthday-field");
  const color_field = document.getElementById("color-field");
  const message_field = document.getElementById("message-field");
  const contact_form = document.getElementById("contacto-form");

  contact_form.addEventListener("submit", (event) => {
    let send = true;

    if (name_field.value.length <= 2 || name_field.value.length > 32) {
      send = false;
      name_field.style.border = "1px solid red";
    } else {
      name_field.style.border = "1px solid green";
    }

    if (birthday_field) {
      const value = birthday_field.value;
      if (value === "" || value.length !== 10) {
        send = false;
        birthday_field.style.border = "1px solid red";
      } else {
        const [year, month, day] = value.split("-").map(Number);
        if (
          isNaN(year) || isNaN(month) || isNaN(day) ||
          year <= 0 || year > 2025 ||
          month <= 0 || month > 12 ||
          day <= 0 || day > 31
        ) {
          send = false;
          birthday_field.style.border = "1px solid red";
        } else {
          birthday_field.style.border = "1px solid green";
        }
      }
    }


    if (!send) {
      console.log("Formulario con errores. No se ha enviado.");
      event.preventDefault();
    } else {
      console.log("Formulario validado correctamente. ¡Enviando!");
    }
  });
});
