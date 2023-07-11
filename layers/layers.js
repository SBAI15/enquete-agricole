var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Parcellesenqutes_1 = new ol.format.GeoJSON();
var features_Parcellesenqutes_1 = format_Parcellesenqutes_1.readFeatures(json_Parcellesenqutes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcellesenqutes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcellesenqutes_1.addFeatures(features_Parcellesenqutes_1);
var lyr_Parcellesenqutes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcellesenqutes_1, 
                style: style_Parcellesenqutes_1,
                interactive: true,
                title: '<img src="styles/legend/Parcellesenqutes_1.png" /> Parcelles enquêtées'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Parcellesenqutes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Parcellesenqutes_1];
lyr_Parcellesenqutes_1.set('fieldAliases', {'id': 'id', 'Superficie': 'Superficie', 'date': 'date', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Altitude': 'Altitude', 'état parc': 'état parc', 'irrigation': 'irrigation', 'sys_irrig': 'sys_irrig', 'texture': 'texture', 'relief': 'relief', 'Sys_cultur': 'Sys_cultur', 'Culture': 'Culture', 'Feuil1_C_1': 'Feuil1_C_1', 'Feuil1_C_2': 'Feuil1_C_2', 'Feuil1_C_3': 'Feuil1_C_3', 'Feuil1_C_4': 'Feuil1_C_4', 'supérfici': 'supérfici', 'adventice': 'adventice', 'opér_cult': 'opér_cult', });
lyr_Parcellesenqutes_1.set('fieldImages', {'id': 'TextEdit', 'Superficie': 'TextEdit', 'date': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Altitude': 'TextEdit', 'état parc': 'TextEdit', 'irrigation': 'TextEdit', 'sys_irrig': 'TextEdit', 'texture': 'TextEdit', 'relief': 'TextEdit', 'Sys_cultur': 'TextEdit', 'Culture': 'TextEdit', 'Feuil1_C_1': 'TextEdit', 'Feuil1_C_2': 'TextEdit', 'Feuil1_C_3': 'TextEdit', 'Feuil1_C_4': 'TextEdit', 'supérfici': 'TextEdit', 'adventice': 'TextEdit', 'opér_cult': 'TextEdit', });
lyr_Parcellesenqutes_1.set('fieldLabels', {'id': 'inline label', 'Superficie': 'inline label', 'date': 'inline label', 'Longitude': 'inline label', 'Latitude': 'inline label', 'Altitude': 'inline label', 'état parc': 'inline label', 'irrigation': 'inline label', 'sys_irrig': 'inline label', 'texture': 'inline label', 'relief': 'inline label', 'Sys_cultur': 'inline label', 'Culture': 'inline label', 'Feuil1_C_1': 'no label', 'Feuil1_C_2': 'no label', 'Feuil1_C_3': 'no label', 'Feuil1_C_4': 'no label', 'supérfici': 'inline label', 'adventice': 'inline label', 'opér_cult': 'inline label', });
lyr_Parcellesenqutes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});