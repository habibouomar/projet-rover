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

    if(rover.direction === "E" && positionX <= 9) {
        rover.x += 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    else if(rover.direction === "S" && positionY <= 9) {
        rover.y += 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    else if(rover.direction === "W" && positionX <= 9) {
        rover.x -= 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
    }
    else if(rover.direction === "N" && positionY <= 9) {
        rover.y -= 1;
        // console.log(`moveForward run ===> Current rover position is x:${positionX} y:${positionY}`);
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
                 // rover.travelLog.push("left");
            }
        
            else if(splits[i] === "r"){
        
                turnRight(rover);
                // rover.travelLog.push("right");
            }
        
            else if(splits[i] === "f"){
        
                 moveFoward(rover); 
                // rover.travelLog.push("foward");   
            }       
        } 

        console.log(rover);
}

// pilotRover("lllffffff");
 console.log(rover);

prompt.start();

  prompt.get("commands", function (err, res) { // permet de paramétrer la question

    if (err) {
		return onErr(err);
	}
    
    pilotRover(res.commands);

  });