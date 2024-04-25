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

    introSequence();


    app.endUndoGroup();
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");

    textBox1Setter();
    text1Setter();
    textBox2Setter();
    text2Setter();
    textBox3Setter();
    text3Setter();

    // outroSequence();

    app.endUndoGroup();

}

buttonThree.onClick = function(){

    app.beginUndoGroup("Function 3");

    // liquidSetter();
    // bgSetter();

    outroSequence();

    app.endUndoGroup();

}

window.center();
window.show();

function introSequence(){

    var introST = 0.0;

    const topOpacityDict = {
        layerName:["Top-Fade"],
        property:["opacity"],
        frames:[introST, introST + 1.0],
        value:[100, 0]
    };

    const topPropertiesDict = {
        topOpacity: topOpacityDict
    };


    // const rvotFullOpacityDict = {
    //     layerName:["RVOT-Full"],
    //     property:["opacity"],
    //     frames:[introST + 5.0, introST + 6.0],
    //     value:[100, 0]
    // };

    // const rvotFullPropertiesDict = {
    //     rvotFullOpacity: rvotFullOpacityDict
    // };

    const rvotVaporCompOpacityDict = {
        layerName:["Vapor-Comp"],
        property:["opacity"],
        frames:[introST + 22.0, introST + 23.0],
        value:[100, 0],
    };

    const rvotVaporCompPropertiesDict = {
        rvotVaporCompOpacity: rvotVaporCompOpacityDict
    };

    const rvotCSFCompOpacityDict = {
        layerName:["CSF-Comp"],
        property:["opacity"],
        frames:[introST + 22.0, introST + 23.0],
        value:[0, 100]
    };

    const rvotCSFCompPropertiesDict = {
        rvotCSFCompOpacity: rvotCSFCompOpacityDict
    };



    for (var key in topPropertiesDict){
        genKeyframeSetter(topPropertiesDict[key]);
    }

    // for (var key in rvotFullPropertiesDict){
    //     genKeyframeSetter(rvotFullPropertiesDict[key]);
    // }

    for (var key in rvotVaporCompPropertiesDict){
        genKeyframeSetter(rvotVaporCompPropertiesDict[key]);
    }

    for (var key in rvotCSFCompPropertiesDict){
        genKeyframeSetter(rvotCSFCompPropertiesDict[key]);
    }

}

function textBox2Setter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var tb1TST = 13.0;

    const textBox3TrimStartDict = {
        layerName:["Text-Box-3"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox4TrimStartDict = {
        layerName:["Text-Box-4"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox3TrimEndDict = {
        layerName:["Text-Box-3"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox4TrimEndDict = {
        layerName:["Text-Box-4"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox3ScaleDict = {
        layerName:["Text-Box-3"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox4ScaleDict = {
        layerName:["Text-Box-4"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox3PropertiesDict = {
        textBox3TrimStart: textBox3TrimStartDict,
        textBox3TrimEnd: textBox3TrimEndDict,
        textBox3Scale: textBox3ScaleDict
    };

    const textBox4PropertiesDict = {
        textBox4TrimStart: textBox4TrimStartDict,
        textBox4TrimEnd: textBox4TrimEndDict,
        textBox4Scale: textBox4ScaleDict
    };


    for (var key in textBox3PropertiesDict){
        genKeyframeSetter(textBox3PropertiesDict[key]);
    }

    for (var key in textBox4PropertiesDict){
        genKeyframeSetter(textBox4PropertiesDict[key]);
    }


}

function text2Setter(){
    var text2StartX = 1610;
    var text2StartY = 240;

    var t1ST = 13.0;

    const text2OpacityDict = {
        layerName:["Controller"],
        property:["opacity"],
        frames:[t1ST, t1ST + 0.1, t1ST + 7.0, t1ST + 7.5],
        value:[0, 100, 100, 0]
    };

    const text2ScaleDict = {
        layerName:["Controller"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const text2PropertiesDict = {
        text2Opacity: text2OpacityDict,
        text2Scale: text2ScaleDict
    };

    for (var key in text2PropertiesDict){
        genKeyframeSetter(text2PropertiesDict[key]);
    }

}

function textBox1Setter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var tb1TST = 2.0;

    const textBox1TrimStartDict = {
        layerName:["Text-Box-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox2TrimStartDict = {
        layerName:["Text-Box-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox1TrimEndDict = {
        layerName:["Text-Box-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox2TrimEndDict = {
        layerName:["Text-Box-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox1ScaleDict = {
        layerName:["Text-Box-1"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox2ScaleDict = {
        layerName:["Text-Box-2"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
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

function text1Setter(){
    var text1StartX = 328;
    var text1StartY = 244;

    var t1ST = 2.0;

    const text1OpacityDict = {
        layerName:["Pervaporation"],
        property:["opacity"],
        frames:[t1ST, t1ST + 0.1, t1ST + 7.0, t1ST + 7.5],
        value:[0, 100, 100, 0]
    };

    const text1ScaleDict = {
        layerName:["Pervaporation"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 7.5],
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


function outroSequence(){
    var outroST = 29.0;

    const topOpacityDict = {
        layerName:["Top-Fade-Black"],
        property:["opacity"],
        frames:[outroST, outroST + 1.0],
        value:[0, 100]
    };

    const topPropertiesDict = {
        topOpacity: topOpacityDict
    };

    for (var key in topPropertiesDict){
        genKeyframeSetter(topPropertiesDict[key]);
    }

}

function textBox3Setter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var tb1TST = 22.0;

    const textBox5TrimStartDict = {
        layerName:["Text-Box-5"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox6TrimStartDict = {
        layerName:["Text-Box-6"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST, tb1TST + 0.5],
        value:[100, 50]
    };

    const textBox5TrimEndDict = {
        layerName:["Text-Box-5"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox6TrimEndDict = {
        layerName:["Text-Box-6"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 7.0, tb1TST + 7.5],
        value:[50, 100]
    };

    const textBox5ScaleDict = {
        layerName:["Text-Box-5"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox6ScaleDict = {
        layerName:["Text-Box-6"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox5PropertiesDict = {
        textBox5TrimStart: textBox5TrimStartDict,
        textBox5TrimEnd: textBox5TrimEndDict,
        textBox5Scale: textBox5ScaleDict
    };

    const textBox6PropertiesDict = {
        textBox6TrimStart: textBox6TrimStartDict,
        textBox6TrimEnd: textBox6TrimEndDict,
        textBox6Scale: textBox6ScaleDict
    };


    for (var key in textBox5PropertiesDict){
        genKeyframeSetter(textBox5PropertiesDict[key]);
    }

    for (var key in textBox6PropertiesDict){
        genKeyframeSetter(textBox6PropertiesDict[key]);
    }


}


function text3Setter(){
    var text3StartX = 960;
    var text3StartY = 460;

    var t1ST = 22.0;

    const text3OpacityDict = {
        layerName:["Standard"],
        property:["opacity"],
        frames:[t1ST, t1ST + 0.1, t1ST + 7.0, t1ST + 7.5],
        value:[0, 100, 100, 0]
    };

    const text3ScaleDict = {
        layerName:["Standard"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const text3PropertiesDict = {
        text3Opacity: text3OpacityDict,
        text3Scale: text3ScaleDict
    };

    for (var key in text3PropertiesDict){
        genKeyframeSetter(text3PropertiesDict[key]);
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