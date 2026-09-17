var wms_layers = [];





        var lyr_Positronnolabels_0 = new ol.layer.Tile({

            'title': 'Positron [no labels]',

            'opacity': 1.000000,

            

            

            source: new ol.source.XYZ({

            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',

                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'

            })

        });



        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({

            'title': 'Dark Matter [no labels]',

            'opacity': 1.000000,

            

            

            source: new ol.source.XYZ({

            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',

                url: 'http://a.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png'

            })

        });



        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({

            'title': 'Voyager [no labels] (retina)',

            'opacity': 1.000000,

            

            

            source: new ol.source.XYZ({

            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',

                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'

            })

        });

var format_Reserva_Equipamientos_3 = new ol.format.GeoJSON();

var features_Reserva_Equipamientos_3 = format_Reserva_Equipamientos_3.readFeatures(json_Reserva_Equipamientos_3, 

            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});

var jsonSource_Reserva_Equipamientos_3 = new ol.source.Vector({

    attributions: ' ',

});

jsonSource_Reserva_Equipamientos_3.addFeatures(features_Reserva_Equipamientos_3);

var lyr_Reserva_Equipamientos_3 = new ol.layer.Vector({

                declutter: false,

                source:jsonSource_Reserva_Equipamientos_3, 

                style: style_Reserva_Equipamientos_3,

                popuplayertitle: 'Reserva_Equipamientos',

                interactive: false,

                title: '<img src="styles/legend/Reserva_Equipamientos_3.png" /> Reserva_Equipamientos'

            });

var format_LocalidadesMoreno_4 = new ol.format.GeoJSON();

var features_LocalidadesMoreno_4 = format_LocalidadesMoreno_4.readFeatures(json_LocalidadesMoreno_4, 

            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});

var jsonSource_LocalidadesMoreno_4 = new ol.source.Vector({

    attributions: ' ',
