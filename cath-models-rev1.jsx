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
    evdSetter();
    wtbSetter();
    wtbTextSetter();
    vetbSetter();
    vetbTextSetter();

    app.endUndoGroup();
}

buttonTwo.onClick = function() {
    
    app.beginUndoGroup("Function 2");

    otbSetter();
    otbTextSetter();
    vatbSetter();
    vatbTextSetter();
    rtbSetter();
    rtbTextSetter();
    rvotSetter();


    app.endUndoGroup();

}

buttonThree.onClick = function(){

    app.beginUndoGroup("Function 3");

    liquidSetter();
    gasSetter();

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
    var liquidStartX = 835;
    var liquidStartY = 386;
    var liquidEndX = 465;
    var liquidEndY = 386;

    var bubbleStartX = 842;
    var bubbleStartY = 352
    var bubbleEndX = 352;
    var bubbleEndY = 352;

    var liquidST = 2.0;



    const evdCutaway1OpacityDict = {
        layerName:["EVD-Cutaway"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const evdCutaway2OpacityDict = {
        layerName:["EVD-Cutaway 2"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const evdCutaway3OpacityDict = {
        layerName:["EVD-Cutaway 3"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const evdCutaway4OpacityDict = {
        layerName:["EVD-Cutaway 3"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    }

    const liquidMainPositionDict = {
        layerName:["Liquid"],
        property:["position"],
        frames:[liquidST, liquidST + 5.0],
        value:[[liquidStartX, liquidStartY],
        [liquidEndX, liquidEndY]]
    };

    const liquidMainOpacityDict = {
        layerName:["Liquid"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const liquidShadowPositionDict = {
        layerName:["Liquid-Shadow"],
        property:["position"],
        frames:[liquidST, liquidST + 5.0],
        value:[[liquidStartX, liquidStartY],
        [liquidEndX, liquidEndY]]
    };

    const liquidShadowOpacityDict = {
        layerName:["Liquid-Shadow"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const bubbleCompOpacityDict = {
        layerName:["Bubble-Layer-Comp"],
        property:["opacity"],
        frames:[0.0, liquidST, liquidST + 20.0],
        value:[0, 100, 0],
        interpolation:[KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD,
            KeyframeInterpolationType.HOLD]
    };

    const bubbleCompPositionDict = {
        layerName:["Bubble-Layer-Comp"],
        property:["position"],
        frames:[liquidST, liquidST + 5.0],
        value:[[bubbleStartX, bubbleStartY],
        [bubbleEndX, bubbleEndY]],
    };
    
    const liquidMainPropertiesDict = {
        liquidMainOpacity: liquidMainOpacityDict,
        liquidMainPosition: liquidMainPositionDict
    };

    const liquidShadowPropertiesDict = {
        liquidShadowOpacity: liquidShadowOpacityDict,
        liquidShadowPosition: liquidShadowPositionDict
    };

    const evdCutaway1PropertiesDict = {
        evdCutaway1Opacity: evdCutaway1OpacityDict
    };

    const evdCutaway2PropertiesDict = {
        evdCutaway2Opacity: evdCutaway2OpacityDict
    };

    const evdCutaway3PropertiesDict = {
        evdCutaway3Opacity: evdCutaway3OpacityDict
    };

    const evdCutaway4PropertiesDict = {
        evdCutaway4Opacity: evdCutaway4OpacityDict
    };

    const bubbleCompPropertiesDict = {
        bubbleCompOpacity: bubbleCompOpacityDict,
        bubbleCompPosition: bubbleCompPositionDict
    };

    for (var key in liquidMainPropertiesDict){
        genKeyframeSetter(liquidMainPropertiesDict[key]);
    }

    for (var key in liquidShadowPropertiesDict){
        genKeyframeSetter(liquidShadowPropertiesDict[key]);
    }

    for (var key in evdCutaway1PropertiesDict){
        genKeyframeSetter(evdCutaway1PropertiesDict[key]);
    }

    for (var key in evdCutaway2PropertiesDict){
        genKeyframeSetter(evdCutaway2PropertiesDict[key]);
    }

    for (var key in evdCutaway3PropertiesDict){
        genKeyframeSetter(evdCutaway3PropertiesDict[key]);
    }

    for (var key in evdCutaway4PropertiesDict){
        genKeyframeSetter(evdCutaway4PropertiesDict[key]);
    }

    for (var key in bubbleCompPropertiesDict){
        genKeyframeSetter(bubbleCompPropertiesDict[key]);
    }


}

function rtbSetter(){

    var rtb1TST = 18.5;

    rtbStartX = 1100;
    rtbStartY = 620;
    rtbHoldX = 1625;
    rtbHoldY = 620;
    rtbEndX = 2200;
    rtbEndY = 620;

    const rtb1TrimStartDict = {
        layerName:["RTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[rtb1TST, rtb1TST + 0.5],
        value:[100, 50]
    };

    const rtb2TrimStartDict = {
        layerName:["RTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[rtb1TST, rtb1TST + 0.5],
        value:[100, 50]
    };

    const rtb1TrimEndDict = {
        layerName:["RTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[rtb1TST + 7.0, rtb1TST + 7.5],
        value:[50, 100]
    };

    const rtb2TrimEndDict = {
        layerName:["RTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[rtb1TST + 7.0, rtb1TST + 7.5],
        value:[50, 100]
    };

    const rtb1ScaleDict = {
        layerName:["RTB-1"],
        property:["scale"],
        frames:[rtb1TST + 0.5, rtb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const rtb2ScaleDict = {
        layerName:["RTB-2"],
        property:["scale"],
        frames:[rtb1TST + 0.5, rtb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const rtb1PositionDict = {
        layerName:["RTB-1"],
        property:["position"],
        frames:[rtb1TST, rtb1TST + 0.7, rtb1TST + 0.8, rtb1TST + 0.9, rtb1TST + 5.0, rtb1TST + 5.1],
        value:[[rtbStartX, rtbStartY],
        [rtbStartX, rtbStartY],
        [rtbHoldX + 30, rtbHoldY],
        [rtbHoldX, rtbHoldY],
        [rtbHoldX - 30, rtbHoldY],
        [rtbEndX, rtbEndY]]
    };

    const rtb2PositionDict = {
        layerName:["RTB-2"],
        property:["position"],
        frames:[rtb1TST, rtb1TST + 0.7, rtb1TST + 0.8, rtb1TST + 0.9, rtb1TST + 5.0, rtb1TST + 5.1],
        value:[[rtbStartX, rtbStartY],
        [rtbStartX, rtbStartY],
        [rtbHoldX + 30, rtbHoldY],
        [rtbHoldX, rtbHoldY],
        [rtbHoldX - 30, rtbHoldY],
        [rtbEndX, rtbEndY]]
    };


    const rtb1PropertiesDict = {
        rtb1TrimStart: rtb1TrimStartDict,
        rtb1TrimEnd: rtb1TrimEndDict,
        rtb1Scale: rtb1ScaleDict,
        rtb1Position: rtb1PositionDict
    };

    const rtb2PropertiesDict = {
        rtb2TrimStart: rtb2TrimStartDict,
        rtb2TrimEnd: rtb2TrimEndDict,
        rtb2Scale: rtb2ScaleDict,
        rtb2Position: rtb2PositionDict
    };

  

    for (var key in rtb1PropertiesDict){
        genKeyframeSetter(rtb1PropertiesDict[key]);
    }



    for (var key in rtb2PropertiesDict){
        genKeyframeSetter(rtb2PropertiesDict[key]);
    }
}

function rtbTextSetter(){
    var rtbST = 18.5;

    rtbStartX = 1100;
    rtbStartY = 620;
    rtbHoldX = 1625;
    rtbHoldY = 620;
    rtbEndX = 2200;
    rtbEndY = 620;

    const rtbOpacityDict = {
        layerName:["Reduce"],
        property:["opacity"],
        frames:[rtbST, rtbST + 0.1, rtbST + 5.0, rtbST + 5.5],
        value:[0, 100, 100, 0]
    };

    const rtbScaleDict = {
        layerName:["Reduce"],
        property:["scale"],
        frames:[rtbST + 0.5, rtbST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const rtbPositionDict = {
        layerName:["Reduce"],
        property:["position"],
        frames:[rtbST, rtbST + 0.7, rtbST + 0.8, rtbST + 0.9, rtbST + 5.0, rtbST + 5.1],
        value:[[rtbStartX, rtbStartY],
        [rtbStartX, rtbStartY],
        [rtbHoldX + 30, rtbHoldY],
        [rtbHoldX, rtbHoldY],
        [rtbHoldX - 30, rtbHoldY],
        [rtbEndX, rtbEndY]]
    };


    const rtbPropertiesDict = {
        rtbOpacity: rtbOpacityDict,
        rtbScale: rtbScaleDict,
        rtbPosition: rtbPositionDict
    };

    for (var key in rtbPropertiesDict){
        genKeyframeSetter(rtbPropertiesDict[key]);
    }
}

function vatbSetter(){

    var vatb1TST = 13.0;

    vatbStartX = 1100;
    vatbStartY = 620;
    vatbHoldX = 1625;
    vatbHoldY = 620;
    vatbEndX = 2200;
    vatbEndY = 620;

    const vatb1TrimStartDict = {
        layerName:["VaTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vatb1TST, vatb1TST + 0.5],
        value:[100, 50]
    };

    const vatb2TrimStartDict = {
        layerName:["VaTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vatb1TST, vatb1TST + 0.5],
        value:[100, 50]
    };

    const vatb1TrimEndDict = {
        layerName:["VaTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vatb1TST + 7.0, vatb1TST + 7.5],
        value:[50, 100]
    };

    const vatb2TrimEndDict = {
        layerName:["VaTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vatb1TST + 7.0, vatb1TST + 7.5],
        value:[50, 100]
    };

    const vatb1ScaleDict = {
        layerName:["VaTB-1"],
        property:["scale"],
        frames:[vatb1TST + 0.5, vatb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vatb2ScaleDict = {
        layerName:["VaTB-2"],
        property:["scale"],
        frames:[vatb1TST + 0.5, vatb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vatb1PositionDict = {
        layerName:["VaTB-1"],
        property:["position"],
        frames:[vatb1TST, vatb1TST + 0.7, vatb1TST + 0.8, vatb1TST + 0.9, vatb1TST + 5.0, vatb1TST + 5.1],
        value:[[vatbStartX, vatbStartY],
        [vatbStartX, vatbStartY],
        [vatbHoldX + 30, vatbHoldY],
        [vatbHoldX, vatbHoldY],
        [vatbHoldX - 30, vatbHoldY],
        [vatbEndX, vatbEndY]]
    };

    const vatb2PositionDict = {
        layerName:["VaTB-2"],
        property:["position"],
        frames:[vatb1TST, vatb1TST + 0.7, vatb1TST + 0.8, vatb1TST + 0.9, vatb1TST + 5.0, vatb1TST + 5.1],
        value:[[vatbStartX, vatbStartY],
        [vatbStartX, vatbStartY],
        [vatbHoldX + 30, vatbHoldY],
        [vatbHoldX, vatbHoldY],
        [vatbHoldX - 30, vatbHoldY],
        [vatbEndX, vatbEndY]]
    };


    const vatb1PropertiesDict = {
        vatb1TrimStart: vatb1TrimStartDict,
        vatb1TrimEnd: vatb1TrimEndDict,
        vatb1Scale: vatb1ScaleDict,
        vatb1Position: vatb1PositionDict
    };

    const vatb2PropertiesDict = {
        vatb2TrimStart: vatb2TrimStartDict,
        vatb2TrimEnd: vatb2TrimEndDict,
        vatb2Scale: vatb2ScaleDict,
        vatb2Position: vatb2PositionDict
    };

  

    for (var key in vatb1PropertiesDict){
        genKeyframeSetter(vatb1PropertiesDict[key]);
    }



    for (var key in vatb2PropertiesDict){
        genKeyframeSetter(vatb2PropertiesDict[key]);
    }
}

function vatbTextSetter(){
    var vatbST = 13.0;

    vatbStartX = 1100;
    vatbStartY = 620;
    vatbHoldX = 1625;
    vatbHoldY = 620;
    vatbEndX = 2200;
    vatbEndY = 620;

    const vatbOpacityDict = {
        layerName:["Vapor"],
        property:["opacity"],
        frames:[vatbST, vatbST + 0.1, vatbST + 5.0, vatbST + 5.5],
        value:[0, 100, 100, 0]
    };

    const vatbScaleDict = {
        layerName:["Vapor"],
        property:["scale"],
        frames:[vatbST + 0.5, vatbST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vatbPositionDict = {
        layerName:["Vapor"],
        property:["position"],
        frames:[vatbST, vatbST + 0.7, vatbST + 0.8, vatbST + 0.9, vatbST + 5.0, vatbST + 5.1],
        value:[[vatbStartX, vatbStartY],
        [vatbStartX, vatbStartY],
        [vatbHoldX + 30, vatbHoldY],
        [vatbHoldX, vatbHoldY],
        [vatbHoldX - 30, vatbHoldY],
        [vatbEndX, vatbEndY]]
    };


    const vatbPropertiesDict = {
        vatbOpacity: vatbOpacityDict,
        vatbScale: vatbScaleDict,
        vatbPosition: vatbPositionDict
    };

    for (var key in vatbPropertiesDict){
        genKeyframeSetter(vatbPropertiesDict[key]);
    }
}

function otbSetter(){

    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var otb1TST = 12.2;

    const textBox1TrimStartDict = {
        layerName:["OTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[otb1TST, otb1TST + 0.5],
        value:[100, 50]
    };

    const textBox2TrimStartDict = {
        layerName:["OTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[otb1TST, otb1TST + 0.5],
        value:[100, 50]
    };

    const textBox1TrimEndDict = {
        layerName:["OTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[otb1TST + 12.0, otb1TST + 12.5],
        value:[50, 100]
    };

    const textBox2TrimEndDict = {
        layerName:["OTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[otb1TST + 12.0, otb1TST + 12.5],
        value:[50, 100]
    };

    const textBox1ScaleDict = {
        layerName:["OTB-1"],
        property:["scale"],
        frames:[otb1TST + 0.5, otb1TST + 12.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox2ScaleDict = {
        layerName:["OTB-2"],
        property:["scale"],
        frames:[otb1TST + 0.5, otb1TST + 12.5],
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

function otbTextSetter(){
    // var text1StartX = 328;
    // var text1StartY = 244;

    var t1ST = 12.2;

    const text1OpacityDict = {
        layerName:["Osmo"],
        property:["opacity"],
        frames:[t1ST, t1ST + 0.1, t1ST + 12.0, t1ST + 12.5],
        value:[0, 100, 100, 0]
    };

    const text1ScaleDict = {
        layerName:["Osmo"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 12.5],
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

function vetbSetter(){

    var vetb1TST = 6.5;

    vetbStartX = 1100;
    vetbStartY = 170;
    vetbHoldX = 1625;
    vetbHoldY = 170;
    vetbEndX = 2200;
    vetbEndY = 170;

    const vetb1TrimStartDict = {
        layerName:["VeTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vetb1TST, vetb1TST + 0.5],
        value:[100, 50]
    };

    const vetb2TrimStartDict = {
        layerName:["VeTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vetb1TST, vetb1TST + 0.5],
        value:[100, 50]
    };

    const vetb1TrimEndDict = {
        layerName:["VeTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vetb1TST + 7.0, vetb1TST + 7.5],
        value:[50, 100]
    };

    const vetb2TrimEndDict = {
        layerName:["VeTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[vetb1TST + 7.0, vetb1TST + 7.5],
        value:[50, 100]
    };

    const vetb1ScaleDict = {
        layerName:["VeTB-1"],
        property:["scale"],
        frames:[vetb1TST + 0.5, vetb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vetb2ScaleDict = {
        layerName:["VeTB-2"],
        property:["scale"],
        frames:[vetb1TST + 0.5, vetb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vetb1PositionDict = {
        layerName:["VeTB-1"],
        property:["position"],
        frames:[vetb1TST, vetb1TST + 0.7, vetb1TST + 0.8, vetb1TST + 0.9, vetb1TST + 5.0, vetb1TST + 5.1],
        value:[[vetbStartX, vetbStartY],
        [vetbStartX, vetbStartY],
        [vetbHoldX + 30, vetbHoldY],
        [vetbHoldX, vetbHoldY],
        [vetbHoldX - 30, vetbHoldY],
        [vetbEndX, vetbEndY]]
    };

    const vetb2PositionDict = {
        layerName:["VeTB-2"],
        property:["position"],
        frames:[vetb1TST, vetb1TST + 0.7, vetb1TST + 0.8, vetb1TST + 0.9, vetb1TST + 5.0, vetb1TST + 5.1],
        value:[[vetbStartX, vetbStartY],
        [vetbStartX, vetbStartY],
        [vetbHoldX + 30, vetbHoldY],
        [vetbHoldX, vetbHoldY],
        [vetbHoldX - 30, vetbHoldY],
        [vetbEndX, vetbEndY]]
    };


    const vetb1PropertiesDict = {
        vetb1TrimStart: vetb1TrimStartDict,
        vetb1TrimEnd: vetb1TrimEndDict,
        vetb1Scale: vetb1ScaleDict,
        vetb1Position: vetb1PositionDict
    };

    const vetb2PropertiesDict = {
        vetb2TrimStart: vetb2TrimStartDict,
        vetb2TrimEnd: vetb2TrimEndDict,
        vetb2Scale: vetb2ScaleDict,
        vetb2Position: vetb2PositionDict
    };

  

    for (var key in vetb1PropertiesDict){
        genKeyframeSetter(vetb1PropertiesDict[key]);
    }



    for (var key in vetb2PropertiesDict){
        genKeyframeSetter(vetb2PropertiesDict[key]);
    }
}

function vetbTextSetter(){
    var vetbST = 6.5;

    vetbStartX = 1100;
    vetbStartY = 170;
    vetbHoldX = 1625;
    vetbHoldY = 170;
    vetbEndX = 2200;
    vetbEndY = 170;

    const vetbOpacityDict = {
        layerName:["Ventricle"],
        property:["opacity"],
        frames:[vetbST, vetbST + 0.1, vetbST + 5.0, vetbST + 5.5],
        value:[0, 100, 100, 0]
    };

    const vetbScaleDict = {
        layerName:["Ventricle"],
        property:["scale"],
        frames:[vetbST + 0.5, vetbST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const vetbPositionDict = {
        layerName:["Ventricle"],
        property:["position"],
        frames:[vetbST, vetbST + 0.7, vetbST + 0.8, vetbST + 0.9, vetbST + 5.0, vetbST + 5.1],
        value:[[vetbStartX, vetbStartY],
        [vetbStartX, vetbStartY],
        [vetbHoldX + 30, vetbHoldY],
        [vetbHoldX, vetbHoldY],
        [vetbHoldX - 30, vetbHoldY],
        [vetbEndX, vetbEndY]]
    };


    const vetbPropertiesDict = {
        vetbOpacity: vetbOpacityDict,
        vetbScale: vetbScaleDict,
        vetbPosition: vetbPositionDict
    };

    for (var key in vetbPropertiesDict){
        genKeyframeSetter(vetbPropertiesDict[key]);
    }
}

function wtbSetter(){

    var wtb1TST = 1.0;

    wtbStartX = 1100;
    wtbStartY = 170;
    wtbHoldX = 1625;
    wtbHoldY = 170;
    wtbEndX = 2200;
    wtbEndY = 170;

    const wtb1TrimStartDict = {
        layerName:["WTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[wtb1TST, wtb1TST + 0.5],
        value:[100, 50]
    };

    const wtb2TrimStartDict = {
        layerName:["WTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[wtb1TST, wtb1TST + 0.5],
        value:[100, 50]
    };

    const wtb1TrimEndDict = {
        layerName:["WTB-1"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[wtb1TST + 7.0, wtb1TST + 7.5],
        value:[50, 100]
    };

    const wtb2TrimEndDict = {
        layerName:["WTB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[wtb1TST + 7.0, wtb1TST + 7.5],
        value:[50, 100]
    };

    const wtb1ScaleDict = {
        layerName:["WTB-1"],
        property:["scale"],
        frames:[wtb1TST + 0.5, wtb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const wtb2ScaleDict = {
        layerName:["WTB-2"],
        property:["scale"],
        frames:[wtb1TST + 0.5, wtb1TST + 7.5],
        value:[[100, 100], [105, 105]]
    };



    const wtb1PositionDict = {
        layerName:["WTB-1"],
        property:["position"],
        frames:[wtb1TST, wtb1TST + 0.7, wtb1TST + 0.8, wtb1TST + 0.9, wtb1TST + 5.0, wtb1TST + 5.1],
        value:[[wtbStartX, wtbStartY],
        [wtbStartX, wtbStartY],
        [wtbHoldX + 30, wtbHoldY],
        [wtbHoldX, wtbHoldY],
        [wtbHoldX - 30, wtbHoldY],
        [wtbEndX, wtbEndY]]
    };

    const wtb2PositionDict = {
        layerName:["WTB-2"],
        property:["position"],
        frames:[wtb1TST, wtb1TST + 0.7, wtb1TST + 0.8, wtb1TST + 0.9, wtb1TST + 5.0, wtb1TST + 5.1],
        value:[[wtbStartX, wtbStartY],
        [wtbStartX, wtbStartY],
        [wtbHoldX + 30, wtbHoldY],
        [wtbHoldX, wtbHoldY],
        [wtbHoldX - 30, wtbHoldY],
        [wtbEndX, wtbEndY]]
    };


    const wtb1PropertiesDict = {
        wtb1TrimStart: wtb1TrimStartDict,
        wtb1TrimEnd: wtb1TrimEndDict,
        wtb1Scale: wtb1ScaleDict,
        wtb1Position: wtb1PositionDict
    };

    const wtb2PropertiesDict = {
        wtb2TrimStart: wtb2TrimStartDict,
        wtb2TrimEnd: wtb2TrimEndDict,
        wtb2Scale: wtb2ScaleDict,
        wtb2Position: wtb2PositionDict
    };

  

    for (var key in wtb1PropertiesDict){
        genKeyframeSetter(wtb1PropertiesDict[key]);
    }



    for (var key in wtb2PropertiesDict){
        genKeyframeSetter(wtb2PropertiesDict[key]);
    }
}

function wtbTextSetter(){
    var wtbST = 1.0;

    wtbStartX = 1100;
    wtbStartY = 170;
    wtbHoldX = 1625;
    wtbHoldY = 170;
    wtbEndX = 2200;
    wtbEndY = 170;

    const wtbOpacityDict = {
        layerName:["Whole"],
        property:["opacity"],
        frames:[wtbST, wtbST + 0.1, wtbST + 5.0, wtbST + 5.5],
        value:[0, 100, 100, 0]
    };

    const wtbScaleDict = {
        layerName:["Whole"],
        property:["scale"],
        frames:[wtbST + 0.5, wtbST + 7.5],
        value:[[100, 100], [105, 105]]
    };

    const wtbPositionDict = {
        layerName:["Whole"],
        property:["position"],
        frames:[wtbST, wtbST + 0.7, wtbST + 0.8, wtbST + 0.9, wtbST + 5.0, wtbST + 5.1],
        value:[[wtbStartX, wtbStartY],
        [wtbStartX, wtbStartY],
        [wtbHoldX + 30, wtbHoldY],
        [wtbHoldX, wtbHoldY],
        [wtbHoldX - 30, wtbHoldY],
        [wtbEndX, wtbEndY]]
    };


    const wtbPropertiesDict = {
        wtbOpacity: wtbOpacityDict,
        wtbScale: wtbScaleDict,
        wtbPosition: wtbPositionDict
    };

    for (var key in wtbPropertiesDict){
        genKeyframeSetter(wtbPropertiesDict[key]);
    }
}

function evdSetter(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var evdEndX = -414;
    var evdEndY = 386;
    
    var evdST = 0.2;

    const evdPositionDict = {
        layerName:["EVD-Standard-AI"],
        property:["position"],
        frames:[evdST, evdST + 0.4, evdST + 0.5, evdST + 24.0, evdST + 24.1],
        value:[[evdEndX - 1400, evdEndY],
        [evdEndX + 40, evdEndY],
        [evdEndX, evdEndY],
        [evdEndX + 20, evdEndY],
        [evdEndX - 1400, evdEndY]]
    };

    const evdPropertiesDict = {
        evdPosition: evdPositionDict
    };

    for (var key in evdPropertiesDict){
        genKeyframeSetter(evdPropertiesDict[key]);
    }


}

function rvotSetter(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    var rvotEndX = -444;
    var rvotEndY = 808;

    var rvotST = 12.2;

    const rvotPositionDict = {
        layerName:["RVOT-1-AI"],
        property:["position"],
        frames:[rvotST, rvotST + 0.4, rvotST + 0.5, rvotST + 12.0, rvotST + 12.1],
        value:[[rvotEndX - 1400, rvotEndY],
        [rvotEndX + 40, rvotEndY],
        [rvotEndX, rvotEndY],
        [rvotEndX + 20, rvotEndY],
        [rvotEndX - 1400, rvotEndY]]
    };

    const rvotPropertiesDict = {
        rvotPosition: rvotPositionDict
    };

    for (var key in rvotPropertiesDict){
        genKeyframeSetter(rvotPropertiesDict[key]);
    }

}

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
        frames:[tb1TST + 24.0, tb1TST + 24.5],
        value:[50, 100]
    };

    const textBox2TrimEndDict = {
        layerName:["STB-2"],
        property:["Contents", "Trim Paths 1", "Start"],
        frames:[tb1TST + 24.0, tb1TST + 24.5],
        value:[50, 100]
    };

    const textBox1ScaleDict = {
        layerName:["STB-1"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 24.5],
        value:[[100, 100], [105, 105]]
    };

    const textBox2ScaleDict = {
        layerName:["STB-2"],
        property:["scale"],
        frames:[tb1TST + 0.5, tb1TST + 24.5],
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
        frames:[t1ST, t1ST + 0.1, t1ST + 24.0, t1ST + 24.5],
        value:[0, 100, 100, 0]
    };

    const text1ScaleDict = {
        layerName:["STANDARD EVD"],
        property:["scale"],
        frames:[t1ST + 0.5, t1ST + 24.5],
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