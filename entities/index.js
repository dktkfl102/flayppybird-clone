import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";

import {Dimensions} from "react-native";
import {getPipeSizePosPair} from "../utils/random";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world;
    world.gravity.y =0.4;

    const pipeSIzePosA = getPipeSizePosPair()
    const pipeSIzePosB = getPipeSizePosPair(windowWidth * 0.9)
    return{
        physics: {engine, world},

        Bird: Bird(world, 'green', {x: 50, y: 300}, {height:40, width: 40}),

        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSIzePosA.pipeTop.pos, pipeSIzePosA.pipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'blue', pipeSIzePosA.pipeBottom.pos, pipeSIzePosA.pipeBottom.size),

        ObstacleTop2: Obstacle(world, 'ObstacleTop1', 'red', pipeSIzePosB.pipeTop.pos, pipeSIzePosB.pipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom1', 'blue', pipeSIzePosB.pipeBottom.pos, pipeSIzePosB.pipeBottom.size),

        Floor: Floor(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height:50, width: windowWidth})

    }

}
