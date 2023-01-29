/* You could go through profile photos by linking an if statement to each image with the condition
being the image before or after it in the folder or an order predetermined.
i.e.
    if (image 1) set to image 2
    ...
    ...
    ...
    if (image n) set to image 1

    where n is the total number of images
*/

const arrayOfImageFileNames = ["a.jpeg",
                                "b.jpeg",
                                "c.jpeg",
                                "d.jpeg",
                                "f.jpeg",
                                "g.jpeg",
                                "h.jpeg",
                                "i.jpeg"];
document.querySelector("img").setAttribute("src", `./${arrayOfImageFileNames[0]}`);

document.querySelector(".next").addEventListener("click", function () {
    const currentImageIndex = arrayOfImageFileNames.indexOf(document.querySelector("img").getAttribute("src")); //(int)
    let currentImage;

    if (currentImageIndex < arrayOfImageFileNames.length - 1)
    {
        currentImage = arrayOfImageFileNames[currentImageIndex + 1];
        document.querySelector("img").setAttribute("src", currentImage);
    }
    else
    {
        currentImage = arrayOfImageFileNames[0];
        document.querySelector("img").setAttribute("src", currentImage);
    }
});