import express from "express";

import "./config/dbConfig.js "


//instancia del servidor de express
const app = express();
//configuraciones del servidor
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// Ejecucion del servidor
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
server.on('error', error => console.log(`Error in server ${error}`));



