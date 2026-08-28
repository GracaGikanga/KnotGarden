<!-- Button A -->
<button id="btnA">Chat on WhatsApp</button>

<script>
  document.getElementById('btnA').addEventListener('click', function() {
    // 1. Phone number must include country code without '+', spaces, or dashes
    const phoneNumber = "1234567890"; 
    
    // 2. Optional pre-filled message (encoded for safety)
    const defaultMessage = encodeURIComponent("Hello! I'm reaching out from your website.");
    
    // 3. Construct the deep link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    
    // 4. Redirect the user (opens in a new tab)
    window.open(whatsappUrl, '_blank');
  });
</script>