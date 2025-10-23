// 7. Funkcje MVP: Obsługa formularza kontaktowego

document.addEventListener("DOMContentLoaded", function() {
    
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Zapobiegaj domyślnej akcji wysyłania formularza
            event.preventDefault();

            // Zbieranie danych (opcjonalne, na razie nie wysyłamy)
            // const name = document.getElementById("name").value;
            // const email = document.getElementById("email").value;
            // const message = document.getElementById("message").value;
            
            // Wyświetl prosty alert (zgodnie z wytyczną MVP)
            alert("Dziękujemy! Twoja wiadomość została (symulacyjnie) wysłana.");

            // Wyczyść formularz po "wysłaniu"
            contactForm.reset();
        });
    }

});