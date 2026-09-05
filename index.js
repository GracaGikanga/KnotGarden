document.addEventListener('DOMContentLoaded', function() {
    const btnA = document.getElementById('btnA');
    
    if (btnA) {
        btnA.addEventListener('click', function() {
            const phoneNumber = "254704856274"; 
            const defaultMessage = encodeURIComponent("Hello! I'm reaching out from your website.");
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }
});