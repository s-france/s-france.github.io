
var contactsModal = document.getElementById("contactsModal");
var btn = document.getElementById("contactsBtn");
var span = document.getElementsByClassName("close-modal")[0];

btn.onclick = function() {
    contactsModal.style.display = "block";
}

span.onclick = function() {
    contactsModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == contactsModal) {
        contactsModal.style.display = "none";
    }
}
