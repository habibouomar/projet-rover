var prompt = require("prompt");

var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = { 
    direction: "N",
    x: 0, 
    y: 0,
    travelLog: [],
}

function turnLeft(rover){

    switch (rover.direction){
        case "N":
          rover.direction = "W";
          break;   

        case "W":
         rover.direction = "S";
         break;

        case "S":
        rover.direction = "E";
        break;

        case "E":
        rover.direction = "N";
        break; 
    }
}

function turnRight(rover){

    switch (rover.direction){
        case "N":
          rover.direction = "E";
          break;  
          
          case "E":
            rover.direction = "S";
            break;
   
           case "S":
           rover.direction = "W";
           break;
   
           case "W":
           rover.direction = "N";
           break; 
    }
}

function moveFoward(rover){
    
    let positionX = rover.x;
    let positionY = rover.y;

    // console.log(positionX);
    // console.log(positionY);

    if(rover.direction === "N" && positionY !== 0) {
        rover.y -= 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    } 
    else if(rover.direction === "E" && positionX < 9) {
        rover.x += 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    else if(rover.direction === "S" && positionY < 9) {
        rover.y += 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    else if(rover.direction === "W" && positionX !== 0) {
        rover.x -= 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    
    else{
        console.log("the rover doesn't move because isn't in the grid");
    }

       rover.travelLog.push(`coordonées précedente x:${positionX} y:${positionY} d:${rover.direction}`);
}

    function moveBackward(rover){

        let positionX = rover.x;
        let positionY = rover.y;
    
        if(rover.direction === "N" && positionY !== 0) {
            rover.y-- ;
        } 

        else if(rover.direction === "E" && positionX !== 0) {
            rover.x-- ;
        }

        else if(rover.direction === "S" && positionY !== 0) {
            rover.y-- ;
        }

        else if(rover.direction === "W" && positionX !== 0) {
            rover.x-- ;
        }
        
        else{
           console.log("the rover doesn't move because isn't in the grid");
        }

        rover.travelLog.push(`coordonées précedente x:${positionX} y:${positionY} d:${rover.direction}`);
    }

function pilotRover(string) {

    const splits = string.split("")
    //  console.table(splits);

        for (let i = 0; i < splits.length; i++){
            //  console.log(splits[i]);

            if(splits[i] === "l"){
                turnLeft(rover);
            }
        
            else if(splits[i] === "r"){
                turnRight(rover);
            }
        
            else if(splits[i] === "f"){
                 moveFoward(rover); 
            }   

            else if(splits[i] === "b"){
                 moveBackward(rover); 
            } 
            
            else{
                console.log("error commands / STOP ROVER");
                console.log(rover);
                return
            }
        } 
        //  console.log(rover);
}

// pilotRover("lllffffff");
//  console.log(rover);
prompt.start();
 
grid[rover.y][rover.x] = rover.direction;
console.table(grid);

function display(){  prompt.get("commands", function (err, res) { // permet de paramétrer la question

    if (err) {
		return onErr(err);
	}

    pilotRover(res.commands);
    grid = [
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
    ];
    grid[rover.y][rover.x] = rover.direction;
    console.table(grid);
    display();
    });
     
}

display();