document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnA').addEventListener('click', function () {
        var message = encodeURIComponent('I am reaching out from your website,');
        window.location.href = 'https://wa.me/254704856247?text=' + message;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnB').addEventListener('click', function () {
        window.location.href = 'tel:+254704856247';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnC').addEventListener('click', function () {
        var message = encodeURIComponent('I am reaching out from your website,');
        window.location.href = 'sms:+254704856247?body=' + message;
    });
});