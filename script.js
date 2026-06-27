// Simple script to handle mobile navigation toggle if expanded later
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggle mobile view placeholder
        alert('Mobile menu feature placeholder. Add styles to .nav-links.active to show/hide!');
    });
});

// Handles form submission by offering browser-safe email client alternatives
function handleFormMail(event) {
    event.preventDefault(); // Stop page refresh
    
    // Grab input values
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;
    
    const targetEmail = "organizers@tedxuta.com";
    const subject = "Inquiry Regarding TEDxUTA from " + name;
    const body = `Sender Name: ${name}\nSender Email: ${email}\n\nMessage Details:\n${message}`;
    
    // Encode strings safely for web URLs
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    
    // Create custom web-mail fallback choices
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodedSubject}&body=${encodedBody}`;
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${targetEmail}&subject=${encodedSubject}&body=${encodedBody}`;
    const standardMailto = `mailto:${targetEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Update the form UI to show clean webmail launching options
    const form = document.getElementById('tedxContactForm');
    form.innerHTML = `
        <div style="text-align: center; padding: 20px 0; animation: fadeIn 0.5s ease;">
            <i class="fa-solid fa-circle-check" style="color: #e62b1e; font-size: 3rem; margin-bottom: 20px;"></i>
            <h3 style="margin-bottom: 15px; color: #fff;">Launch Your Email Provider</h3>
            <p style="color: #888; margin-bottom: 25px; font-size: 0.95rem;">
                To secure data delivery, please choose your preferred email client below to send your pre-filled message:
            </p>
            
            <a href="${gmailUrl}" target="_blank" class="btn" style="display: block; background-color: #df4b3b; color: white; margin-bottom: 12px; font-weight: bold; padding: 12px; text-decoration: none; border-radius: 4px; text-align: center;">
                <i class="fa-brands fa-google" style="margin-right: 8px;"></i> Send via Gmail (Web)
            </a>
            
            <a href="${outlookUrl}" target="_blank" class="btn" style="display: block; background-color: #0078d4; color: white; margin-bottom: 12px; font-weight: bold; padding: 12px; text-decoration: none; border-radius: 4px; text-align: center;">
                <i class="fa-brands fa-windows" style="margin-right: 8px;"></i> Send via Outlook (Web)
            </a>
            
            <a href="${standardMailto}" class="btn" style="display: block; background-color: #222; color: white; border: 1px solid #333; margin-bottom: 20px; font-weight: bold; padding: 12px; text-decoration: none; border-radius: 4px; text-align: center;">
                <i class="fa-solid fa-desktop" style="margin-right: 8px;"></i> Open Default Mail App
            </a>
            
            <hr style="border: 0; border-top: 1px solid #222; margin: 20px 0;">
            <p style="color: #666; font-size: 0.85rem; margin-bottom: 5px;">Or copy our address manually:</p>
            <code style="background-color: #111; padding: 6px 12px; border-radius: 4px; color: #e62b1e; font-size: 1rem; border: 1px solid #222; display: inline-block;">${targetEmail}</code>
        </div>
    `;
}