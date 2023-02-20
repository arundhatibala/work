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
    switch (val) {
        case 1:
            image.src = '../media/projects/1.png';
            break;
        case 2:
            image.src = '../media/projects/2.png';
            break;
        case 3:
            image.src = '../media/projects/3.png';
            break;
        case 4:
            image.src = '../media/projects/4.png';
            break;
        case 5:
            image.src = '../media/projects/5.png';
            break;
        case 6:
            image.src = '../media/projects/6.png';
            break;
        case 7:
            image.src = '../media/projects/7.png';
            break;
        case 8:
            image.src = '../media/projects/8.png';
            break;
        default:
            image.src = '../media/projects/1.png';
    }
}

function hideImage (){
    image.style.display = 'none';
    image.style.animation = 'fadein 1s';
}