const express = require('express');
const app = express();
const port = 8099;
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi primera aplicación web. Espero que te guste');
})

app.get('/saludo',(req,res)=>{
    const nombre = req.query.nombre || 'invitado';
    const contrasena = req.query.contrasena || '1234'
    res.send('Hola ' + nombre + ' ' + contrasena);
})

app.get('/precios',(req,res)=>{
    res.send('<h1>Precios</h1><hr><p>Ordenador:1000€</p>');
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
})
app.listen(port,
    ()=>console.log(`Servidor 
        escuchando por el puerto ${port}`));