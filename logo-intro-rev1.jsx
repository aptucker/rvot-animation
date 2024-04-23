


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
        frames:[logoST + 0.4, logoST + 0.7, logoST + 2.5, logoST + 2.8, logoST + 3.8, logoST + 4.0],
        value:[[dotStartX, dotStartY],
        [dotEndX, dotStartY],
        [dotEndX, dotStartY],
        [dotEndX, dotEndY],
        [dotEndX, dotEndY],
        [dotEndX, dotEndY + 250]]
    };

    const dotPropertiesDict = {
        dotScale: dotScaleDict,
        dotPosition: dotPositionDict
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
        frames:[logoST, logoST + 2.5, logoST + 2.8, logoST + 3.8, logoST + 4.0],
        value:[[lineStartX, lineStartY],
        [lineStartX, lineStartY],
        [lineStartX, lineEndY],
        [lineStartX, lineEndY],
        [lineStartX, lineEndY + 250]]
    };

    const linePropertiesDict = {
        lineTrim1: lineTrimDict1,
        lineTrim2: lineTrimDict2,
        linePosition: linePositionDict
    };



    const nameMaskPositionDict = {
        layerName:["Name-Mask"],
        property:["position"],
        frames:[logoST + 1.3, logoST + 2.0],
        value:[[compMiddleX, compMiddleY], [compMiddleX + 800, compMiddleY]]
    };

    const nameMaskOpacityDict = {
        layerName:["Name-Mask"],
        property:["opacity"],
        frames:[logoST, logoST + 2.0],
        value:[100, 0],
        interpolation:[KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD]
    };

    const nameMaskPropertiesDict = {
        nameMaskPosition: nameMaskPositionDict,
        nameMaskOpacity: nameMaskOpacityDict
    };

    var nameStartX = compMiddleX;
    var nameStartY = compMiddleY;
    var nameEndX = compMiddleX;
    var nameEndY = compMiddleY + 300;
    
    const namePositionDict = {
        layerName:["Name-AE"],
        property:["position"],
        frames:[logoST, logoST + 2.5, logoST + 2.8, logoST + 3.8, logoST + 4.0],
        value:[[nameStartX, nameStartY],
        [nameStartX, nameStartY],
        [nameStartX, nameStartY + 50],
        [nameStartX, nameStartY + 50],
        [nameEndX, nameEndY]]
    };

    const namePropertiesDict = {
        namePosition: namePositionDict
    };



    const sloganMaskPositionDict = {
        layerName:["Slogan-Mask"],
        property:["position"],
        frames:[logoST, logoST + 2.5, logoST + 2.8, logoST + 3.8, logoST + 4.0],
        value:[[nameStartX, nameStartY],
        [nameStartX, nameStartY],
        [nameStartX, nameStartY + 50],
        [nameStartX, nameStartY + 50],
        [nameEndX, nameEndY]]
    };

    const sloganMaskOpacityDict = {
        layerName:["Slogan-Mask"],
        property:["opacity"],
        frames:[logoST, logoST + 4.0],
        value:[100, 0],
        interpolation:[KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD]
    };

    const sloganMaskPropertiesDict = {
        sloganMaskPosition: sloganMaskPositionDict,
        sloganMaskOpacity: sloganMaskOpacityDict
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
        frames:[logoST, logoST + 2.5, logoST + 2.8, logoST + 3.8, logoST + 4.0, logoST + 5.0, logoST + 5.1],
        value:[[osmoStartX, osmoStartY],
        [osmoStartX, osmoStartY],
        [osmo1X, osmo1Y],
        [osmo1X, osmo1Y],
        [osmo2X, osmo2Y],
        [osmo2X, osmo2Y],
        [osmo3X, osmo3Y]]
    };

    const osmoTitlePropertiesDict = {
        osmoTitlePosition: osmoTitlePositionDict
    };

    var biStartX = 175;
    var biStartY = osmo1Y + 10;
    var bi1X = 1250;
    var bi1Y = biStartY;
    var bi2X = bi1X;
    var bi2Y = osmo3Y + 10;

    const biTitlePositionDict = {
        layerName:["Bimodal-Title"],
        property:["position"],
        frames:[logoST + 3.8, logoST + 4.0, logoST + 5.0, logoST + 5.1],
        value:[[biStartX, biStartY],
        [bi1X, bi1Y],
        [bi1X, bi1Y],
        [bi2X, bi2Y]]
    };

    const biTitlePropertiesDict = {
        biTitlePosition: biTitlePositionDict
    };

    const biTitleMaskPositionDict = {
        layerName:["Bimodal-Mask"],
        property:["position"],
        frames:[0.0, logoST + 5.0, logoST + 5.1],
        value:[[biStartX, biStartY],
        [biStartX, biStartY],
        [biStartX - 100, biStartY]]
    };

    const biTitleMaskOpacityDict = {
        layerName:["Bimodal-Mask"],
        property:["opacity"],
        frames:[logoST, logoST + 4.0],
        value:[100, 0],
        interpolation:[KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD]
    };

    const biTitleMaskPropertiesDict = {
        biTitlePosition: biTitleMaskPositionDict,
        biTitleOpacity: biTitleMaskOpacityDict
    };


    var desStartX = 960;
    var desStartY = bi2Y;
    var des1X = desStartX;
    var des1Y = desStartY + 100;

    const desTitlePositionDict = {
        layerName:["Description"],
        property:["position"],
        frames:[0.0, logoST + 5.5, logoST + 5.7],
        value:[[desStartX, desStartY],
        [desStartX, desStartY],
        [des1X, des1Y]]
    };

    const desTitlePropertiesDict = {
        desTitlePosition: desTitlePositionDict
    };


    const desTitleMaskPositionDict = {
        layerName:["Description-Mask"],
        property:["position"],
        frames:[0.0],
        value:[[desStartX, desStartY]]
    };

    const desTitleMaskPropertiesDict = {
        desTitleMaskPosition: desTitleMaskPositionDict
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
        frames:[0.0, logoST + 6.5, logoST + 6.6],
        value:[0, 0, 100]
    };

    const mainTitleScaleDict = {
        layerName:["Main-Title"],
        property:["scale"],
        frames:[0.0, logoST + 6.5, logoST + 15.0],
        value:[[100, 100], [100, 100], [105, 100]]
    };

    const mainTitlePropertiesDict = {
        mainTitlePosition: mainTitlePositionDict,
        mainTitleOpacity: mainTitleOpacityDict,
        mainTitleScale: mainTitleScaleDict
    };


    for (var key in nameMaskPropertiesDict){
        genKeyframeSetter(nameMaskPropertiesDict[key]);
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

    for (var key in osmoTitlePropertiesDict){
        genKeyframeSetter(osmoTitlePropertiesDict[key]);
    }

    for (var key in sloganMaskPropertiesDict){
        genKeyframeSetter(sloganMaskPropertiesDict[key]);
    }

    for (var key in biTitlePropertiesDict){
        genKeyframeSetter(biTitlePropertiesDict[key]);
    }

    for (var key in biTitleMaskPropertiesDict){
        genKeyframeSetter(biTitleMaskPropertiesDict[key])
    }

    for (var key in desTitlePropertiesDict){
        genKeyframeSetter(desTitlePropertiesDict[key]);
    }    

    for (var key in desTitleMaskPropertiesDict){
        genKeyframeSetter(desTitleMaskPropertiesDict[key]);
    }

    for (var key in mainTitlePropertiesDict){
        genKeyframeSetter(mainTitlePropertiesDict[key]);
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




