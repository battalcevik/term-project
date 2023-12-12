// main.js
new Vue({
  el: '#gallery', 
  data: {
    currentIndex: 0,
    galleryItems: document.querySelectorAll(".gallery-item")
  },
  methods: {
    showNextImage() {
      // Increment the index
      this.currentIndex++;

      // If we reach the end, loop back to the first image
      if (this.currentIndex === galleryItems.length) {
        this.currentIndex = 0;
      }
    },
    showPrevImage() {
      // Decrement the index
      this.currentIndex--;

      // If we go before the first image, loop to the last image
      if (this.currentIndex < 0) {
        this.currentIndex = galleryItems.length - 1;
      }
    },
  },
});
