export const rooms = {
    room1: {
        layout: 'full',
        enemies: [],
        exits: { down: 'room4' },
        backgroundImage: 'assets/backgrounds/room1.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'down', x: 400, y: 570, width: 200, height: 30, targetRoom: 'room4', targetX: 400, targetY: 0 } // Door at the bottom
        ],tilemap: [
            [2,2,2,2,2,2,2,2],
            [2,8,8,8,8,8,8,1], 
            [2,8,0,0,0,0,8,1], 
            [2,8,0,2,8,8,8,1], 
            [2,8,10,2,8,0,8,1],
            [2,2,2,2,8,0,2,2] 
        ],coins: [
            { id: "coin4", x: 215, y: 415 }
            
        ],
    },
    room2: {
        layout: 'full',
        enemies: [],
        exits: { down: 'room5', right: 'room3' },
        backgroundImage: 'assets/backgrounds/room2.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'down', x: 400, y: 550, width: 200, height: 50, targetRoom: 'room5', targetX: 400, targetY: 0 },
            { direction: 'right', x: 750, y: 100, width: 50, height: 100, targetRoom: 'room3', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [2,2,2,2,2,2,2,2],
            [1,0,0,0,0,0,0,0], 
            [1,0,2,0,0,0,0,2], 
            [1,0,0,2,2,2,2,2], 
            [1,0,0,0,0,0,10,2],
            [2,2,2,2,0,0,2,2] 
        ],
        coins: [
            { id: "coin5", x: 618, y: 415 },
        ],
    },
    room3: {
        layout: 'full',
        enemies: [],
        exits: { up: 'room10', down: 'room6', left: 'room2' },
        backgroundImage: 'assets/backgrounds/room3.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'up', x: 400, y: 0, width: 100, height: 50, targetRoom: 'room10', targetX: 400, targetY: 0 },
            {  direction: 'down', x: 400, y: 550, width: 200, height: 50, targetRoom: 'room6', targetX: 400, targetY: 0 },
            {  direction: 'left', x: 0, y: 100, width: 30, height:100, targetRoom: 'room2', targetX: 400, targetY: 0 } // Door at the bottom
        ],tilemap: [
            [2,2,2,2,0,2,2,9],
            [0,0,0,0,0,0,2,2], 
            [2,2,2,0,0,0,0,2], 
            [2,10,2,0,0,0,0,2], 
            [2,0,0,0,0,0,0,2],
            [2,2,2,2,0,0,2,2] 
        ],coins: [
            { id: "coin6", x: 118, y: 315 },
        ]
    },
    room4: {
        layout: 'full',
        enemies: [],
        exits: { up: 'room1', down: 'room7', right: 'room5' },
        backgroundImage: 'assets/backgrounds/room4.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        
        doors: [
            {  direction: 'up', x: 500, y: 0, width: 200, height: 40, targetRoom: 'room1', targetX: 400, targetY: 0 },
            {  direction: 'down', x: 100, y: 550, width: 200, height: 50, targetRoom: 'room7', targetX: 400, targetY: 0 },
            {  direction: 'right', x: 780, y: 100, width: 50, height: 400, targetRoom: 'room5', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [2,2,2,2,2,3,3,2],
            [2,0,0,0,0,0,0,0], 
            [2,0,0,2,0,0,0,0], 
            [2,0,0,10,2,0,0,0], 
            [2,0,0,0,2,0,0,0],
            [2,0,0,2,2,2,2,2] 
        ],
        keys:[
            //{id: "key1",x:200,y:400,type: 'gold'},
            //{id: "key2",x:200,y:300,tyle: 'silver'}
        ],coins: [
            { id: "coin7", x: 318, y: 315 },
        ]
    },
    room5: {
        layout: 'full',
        enemies: [],
        exits: { left: 'room4', right: 'room6' },
        backgroundImage: 'assets/backgrounds/room5.png',
        width: 800,
        height: 600,
        doors: [
            { direction: 'left', x: 0, y: 100, width: 50, height: 400 , targetRoom: 'room4', targetX: 300 , targetY:300  },
            { direction: 'right', x: 740, y: 100, width: 50, height: 100 , targetRoom: 'room6', targetX: 400, targetY: 0},
            { direction: 'right', x: 740, y: 400, width: 50, height: 100 , targetRoom: 'room6', targetX: 400, targetY: 0}
        ],
        tilemap: [
            [7,7,7,4,4,7,7,7],
            [8,0,8,0,8,0,8,5], 
            [0,8,0,8,0,8,0,2], 
            [8,0,8,0,8,0,8,2], 
            [0,8,0,8,0,8,0,5],
            [7,7,7,4,4,7,7,7] 
        ],
        keys:[
            //{id: "key1",x:200,y:400,type: 'gold'},
            //{id: "key2",x:200,y:300,tyle: 'silver'}
        ],
        coins: [
            { id: "coin1", x: 200, y: 300 },
            { id: "coin2", x: 400, y: 200 }
        ],
    },
    room6: {
        layout: 'full',
        enemies: [],
        exits: { left: 'room5', up: 'room3', down: 'room9' },
        backgroundImage: 'assets/backgrounds/room6.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'down', x: 100, y:550, width: 200, height: 50, targetRoom: 'room9', targetX: 400, targetY: 0 },
            { direction: 'up', x: 500, y:0, width: 100, height: 50 , targetRoom: 'room3', targetX: 400, targetY: 0, requiresKey: 'Silver Key'},
            { direction: 'left', x: 20, y:100, width: 20, height: 100, targetRoom: 'room5', targetX: 400, targetY: 0 },
            { direction: 'left', x: 20, y:400, width: 20, height: 100, targetRoom: 'room5', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [2,2,2,2,2,3,2,9],
            [6,0,0,0,0,0,0,2], 
            [2,0,0,7,7,7,0,2], 
            [7,7,7,10,0,0,0,2], 
            [6,0,0,7,0,0,2,9],
            [2,0,0,2,2,2,9,9] 
        ],
        coins: [
            { id: "coin3", x: 317, y: 312 } 
        ],
    },
    room7: {
        layout: 'full',
        enemies: [],
        exits: { up: 'room4', right: 'room8', left: 'rooom13' },
        backgroundImage: 'assets/backgrounds/room7.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'right', x: 750, y: 100, width: 50, height: 100, targetRoom: 'room8', targetX: 400, targetY: 0 },
            { direction: 'up', x: 100, y: 0, width: 200, height: 50, targetRoom: 'room4', targetX: 400, targetY: 0 },
            { direction: 'left', x: 0, y: 200, width: 50, height: 200, targetRoom: 'room13', targetX: 400, targetY: 0,requiresKey: 'Golden Key' } // Door at the bottom
        ],
        tilemap: [
            [2,3,3,2,2,2,2,2],
            [7,0,0,2,10,0,0,5], 
            [0,0,0,2,2,0,0,2], 
            [0,0,0,0,2,0,0,2], 
            [7,0,0,0,0,0,0,2],
            [7,7,2,2,2,2,2,2] 
        ],coins: [
            { id: "coin8", x: 418, y: 115 },
        ]
    },
    room8: {
        layout: 'full',
        enemies: [],
        exits: { left: 'room7', up: 'room5', down: 'room12' },
        backgroundImage: 'assets/backgrounds/room8.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'up', x: 400, y: 0, width: 200, height: 50 , targetRoom: 'room5', targetX: 400, targetY: 0},
            { direction: 'down', x: 500, y: 550, width: 200, height: 50 , targetRoom: 'room12', targetX: 400, targetY: 0},
            { direction: 'left', x: 0, y: 100, width: 50, height: 100 , targetRoom: 'room7', targetX: 400, targetY: 0} // Door at the bottom
        ],
        tilemap: [
            [2,2,2,2,3,3,2,2],
            [6,0,0,7,0,0,0,1], 
            [2,0,0,0,0,0,0,1], 
            [2,0,2,0,7,7,0,1], 
            [2,0,0,0,0,0,0,1],
            [2,2,2,2,2,0,0,2] 
        ]
    },
    room9: {
        layout: 'full',
        enemies: [],
        exits: { up: 'room6', right: 'room11' },
        backgroundImage: 'assets/backgrounds/room9.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'right', x: 750, y: 400, width: 50, height: 100, targetRoom: 'room11', targetX: 400, targetY: 0 },
            { direction: 'up', x: 100, y: 0, width: 200, height: 50, targetRoom: 'room6', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [2,3,3,2,2,2,2,2],
            [1,8,0,8,0,8,0,2], 
            [1,0,8,0,8,0,8,2], 
            [1,8,0,8,0,8,0,2], 
            [1,0,8,0,8,0,8,10],
            [2,2,2,2,2,2,2,2] 
        ],coins: [
            { id: "coin9", x: 718, y: 415 },
        ]
    },
    room10: {
        layout: 'full',
        enemies: [],
        exits: { down: 'room3' },
        backgroundImage: 'assets/backgrounds/room10.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'down', x: 400, y: 550, width: 100, height: 50, targetRoom: 'room3', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [9,9,9,9,9,9,9,9],
            [9,9,9,9,9,9,9,9], 
            [9,2,2,2,2,2,2,9], 
            [2,0,0,0,0,7,10,2], 
            [2,0,1,1,0,0,0,2],
            [9,2,2,2,0,2,2,9] 
        ],//TODO: Remove outside border change 0 to something else
        keys:[
            {id: "Golden Key",x:130,y:450,type: 'gold'},
    
        ],coins: [
            { id: "coin10", x: 618, y: 315 },
        ]
    },
    room11: {
        layout: 'full',
        enemies: [],
        exits: { left: 'room9' },
        backgroundImage: 'assets/backgrounds/room11.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'left', x: 0, y: 400, width: 50, height: 100, targetRoom: 'room9', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap:[
            [9,9,9,9,9,9,9,9],
            [9,2,2,2,2,9,9,9], 
            [2,10,8,8,8,2,9,9], 
            [2,2,2,2,8,2,9,9], 
            [6,8,8,8,8,2,9,9],
            [2,2,2,2,2,9,9,9] 
        ],coins: [
            { id: "coin11", x: 118, y: 215 },
        ]
    },
    room12: {
        layout: 'full',
        enemies: [],
        exits: { up: 'room8' },
        backgroundImage: 'assets/backgrounds/room12.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'up', x: 500, y: 0, width: 200, height: 50, targetRoom: 'room8', targetX: 400, targetY: 0 } // Door at the top
        ],
        tilemap: [
            [2,2,2,2,2,3,3,2],
            [2,8,8,8,7,8,8,1], 
            [2,8,7,8,7,8,8,1], 
            [2,8,7,8,7,8,8,1], 
            [2,10,7,8,8,8,8,1],
            [2,2,2,2,2,2,2,2] 
        ],
        keys:[
            
            {id: "Silver Key",x:160,y:410,type: 'silver'}
        ],coins: [
            { id: "coin12", x: 118, y: 415 },
        ]

    },
    room13: {
        layout: 'full',
        enemies: [],
        exits: { right: 'room7' },
        backgroundImage: 'assets/backgrounds/room13.png',
        width: 800, // Set the width of the room image
        height: 600 // Set the height of the room image
        , // Set the height of the room image
        doors: [
            { direction: 'right', x: 750, y: 200, width: 50, height: 200, targetRoom: 'room7', targetX: 400, targetY: 0 } // Door at the bottom
        ],
        tilemap: [
            [2,2,2,2,2,2,2,2],
            [2,0,0,0,0,0,0,1], 
            [2,0,0,0,0,0,0,0], 
            [2,0,0,0,0,0,0,0], 
            [2,0,0,0,0,0,0,1],
            [2,2,2,2,2,2,2,2] 
        ]//TODO: Remove outside border change 0 to something else,
        ,coins: [
            { id: "coin11", x: 100, y: 354 },
            { id: "coin12", x: 125, y: 321 },
            { id: "coin13", x: 155, y: 421 },
            { id: "coin14", x: 175, y: 234 },
            { id: "coin15", x: 200, y: 100 },
            { id: "coin16", x: 100, y: 492 },
            { id: "coin17", x: 125, y: 245 },
            { id: "coin18", x: 175, y: 124 },
            { id: "coin19", x: 200, y: 730 },

        ]
        
        
    }
    
};
