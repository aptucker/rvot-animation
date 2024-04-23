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

    liquidSetter();
    bgSetter();

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


function gasSetter(){
    
    var gasST = 14.0;

    const rvotCutaway1OpacityDict = {
        layerName:["RVOT-Cutaway"],
        property:["opacity"],
        frames:[0.0, gasST, gasST + 8.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD]
    };

    const rvotCutaway2OpacityDict = {
        layerName:["RVOT-Cutaway 2"],
        property:["opacity"],
        frames:[0.0, gasST, gasST + 8.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD]
    };

    const rvotCutaway3OpacityDict = {
        layerName:["RVOT-Cutaway 3"],
        property:["opacity"],
        frames:[0.0, gasST, gasST + 8.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD]
    };

    const gasBubbleOpacityDict = {
        layerName:["Bubble-2-Layer-Comp"],
        property:["opacity"],
        frames:[0.0, gasST, gasST + 8.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD,
        KeyframeInterpolationType.HOLD]
    };

    const rvotCutaway1PropertiesDict = {
        rvotCutaway1Opacity: rvotCutaway1OpacityDict
    };

    const rvotCutaway2PropertiesDict = {
        rvotCutaway2Opacity: rvotCutaway2OpacityDict
    };

    const rvotCutaway3PropertiesDict = {
        rvotCutaway3Opacity: rvotCutaway3OpacityDict
    };

    const gasBubblePropertiesDict = {
        gasBubbleOpacity: gasBubbleOpacityDict
    };

    for (var key in rvotCutaway1PropertiesDict){
        genKeyframeSetter(rvotCutaway1PropertiesDict[key]);
    }

    for (var key in rvotCutaway2PropertiesDict){
        genKeyframeSetter(rvotCutaway2PropertiesDict[key]);
    }

    for (var key in rvotCutaway3PropertiesDict){
        genKeyframeSetter(rvotCutaway3PropertiesDict[key]);
    }

    for (var key in gasBubblePropertiesDict){
        genKeyframeSetter(gasBubblePropertiesDict[key]);
    }

}

function liquidSetter(){
    var liquidStartX = 1086;
    var liquidStartY = 350;
    var liquidEndX = 960;
    var liquidEndY = 540;

    var liquidST = 1.5;
    var liquidET = liquidST + 0.1



    const liquidScaleDict = {
        layerName:["Fluid-1"],
        property:["scale"],
        frames:[0.0, liquidST, liquidET],
        value:[[50.0, 50.0],
        [50.0, 50.0],
        [100.0, 100.0]]
    };

    const liquidPositionDict = {
        layerName:["Fluid-1"],
        property:["position"],
        frames:[0.0, liquidST, liquidET],
        value:[[liquidStartX, liquidStartY],
        [liquidStartX, liquidStartY],
        [liquidEndX, liquidEndY]]
    };

    const liquidPropertiesDict = {
        liquidScale: liquidScaleDict,
        liquidPosition: liquidPositionDict
    };

    for (var key in liquidPropertiesDict){
        genKeyframeSetter(liquidPropertiesDict[key]);
    }




}

function bgSetter(){
    var bgStartX = 960;
    var bgStartY = 540;
    var bgEndX = -896;
    var bgEndY = 4752;

    var bgST = 1.5;
    var bgET = bgST + 0.5



    const bgScaleDict = {
        layerName:["Head-Hole"],
        property:["scale"],
        frames:[0.0, bgST, bgET],
        value:[[24.0, 24.0],
        [24.0, 24.0],
        [450.0, 450.0]]
    };

    const bgPositionDict = {
        layerName:["Head-Hole"],
        property:["position"],
        frames:[0.0, bgST, bgET],
        value:[[bgStartX, bgStartY],
        [bgStartX, bgStartY],
        [bgEndX, bgEndY]]
    };

    const bgPropertiesDict = {
        bgScale: bgScaleDict,
        bgPosition: bgPositionDict
    };

    for (var key in bgPropertiesDict){
        genKeyframeSetter(bgPropertiesDict[key]);
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