var wms_layers = [];

        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Gris Claro [Sin Etiquetas]',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkMatternolabels_1 = new ol.layer.Tile({
            'title': 'Gris Oscuro [Sin Etiquetas]',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png'
            })
        });

        // La tercera capa la dejamos igual a la primera para evitar errores en tu lista de capas
        var lyr_Voyagernolabelsretina_2 = new ol.layer.Tile({
            'title': 'Blanco [Sin Etiquetas]',
            'opacity': 1.000000,
            source: new ol.source.XYZ({
            attributions: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png'
            })
        });
