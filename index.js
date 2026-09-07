document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnB').addEventListener('click', function () {
        window.location.href = 'tel:+254704856247';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnC').addEventListener('click', function () {
        var phone = this.getAttribute('data-phone');
        window.location.href = 'sms:' + phone;
    });
});