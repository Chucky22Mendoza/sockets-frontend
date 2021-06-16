let map;

let myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    }
];

const initMonitoreo = async () => {
    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 13,
        center: {lat: 19.2474521, lng: -103.7405024},
        styles: myStyles 
    });
}

const renderPointUnidad = (position, title) => {
    new google.maps.Marker({
        position,
        map,
        draggable: false,
        icon: '/sockets/pointer_unidad.png',
        title,
        animation: google.maps.Animation.DROP
    });
}

const renderPointsMap = (data) => {
    let contador = 0;
    for (const item in data) {
        let obj = data[item];
        //let title = getUnidadCoords(res.datos[item].fk_id_activo);
        let jsonCoords = JSON.parse(obj.latLng);
        let position = new google.maps.LatLng(jsonCoords[0], jsonCoords[1]);
        renderPointUnidad(position, `coords${contador}`);
        contador++;
    }
}
