// Shuffle background images - different background for each page
(function() {
    var images = [
        "/img/06074b0baf1edf46c4a444164c7b8071.jpg",
        "/img/09d3b6b34dd11b840c19c236a70360877fc72498.jpg",
        "/img/12a2b8b736ec89a633f898860f9c9c76.png",
        "/img/1313E82A3D6214DA801E3389A13442EA.jpg",
        "/img/1565f046b08693e76ea6e444bbc25fde.jpg",
        "/img/1748253811923.jpg",
        "/img/1750950236632.jpg",
        "/img/1756479439184.jpg",
        "/img/1758990428230.jpg",
        "/img/1762435569443.png",
        "/img/1767243751963.jpeg",
        "/img/1767243841682.jpeg",
        "/img/1771854752105.png",
        "/img/1ef7bdd6d64bdd8e5aea13fbec0f8c12_0.png",
        "/img/23303dfc20fef38a09e4864254842f75.jpg",
        "/img/246f264647cf119a2e3483a9f0d6371c.jpg",
        "/img/3435bba775613b1ca4f25453ae5c25e3.png",
        "/img/4294458297bdf13c2661b68a07eb8012.jpg",
        "/img/47fb2305a006513aec60c09d6b575603.jpg",
        "/img/49bdc485ecb7b6cf1c93d9e7fcaeab3b.jpg",
        "/img/4eb99e9367dec5f671898d608c5b069a.jpg",
        "/img/500968a7710da8b064b768947873009c.jpg",
        "/img/53021d58deca8b15a13c5e389a68c0f3.jpg",
        "/img/551fc0cbd04f500f8e2b12d9ae334bb2.png",
        "/img/5cca1c189085f2796dc460129af77e15.jpg",
        "/img/671ba40949c551161f5c178dfd794b3d_720.jpg",
        "/img/7ccd50a5777ff1dd75a188279fe962ea.jpg",
        "/img/83ea78aff7cf01c0b0fa1a170b9c5ad3.jpg",
        "/img/866601ef8e16f3f2db30f8fb3a56653b.jpg",
        "/img/87f3c17856ee82a774e42d88649f1834.jpg",
        "/img/89f790f659a1d73fe6f3e432cb6d43d8.jpg",
        "/img/8c164e26809009f4d31b308c4c1c26cd.png",
        "/img/98de22161b9a8fdebb5c2873b99f393e_720.png",
        "/img/99e3f5987c3791e97e22ab9ef80a1687.png",
        "/img/a5ec62ccebf8f7fcbcda6a5f8369be03.png",
        "/img/b6f85f79442d760d954162a55007e86e.png",
        "/img/bd6488d2959859d39be51e6090255073.jpg",
        "/img/c85d0de258881b973232ff179477376e_0.png",
        "/img/caacc3c9f9a21ffe8cd44d730c417dc0.jpg",
        "/img/cc814994714dde561ebe3d00ca882fd3.png",
        "/img/e0573944d3631f5599c7699a366e9ac4.png",
        "/img/e85c5424029e1245ffb2d749c6e8be12e23f9cce.jpg",
        "/img/Image_1760628778850.jpg",
        "/img/Image_509497682969704.png",
        "/img/IMG_20250326_162136.jpg",
        "/img/mmexport1746983257171.jpg",
        "/img/mmexport1746983262442.jpg",
        "/img/mmexport1748182366604.jpg",
        "/img/qq_pic_merged_1774414124334.jpg",
        "/img/qq_pic_merged_1774414145997.jpg",
        "/img/qq_pic_merged_1774414156759.jpg",
        "/img/qq_pic_merged_1774414232664.jpg",
        "/img/qq_pic_merged_1774414255630.jpg",
        "/img/qq_pic_merged_1774414276380.jpg",
        "/img/qq_pic_merged_1774414340274.jpg",
        "/img/qq_pic_merged_1774414438087.jpg",
        "/img/qq_pic_merged_1774414452359.jpg",
        "/img/qq_pic_merged_1774414468093.jpg",
        "/img/qq_pic_merged_1774414556101.jpg",
        "/img/qq_pic_merged_1774414568606.jpg",
        "/img/qq_pic_merged_1774414578815.jpg",
        "/img/qq_pic_merged_1774414681381.jpg",
        "/img/qq_pic_merged_1774414730151.jpg",
        "/img/qq_pic_merged_1774414955763.jpg",
        "/img/qq_pic_merged_1774415177224.jpg"
    ];
    
    function getRandomImage() {
        return images[Math.floor(Math.random() * images.length)];
    }
    
    function setBackground(image) {
        var headers = document.querySelectorAll('.intro-header');
        headers.forEach(function(header) {
            header.style.background = 'url(' + image + ') no-repeat center center';
            header.style.backgroundSize = 'cover';
        });
    }
    
    // Each page gets its own random background
    var randomImage = getRandomImage();
    setBackground(randomImage);
    
    // Preload image for faster display
    var img = new Image();
    img.src = randomImage;
})();