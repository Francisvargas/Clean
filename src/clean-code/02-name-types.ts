(() => {

    // arreglo de temperaturas celsius
    const celsiusTemperatures = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const users = [
        { id: 1, email: 'fernando@google.com' },
        { id: 2, email: 'juan@google.com' },
        { id: 3, email: 'melissa@google.com' }
    ];

    // Listado de emails de los usuarios
    const userEmails = users.map( u => u.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasNoItems = true;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();

    // Tiempo al final
    const elapsedTime = new Date().getTime() - startTime;

})();




