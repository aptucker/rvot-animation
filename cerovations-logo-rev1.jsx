


var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {

}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");

    logoKeyframeSetter();


    app.endUndoGroup();

}

window.center();
window.show();

function logoKeyframeSetter(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    const dotScaleDict = {
        layerName:["Middle-Dot-AE"],
        property:["scale"],
        frames:[0, 0.1, 0.2],
        value:[[0, 0], [150, 150], [100, 100]]//,
        // interpolation:[KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD]
    };

    const dotPositionDict = {
        layerName:["Middle-Dot-AE"],
        property:["position"],
        frames:[0.4, 0.7],
        value:[[compMiddleX, compMiddleY], [compMiddleX - 315, compMiddleY]]
    };

    const dotPropertiesDict = {
        dotScale: dotScaleDict,
        dotPosition: dotPositionDict
    };

    for (var key in dotPropertiesDict){
        genKeyframeSetter(dotPropertiesDict[key]);
    }


    const lineTrimDict1 = {
        layerName:["Middle-Line-AE"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[0.4, 0.7],
        value:[100, 0]
    };

    const lineTrimDict2 = {
        layerName:["Middle-Line-AE"],
        property:["Contents", "Trim Paths 1", "End"],
        frames:[0.8, 1.1],
        value:[100, 25]
    };

    const linePropertiesDict = {
        lineTrim1: lineTrimDict1,
        lineTrim2: lineTrimDict2
    };

    for (var key in linePropertiesDict){
        genKeyframeSetter(linePropertiesDict[key]);
    }

    const nameMaskPositionDict = {
        layerName:["Name-Mask"],
        property:["position"],
        frames:[1.3, 2.0],
        value:[[compMiddleX, compMiddleY], [compMiddleX + 800, compMiddleY]]
    };

    const nameMaskPropertiesDict = {
        nameMaskPosition: nameMaskPositionDict
    };

    for (var key in nameMaskPropertiesDict){
        genKeyframeSetter(nameMaskPropertiesDict[key]);
    }

    var sloganEndY = 615;

    const sloganPositionDict = {
        layerName:["Slogan-AE"],
        property:["position"],
        frames:[2.0, 2.2],
        value:[[compMiddleX, sloganEndY + 100], [compMiddleX, sloganEndY]]
    };

    const sloganPropertiesDict = {
        sloganPosition: sloganPositionDict
    };

    for (var key in sloganPropertiesDict){
        genKeyframeSetter(sloganPropertiesDict[key]);
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




