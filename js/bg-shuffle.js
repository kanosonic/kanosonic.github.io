// Shuffle background images
(function() {
    var images = [
        "img/1565f046b08693e76ea6e444bbc25fde.jpg",
        "img/1ef7bdd6d64bdd8e5aea13fbec0f8c12_0.png",
        "img/1f456d82618ce2528530954056a2a58f.png",
        "img/23303dfc20fef38a09e4864254842f75.jpg",
        "img/246f264647cf119a2e3483a9f0d6371c.jpg",
        "img/3435bba775613b1ca4f25453ae5c25e3.png",
        "img/500968a7710da8b064b768947873009c.jpg",
        "img/551fc0cbd04f500f8e2b12d9ae334bb2.png",
        "img/671ba40949c551161f5c178dfd794b3d_720.jpg",
        "img/748ef650aed6033db8b32b54576f7da4_0.png",
        "img/83ea78aff7cf01c0b0fa1a170b9c5ad3.jpg",
        "img/866601ef8e16f3f2db30f8fb3a56653b.jpg",
        "img/89f790f659a1d73fe6f3e432cb6d43d8.jpg",
        "img/8c164e26809009f4d31b308c4c1c26cd.png",
        "img/941576790b1a8ffdc01ff77f700fb10b_720.jpg",
        "img/98de22161b9a8fdebb5c2873b99f393e_720.png",
        "img/99e3f5987c3791e97e22ab9ef80a1687.png",
        "img/b6f85f79442d760d954162a55007e86e.png",
        "img/bd6488d2959859d39be51e6090255073.jpg",
        "img/c85d0de258881b973232ff179477376e_0.png",
        "img/caacc3c9f9a21ffe8cd44d730c417dc0.jpg",
        "img/cc814994714dde561ebe3d00ca882fd3.png",
        "img/e0573944d3631f5599c7699a366e9ac4.png"
    ];
    
    function setBackground() {
        var randomImage = images[Math.floor(Math.random() * images.length)];
        
        var header = document.querySelector('.intro-header');
        if (header) {
            header.style.background = '';
            header.style.backgroundImage = "url('" + randomImage + "')";
            header.style.backgroundRepeat = 'no-repeat';
            header.style.backgroundPosition = 'center center';
            header.style.backgroundSize = 'cover';
            header.style.backgroundAttachment = 'scroll';
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setBackground);
    } else {
        setBackground();
    }
})();