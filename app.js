const express = require('express');
const app = express();
const port = 8099;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi primera aplicación web. Espero que te guste');
})

app.get('/saludo',(req,res)=>{
    res.send('Hola');
})

app.listen(port,
    ()=>console.log(`Servidor 
        escuchando por el puerto ${port}`));