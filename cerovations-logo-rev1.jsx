


var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {
    namePosition();
    sloganPosition();
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");
    dotScale();
    dotPosition();
    linePosition();
    mask1Position();
    mask2Position();
    nameMaskPosition();
    // nameOpacity();
    sloganOpacity();
    // lineOpacity();

    app.endUndoGroup();

}

window.center();
window.show();

function maskBuilder(propertiesDict){
    var comp = app.project.activeItem;

    // addSolid([0, 0, 0], propertiesDict.name, 500, 40, 1);
    var mask = comp.layers.addSolid(propertiesDict.color, propertiesDict.name, 500, 40, 1);
}

function mask1Position(){
    var maskStartX = 784;
    var compMiddleY = 1080/2;

    const propertiesDict = {
        frames:[0.5, 1.15],
        position:[[maskStartX, compMiddleY], [maskStartX - 315 - 50, compMiddleY]]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genPosititionSetter("Line-Mask-1", propertiesDict.frames[i], propertiesDict.position[i]);
    }

}

function mask2Position(){
    var maskStartX = 1350;
    var compMiddleY = 1080/2;

    const propertiesDict = {
        frames:[1.15, 2],
        position:[[maskStartX, compMiddleY], [maskStartX - 315 + 55, compMiddleY]]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genPosititionSetter("Line-Mask-2", propertiesDict.frames[i], propertiesDict.position[i]);
    }


}

function nameMaskPosition(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    const propertiesDict = {
        frames:[2, 2.5],
        position:[[compMiddleX, compMiddleY], [compMiddleX + 400, compMiddleY]]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genPosititionSetter("Name-Mask", propertiesDict.frames[i], propertiesDict.position[i]);
    }

}

function linePosition(){

    // x position 820 @ 435 x scale
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    const propertiesDict = {
        frames:[0],
        position:[[820, compMiddleY]]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genPosititionSetter("Middle-Line", propertiesDict.frames[i], propertiesDict.position[i]);
    }

}

function dotPosition(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    const propertiesDict = {
        frames:[0.5, 1.15],
        position:[[compMiddleX, compMiddleY], [compMiddleX - 315, compMiddleY]]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genPosititionSetter("Middle-Dot", propertiesDict.frames[i], propertiesDict.position[i]);
    }

}

function namePosition() {

    
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    genPosititionSetter("Name", 0, [compMiddleX, compMiddleY]);



}

function nameOpacity(){


    const propertiesDict = {
        frames:[0],
        opacity:[0]
    };


    for (var i=0; i < propertiesDict.frames.length; i++){
        genOpacitySetter("Name", propertiesDict.frames[i], propertiesDict.opacity[i]);
    }


}

function dotScale() {


    const propertiesDict = {
        frames:[0, 0.2, 0.4],
        scale:[[0, 0], [150, 150], [100, 100]]
    };

    for (var i = 0; i < propertiesDict.frames.length; i++){
        
        genScaleSetter("Middle-Dot", propertiesDict.frames[i], propertiesDict.scale[i]);
    }


}


function sloganOpacity(){


    const propertiesDict = {
        frames:[0],
        opacity:[0]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genOpacitySetter("Slogan", propertiesDict.frames[i], propertiesDict.opacity[i]);
    }


}

function lineOpacity(){

    // setInterpolationTypeAtKey(i, KeyframeInterpolationType.HOLD);


    const propertiesDict = {
        frames:[0],
        opacity:[0]
    };

    for (var i=0; i < propertiesDict.frames.length; i++){
        genOpacitySetter("Middle-Line", propertiesDict.frames[i], propertiesDict.opacity[i]);
    }




}

function sloganPosition(){


    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;
    var yOffsetStart = 75;

    genPosititionSetter("Slogan", 0, [compMiddleX, compMiddleY + yOffsetStart]);

  
    
}

function genPosititionSetter(layerName, time, position){
    
    var comp = app.project.activeItem;
    var layer = comp.layer(layerName);

    var layerPosition = layer.property("position");

    layerPosition.setValueAtTime(time, position);

}

function genOpacitySetter(layerName, time, opacity){

    var comp = app.project.activeItem;
    var layer = comp.layer(layerName);
    
    var layerOpacity = layer.property("opacity");

    layerOpacity.setValueAtTime(time, opacity);
}

function genScaleSetter(layerName, time, scale){

    var comp = app.project.activeItem;
    var layer = comp.layer(layerName);

    var layerScale = layer.property("scale");

    layerScale.setValueAtTime(time, scale);
}