class Engine {

  constructor(canvas, button, canvasSizeX, canvasSizeY) {
    this.canvas = canvas; // canvas element
    this.ctx = canvas.getContext('2d'); // Canvas' context
    this.x = 0; // Default X Value of Rectangle
    this.y = 0; // Default Y Value of Rectangle
    this.size = 50; // Default size Value of Rectangle
    this.ctx.fillRect(this.x, this.y, this.size, this.size);

    // Event listener to move the rectangle around
    button.addEventListener("click", (e) => {
      let randomX = Math.floor(Math.random() * (canvasSizeX - this.size + 1));
      let randomY = Math.floor(Math.random() * (canvasSizeY - this.size + 1));
      this.moveRect(this.x, this.y, randomX, randomY);
      this.x = randomX;
      this.y = randomY;
    });
  }

  // Function that moves the rectangle from one place to another
  moveRect(oldX, oldY, newX, newY, sizeX = this.size, sizeY = this.size) {
    this.ctx.clearRect(oldX, oldY, sizeX, sizeY);
    this.ctx.fillRect(newX, newY, sizeX, sizeY);
  }

}

// Load Canvas and button in the Engine Class
window.onload = () => {
  let canvas = document.getElementById('canvas');
  let button = document.getElementById('move');
  let engine = new Engine(canvas, button, canvas.width, canvas.height);
};
