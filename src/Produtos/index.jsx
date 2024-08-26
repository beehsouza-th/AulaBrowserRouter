import { useState } from "react";
import '../globals.css';
import ListarProdutos from "../Components/ListarProdutos";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Produtos(){
    const [listaProdutos, setProdutos] = useState([
      {
        id: 1, 
        nome:'A Incendiária',
        preco: " R$119,99",
        imagem:'https://th.bing.com/th?id=OPHS.S2gqHFnoTK7Qjw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1' ,
        descrição:'A Incendiária Coleção Biblioteca Stephen King.',
        categorias:["Terror" ," fantasia"]
    },

    {
        id: 2, 
        nome: "Carrie", 
        preco: "R$14,62",
        imagem:'https://th.bing.com/th?id=OPHS.pFQvaC%2b6O6ybPg474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição: 'O mundo, embora iluminado por lâmpadas fluorescentes, incandescentes e néon, ainda está cheio de cantos e esconderijos e buracos escuros e sombrios.― Stephen King, em posfácio. ',
        categorias:["Terror" ," fantasia"]
    },

    {
        id: 3, 
        nome:"O cemitério", 
        preco: "R$84,99",
        imagem:'https://th.bing.com/th?id=OPHS.PCrmaaOc%2bz4BhQ474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:["Terror" ," fantasia"]
        
    },
    {
        id: 4, 
        nome:" Doutor Sono", 
        preco: "R$105,97",
        imagem:'https://th.bing.com/th?id=OPHS.T6fgbGx9JAHEAw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Mais de trinta anos depois, Stephen King revela a seus leitores o que aconteceu a Danny Torrance.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 5, 
        nome:" A Zona Morta", 
        preco: "R$35,99",
        imagem:'https://th.bing.com/th?id=OPHS.%2f8Q6StNcQytBLw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'O passado, o presente, o futuro - nada está fora de alcance.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 6, 
        nome:"O Iluminado", 
        preco: "R$37,99",
        imagem:'https://th.bing.com/th?id=OPHS.E771Dn6ZV%2bsM7w474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:["Terror" ," fantasia"]
    },
    {
        id: 7, 
        nome:" A Dança da Morte", 
        preco: "R$78,00",
        imagem:'https://th.bing.com/th?id=OPHS.KRptF8Oanv0GWQ474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'O clássico que deu origem à série The Stand.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 8, 
        nome:"A hora do Lobsomen", 
        preco: "R$91,99",
        imagem: 'https://th.bing.com/th?id=OPHS.68knIqN1nnBVEw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Quem será o próximo? Quando a lua cresce no céu, um terror paralisante toma os moradores da cidade. ',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 9, 
        nome:" Misery", 
        preco: "R$40,90",
        imagem:'https://th.bing.com/th?id=OPHS.8lqsbgMtizYI0Q474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Misery: Louca obsessão, de King, Stephen.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 10, 
        nome:" Mr.Mercedes", 
        preco: "R$209,67",
        imagem:'https://th.bing.com/th?id=OPHS.XsSYzPYRCdY8Fw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Mr. Mercedes, de King, Stephen. Trilogia Bill Hodges.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 11, 
        nome:" Elevation", 
        preco: "R$74,00",
        imagem:'https://th.bing.com/th?id=OPHS.uo%2fe3qE2VBGTLw474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição: 'elevation de  King, Stephen King.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 12, 
        nome:" Sombra das Noites", 
        preco: "R$79,99",
        imagem:'https://th.bing.com/th?id=OPHS.5pmFn4i9yQmbgQ474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição:'Stephen King reúne aqui vinte de suas mais inquietantes obras curtas.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 13, 
        nome:"O mistério de Sttaford", 
        preco: "R$38,99",
        imagem:'https://th.bing.com/th?id=OPHS.2gcVXr6qjIGVow474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição:'Como passatempo, escolhem algo inesperado: uma sessão espírita.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 14, 
        nome:"Morte na Mesopotâmia", 
        preco: "R$40,90",
        imagem:'https://th.bing.com/th?id=OPHS.MWOBnRpKzanuEA474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Morte na Mesopotâmia, de Christie, Agatha. Agatha Christie.',
        categorias:["Terror" ," fantasia"]
    },
    {
        id: 15, 
        nome:" Os Crimes do Monograma", 
        preco: "R$32,99",
        imagem:'https://th.bing.com/th?id=OPHS.owOnivHgimhr%2fw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:' Os Crimes do Monogramade Christie, Agatha. Agatha Christie.',
        categorias:["Terror" ," fantasia"]
    },
    ]);
    
    return(
    <>
    <Header/>
   
    <ListarProdutos Produtos={listaProdutos}/>
    <Footer/>
    </>
    

        
     
    );
}