var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {
    app.beginUndoGroup("Function 1");

    textBox1Setter();

    app.endUndoGroup();
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");



    app.endUndoGroup();

}

window.center();
window.show();


function textBox1Setter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var tb1TST = 0.0;

    const textBox1TrimStartDict = {
        layerName:["Text-Box-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 0]
    };

    const textBox1PropertiesDict = {
        textBox1TrimStart: textBox1TrimStartDict
    };

    var comp = app.project.activeItem;

    var layer = comp.layer(String(textBox1TrimStartDict.layerName));

    // var layerProperty = layer.property("Contents").property("Trim Paths 1").property("Start");
    var layerProperty = layer;

    for (var i in textBox1TrimStartDict.property){
        var layerProperty = layerProperty.property((String(textBox1TrimStartDict.property[i])));
    }
    // alert(layerProperty);

    for (var key in textBox1PropertiesDict){
        genKeyframeSetter(textBox1PropertiesDict[key]);
    }


}



function genKeyframeSetter(propertiesDict){

    var comp = app.project.activeItem;
    var layer = comp.layer(String(propertiesDict.layerName));

    var layerProperty = layer;
    for (var i in propertiesDict.property){
        var layerProperty = layerProperty.property(String(propertiesDict.property[i]));
    }

    alert(layerProperty);

    for (var i in propertiesDict.frames){
        layerProperty.setValueAtTime(propertiesDict.frames[i], propertiesDict.value[i]);
    }

    if (typeof propertiesDict.interpolation !== 'undefined'){
        for (var i=1; i < layerProperty.numKeys + 1; i++){
            layerProperty.setInterpolationTypeAtKey(i, propertiesDict.interpolation[i-1]);
        }
    }
}
