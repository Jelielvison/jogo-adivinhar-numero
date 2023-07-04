var express = require("express")
var cors = require("cors")

var produtos = [{
    id: 1,
    description: "Pequena descricao",
    price: 5.44,
    active: true,
    unit: 55
},
{
    id: 5,
    description: "banana",
    price: 5.44,
    active: true,
    unit: 55
}]
var aplicativo =  express()

aplicativo.use(cors())

aplicativo.get("/", function(req, res){

    res.json({
        mensagem: "eu sou um json"
    })
})

aplicativo.get("/produtos", function(req, res){

    res.json(produtos)
})

aplicativo.get("/produtos/:id", function(req, res){
    var produto = produtos.find(function(item){
        return item.id == req.params.id
    })
    if(produto) {
        res.json(produto)
    }else {
        res.json({mensagem: "Produto não existe"})
    }
    
})

aplicativo.listen("80", function(){
    console.log("Ergueu a app ", 80)
})