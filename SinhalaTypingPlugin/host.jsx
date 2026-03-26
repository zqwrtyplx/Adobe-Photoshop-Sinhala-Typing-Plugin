function addText(text) {
    var doc = app.activeDocument;

    var layer = doc.artLayers.add();
    layer.kind = LayerKind.TEXT;

    layer.textItem.contents = text;
}