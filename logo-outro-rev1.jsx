


var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {
    app.beginUndoGroup("Function 1");
    
    introSetter();
    logoKeyframeSetter();

    app.endUndoGroup("Function 1");
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");


    outroSetter();

    app.endUndoGroup();

}

window.center();
window.show();

function logoKeyframeSetter(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;
    var dotStartX = compMiddleX;
    var dotStartY = compMiddleY;
    var dotEndX = compMiddleX - 315;
    var dotEndY = compMiddleY + 50;
    var lineStartX = 820;
    var lineStartY = compMiddleY;
    var lineEndX = lineStartX;
    var lineEndY = compMiddleY + 50;

    var logoST = 0.5;

    const dotScaleDict = {
        layerName:["Middle-Dot-AE"],
        property:["scale"],
        frames:[logoST, logoST + 0.1, logoST + 0.2],
        value:[[0, 0], [150, 150], [100, 100]]//,
        // interpolation:[KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD]
    };

    const dotPositionDict = {
        layerName:["Middle-Dot-AE"],
        property:["position"],
        frames:[logoST + 0.4, logoST + 0.7],
        value:[[dotStartX, dotStartY],
        [dotEndX, dotStartY]]
    };

    const dotOpacityDict = {
        layerName:["Middle-Dot-AE"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const dotPropertiesDict = {
        dotScale: dotScaleDict,
        dotPosition: dotPositionDict//,
        // dotOpacity: dotOpacityDict
    };

   

    const lineTrimDict1 = {
        layerName:["Middle-Line-AE"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[logoST + 0.4, logoST + 0.7],
        value:[100, 0]
    };

    const lineTrimDict2 = {
        layerName:["Middle-Line-AE"],
        property:["Contents", "Trim Paths 1", "End"],
        frames:[logoST + 0.8, logoST + 1.1],
        value:[100, 25]
    };

    const linePositionDict = {
        layerName:["Middle-Line-AE"],
        property:["position"],
        frames:[logoST + 2.5, logoST + 2.8],
        value:[[lineStartX, lineStartY],
        [lineStartX, lineEndY + 250]]
    };

    const lineOpacityDict = {
        layerName:["Middle-Line-AE"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const linePropertiesDict = {
        lineTrim1: lineTrimDict1,
        lineTrim2: lineTrimDict2//,
        // linePosition: linePositionDict,
        // lineOpacity: lineOpacityDict
    };


    var nameStartX = compMiddleX;
    var nameStartY = compMiddleY;
    var nameEndX = compMiddleX;
    var nameEndY = compMiddleY + 300;
    
    const namePositionDict = {
        layerName:["Name-AE"],
        property:["position"],
        frames:[logoST + 2.5, logoST + 2.8],
        value:[[nameStartX, nameStartY],
        [nameEndX, nameEndY]]
    };

    const nameWipeDict = {
        layerName:["Name-AE"],
        property:["Effects", "Linear Wipe", "Transition Completion"],
        frames:[logoST + 1.3, logoST + 2.0],
        value:[100, 0]
    };

    const nameOpacityDict = {
        layerName:["Name-AE"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const namePropertiesDict = {
        // namePosition: namePositionDict,
        nameWipe: nameWipeDict//,
        // nameOpacity: nameOpacityDict
    };



    const sloganWipeDict = {
        layerName:["Slogan-AE"],
        property:["Effects", "Linear Wipe", "Transition Completion"],
        frames:[logoST + 1.3, logoST + 2.0],
        value:[100, 0]
    };

    const sloganPropertiesDict = {
        sloganWipe: sloganWipeDict
    }


    for (var key in linePropertiesDict){
        genKeyframeSetter(linePropertiesDict[key]);
    }

    for (var key in namePropertiesDict){
        genKeyframeSetter(namePropertiesDict[key]);
    }

    for (var key in dotPropertiesDict){
        genKeyframeSetter(dotPropertiesDict[key]);
    }

    for (var key in sloganPropertiesDict){
        genKeyframeSetter(sloganPropertiesDict[key]);
    }



}

function outroSetter(){
    var outroST = 5.5;
    
    const outroOpacityDict = {
        layerName:["Reference"],
        property:["opacity"],
        frames:[outroST + 0.5, outroST + 1.0, outroST + 5.0, outroST + 5.5],
        value:[0, 100, 100, 0]
    };

    const outroPropertiesDict = {
        outroOpacity: outroOpacityDict
    };

    for (var key in outroPropertiesDict){
        genKeyframeSetter(outroPropertiesDict[key]);
    }

    const outroFrameOpacityDict = {
        layerName:["Top-Fade-Black"],
        property:["opacity"],
        frames:[outroST, outroST + 0.5],
        value:[0, 100]
    };

    const outroFramePropertiesDict = {
        outroFrameOpacity: outroFrameOpacityDict
    };

    for (var key in outroFramePropertiesDict){
        genKeyframeSetter(outroFramePropertiesDict[key]);
    }

    

}

function introSetter(){
    
    var introST = 0.0;

    const introFrameOpacityDict = {
        layerName:["Top-Fade"], 
        property:["opacity"],
        frames:[introST, introST + 0.5],
        value:[100, 0]
    };


    const introFramePropertiesDict = {
        introFrameOpacity: introFrameOpacityDict
    };

    for (var key in introFramePropertiesDict){
        genKeyframeSetter(introFramePropertiesDict[key]);
    }

    const osmoTitleOpacityDict = {
        layerName:["Osmo-Title"],
        property:["opacity"],
        frames:[introST + 3.0, introST + 3.5],
        value:[0, 100]
    };

    const osmoTitlePropertiesDict = {
        osmoTitleOpacity: osmoTitleOpacityDict
    };

    for (var key in osmoTitlePropertiesDict){
        genKeyframeSetter(osmoTitlePropertiesDict[key]);
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




