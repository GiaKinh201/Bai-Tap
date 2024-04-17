const image =document.getElementById('dynamic-image');

image.addEventListener('mousemove', function() {
    image.src = '../img/image2.jpg';
})
image.addEventListener('mouseout', function() {
    image.src = '../img/image1.jpg';
})