import { rooms } from './rooms.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


const inventory = {
    keys: [], // Array to hold collected keys
    coins: 0,
};
let keys = {
    collected: []
};
// Load player images
const playerStandingImg = new Image();
playerStandingImg.src = 'assets/playerFiles/person_standing.png'; // Path to your standing image

const playerLeftImg = new Image();
playerLeftImg.src = 'assets/playerFiles/person_LF.png'; // Path to your left-facing image

const playerRightImg = new Image();
playerRightImg.src = 'assets/playerFiles/person_RF.png'; // Path to your right-facing image


// Game settings
let player = {
    x: 400,
    y: 300,
    width: 50,
    height: 50,
    speed: 3,
    currentRoom: 'room5',
    velocity: { x: 0, y: 0 },
    currentImage: playerStandingImg, // Default image
    walkingAnimationFrame: 0 // Track the walking animation frame
};
//GOLDEN KEY
// Load key images
const goldenKeyImg = new Image();
goldenKeyImg.src = 'assets/key.png'; // Path to your golden key image

const silverKeyImg = new Image();
silverKeyImg.src = 'assets/silver_key.png'; // Path to your silver key image

const coinImg = new Image();
coinImg.src = 'assets/smiley.png'; // Path to your coin image




// Load background images
const backgrounds = {};
let imagesLoaded = 0; // Counter for loaded images
const totalImages = Object.keys(rooms).length + 1; // Total images to load (rooms + player)

for (const room in rooms) {
    backgrounds[room] = new Image();
    backgrounds[room].src = rooms[room].backgroundImage;

    backgrounds[room].onload = () => {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            gameLoop(); // Start the game loop when all images are loaded
        }
    };
}

const special_keys = {
    "Golden Key": { id: 'Golden Key', name: 'Golden Key', collected: false },
    "Silver Key": { id: 'Silver Key', name: 'Silver Key', collected: false }
    // Additional keys can be defined here
};
const total_coins = {
    "Wood Coin": { id: 'coin 1', name: 'Wood Coin', collected: false},
    "Silver Coin": { id: 'coin2', name: 'Silver Coin', collected: false}
}

function renderKeys() {
    const currentRoom = rooms[player.currentRoom];

    // Check if the current room has keys defined
    if (currentRoom.keys) {
        const keysInRoom = currentRoom.keys;

        // Draw each key in the room
        for (const key of keysInRoom) {
            // Check if the key exists in special_keys
            if (special_keys[key.id] && !special_keys[key.id].collected) { // Only draw if not collected
                const keyImage = key.type === 'gold' ? goldenKeyImg : silverKeyImg; // Choose the image based on the key type
                ctx.drawImage(keyImage, key.x, key.y, 30, 30); // Draw key image at specified position
            }
        }
    }
}

function checkKeyCollisions() {
    const currentRoom = rooms[player.currentRoom];

    // Check if the current room has keys defined
    if (currentRoom.keys) {
        const keysInRoom = currentRoom.keys;

        // Check for collisions with keys
        for (const key of keysInRoom) {
            const keyX = key.x;
            const keyY = key.y;
            const keyWidth = 30; // Width of the key sprite
            const keyHeight = 30; // Height of the key sprite

            // Check collision with the key
            if (player.x < keyX + keyWidth &&
                player.x + player.width > keyX &&
                player.y < keyY + keyHeight &&
                player.y + player.height > keyY) {
                // Collision detected, collect the key
                if (!inventory.keys.includes(key.id)) {
                    inventory.keys.push(key.id); // Add key to inventory
                    if (special_keys[key.id]) {
                        special_keys[key.id].collected = true; // Mark key as collected
                        console.log(`Collected ${special_keys[key.id].name}`); // Log key collection
                        console.log(`Current Inventory: ${JSON.stringify(inventory.keys)}`); // Log inventory state
                    } else {
                        console.error(`Key ID '${key.id}' not found in special_keys!`); // Log error if key ID is not found
                    }
                }
            }
        }
    }
}
function renderInventory() {
    ctx.fillStyle = 'white'; // Set text color
    ctx.font = '20px Arial'; // Set font size and style
    ctx.fillText('Inventory:', 10, 30); // Display inventory title
    ctx.backgrounds = 'black';

    // Display collected keys
    for (let i = 0; i < inventory.keys.length; i++) {
        const keyId = inventory.keys[i];
        ctx.fillText(`- ${special_keys[keyId].name}`, 10, 60 + i * 30); // Display each key
    }
}

//playerImg.onload = () => {
  //  imagesLoaded++;
   // if (imagesLoaded === totalImages) {
    //    gameLoop(); // Start the game loop when all images are loaded
    //}
//};

// Load tile images
const tileImages = {
    0: new Image(), // Floor tile
    1: new Image(), // Wall tile
    2: new Image(), // Door tile
    3: new Image(), // topdoor tile
    4: new Image(), // wall with vines tile
    5: new Image(), // right way door
    6: new Image(), // left way door
    7: new Image(), // spawn floor(Room 5)
    8: new Image(), // spawn walls(Room 5)
    9: new Image(), //blackout
    10: new Image(), //special otter
};

tileImages[0].src = 'assets/ground.png';
tileImages[1].src = 'assets/wood wall.jpg';
tileImages[2].src = 'assets/test images.jpg';
tileImages[3].src = 'assets/top door.png'
tileImages[4].src = 'assets/border_vine.png'
tileImages[5].src = 'assets/right door with wall.png'
tileImages[6].src = 'assets/left door with wall.png'
tileImages[7].src = 'assets/alternate floor.jpg'
tileImages[8].src = 'assets/spawn walls.jpg'
tileImages[9].src = 'assets/blackout.png'
tileImages[10].src = 'assets/otter.png'

// Load tile images and check if they are loaded
let tileImagesLoaded = 0;
const totalTileImages = Object.keys(tileImages).length;

for (const key in tileImages) {
    tileImages[key].onload = () => {
        tileImagesLoaded++;
        if (tileImagesLoaded === totalTileImages) {
            console.log('All tile images loaded');
            gameLoop(); // Start the game loop when all images are loaded
        }
    };
}

// Tile properties
const tileProperties = {
    0: { walkable: true },  // Floor tile
    1: { walkable: false }, // Wall tile
    2: { walkable: false },  // Door tile
    3: { walkable: true }, // top door
    4: { walkable: false }, //fake Wall with vines tile
    5: { walkable: true }, // special door tile -=> to the right
    6: { walkable: true }, // special door tile -=> to the left
    7: { walkable: false}, //alternate walls
    8: { walkable: true}, //alternate floor
    9: { walkable: true}, //blackout tile
    10:{ walkable: true} //special otter tile

};

// Key state tracking


const tileSize = 100; // Set tile size

window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

let frameCount = 0; // Initialize frame count
const frameRate = 30; // Number of frames to wait before updating the walking animation

function movePlayer() {
    // Reset velocity
    player.velocity.x = 0;
    player.velocity.y = 0;

    // Set rotation angle
    let rotationAngle = 0; // Initialize rotation angle

    // Set velocity and image based on the keys pressed
    if (keys['ArrowLeft']) {
        player.velocity.x = -player.speed; // Move left
        player.currentImage = (player.walkingAnimationFrame % 2 === 0) ? playerLeftImg : playerRightImg; // Alternate between LF and RF
        rotationAngle = -90; // Rotate 180 degrees for left
    }
    if (keys['ArrowRight']) {
        player.velocity.x = player.speed; // Move right
        player.currentImage = (player.walkingAnimationFrame % 2 === 0) ? playerLeftImg : playerRightImg; // Alternate between RF and LF
        rotationAngle = 90; // No rotation for right
    }
    if (keys['ArrowUp']) {
        player.velocity.y = -player.speed; // Move up
        player.currentImage = player.currentImage = (player.walkingAnimationFrame % 2 === 0) ? playerLeftImg : playerRightImg; // Alternate between RF and LF
        rotationAngle = 0; // Rotate -90 degrees for up
    }
    if (keys['ArrowDown']) {
        player.velocity.y = player.speed; // Move down
        player.currentImage = player.currentImage = (player.walkingAnimationFrame % 2 === 0) ? playerLeftImg : playerRightImg; // Alternate between RF and LF
        rotationAngle = 180; // Rotate 90 degrees for down
    }

    // Update player position
    player.x += player.velocity.x;
    player.y += player.velocity.y;

    // Check for collisions
    checkTileCollisions();
    checkDoorCollisions();
    checkKeyCollisions();

    // If the player is moving left or right, update the walking animation frame
    if (player.velocity.x !== 0) {
        frameCount++; // Increment the frame count
        if (frameCount >= frameRate) { // Check if the frame count exceeds the desired frame rate
            player.walkingAnimationFrame++; // Increment the frame for walking animation
            frameCount = 0; // Reset frame count
        }
    }

    // If no movement, set to standing image
    if (player.velocity.x === 0 && player.velocity.y === 0) {
        player.currentImage = playerStandingImg; // Set to standing image
        player.walkingAnimationFrame = 0; // Reset walking animation frame
    }

    return rotationAngle; // Return the rotation angle for use in rendering
}






function checkCoinCollisions() {
    const currentRoom = rooms[player.currentRoom];
  
    // Check if the current room has coins defined
    if (currentRoom.coins) {
      const coinsInRoom = currentRoom.coins;
  
      // Check for collisions with coins
      for (const coin of coinsInRoom) {
        const coinX = coin.x;
        const coinY = coin.y;
        const coinWidth = 30; // Width of the coin sprite
        const coinHeight = 30; // Height of the coin sprite
  
        // Check collision with the coin
        if (player.x < coinX + coinWidth &&
            player.x + player.width > coinX &&
            player.y < coinY + coinHeight &&
            player.y + player.height > coinY) {
          // Collision detected, collect the coin
          inventory.coins++; // Increment the coin count
          console.log(`Collected a coin! Total coins: ${inventory.coins}`); // Log coin collection
  
          // Remove the coin from the room (optional)
          currentRoom.coins = currentRoom.coins.filter(c => c.id !== coin.id);
        }
      }
    }
  }
function renderCoins() {
    const currentRoom = rooms[player.currentRoom];

    // Check if the current room has coins defined
    if (currentRoom.coins) {
        const coinsInRoom = currentRoom.coins;

        // Draw each coin in the room
        for (const coin of coinsInRoom) {
            ctx.drawImage(coinImg, coin.x, coin.y, 30, 30); // Draw the coin image at specified position
        }
    }
}
function renderCoinCount() {
    ctx.fillStyle = 'red'; // Set text color
    ctx.font = '32px Arial'; // Set font size and style
    ctx.fillText(`Coins: ${inventory.coins} /20`, canvas.width - 200, 30); // Display total coins
}

function checkTileCollisions() {
    const currentRoom = rooms[player.currentRoom];
    const tilemap = currentRoom.tilemap;

    // Calculate the player's new position based on velocity
    const newX = player.x + player.velocity.x;
    const newY = player.y + player.velocity.y;

    // Check for collisions with non-walkable tiles
    for (let row = 0; row < tilemap.length; row++) {
        for (let col = 0; col < tilemap[row].length; col++) {
            const tileType = tilemap[row][col];
            const tileX = col * tileSize;
            const tileY = row * tileSize;

            // Check if the tile is non-walkable (e.g., walls)
            if (tileType === 1 || tileType === 2||tileType === 7||tileType === 4||tileType ===9) { // Assuming '1' and '2' are wall tiles
                // Check for collision with the tile
                if (newX < tileX + tileSize &&
                    newX + player.width > tileX &&
                    newY < tileY + tileSize &&
                    newY + player.height > tileY) {
                    // Collision detected, revert player position
                    if (player.velocity.x > 0) { // Moving right
                        player.x = tileX - player.width; // Move player to the left of the wall
                    } else if (player.velocity.x < 0) { // Moving left
                        player.x = tileX + tileSize; // Move player to the right of the wall
                    }
                    if (player.velocity.y > 0) { // Moving down
                        player.y = tileY - player.height; // Move player to the top of the wall
                    } else if (player.velocity.y < 0) { // Moving up
                        player.y = tileY + tileSize; // Move player to the bottom of the wall
                    }
                }
            }
        }
    }

    // Optional: Check if the player is on a ground tile (0) and adjust position if necessary
    const playerTileX = Math.floor(player.x / tileSize);
    const playerTileY = Math.floor(player.y / tileSize);
    const currentTileType = tilemap[playerTileY] && tilemap[playerTileY][playerTileX];

    // If the player is not on a ground tile, reset their position or prevent further movement
    if (currentTileType !== 0) {
        // Reset player position to last known valid position or handle accordingly
        // You can implement logic here to prevent movement or snap back to the last valid position
        console.log('Player is not on a ground tile!'); // For debugging
    }
}

function checkDoorCollisions() {
    const currentRoom = rooms[player.currentRoom];
    const doors = currentRoom.doors;

    // Check for collisions with doors
    for (const door of doors) {
        const doorX = door.x;
        const doorY = door.y;
        const doorWidth = door.width;
        const doorHeight = door.height;
        console.log(`Attempting to pass through the door. Requires key: ${door.requiresKey}, Player inventory: ${inventory.keys}`);


        // Check collision with the door
        if (player.x < doorX + doorWidth &&
            player.x + player.width > doorX &&
            player.y < doorY + doorHeight &&
            player.y + player.height > doorY) {
            // Check if the door requires a key
            if (door.requiresKey && !inventory.keys.includes(door.requiresKey)) {
                console.log(`Attempting to pass through the door. Requires key: ${door.requiresKey}, Player inventory: ${inventory.keys}`);

                return; // Prevent the player from passing through
            }

            // Collision detected, transport player to the new room
            player.currentRoom = door.targetRoom; // Change to the target room
            console.log(door.direction);
            if (door.direction === 'right') {
                player.x = 50; // Spawn position on the right side
                player.y = player.y; // Keep the same y position
            } else if (door.direction === 'left') {
                player.x = 670; // Spawn position on the left side
                player.y = player.y; // Set y position as needed
            } else if (door.direction === 'up') {
                player.x = player.x; // Keep the same x position
                player.y = 450; // Spawn position on the upper side
            } else if (door.direction === 'down') {
                player.x = player.x; // Keep the same x position
                player.y = 130; // Spawn position on the lower side
            }

            // Optional: Reset velocity to avoid sticking
            player.velocity.x = 0;
            player.velocity.y = 0;

            // Load the new room's background and tilemap if necessary
            loadRoom(player.currentRoom);
            ctx.drawImage(playerStandingImg, player.x, player.y, player.width, player.height);
        }
    }
}

function loadRoom(roomName) {
    const currentRoom = rooms[roomName];
    // Assuming you have a function to load the room's background and tilemap
    // Here you could also reset any other necessary states for the new room
    console.log(`Loaded room: ${roomName}`);
}

function renderTiles() {
    const currentRoom = rooms[player.currentRoom];
    const tilemap = currentRoom.tilemap;

    // Draw the tiles based on the tilemap
    for (let row = 0; row < tilemap.length; row++) {
        for (let col = 0; col < tilemap[row].length; col++) {
            const tileType = tilemap[row][col];
            if (tileType !== undefined) {
                const tileX = col * tileSize;
                const tileY = row * tileSize;
                ctx.drawImage(tileImages[tileType], tileX, tileY, tileSize, tileSize);
            }
        }
    }

    // Draw the doors
    renderDoors();
}

function renderDoors() {
    const currentRoom = rooms[player.currentRoom];
    const doors = currentRoom.doors;

    // Draw each door as a green rectangle
    for (const door of doors) {
        ctx.fillStyle = 'green';
        ctx.fillRect(door.x, door.y, door.width, door.height);
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

    // Render the tiles
    renderTiles();

    // Render the keys in the room
    renderKeys();

    // Move the player based on input and get the rotation angle
    const rotationAngle = movePlayer();

    // Check for collisions
    checkKeyCollisions();
    renderCoins(); // Render the coins in the room
    checkCoinCollisions(); // Check for coin collisions
    renderCoinCount(); // Render the coin count

    // Save the current context
    ctx.save();

    // Translate to the player's position
    ctx.translate(player.x + player.width / 2, player.y + player.height / 2);

    // Rotate the context based on the direction
    ctx.rotate(rotationAngle);

    // Draw the player using the current image
    ctx.drawImage(player.currentImage, -player.width / 2, -player.height / 2, player.width, player.height);

    // Restore the context to its original state
    ctx.restore();

    // Render doors
    renderDoors();
    //inventory.coins = 20
    if (inventory.coins  === 20){
        ctx.font = "24px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle"
        ctx.fillText("You Win!", canvas.width / 2, canvas.height / 2);


    }
    

    // Render the inventory
    renderInventory(); // Call to render the inventory

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop when all images are loaded