const express = require ('express');
const mongoose = require ('mongoose');
const routes = require ('./routes');
const path = require ('path');

const cors = require ('cors');

const app = express();

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete)
//req.body = Acessar corpo da requisição (criação, edição)   

mongoose.connect('mongodb+srv://junior:vestibulinho97@cluster0-dlpmx.mongodb.net/Aircnc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
})


app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..', 'uploads' )));
app.use(routes);
 


app.listen(3333);