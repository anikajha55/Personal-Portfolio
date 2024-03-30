var typed = new Typed('#element', {
    strings: ['Student.', 'Learner.', 'Artist.', 'Performer.', 'Video Editor.'],
    typeSpeed: 50,
    loop: true,
});
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
  
        if (confirm("Are you sure you want to send this message?")) {
            form.submit();
        } else {
            return false;
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            event.preventDefault(); 
            var targetId = this.getAttribute("href").substring(1); 
            var targetSection = document.getElementById(targetId); 
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" }); 
        });
    }
});
