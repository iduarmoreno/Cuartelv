var wms_layers = [];

        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}.png?key=cb1_3o17_1_22ce94d10e25c725ed31e325'
            })
        });

        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({
            'title': 'Dark Matter [no labels]',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png?key=cb1_3o17_1_22ce94d10e25c725ed31e325'
            })
        });

        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png?key=cb1_3o17_1_22ce94d10e25c725ed31e325'
            })
        });
