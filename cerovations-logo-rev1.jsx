


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
    
}

window.center();
window.show();

function namePosition() {
    app.beginUndoGroup("Process");
    
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;
    
    // var myComp = app.project.activeItem;
    // var nameLayer = myComp.layer("Name");

    // var namePosition = nameLayer.property("position");

    // namePosition.setValueAtTime(0, [compMiddleX, compMiddleY]);

    genPosititionSetter("Name", 0, [compMiddleX, compMiddleY]);

    app.endUndoGroup();

}

function sloganPosition(){
    app.beginUndoGroup("Process");

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;
    var yOffsetStart = 75;

    genPosititionSetter("Slogan", 0, [compMiddleX, compMiddleY + yOffsetStart]);

    app.endUndoGroup();
    
}

function genPosititionSetter(layerName, time, position){
    
    var comp = app.project.activeItem;
    var layer = comp.layer(layerName);

    var layerPosition = layer.property("position");

    layerPosition.setValueAtTime(time, position);

}