const image = document.getElementById('project-image');
console.log(image)
// // element.src = '../media/profile/profile.jpeg';
// // element.style.display = 'none';

// title = document.getElementById('elert');

// // title.addEventListener('mouseenter', showImage());

function showImage (val){
    image.style.display = 'block';
    image.style.animation = 'fadein 1s';
    //add switch case for image sources
}

function hideImage (){
    image.style.display = 'none';
    image.style.animation = 'fadein 1s';
}