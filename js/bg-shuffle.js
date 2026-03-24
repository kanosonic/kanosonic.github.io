// Shuffle background images
(function() {
    var images = [
        "img/51bd0325105e1e80dd6857a057fc8973.jpg",
        "img/671ba40949c551161f5c178dfd794b3d_720.jpg",
        "img/941576790b1a8ffdc01ff77f700fb10b_720.jpg",
        "img/98de22161b9a8fdebb5c2873b99f393e_720.png",
        "img/e0573944d3631f5599c7699a366e9ac4.png"
    ];
    
    function setBackground() {
        var randomImage = images[Math.floor(Math.random() * images.length)];
        
        var header = document.querySelector('.intro-header');
        if (header) {
            header.style.setProperty('background-image', "url('" + randomImage + "')", 'important');
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setBackground);
    } else {
        setBackground();
    }
})();