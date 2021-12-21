ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([232623.080533, 2409303.101143, 736625.943207, 2870840.090687]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 0.713000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_COUNTY_MOI_1090820_1 = new ol.format.GeoJSON();
var features_COUNTY_MOI_1090820_1 = format_COUNTY_MOI_1090820_1.readFeatures(json_COUNTY_MOI_1090820_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_COUNTY_MOI_1090820_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COUNTY_MOI_1090820_1.addFeatures(features_COUNTY_MOI_1090820_1);
var lyr_COUNTY_MOI_1090820_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COUNTY_MOI_1090820_1, 
                style: style_COUNTY_MOI_1090820_1,
                interactive: true,
    title: 'COUNTY_MOI_1090820<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_0.png" /> 1<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_1.png" /> 2<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_2.png" /> 6<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_3.png" /> 13<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_4.png" /> 14<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_5.png" /> 16<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_6.png" /> 19<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_7.png" /> 21<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_8.png" /> 27<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_9.png" /> 34<br />\
    <img src="styles/legend/COUNTY_MOI_1090820_1_10.png" /> <br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> 金門輪廓'
            });
var format_2_3 = new ol.format.GeoJSON();
var features_2_3 = format_2_3.readFeatures(json_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_3.addFeatures(features_2_3);
var lyr_2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_3, 
                style: style_2_3,
                interactive: true,
                title: '<img src="styles/legend/2_3.png" /> 圖書館點點-2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_COUNTY_MOI_1090820_1.setVisible(true);lyr__2.setVisible(true);lyr_2_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_COUNTY_MOI_1090820_1,lyr__2,lyr_2_3];
lyr_COUNTY_MOI_1090820_1.set('fieldAliases', {'COUNTYID': 'COUNTYID', 'COUNTYCODE': 'COUNTYCODE', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYENG': 'COUNTYENG', '總館分館區館 — 圖書館數_xls_縣市別': '總館分館區館 — 圖書館數_xls_縣市別', '總館分館區館 — 圖書館數_xls_總館': '總館分館區館 — 圖書館數_xls_總館', '總館分館區館 — 圖書館數_xls_分館': '總館分館區館 — 圖書館數_xls_分館', '總館分館區館 — 圖書館數_xls_區館': '總館分館區館 — 圖書館數_xls_區館', '總館分館區館 — 圖書館數_xls_總館2020': '總館分館區館 — 圖書館數_xls_總館2020', '總館分館區館 — 圖書館數_xls_分館2020': '總館分館區館 — 圖書館數_xls_分館2020', '總館分館區館 — 圖書館數_xls_區館2020': '總館分館區館 — 圖書館數_xls_區館2020', });
lyr__2.set('fieldAliases', {'FID': 'FID', 'COUN_ID': 'COUN_ID', 'COUN_NA': 'COUN_NA', 'TOWN_ID': 'TOWN_ID', 'TOWN_NA': 'TOWN_NA', 'POST': 'POST', });
lyr_2_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'amenity': 'amenity', 'name': 'name', 'addr_city': 'addr_city', });
lyr_COUNTY_MOI_1090820_1.set('fieldImages', {'COUNTYID': 'TextEdit', 'COUNTYCODE': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYENG': 'TextEdit', '總館分館區館 — 圖書館數_xls_縣市別': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館': 'TextEdit', '總館分館區館 — 圖書館數_xls_分館': 'TextEdit', '總館分館區館 — 圖書館數_xls_區館': 'TextEdit', '總館分館區館 — 圖書館數_xls_總館2020': 'Range', '總館分館區館 — 圖書館數_xls_分館2020': 'Range', '總館分館區館 — 圖書館數_xls_區館2020': 'Range', });
lyr__2.set('fieldImages', {'FID': 'TextEdit', 'COUN_ID': 'TextEdit', 'COUN_NA': 'TextEdit', 'TOWN_ID': 'TextEdit', 'TOWN_NA': 'TextEdit', 'POST': 'TextEdit', });
lyr_2_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'amenity': '', 'name': '', 'addr_city': '', });
lyr_COUNTY_MOI_1090820_1.set('fieldLabels', {'COUNTYID': 'no label', 'COUNTYCODE': 'no label', 'COUNTYNAME': 'no label', 'COUNTYENG': 'no label', '總館分館區館 — 圖書館數_xls_縣市別': 'no label', '總館分館區館 — 圖書館數_xls_總館': 'no label', '總館分館區館 — 圖書館數_xls_分館': 'no label', '總館分館區館 — 圖書館數_xls_區館': 'no label', '總館分館區館 — 圖書館數_xls_總館2020': 'no label', '總館分館區館 — 圖書館數_xls_分館2020': 'no label', '總館分館區館 — 圖書館數_xls_區館2020': 'no label', });
lyr__2.set('fieldLabels', {'FID': 'no label', 'COUN_ID': 'no label', 'COUN_NA': 'no label', 'TOWN_ID': 'no label', 'TOWN_NA': 'no label', 'POST': 'no label', });
lyr_2_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'amenity': 'no label', 'name': 'no label', 'addr_city': 'no label', });
lyr_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});