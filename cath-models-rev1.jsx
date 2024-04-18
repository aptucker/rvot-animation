var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");
var buttonThree = buttonGroup.add("button", undefined, "Test 3");



buttonOne.onClick = function() {
    app.beginUndoGroup("Function 1");

    stbSetter();
    stbTextSetter();
    // text1Setter();
    // textBox2Setter();
    // text2Setter();
    // textBox3Setter();
    // text3Setter();
    // text4Setter();

    app.endUndoGroup();
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");



    app.endUndoGroup();

}

buttonThree.onClick = function(){

    app.beginUndoGroup("Function 3");



    app.endUndoGroup();

}

window.center();
window.show();

function stbSetter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var tb1TST = 0.2;

    const textBox1TrimStartDict = {
        layerName:["STB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox2TrimStartDict = {
        layerName:["STB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox1TrimEndDict = {
        layerName:["STB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 15.0, tb1TST + 15.5],
        value:[50, 100]
    };

    const textBox2TrimEndDict = {
        layerName:["STB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 15.0, tb1TST + 15.5],
        value:[50, 100]
    };

    const textBox1ScaleDict = {
        layerName:["STB-1"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 15.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox2ScaleDict = {
        layerName:["STB-2"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 15.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox1PropertiesDict = {
        textBox1TrimStart: textBox1TrimStartDict,
        textBox1TrimEnd: textBox1TrimEndDict,
        textBox1Scale: textBox1ScaleDict
    };

    const textBox2PropertiesDict = {
        textBox2TrimStart: textBox2TrimStartDict,
        textBox2TrimEnd: textBox2TrimEndDict,
        textBox2Scale: textBox2ScaleDict
    };


    for (var key in textBox1PropertiesDict){
        genKeyframeSetter(textBox1PropertiesDict[key]);
    }

    for (var key in textBox2PropertiesDict){
        genKeyframeSetter(textBox2PropertiesDict[key]);
    }


}


function stbTextSetter(){
    // var text1StartX = 328;
    // var text1StartY = 244;

    var t1ST = 0.2;

    const text1OpacityDict = {
        layerName:["STANDARD EVD"],
        property:["opacity"],
        frames:[t1ST, t1ST + 0.1, t1ST + 15.0, t1ST + 15.5],
        value:[0, 100, 100, 0]
    };

    const text1ScaleDict = {
        layerName:["STANDARD EVD"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 15.5],
        value:[[100, 100], [105, 105]]
    };

    const text1PropertiesDict = {
        text1Opacity: text1OpacityDict,
        text1Scale: text1ScaleDict
    };

    for (var key in text1PropertiesDict){
        genKeyframeSetter(text1PropertiesDict[key]);
    }

}

function genKeyframeSetter(propertiesDict){

    var comp = app.project.activeItem;
    var layer = comp.layer(String(propertiesDict.layerName));

    var layerProperty = layer;
    for (var i in propertiesDict.property){
        var layerProperty = layerProperty.property(String(propertiesDict.property[i]));
    }

    for (var i in propertiesDict.frames){
        layerProperty.setValueAtTime(propertiesDict.frames[i], propertiesDict.value[i]);
    }

    if (typeof propertiesDict.interpolation !== 'undefined'){
        for (var i=1; i < layerProperty.numKeys + 1; i++){
            layerProperty.setInterpolationTypeAtKey(i, propertiesDict.interpolation[i-1]);
        }
    }
}