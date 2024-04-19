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

function sendEmail() {
    Email.send({
        // secureToken: "671b70d1-e2d8-47e5-92ce-a728bcbd912f",
        Host : "smtp.gmail.com",
        Username : "krishnadascp1999@gmail.com",
        Password : "BF10F39F8F1A05BEFB0F634C43D2301BBB03",
        To : 'krishnadascp1999@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Portfolio - Enquiry",
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("email sent successfully")
    );
}
