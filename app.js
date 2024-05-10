const express = require('express');
const app = express();

const port = 3000;
const bodyParser = require('body-parser');

//configurar o ejs como mecanismo de visualização

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//configurar o estilo que está na public
app.use(express.static('public'));

//configurar bodyParser do formulario
app.use(bodyParser.urlencoded({extended: true}));

var produtosCategoria = [];
//simular banco de dados
const produtos = [
    {
        id: 1,
        nome: 'Relogio',
        preco: 89.2,
        categoria: "acessorio",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDn746F34YnPuQsu0B-I7d9Nr0SD4wlOytIg&s"
    },
    {
        id: 2,
        nome: 'Tiara',
        preco: 3.45,
        categoria: "acessorio",
        imagem: "https://m.media-amazon.com/images/I/61VleMY+AnL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        nome: 'Camiseta slayer',
        preco: 1,
        categoria: "roupa",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgQ8vYnzfpUbmsfrzRoOtweaAOTsYixObLO1OElX-uZQ&s"
    },
    {
        id: 4,
        nome: "Pulseira de couro",
        preco: 12.99,
        categoria: "acessorio",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bvfVb6nwmGCHi04ilcZH0tr7I9rsiy-iHRFGUhhorA&s"
    },
    {
        id: 5,
        nome: "Boné de baseball",
        preco: 19.99,
        categoria: "acessorio",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ0DkhvbBN_eqoTAmfTYDlu8qgO2aMSZWCJnwiK-Kmqg&s"
    },
    {
        id: 6,
        nome: "Jaqueta de couro",
        preco: 129.99,
        categoria: "roupa",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BRm22Viod3urNYRe37rDz7Ap--3ZLLZTCJ5nFSXeRQ&s"
    },
    {
        id: 7,
        nome: "Colar de Pérolas",
        preco: 49.99,
        categoria: "jóia",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2ctxas0KFgzM0Cr9x97jt3h5HbfLI_B0yTCj5UL9hA&s"
    },
    {
        id: 8,
        nome: "Fones de Ouvido Bluetooth",
        preco: 79.99,
        categoria: "eletronicos",
        imagem: "https://www.wb.com.br/upload/produto/imagem/fone-de-ouvido-bluetooth-wb-pods-preto.webp"
    },
    {
        id: 9,
        nome: "Pizza de Pepperoni",
        preco: 12.99,
        categoria: "comida",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNpuaSe3xHUQ7fHIiJMLGVchw_cj6j5Lrjysmcs1DFw&s"
    }
]; 

//rota principal
app.get('/',(req, res) => {
    res.render('index', {produtos})
});

//Rota para exibir uma ppostagem individual
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const produto = produtos.find(produto => produto.id === parseInt(id));
    
    res.render('products', {produto});
});

//Rota para adicionar postagem
app.get('/filtro', (req, res) => {
    res.render('filtro', {produtosCategoria});
});

app.post('/filtro', (req, res) => {


    
    var { categoria } = req.body;
    console.log(categoria);
    produtosCategoria = produtos.filter((produto) => produto.categoria === categoria);
    console.log(produtosCategoria)
    res.redirect('/filtro');
});

app.listen(port, () => {
    console.log('server rodando');
});