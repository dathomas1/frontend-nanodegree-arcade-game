// Enemies our player must avoid
var Enemy = function(start_x, start_y, spd) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = start_x;
    this.y = start_y;
    this.speed = spd;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    

    //check if enemy off screen then gives him new position
    if (this.x > ctx.canvas.width + 10) {
        this.respawn();
    } else {
        this.x += this.speed * dt;
    }
};


Enemy.prototype.respawn = function() {
    this.x = -20;
    this.y = Math.floor(Math.random()*(300-40))+40;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(start_x, start_y, spd) {
    this.x = start_x;
    this.y = start_y;

    //Player direction
    this.x_direction = 0;
    this.y_direction = 0;

    //Player speed
    this.speed = spd;
    this.sprite = 'images/char-boy.png';
};
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function() {


};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(pressed_key) {
    switch (pressed_key) {
        case 'left':
            this.x += -1 * this.speed;
            break;
        case 'right':
            this.x += 1 * this.speed;
            break;
        case 'up':
            this.y += -1 * this.speed;
            break;
        case 'down':
            this.y += 1 * this.speed;
            break;
    }
};

// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(-20, 0, 20)];

// Place the player object in a variable called player
var player = new Player(200, 100, 2);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
