document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all sections
        document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));

        // Add 'active' class to the clicked section
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).classList.add('active');
    });
});

// Initially activate the 'About Us' section
document.querySelector('#about').classList.add('active');
document.addEventListener('DOMContentLoaded', function() {
    var gallery = document.getElementById('photoGallery');
    var imageUrls = ['P1.jpg', 'P2.jpg','P26.jpg','P27.jpg', 'P28.jpg', 'P29.jpg', 'P40.jpg', 'P41.jpg', 'P42.jpg', 'P43.jpg']; // Add your image paths here

    imageUrls.forEach(function(url) {
        var img = document.createElement('img');
        img.src = url;
        gallery.appendChild(img);
    });
});
