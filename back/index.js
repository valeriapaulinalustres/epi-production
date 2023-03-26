import express from 'express'


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas
app.use('/api/users', (req,res)=>{
    res.json({user: 'valeria'})
})



app.listen('8083', () => {
    console.log('Servidor escuchando en el puerto 8083');
})


