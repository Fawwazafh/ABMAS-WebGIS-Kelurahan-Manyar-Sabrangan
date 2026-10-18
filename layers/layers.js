ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([676013.484111, 9187369.928652, 703905.324700, 9204485.537177]);
var wms_layers = [];


        var lyr_MapboxSatelite_0 = new ol.layer.Tile({
            'title': 'Mapbox Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101ifSAcKcVFs&access_token=pk.eyJ1IjoidW5mb2xkZWRpbmMiLCJhIjoiY2s5ZG90MjMzMDV6eDNkbnh2cDJvbHl4NyJ9.BT2LAvHi31vNNEplsgxucQ'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2 = new ol.format.GeoJSON();
var features_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2 = format_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.readFeatures(json_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.addFeatures(features_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2);
var lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2, 
                style: style_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2,
                popuplayertitle: 'TUTUPAN LAHAN KELURAHAN MANYAR SABRANGAN',
                interactive: true,
    title: 'TUTUPAN LAHAN KELURAHAN MANYAR SABRANGAN<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_0.png" /> Fasilitas Umum<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_1.png" /> Perdagangan dan Jasa<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_2.png" /> Perkantoran<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_3.png" /> Perumahan<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_4.png" /> Peruntukan Lainnya<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_5.png" /> RTH<br />\
    <img src="styles/legend/TUTUPANLAHANKELURAHANMANYARSABRANGAN_2_6.png" /> Sungai<br />' });
var format_SURABAYATIMUR_3 = new ol.format.GeoJSON();
var features_SURABAYATIMUR_3 = format_SURABAYATIMUR_3.readFeatures(json_SURABAYATIMUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SURABAYATIMUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SURABAYATIMUR_3.addFeatures(features_SURABAYATIMUR_3);
var lyr_SURABAYATIMUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SURABAYATIMUR_3, 
                style: style_SURABAYATIMUR_3,
                popuplayertitle: 'SURABAYA TIMUR',
                interactive: true,
    title: 'SURABAYA TIMUR<br />\
    <img src="styles/legend/SURABAYATIMUR_3_0.png" /> GUBENG<br />\
    <img src="styles/legend/SURABAYATIMUR_3_1.png" /> GUNUNGANYAR<br />\
    <img src="styles/legend/SURABAYATIMUR_3_2.png" /> MULYOREJO<br />\
    <img src="styles/legend/SURABAYATIMUR_3_3.png" /> RUNGKUT<br />\
    <img src="styles/legend/SURABAYATIMUR_3_4.png" /> SUKOLILO<br />\
    <img src="styles/legend/SURABAYATIMUR_3_5.png" /> TAMBAKSARI<br />\
    <img src="styles/legend/SURABAYATIMUR_3_6.png" /> TENGGILISMEJOYO<br />\
    <img src="styles/legend/SURABAYATIMUR_3_7.png" /> <br />' });
var format_SatuanPemetaanSasaranDarat_4 = new ol.format.GeoJSON();
var features_SatuanPemetaanSasaranDarat_4 = format_SatuanPemetaanSasaranDarat_4.readFeatures(json_SatuanPemetaanSasaranDarat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SatuanPemetaanSasaranDarat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SatuanPemetaanSasaranDarat_4.addFeatures(features_SatuanPemetaanSasaranDarat_4);
var lyr_SatuanPemetaanSasaranDarat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SatuanPemetaanSasaranDarat_4, 
                style: style_SatuanPemetaanSasaranDarat_4,
                popuplayertitle: 'Satuan Pemetaan Sasaran Darat',
                interactive: true,
    title: 'Satuan Pemetaan Sasaran Darat<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_0.png" /> Zona Defisit Infiltrasi<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_1.png" /> Zona Penyangga Alami<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_2.png" /> Zona Rawan Genangan Cepat<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_3.png" /> Zona Rentan Kumulatif<br />\
    <img src="styles/legend/SatuanPemetaanSasaranDarat_4_4.png" /> Zona Tangkapan Jenuh Limpasan<br />' });
var format_SatuanPemetaanSasaranMangrove_5 = new ol.format.GeoJSON();
var features_SatuanPemetaanSasaranMangrove_5 = format_SatuanPemetaanSasaranMangrove_5.readFeatures(json_SatuanPemetaanSasaranMangrove_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_SatuanPemetaanSasaranMangrove_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SatuanPemetaanSasaranMangrove_5.addFeatures(features_SatuanPemetaanSasaranMangrove_5);
var lyr_SatuanPemetaanSasaranMangrove_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SatuanPemetaanSasaranMangrove_5, 
                style: style_SatuanPemetaanSasaranMangrove_5,
                popuplayertitle: 'Satuan Pemetaan Sasaran Mangrove',
                interactive: true,
    title: 'Satuan Pemetaan Sasaran Mangrove<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_0.png" /> Zona Darurat Pesisir & Abrasi<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_1.png" /> Zona Pemeliharaan Mangrove Sedang<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_2.png" /> Zona Pemulihan Tutupan Mangrove<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_3.png" /> Zona Peredam Gelombang & Anomali Resapan<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_4.png" /> Zona Restorasi & Pengkayaan Pesisir<br />\
    <img src="styles/legend/SatuanPemetaanSasaranMangrove_5_5.png" /> Zona Sabuk Hijau<br />' });
var format_KELURAHANMANYARSABRANGAN_6 = new ol.format.GeoJSON();
var features_KELURAHANMANYARSABRANGAN_6 = format_KELURAHANMANYARSABRANGAN_6.readFeatures(json_KELURAHANMANYARSABRANGAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KELURAHANMANYARSABRANGAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHANMANYARSABRANGAN_6.addFeatures(features_KELURAHANMANYARSABRANGAN_6);
var lyr_KELURAHANMANYARSABRANGAN_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHANMANYARSABRANGAN_6, 
                style: style_KELURAHANMANYARSABRANGAN_6,
                popuplayertitle: 'KELURAHAN MANYAR SABRANGAN',
                interactive: true,
    title: 'KELURAHAN MANYAR SABRANGAN<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_0.png" /> RW 1<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_1.png" /> RW 2<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_2.png" /> RW 3<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_3.png" /> RW 4<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_4.png" /> RW 5<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_5.png" /> RW 6<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_6.png" /> RW 7<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_7.png" /> RW 8<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_8.png" /> RW 9<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_9.png" /> RW 10<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_10.png" /> RW 12<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_6_11.png" /> RW 11<br />' });
var format_DAERAHRAWANGENANGAN_7 = new ol.format.GeoJSON();
var features_DAERAHRAWANGENANGAN_7 = format_DAERAHRAWANGENANGAN_7.readFeatures(json_DAERAHRAWANGENANGAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DAERAHRAWANGENANGAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAERAHRAWANGENANGAN_7.addFeatures(features_DAERAHRAWANGENANGAN_7);
var lyr_DAERAHRAWANGENANGAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAERAHRAWANGENANGAN_7, 
                style: style_DAERAHRAWANGENANGAN_7,
                popuplayertitle: 'DAERAH RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/DAERAHRAWANGENANGAN_7.png" /> DAERAH RAWAN GENANGAN'
            });
var format_DRAINASE_8 = new ol.format.GeoJSON();
var features_DRAINASE_8 = format_DRAINASE_8.readFeatures(json_DRAINASE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DRAINASE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_8.addFeatures(features_DRAINASE_8);
var lyr_DRAINASE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINASE_8, 
                style: style_DRAINASE_8,
                popuplayertitle: 'DRAINASE',
                interactive: true,
                title: '<img src="styles/legend/DRAINASE_8.png" /> DRAINASE'
            });
var format_DRAINASE_RDTR_9 = new ol.format.GeoJSON();
var features_DRAINASE_RDTR_9 = format_DRAINASE_RDTR_9.readFeatures(json_DRAINASE_RDTR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DRAINASE_RDTR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_RDTR_9.addFeatures(features_DRAINASE_RDTR_9);
var lyr_DRAINASE_RDTR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINASE_RDTR_9, 
                style: style_DRAINASE_RDTR_9,
                popuplayertitle: 'DRAINASE_RDTR',
                interactive: true,
    title: 'DRAINASE_RDTR<br />\
    <img src="styles/legend/DRAINASE_RDTR_9_0.png" /> 1-Peningkatan Saluran Primer<br />\
    <img src="styles/legend/DRAINASE_RDTR_9_1.png" /> 1-Peningkatan Saluran Sekunder<br />\
    <img src="styles/legend/DRAINASE_RDTR_9_2.png" /> Saluran Primer<br />\
    <img src="styles/legend/DRAINASE_RDTR_9_3.png" /> Saluran Sekunder<br />' });
var format_JaringanDrainase_10 = new ol.format.GeoJSON();
var features_JaringanDrainase_10 = format_JaringanDrainase_10.readFeatures(json_JaringanDrainase_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanDrainase_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanDrainase_10.addFeatures(features_JaringanDrainase_10);
var lyr_JaringanDrainase_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanDrainase_10, 
                style: style_JaringanDrainase_10,
                popuplayertitle: 'Jaringan Drainase',
                interactive: true,
    title: 'Jaringan Drainase<br />\
    <img src="styles/legend/JaringanDrainase_10_0.png" /> 1-Peningkatan Saluran Primer<br />\
    <img src="styles/legend/JaringanDrainase_10_1.png" /> 1-Peningkatan Saluran Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_10_2.png" /> Saluran Primer<br />\
    <img src="styles/legend/JaringanDrainase_10_3.png" /> Saluran Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_10_4.png" /> Saluran Tersier<br />' });
var format_JARINGANJALAN_11 = new ol.format.GeoJSON();
var features_JARINGANJALAN_11 = format_JARINGANJALAN_11.readFeatures(json_JARINGANJALAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JARINGANJALAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_11.addFeatures(features_JARINGANJALAN_11);
var lyr_JARINGANJALAN_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_11, 
                style: style_JARINGANJALAN_11,
                popuplayertitle: 'JARINGAN JALAN',
                interactive: true,
                title: '<img src="styles/legend/JARINGANJALAN_11.png" /> JARINGAN JALAN'
            });
var format_JANGKAUANTITIKRAWANGENANGAN_12 = new ol.format.GeoJSON();
var features_JANGKAUANTITIKRAWANGENANGAN_12 = format_JANGKAUANTITIKRAWANGENANGAN_12.readFeatures(json_JANGKAUANTITIKRAWANGENANGAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JANGKAUANTITIKRAWANGENANGAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTITIKRAWANGENANGAN_12.addFeatures(features_JANGKAUANTITIKRAWANGENANGAN_12);
var lyr_JANGKAUANTITIKRAWANGENANGAN_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUANTITIKRAWANGENANGAN_12, 
                style: style_JANGKAUANTITIKRAWANGENANGAN_12,
                popuplayertitle: 'JANGKAUAN TITIK RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTITIKRAWANGENANGAN_12.png" /> JANGKAUAN TITIK RAWAN GENANGAN'
            });
var format_JANGKAUANTITIKDRAINASEBERMASALAH_13 = new ol.format.GeoJSON();
var features_JANGKAUANTITIKDRAINASEBERMASALAH_13 = format_JANGKAUANTITIKDRAINASEBERMASALAH_13.readFeatures(json_JANGKAUANTITIKDRAINASEBERMASALAH_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_13.addFeatures(features_JANGKAUANTITIKDRAINASEBERMASALAH_13);
var lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_13, 
                style: style_JANGKAUANTITIKDRAINASEBERMASALAH_13,
                popuplayertitle: 'JANGKAUAN TITIK DRAINASE BERMASALAH',
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTITIKDRAINASEBERMASALAH_13.png" /> JANGKAUAN TITIK DRAINASE BERMASALAH'
            });
var format_TITIKRAWANGENANGAN_14 = new ol.format.GeoJSON();
var features_TITIKRAWANGENANGAN_14 = format_TITIKRAWANGENANGAN_14.readFeatures(json_TITIKRAWANGENANGAN_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TITIKRAWANGENANGAN_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKRAWANGENANGAN_14.addFeatures(features_TITIKRAWANGENANGAN_14);
var lyr_TITIKRAWANGENANGAN_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKRAWANGENANGAN_14, 
                style: style_TITIKRAWANGENANGAN_14,
                popuplayertitle: 'TITIK RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/TITIKRAWANGENANGAN_14.png" /> TITIK RAWAN GENANGAN'
            });
var format_TITIKDRAINASEBERMASALAH_15 = new ol.format.GeoJSON();
var features_TITIKDRAINASEBERMASALAH_15 = format_TITIKDRAINASEBERMASALAH_15.readFeatures(json_TITIKDRAINASEBERMASALAH_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TITIKDRAINASEBERMASALAH_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKDRAINASEBERMASALAH_15.addFeatures(features_TITIKDRAINASEBERMASALAH_15);
var lyr_TITIKDRAINASEBERMASALAH_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKDRAINASEBERMASALAH_15, 
                style: style_TITIKDRAINASEBERMASALAH_15,
                popuplayertitle: 'TITIK DRAINASE BERMASALAH',
                interactive: true,
                title: '<img src="styles/legend/TITIKDRAINASEBERMASALAH_15.png" /> TITIK DRAINASE BERMASALAH'
            });
var format_KANTORKELURAHAN_16 = new ol.format.GeoJSON();
var features_KANTORKELURAHAN_16 = format_KANTORKELURAHAN_16.readFeatures(json_KANTORKELURAHAN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KANTORKELURAHAN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORKELURAHAN_16.addFeatures(features_KANTORKELURAHAN_16);
var lyr_KANTORKELURAHAN_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORKELURAHAN_16, 
                style: style_KANTORKELURAHAN_16,
                popuplayertitle: 'KANTOR KELURAHAN',
                interactive: true,
                title: '<img src="styles/legend/KANTORKELURAHAN_16.png" /> KANTOR KELURAHAN'
            });

lyr_MapboxSatelite_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.setVisible(true);lyr_SURABAYATIMUR_3.setVisible(true);lyr_SatuanPemetaanSasaranDarat_4.setVisible(true);lyr_SatuanPemetaanSasaranMangrove_5.setVisible(true);lyr_KELURAHANMANYARSABRANGAN_6.setVisible(true);lyr_DAERAHRAWANGENANGAN_7.setVisible(true);lyr_DRAINASE_8.setVisible(true);lyr_DRAINASE_RDTR_9.setVisible(true);lyr_JaringanDrainase_10.setVisible(true);lyr_JARINGANJALAN_11.setVisible(true);lyr_JANGKAUANTITIKRAWANGENANGAN_12.setVisible(true);lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13.setVisible(true);lyr_TITIKRAWANGENANGAN_14.setVisible(true);lyr_TITIKDRAINASEBERMASALAH_15.setVisible(true);lyr_KANTORKELURAHAN_16.setVisible(true);
var layersList = [lyr_MapboxSatelite_0,lyr_ESRIWorldTopo_1,lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2,lyr_SURABAYATIMUR_3,lyr_SatuanPemetaanSasaranDarat_4,lyr_SatuanPemetaanSasaranMangrove_5,lyr_KELURAHANMANYARSABRANGAN_6,lyr_DAERAHRAWANGENANGAN_7,lyr_DRAINASE_8,lyr_DRAINASE_RDTR_9,lyr_JaringanDrainase_10,lyr_JARINGANJALAN_11,lyr_JANGKAUANTITIKRAWANGENANGAN_12,lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13,lyr_TITIKRAWANGENANGAN_14,lyr_TITIKDRAINASEBERMASALAH_15,lyr_KANTORKELURAHAN_16];
lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Keterangan': 'Keterangan', 'Layer': 'Layer', 'Hirarki_1': 'Hirarki_1', 'Hirarki_2': 'Hirarki_2', 'Luas_Ha': 'Luas_Ha', });
lyr_SURABAYATIMUR_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldAliases', {'gridcode': 'gridcode', 'Notasi': 'Notasi', 'REMARK': 'REMARK', 'Aktual': 'Aktual', 'gridcode_1': 'gridcode_1', 'Notasi_1': 'Notasi_1', 'REMARK_1': 'REMARK_1', 'Aktual_1': 'Aktual_1', 'NotasiAktu': 'NotasiAktu', 'Kelas': 'Kelas', 'Deskripsi': 'Deskripsi', 'Kode': 'Kode', 'FID_Banjir': 'FID_Banjir', 'gridcode_2': 'gridcode_2', 'Kelas_Rawa': 'Kelas_Rawa', 'FID_1': 'FID_1', 'Shape__': 'Shape__', 'gridcode_3': 'gridcode_3', 'Notasi_12': 'Notasi_12', 'REMARK_12': 'REMARK_12', 'Aktual_12': 'Aktual_12', 'gridcode_4': 'gridcode_4', 'Notasi__13': 'Notasi__13', 'REMARK__13': 'REMARK__13', 'Aktual__13': 'Aktual__13', 'NotasiAk_1': 'NotasiAk_1', 'Kelas_1': 'Kelas_1', 'Deskrips_1': 'Deskrips_1', 'Kode_1': 'Kode_1', 'FID_Banj_1': 'FID_Banj_1', 'gridcode_5': 'gridcode_5', 'Kelas_Ra_1': 'Kelas_Ra_1', 'Resapan': 'Resapan', 'Ket__SPS': 'Ket__SPS', 'Klasifikas': 'Klasifikas', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Klasifikas': 'Klasifikas', 'Klasifik_1': 'Klasifik_1', 'Klasifik_2': 'Klasifik_2', 'Klasifik_3': 'Klasifik_3', 'Klasifik_4': 'Klasifik_4', 'Klasifik_5': 'Klasifik_5', });
lyr_KELURAHANMANYARSABRANGAN_6.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'WADMKD': 'WADMKD', 'UP': 'UP', 'RW': 'RW', });
lyr_DAERAHRAWANGENANGAN_7.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', });
lyr_DRAINASE_8.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_DRAINASE_RDTR_9.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_JaringanDrainase_10.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_JARINGANJALAN_11.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_JANGKAUANTITIKRAWANGENANGAN_12.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'layer': 'layer', 'path': 'path', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TITIKRAWANGENANGAN_14.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Foto': 'Foto', 'DIAGRAM GA': 'DIAGRAM GA', 'ALAMAT': 'ALAMAT', });
lyr_TITIKDRAINASEBERMASALAH_15.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'FOTO': 'FOTO', 'ALAMAT': 'ALAMAT', 'DIAGRAM': 'DIAGRAM', });
lyr_KANTORKELURAHAN_16.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', 'FOTO': 'FOTO', });
lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.set('fieldImages', {'OBJECTID': 'Range', 'Keterangan': 'TextEdit', 'Layer': 'TextEdit', 'Hirarki_1': 'TextEdit', 'Hirarki_2': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_SURABAYATIMUR_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldImages', {'gridcode': 'TextEdit', 'Notasi': 'TextEdit', 'REMARK': 'TextEdit', 'Aktual': 'TextEdit', 'gridcode_1': 'TextEdit', 'Notasi_1': 'TextEdit', 'REMARK_1': 'TextEdit', 'Aktual_1': 'TextEdit', 'NotasiAktu': 'TextEdit', 'Kelas': 'TextEdit', 'Deskripsi': 'TextEdit', 'Kode': 'TextEdit', 'FID_Banjir': 'TextEdit', 'gridcode_2': 'TextEdit', 'Kelas_Rawa': 'TextEdit', 'FID_1': 'TextEdit', 'Shape__': 'TextEdit', 'gridcode_3': 'TextEdit', 'Notasi_12': 'TextEdit', 'REMARK_12': 'TextEdit', 'Aktual_12': 'TextEdit', 'gridcode_4': 'TextEdit', 'Notasi__13': 'TextEdit', 'REMARK__13': 'TextEdit', 'Aktual__13': 'TextEdit', 'NotasiAk_1': 'TextEdit', 'Kelas_1': 'TextEdit', 'Deskrips_1': 'TextEdit', 'Kode_1': 'TextEdit', 'FID_Banj_1': 'TextEdit', 'gridcode_5': 'TextEdit', 'Kelas_Ra_1': 'TextEdit', 'Resapan': 'TextEdit', 'Ket__SPS': 'TextEdit', 'Klasifikas': 'TextEdit', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Klasifikas': 'TextEdit', 'Klasifik_1': 'TextEdit', 'Klasifik_2': 'TextEdit', 'Klasifik_3': 'TextEdit', 'Klasifik_4': 'TextEdit', 'Klasifik_5': 'TextEdit', });
lyr_KELURAHANMANYARSABRANGAN_6.set('fieldImages', {'FID_Batas_': 'Range', 'WADMKD': 'TextEdit', 'UP': 'TextEdit', 'RW': 'TextEdit', });
lyr_DAERAHRAWANGENANGAN_7.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', });
lyr_DRAINASE_8.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_DRAINASE_RDTR_9.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JaringanDrainase_10.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JARINGANJALAN_11.set('fieldImages', {'Status': 'TextEdit', 'Nama': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Panjang': 'TextEdit', 'UP': 'TextEdit', });
lyr_JANGKAUANTITIKRAWANGENANGAN_12.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TITIKRAWANGENANGAN_14.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Foto': 'ExternalResource', 'DIAGRAM GA': 'ExternalResource', 'ALAMAT': 'TextEdit', });
lyr_TITIKDRAINASEBERMASALAH_15.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'FOTO': 'ExternalResource', 'ALAMAT': 'TextEdit', 'DIAGRAM': 'ExternalResource', });
lyr_KANTORKELURAHAN_16.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_TUTUPANLAHANKELURAHANMANYARSABRANGAN_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'Keterangan': 'hidden field', 'Layer': 'hidden field', 'Hirarki_1': 'hidden field', 'Hirarki_2': 'inline label - always visible', 'Luas_Ha': 'hidden field', });
lyr_SURABAYATIMUR_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_SatuanPemetaanSasaranDarat_4.set('fieldLabels', {'gridcode': 'hidden field', 'Notasi': 'hidden field', 'REMARK': 'hidden field', 'Aktual': 'hidden field', 'gridcode_1': 'hidden field', 'Notasi_1': 'hidden field', 'REMARK_1': 'hidden field', 'Aktual_1': 'hidden field', 'NotasiAktu': 'hidden field', 'Kelas': 'hidden field', 'Deskripsi': 'hidden field', 'Kode': 'hidden field', 'FID_Banjir': 'hidden field', 'gridcode_2': 'hidden field', 'Kelas_Rawa': 'hidden field', 'FID_1': 'hidden field', 'Shape__': 'hidden field', 'gridcode_3': 'hidden field', 'Notasi_12': 'hidden field', 'REMARK_12': 'hidden field', 'Aktual_12': 'hidden field', 'gridcode_4': 'hidden field', 'Notasi__13': 'hidden field', 'REMARK__13': 'hidden field', 'Aktual__13': 'hidden field', 'NotasiAk_1': 'hidden field', 'Kelas_1': 'hidden field', 'Deskrips_1': 'hidden field', 'Kode_1': 'hidden field', 'FID_Banj_1': 'hidden field', 'gridcode_5': 'hidden field', 'Kelas_Ra_1': 'hidden field', 'Resapan': 'hidden field', 'Ket__SPS': 'hidden field', 'Klasifikas': 'inline label - always visible', });
lyr_SatuanPemetaanSasaranMangrove_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Klasifikas': 'hidden field', 'Klasifik_1': 'hidden field', 'Klasifik_2': 'hidden field', 'Klasifik_3': 'hidden field', 'Klasifik_4': 'hidden field', 'Klasifik_5': 'inline label - visible with data', });
lyr_KELURAHANMANYARSABRANGAN_6.set('fieldLabels', {'FID_Batas_': 'hidden field', 'WADMKD': 'hidden field', 'UP': 'inline label - always visible', 'RW': 'inline label - always visible', });
lyr_DAERAHRAWANGENANGAN_7.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'hidden field', });
lyr_DRAINASE_8.set('fieldLabels', {'FID_Rencan': 'no label', 'FID_': 'no label', 'Layer': 'no label', 'FID_Batas_': 'no label', 'UP': 'no label', 'Luas_Ha': 'no label', });
lyr_DRAINASE_RDTR_9.set('fieldLabels', {'FID_Rencan': 'no label', 'FID_': 'no label', 'Layer': 'inline label - always visible', 'FID_Batas_': 'no label', 'UP': 'no label', 'Luas_Ha': 'no label', });
lyr_JaringanDrainase_10.set('fieldLabels', {'FID_Rencan': 'hidden field', 'FID_': 'hidden field', 'Layer': 'inline label - always visible', 'FID_Batas_': 'hidden field', 'UP': 'hidden field', 'Luas_Ha': 'hidden field', });
lyr_JARINGANJALAN_11.set('fieldLabels', {'Status': 'inline label - always visible', 'Nama': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Panjang': 'hidden field', 'UP': 'hidden field', });
lyr_JANGKAUANTITIKRAWANGENANGAN_12.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_13.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'hidden field', 'Radius': 'inline label - always visible', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TITIKRAWANGENANGAN_14.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Foto': 'inline label - always visible', 'DIAGRAM GA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', });
lyr_TITIKDRAINASEBERMASALAH_15.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Radius': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'DIAGRAM': 'inline label - always visible', });
lyr_KANTORKELURAHAN_16.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_KANTORKELURAHAN_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});