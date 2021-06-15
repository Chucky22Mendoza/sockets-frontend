const socket = io.connect('http://localhost:3005', {
    'forceNew': true
});

socket.on('newUserCoordinates', (coords) => {
    console.log(coords);
}); 