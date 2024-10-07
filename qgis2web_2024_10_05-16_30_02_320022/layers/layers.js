var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Degreeofdroughtdanger_1 = new ol.format.GeoJSON();
var features_Degreeofdroughtdanger_1 = format_Degreeofdroughtdanger_1.readFeatures(json_Degreeofdroughtdanger_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Degreeofdroughtdanger_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Degreeofdroughtdanger_1.addFeatures(features_Degreeofdroughtdanger_1);
var lyr_Degreeofdroughtdanger_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Degreeofdroughtdanger_1, 
                style: style_Degreeofdroughtdanger_1,
                popuplayertitle: "Degree of drought danger",
                interactive: true,
    title: 'Degree of drought danger<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_0.png" /> Alto<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_1.png" /> Bajo<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_2.png" /> Medio<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_3.png" /> Muy alto<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_4.png" /> Muy bajo<br />\
    <img src="styles/legend/Degreeofdroughtdanger_1_5.png" /> <br />'
        });
var format_HumidityRanges_2 = new ol.format.GeoJSON();
var features_HumidityRanges_2 = format_HumidityRanges_2.readFeatures(json_HumidityRanges_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HumidityRanges_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HumidityRanges_2.addFeatures(features_HumidityRanges_2);
var lyr_HumidityRanges_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HumidityRanges_2, 
                style: style_HumidityRanges_2,
                popuplayertitle: "Humidity Ranges",
                interactive: true,
    title: 'Humidity Ranges<br />\
    <img src="styles/legend/HumidityRanges_2_0.png" /> ARIDOS (BS0)<br />\
    <img src="styles/legend/HumidityRanges_2_1.png" /> FRIOS Y MUY FRIOS<br />\
    <img src="styles/legend/HumidityRanges_2_2.png" /> HUMEDOS (f)<br />\
    <img src="styles/legend/HumidityRanges_2_3.png" /> HUMEDOS (m)<br />\
    <img src="styles/legend/HumidityRanges_2_4.png" /> MUY ARIDOS (BW)<br />\
    <img src="styles/legend/HumidityRanges_2_5.png" /> SEMIARIDOS (BS1)<br />\
    <img src="styles/legend/HumidityRanges_2_6.png" /> SUBHUMEDOS (w0)<br />\
    <img src="styles/legend/HumidityRanges_2_7.png" /> SUBHUMEDOS (w1)<br />\
    <img src="styles/legend/HumidityRanges_2_8.png" /> SUBHUMEDOS (w2)<br />\
    <img src="styles/legend/HumidityRanges_2_9.png" /> <br />'
        });
var format_DegreeofFloodRisk_3 = new ol.format.GeoJSON();
var features_DegreeofFloodRisk_3 = format_DegreeofFloodRisk_3.readFeatures(json_DegreeofFloodRisk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DegreeofFloodRisk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DegreeofFloodRisk_3.addFeatures(features_DegreeofFloodRisk_3);
var lyr_DegreeofFloodRisk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DegreeofFloodRisk_3, 
                style: style_DegreeofFloodRisk_3,
                popuplayertitle: "Degree of Flood Risk",
                interactive: true,
    title: 'Degree of Flood Risk<br />\
    <img src="styles/legend/DegreeofFloodRisk_3_0.png" /> ALTA<br />\
    <img src="styles/legend/DegreeofFloodRisk_3_1.png" /> BAJA<br />\
    <img src="styles/legend/DegreeofFloodRisk_3_2.png" /> MEDIA<br />\
    <img src="styles/legend/DegreeofFloodRisk_3_3.png" /> ND<br />\
    <img src="styles/legend/DegreeofFloodRisk_3_4.png" /> <br />'
        });
var format_Precipitationinmm_4 = new ol.format.GeoJSON();
var features_Precipitationinmm_4 = format_Precipitationinmm_4.readFeatures(json_Precipitationinmm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Precipitationinmm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Precipitationinmm_4.addFeatures(features_Precipitationinmm_4);
var lyr_Precipitationinmm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Precipitationinmm_4, 
                style: style_Precipitationinmm_4,
                popuplayertitle: "Precipitation in mm",
                interactive: true,
    title: 'Precipitation in mm<br />\
    <img src="styles/legend/Precipitationinmm_4_0.png" /> 0.1-50<br />\
    <img src="styles/legend/Precipitationinmm_4_1.png" /> 1000-2000<br />\
    <img src="styles/legend/Precipitationinmm_4_2.png" /> 200-400<br />\
    <img src="styles/legend/Precipitationinmm_4_3.png" /> 2000-4000<br />\
    <img src="styles/legend/Precipitationinmm_4_4.png" /> 400-800<br />\
    <img src="styles/legend/Precipitationinmm_4_5.png" /> 50-200<br />\
    <img src="styles/legend/Precipitationinmm_4_6.png" /> 800-1000<br />\
    <img src="styles/legend/Precipitationinmm_4_7.png" /> Ca<br />\
    <img src="styles/legend/Precipitationinmm_4_8.png" /> mas de 4000<br />\
    <img src="styles/legend/Precipitationinmm_4_9.png" /> <br />'
        });
var format_Evapotranspiration_5 = new ol.format.GeoJSON();
var features_Evapotranspiration_5 = format_Evapotranspiration_5.readFeatures(json_Evapotranspiration_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Evapotranspiration_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Evapotranspiration_5.addFeatures(features_Evapotranspiration_5);
var lyr_Evapotranspiration_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Evapotranspiration_5, 
                style: style_Evapotranspiration_5,
                popuplayertitle: "Evapotranspiration",
                interactive: true,
                title: '<img src="styles/legend/Evapotranspiration_5.png" /> Evapotranspiration'
            });
var format_Averageannualisothermal_6 = new ol.format.GeoJSON();
var features_Averageannualisothermal_6 = format_Averageannualisothermal_6.readFeatures(json_Averageannualisothermal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Averageannualisothermal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Averageannualisothermal_6.addFeatures(features_Averageannualisothermal_6);
var lyr_Averageannualisothermal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Averageannualisothermal_6, 
                style: style_Averageannualisothermal_6,
                popuplayertitle: "Average annual isothermal",
                interactive: true,
    title: 'Average annual isothermal<br />\
    <img src="styles/legend/Averageannualisothermal_6_0.png" /> DE -2 A 5<br />\
    <img src="styles/legend/Averageannualisothermal_6_1.png" /> DE 10 A 12<br />\
    <img src="styles/legend/Averageannualisothermal_6_2.png" /> DE 12 A 14<br />\
    <img src="styles/legend/Averageannualisothermal_6_3.png" /> DE 14 A 16<br />\
    <img src="styles/legend/Averageannualisothermal_6_4.png" /> DE 16 A 18<br />\
    <img src="styles/legend/Averageannualisothermal_6_5.png" /> DE 18 A 20<br />\
    <img src="styles/legend/Averageannualisothermal_6_6.png" /> DE 20 A 22<br />\
    <img src="styles/legend/Averageannualisothermal_6_7.png" /> DE 22 A 24<br />\
    <img src="styles/legend/Averageannualisothermal_6_8.png" /> DE 24 A 26<br />\
    <img src="styles/legend/Averageannualisothermal_6_9.png" /> DE 26 A 28<br />\
    <img src="styles/legend/Averageannualisothermal_6_10.png" /> DE 5 A 6<br />\
    <img src="styles/legend/Averageannualisothermal_6_11.png" /> DE 6 A 8<br />\
    <img src="styles/legend/Averageannualisothermal_6_12.png" /> DE 8 A 10<br />\
    <img src="styles/legend/Averageannualisothermal_6_13.png" /> MAYOR DE 28<br />\
    <img src="styles/legend/Averageannualisothermal_6_14.png" /> MENOR DE -2<br />\
    <img src="styles/legend/Averageannualisothermal_6_15.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Degreeofdroughtdanger_1.setVisible(false);lyr_HumidityRanges_2.setVisible(false);lyr_DegreeofFloodRisk_3.setVisible(false);lyr_Precipitationinmm_4.setVisible(false);lyr_Evapotranspiration_5.setVisible(false);lyr_Averageannualisothermal_6.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_Degreeofdroughtdanger_1,lyr_HumidityRanges_2,lyr_DegreeofFloodRisk_3,lyr_Precipitationinmm_4,lyr_Evapotranspiration_5,lyr_Averageannualisothermal_6];
lyr_Degreeofdroughtdanger_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MUN_OFICIA': 'MUN_OFICIA', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'CVE_DIST': 'CVE_DIST', 'NOM_DIST': 'NOM_DIST', 'POTO10': 'POTO10', 'IP_SEQ': 'IP_SEQ', 'CLA_SEQ': 'CLA_SEQ', 'cov_': 'cov_', 'cov_id': 'cov_id', });
lyr_HumidityRanges_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'TIPO': 'TIPO', });
lyr_DegreeofFloodRisk_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MUN_OFICIA': 'MUN_OFICIA', 'CVE_ENT': 'CVE_ENT', 'NOM_ENT': 'NOM_ENT', 'CVE_MUN': 'CVE_MUN', 'NOM_MUN': 'NOM_MUN', 'CVE_DIST': 'CVE_DIST', 'NOM_DIST': 'NOM_DIST', 'POTO95': 'POTO95', 'POMA95': 'POMA95', 'POFE95': 'POFE95', 'VIVHAB95': 'VIVHAB95', 'VIPAHA95': 'VIPAHA95', 'VIPADRE95': 'VIPADRE95', 'DRERED95': 'DRERED95', 'DREFOS95': 'DREFOS95', 'DRERIO95': 'DRERIO95', 'DREBAR95': 'DREBAR95', 'DRENO95': 'DRENO95', 'DRENE95': 'DRENE95', 'VIVAGUA95': 'VIVAGUA95', 'AGUDEN95': 'AGUDEN95', 'AGUTER95': 'AGUTER95', 'AGUPUB95': 'AGUPUB95', 'AGUANO95': 'AGUANO95', 'AGUNOE95': 'AGUNOE95', 'VULNER_RI': 'VULNER_RI', 'VULNER_NUM': 'VULNER_NUM', 'cov_': 'cov_', 'cov_id': 'cov_id', });
lyr_Precipitationinmm_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'MODA_EN_MM': 'MODA_EN_MM', });
lyr_Evapotranspiration_5.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'COV_': 'COV_', 'COV_ID': 'COV_ID', });
lyr_Averageannualisothermal_6.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AP1': 'AP1', 'TA_RANGO': 'TA_RANGO', 'TA_ZONA_T': 'TA_ZONA_T', });
lyr_Degreeofdroughtdanger_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MUN_OFICIA': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CVE_DIST': 'TextEdit', 'NOM_DIST': 'TextEdit', 'POTO10': 'Range', 'IP_SEQ': 'TextEdit', 'CLA_SEQ': 'TextEdit', 'cov_': 'Range', 'cov_id': 'Range', });
lyr_HumidityRanges_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_DegreeofFloodRisk_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MUN_OFICIA': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOM_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'CVE_DIST': 'TextEdit', 'NOM_DIST': 'TextEdit', 'POTO95': 'Range', 'POMA95': 'Range', 'POFE95': 'Range', 'VIVHAB95': 'Range', 'VIPAHA95': 'Range', 'VIPADRE95': 'Range', 'DRERED95': 'Range', 'DREFOS95': 'Range', 'DRERIO95': 'Range', 'DREBAR95': 'Range', 'DRENO95': 'Range', 'DRENE95': 'Range', 'VIVAGUA95': 'Range', 'AGUDEN95': 'Range', 'AGUTER95': 'Range', 'AGUPUB95': 'Range', 'AGUANO95': 'Range', 'AGUNOE95': 'Range', 'VULNER_RI': 'TextEdit', 'VULNER_NUM': 'Range', 'cov_': 'Range', 'cov_id': 'Range', });
lyr_Precipitationinmm_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'MODA_EN_MM': 'TextEdit', });
lyr_Evapotranspiration_5.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', });
lyr_Averageannualisothermal_6.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COV_': 'TextEdit', 'COV_ID': 'TextEdit', 'AP1': 'Range', 'TA_RANGO': 'TextEdit', 'TA_ZONA_T': 'TextEdit', });
lyr_Degreeofdroughtdanger_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'MUN_OFICIA': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'inline label - always visible', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'CVE_DIST': 'no label', 'NOM_DIST': 'no label', 'POTO10': 'no label', 'IP_SEQ': 'no label', 'CLA_SEQ': 'no label', 'cov_': 'no label', 'cov_id': 'no label', });
lyr_HumidityRanges_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'TIPO': 'inline label - always visible', });
lyr_DegreeofFloodRisk_3.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'MUN_OFICIA': 'no label', 'CVE_ENT': 'no label', 'NOM_ENT': 'inline label - always visible', 'CVE_MUN': 'no label', 'NOM_MUN': 'no label', 'CVE_DIST': 'no label', 'NOM_DIST': 'no label', 'POTO95': 'no label', 'POMA95': 'no label', 'POFE95': 'no label', 'VIVHAB95': 'no label', 'VIPAHA95': 'no label', 'VIPADRE95': 'no label', 'DRERED95': 'no label', 'DREFOS95': 'no label', 'DRERIO95': 'no label', 'DREBAR95': 'no label', 'DRENO95': 'no label', 'DRENE95': 'no label', 'VIVAGUA95': 'no label', 'AGUDEN95': 'no label', 'AGUTER95': 'no label', 'AGUPUB95': 'no label', 'AGUANO95': 'no label', 'AGUNOE95': 'no label', 'VULNER_RI': 'no label', 'VULNER_NUM': 'no label', 'cov_': 'no label', 'cov_id': 'no label', });
lyr_Precipitationinmm_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'MODA_EN_MM': 'inline label - always visible', });
lyr_Evapotranspiration_5.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', });
lyr_Averageannualisothermal_6.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AP1': 'no label', 'TA_RANGO': 'inline label - always visible', 'TA_ZONA_T': 'no label', });
lyr_Averageannualisothermal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'hard-light';
});