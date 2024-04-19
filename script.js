var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var sidemenu = document.getElementById('sidemenu');
function openMenu() {
    sidemenu.style.right = '0';
}
function closeMenu() {
    sidemenu.style.right = '-200px';
}

function sendMail() {
    Email.send({
        SecureToken : "7f8a9671-7650-45e0-8f13-26912d112a44",
        To : 'krishnadascp24@gmail.com',
        From : "krishnadascp24@gmail.com",
        Subject : "Portfolio - Enquiry",
        Body: '<b>Name: </b>' + document.getElementById('name').value + '<br/>' +
            '<b>Email: </b>' + document.getElementById('email').value + '<br/>' +
            '<b>Message: </b>' + document.getElementById('message').value
    }).then(
    message => alert(message)
    );
}