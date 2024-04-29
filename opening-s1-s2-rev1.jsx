var window = new Window("palette", "Tester", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Testing Interface");

var buttonGroup = window.add("group", undefined, "buttonGroup");
buttonGroup.orientation = "row";
var buttonOne = buttonGroup.add("button", undefined, "Test 1");
var buttonTwo = buttonGroup.add("button", undefined, "Test 2");



buttonOne.onClick = function() {
    app.beginUndoGroup("Function 1");

    logoKeyframeSetter();


    app.endUndoGroup();
}

buttonTwo.onClick = function() {
    

}

window.center();
window.show();


function logoKeyframeSetter(){
    var compMiddleX = 1920/2;
    var compMiddleY = 1080/2;

    const osmoScaleDict = {
        layerName:["OsmoFloTM"],
        property:["scale"],
        frames:[0, 0.1],
        value:[[400, 400], [100, 100]]
    };

    const osmoPositionDict = {
        layerName:["OsmoFloTM"],
        property:["position"],
        frames:[0, 0.1, 0.4, 0.8, 1.5, 1.7, 5.5, 6.0],
        value:[[compMiddleX, compMiddleY],
        [compMiddleX, compMiddleY],
        [compMiddleX - 10, compMiddleY],
        [compMiddleX - 400, compMiddleY],
        [compMiddleX - 410, compMiddleY],
        [compMiddleX - 410, compMiddleY - 250],
        [compMiddleX - 410, compMiddleY - 250],
        [compMiddleX - 410, compMiddleY - 250 - 2*compMiddleY]]
    };

    const osmoPropertiesDict = {
        osmoScale: osmoScaleDict,
        osmoPosition: osmoPositionDict
    };

    for (var key in osmoPropertiesDict){
        genKeyframeSetter(osmoPropertiesDict[key]);
    }

    var biStartY = compMiddleY + 0;

    const biPositionDict = {
        layerName:["Bimodal EVD System for"],
        property:["position"],
        frames:[0, 0.8, 1.5, 1.7, 5.5, 6.0],
        value:[[compMiddleX + 200, biStartY],
        [compMiddleX + 200, biStartY],
        [compMiddleX + 190, biStartY],
        [compMiddleX + 190, biStartY - 250],
        [compMiddleX + 190, biStartY - 250],
        [compMiddleX + 190, biStartY - 250 - 2*compMiddleY]] 
    };

    const biPropertiesDict = {
        biPosition: biPositionDict
    };

    for (var key in biPropertiesDict){
        genKeyframeSetter(biPropertiesDict[key])
    }

    const biMaskPositionDict = {
        layerName:["Bimodal-Mask"],
        property:["position"],
        frames:[0, 0.8, 1.2, 1.7],
        value:[[compMiddleX + 200, triStartY],
        [compMiddleX + 200, biStartY],
        [compMiddleX + 1100, biStartY],
        [compMiddleX + 1100, biStartY - 250]]
    };

    const biMaskPropertiesDict = {
        biPosition: biMaskPositionDict
    };


    for (var key in biMaskPropertiesDict){
        genKeyframeSetter(biMaskPropertiesDict[key]);
    }

    var traumaStartY = compMiddleY - 170;

    const traumaPositionDict = {
        layerName:["Traumatic Brain Injury"],
        property:["position"],
        frames:[0, 2.2, 5.5, 6.0],
        value:[[compMiddleX, traumaStartY],
        [compMiddleX, traumaStartY],
        [compMiddleX, traumaStartY],
        [compMiddleX, traumaStartY - 2*compMiddleY]]
    };

    const traumaPropertiesDict = {
        traumaPosition: traumaPositionDict
    };

    for (var key in traumaPropertiesDict){
        genKeyframeSetter(traumaPropertiesDict[key]);
    }

    const traumaMaskPositionDict = {
        layerName:["Trauma-Mask"],
        property:["position"],
        frames:[0, 2.2, 2.5],
        value:[[compMiddleX, traumaStartY],
        [compMiddleX, traumaStartY],
        [compMiddleX - 1000, traumaStartY]]
    };

    const traumaMaskPropertiesDict = {
        traumaMaskPosition: traumaMaskPositionDict
    };

    for (var key in traumaMaskPropertiesDict){
        genKeyframeSetter(traumaMaskPropertiesDict[key]);
    }

    var localStartX = compMiddleX + 500;

    const localPositionDict = {
        layerName:["Localized"],
        property:["position"],
        frames:[3.5, 3.7, 5.5, 6.0],
        value:[[localStartX, compMiddleY],
        [localStartX - 835, compMiddleY],
        [localStartX - 835, compMiddleY],
        [localStartX - 835, compMiddleY - 2*compMiddleY]]
    };

    const localPropertiesDict = {
        localPosition: localPositionDict
    };
    
    for (var key in localPropertiesDict){
        genKeyframeSetter(localPropertiesDict[key]);
    }

    var osmotherapyStartX = compMiddleX + 1000;

    const osmotherapyPositionDict = {
        layerName:["Osmotherapy"],
        property:["position"],
        frames:[3.8, 4.0, 5.5, 6.0],
        value:[[osmotherapyStartX, compMiddleY],
        [osmotherapyStartX - 735, compMiddleY],
        [osmotherapyStartX - 735, compMiddleY],
        [osmotherapyStartX - 735, compMiddleY - 2*compMiddleY]]
    };

    const osmotherapyPropertiesDict = {
        osmotherapyPosition: osmotherapyPositionDict
    };

    for (var key in osmotherapyPropertiesDict){
        genKeyframeSetter(osmotherapyPropertiesDict[key]);
    }
    
    const loMaskPositionDict = {
        layerName:["LO-Mask"],
        property:["position"],
        frames:[3.8, 4.0],
        value:[[1700, 550], [2200, 550]]
    };

    const loMaskPropertiesDict = {
        loMaskPosition: loMaskPositionDict
    };

    for (var key in loMaskPropertiesDict){
        genKeyframeSetter(loMaskPropertiesDict[key]);
    }

    const baseMaskPositionDict = {
        layerName:["Base-Mask"],
        property:["position"],
        frames:[0, 5.5, 6.0],
        value:[[compMiddleX, compMiddleY],
        [compMiddleX, compMiddleY],
        [compMiddleX, compMiddleY - 2*compMiddleY]]
    };

    const baseMaskPropertiesDict = {
        baseMaskPosition: baseMaskPositionDict
    };

    for (var key in baseMaskPropertiesDict){
        genKeyframeSetter(baseMaskPropertiesDict[key]);
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