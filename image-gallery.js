function imageLoad(smallImage) {
    var fullImage = document.getElementById("imageBox");
    fullImage.src = smallImage.src;

    // Get the image name from the clicked thumbnail
    var src = smallImage.src;
    var imageName = src.substring(src.lastIndexOf('/') + 1);

    // Display the image name
    var image_name_change = document.getElementById("image_name_change");
    image_name_change.innerText = imageName;
}
