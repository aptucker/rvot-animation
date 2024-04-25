


var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {
    app.beginUndoGroup("Function 1");
    


    app.endUndoGroup("Function 1");
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");

    // logoKeyframeSetter();
    headBlurSetter();

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

    var logoST = 0.1;

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
        frames:[logoST + 0.4, logoST + 0.7, logoST + 2.5, logoST + 2.8],
        value:[[dotStartX, dotStartY],
        [dotEndX, dotStartY],
        [dotEndX, dotStartY],
        [dotEndX, dotEndY + 250]]
    };

    const dotOpacityDict = {
        layerName:["Middle-Dot-AE"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const dotPropertiesDict = {
        dotScale: dotScaleDict,
        dotPosition: dotPositionDict,
        dotOpacity: dotOpacityDict
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
        lineTrim2: lineTrimDict2,
        linePosition: linePositionDict,
        lineOpacity: lineOpacityDict
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
        namePosition: namePositionDict,
        nameWipe: nameWipeDict,
        nameOpacity: nameOpacityDict
    };


    var osmoStartX = compMiddleX;
    var osmoStartY = compMiddleY;
    var osmo1X = compMiddleX;
    var osmo1Y = compMiddleY - 50;
    var osmo2X = 440;
    var osmo2Y = osmo1Y;
    var osmo3X = osmo2X;
    var osmo3Y = 255;

    const osmoTitlePositionDict = {
        layerName:["Osmo-Title"],
        property:["position"],
        frames:[logoST],
        value:[[compMiddleX, 250]]
    };

    const osmoTitleWipeDict = {
        layerName:["Osmo-Title"],
        property:["Effects", "Linear Wipe", "Transition Completion"],
        frames:[logoST + 3.0, logoST + 3.5],
        value:[100, 0]
    };

    const osmoTitleOpacityDict = {
        layerName:["Osmo-Title"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const osmoTitlePropertiesDict = {
        osmoTitlePosition: osmoTitlePositionDict,
        osmoTitleWipe: osmoTitleWipeDict,
        osmoTitleOpacity: osmoTitleOpacityDict
    };




    var desStartX = 960;
    var desStartY = 325;
    var des1X = desStartX;
    var des1Y = desStartY + 100;

    const desTitlePositionDict = {
        layerName:["Description"],
        property:["position"],
        frames:[logoST + 3.5],
        value:[[desStartX, desStartY]]
    };

    const desTitleWipeDict = {
        layerName:["Description"],
        property:["Effects", "Linear Wipe", "Transition Completion"],
        frames:[logoST + 3.0, logoST + 3.5],
        value:[100, 0]
    };

    const desTitleOpacityDict = {
        layerName:["Description"],
        property:["opacity"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[100, 100, 0]
    };

    const desTitlePropertiesDict = {
        desTitlePosition: desTitlePositionDict,
        desTitleWipe: desTitleWipeDict,
        desTitleOpacity: desTitleOpacityDict
    };



    const mainTitlePositionDict = {
        layerName:["Main-Title"],
        property:["position"],
        frames:[0.0],
        value:[[compMiddleX, compMiddleY]]
    };

    const mainTitleOpacityDict = {
        layerName:["Main-Title"],
        property:["opacity"],
        frames:[0.0, logoST + 4.0, logoST + 4.2, logoST + 7.5, logoST + 8.0],
        value:[0, 0, 100, 100, 0]
    };

    const mainTitleScaleDict = {
        layerName:["Main-Title"],
        property:["scale"],
        frames:[0.0, logoST + 6.5, logoST + 15.0],
        value:[[100, 100], [100, 100], [105, 100]]
    };

    const mainTitlePropertiesDict = {
        mainTitlePosition: mainTitlePositionDict,
        mainTitleOpacity: mainTitleOpacityDict
        // mainTitleScale: mainTitleScaleDict
    };










    // for (var key in nameMaskPropertiesDict){
    //     genKeyframeSetter(nameMaskPropertiesDict[key]);
    // }




    for (var key in linePropertiesDict){
        genKeyframeSetter(linePropertiesDict[key]);
    }

    for (var key in namePropertiesDict){
        genKeyframeSetter(namePropertiesDict[key]);
    }

    for (var key in dotPropertiesDict){
        genKeyframeSetter(dotPropertiesDict[key]);
    }

    for (var key in osmoTitlePropertiesDict){
        genKeyframeSetter(osmoTitlePropertiesDict[key]);
    }

    for (var key in desTitlePropertiesDict){
        genKeyframeSetter(desTitlePropertiesDict[key]);
    }    

    for (var key in mainTitlePropertiesDict){
        genKeyframeSetter(mainTitlePropertiesDict[key]);
    }








    // for (var key in sloganMaskPropertiesDict){
    //     genKeyframeSetter(sloganMaskPropertiesDict[key]);
    // }

    // for (var key in biTitlePropertiesDict){
    //     genKeyframeSetter(biTitlePropertiesDict[key]);
    // }

    // for (var key in biTitleMaskPropertiesDict){
    //     genKeyframeSetter(biTitleMaskPropertiesDict[key])
    // }



    // for (var key in desTitleMaskPropertiesDict){
    //     genKeyframeSetter(desTitleMaskPropertiesDict[key]);
    // }



}

function headBlurSetter(){

    var logoST = 0.1;

    const headBlurDict = {
        layerName:["Head-Full"],
        property:["Effects", "Camera Lens Blur", "Blur Radius"],
        frames:[0.0, logoST + 7.5, logoST + 8.0],
        value:[10, 10, 0]
    };



    const headPropertiesDict = {
        headBlur: headBlurDict
    };



    for (var key in headPropertiesDict){
        genKeyframeSetter(headPropertiesDict[key]);
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




