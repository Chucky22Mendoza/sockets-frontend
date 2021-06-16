const socket = io.connect('http://localhost:3005', {
    'forceNew': true
});

socket.on('message', (data) => {
    console.log(data);
});

socket.on('initCoords', (data) => {
    renderPointsMap(JSON.parse(data));
})

// socket.on('newUserCoordinates', (coords) => {
//     console.log(coords);
// }); 