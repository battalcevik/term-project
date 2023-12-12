document.addEventListener("DOMContentLoaded", function () {
    // Get all gallery items and store them in an array
    var galleryItems = document.querySelectorAll(".gallery-item");

    // Index to keep track of the current image
    var currentIndex = 0;

    // Function to show the next image
    function showNextImage() {
        // Increment the index
        currentIndex++;

        // If we reach the end, loop back to the first image
        if (currentIndex === galleryItems.length) {
            currentIndex = 0;
        }

        // Hide all images and their associated text
        hideAllImages();

        // Show the current image and its text
        galleryItems[currentIndex].classList.add("visible");
        galleryItems[currentIndex].querySelector(".image-text").classList.add("visible");
    }

    // Function to show the previous image
    function showPrevImage() {
        // Decrement the index
        currentIndex--;

        // If we go before the first image, loop to the last image
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        }

        // Hide all images and their associated text
        hideAllImages();

        // Show the current image and its text
        galleryItems[currentIndex].classList.add("visible");
        galleryItems[currentIndex].querySelector(".image-text").classList.add("visible");
    }

    // Function to hide all images and their associated text
    function hideAllImages() {
        galleryItems.forEach(function (item) {
            item.classList.remove("visible");
            var textElement = item.querySelector(".image-text");
            if (textElement) {
                textElement.classList.remove("visible");
            }
        });
    }

    // Show the first image by default
    galleryItems[currentIndex].classList.add("visible");

    // Add a click event listener to each gallery item
    galleryItems.forEach(function (item, index) {
        item.addEventListener("click", function () {
            // Set the current index to the clicked item's index
            currentIndex = index;

            // Hide all images and their associated text
            hideAllImages();

            // Show the clicked image and its text
            galleryItems[currentIndex].classList.add("visible");
            galleryItems[currentIndex].querySelector(".image-text").classList.add("visible");
        });
    });

    // Add an event listener to the document to listen for arrow key presses
    document.addEventListener("keydown", function (event) {
        // If the right arrow key is pressed, show the next image
        if (event.key === "ArrowRight") {
            showNextImage();
        }
        // If the left arrow key is pressed, show the previous image
        else if (event.key === "ArrowLeft") {
            showPrevImage();
        }
    });

    // Add click event listeners for next and previous buttons
    var nextButton = document.getElementById("nextButton");
    var prevButton = document.getElementById("prevButton");

    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);

    nextButton.addEventListener("click", function () {
        // Call the Vue method to show the next image
        app.showNextImage();
      });
    
      prevButton.addEventListener("click", function () {
        // Call the Vue method to show the previous image
        app.showPrevImage();
      });

});
