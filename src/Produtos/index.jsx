import { useState } from "react";
import '../globals.css';
import ListarProdutos from "../Components/ListarProdutos";

export default function Produtos(){
    const [listaProdutos, setProdutos] = useState([
      {
        id: 1, 
        nome:'A Incendiária',
        preco: " R$119,99",
        imagem:'https://th.bing.com/th?id=OPHS.S2gqHFnoTK7Qjw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1' ,
        descrição:'A Incendiária Coleção Biblioteca Stephen King',
        categorias:['Home',' Produtos']
    },

    {
        id: 2, 
        nome: "Carrie", 
        preco: "14,62",
        imagem:'https://th.bing.com/th?id=OPHS.pFQvaC%2b6O6ybPg474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição: ' Carrie, a estranha é um dos maiores clássicos de terror da literatura contemporânea e um dos livros mais aclamados de Stephen King.',
        categorias:['Home',' Produtos']
    },

    {
        id: 3, 
        nome:"O cemitério", 
        preco: "84,99",
        imagem:'https://th.bing.com/th?id=OPHS.PCrmaaOc%2bz4BhQ474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Nesse clássico do gênero terror, os mortos podem até voltar... mas não voltam iguais.',
        categorias:['Home',' Produtos']
        
    },
    {
        id: 4, 
        nome:" Doutor Sono", 
        preco: "105,97",
        imagem:'https://th.bing.com/th?id=OPHS.T6fgbGx9JAHEAw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Mais de trinta anos depois, Stephen King revela a seus leitores o que aconteceu a Danny Torrance',
        categorias:['Home',' Produtos']
    },
    {
        id: 5, 
        nome:" A Zona Morta", 
        preco: "35,99",
        imagem:'https://th.bing.com/th?id=OPHS.%2f8Q6StNcQytBLw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'O passado, o presente, o futuro - nada está fora de alcance',
        categorias:['Home',' Produtos']
    },
    {
        id: 6, 
        nome:"O Iluminado", 
        preco: "37,99",
        imagem:'https://th.bing.com/th?id=OPHS.E771Dn6ZV%2bsM7w474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Um menino e o desejo assassino de poderosas forças malignas',
        categorias:['Home',' Produtos']
    },
    {
        id: 7, 
        nome:" A Dança da Morte", 
        preco: "78,00",
        imagem:'https://th.bing.com/th?id=OPHS.KRptF8Oanv0GWQ474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'O clássico que deu origem à série The Stand',
        categorias:['Home',' Produtos']
    },
    {
        id: 8, 
        nome:"A hora do Lobsomen", 
        preco: "91,99",
        imagem: 'https://th.bing.com/th?id=OPHS.68knIqN1nnBVEw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Quem será o próximo? Quando a lua cresce no céu, um terror paralisante toma os moradores da cidade. ',
        categorias:['Home',' Produtos']
    },
    {
        id: 9, 
        nome:" Misery", 
        preco: "40,90",
        imagem:'https://th.bing.com/th?id=OPHS.8lqsbgMtizYI0Q474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Misery: Louca obsessão, de King, Stephen.',
        categorias:['Home',' Produtos']
    },
    {
        id: 10, 
        nome:" Mr.Mercedes", 
        preco: "209,,67",
        imagem:'https://th.bing.com/th?id=OPHS.XsSYzPYRCdY8Fw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Mr. Mercedes, de King, Stephen. Trilogia Bill Hodges.',
        categorias:['Home',' Produtos']
    },
    {
        id: 11, 
        nome:" Elevation", 
        preco: "74,00",
        imagem:'https://th.bing.com/th?id=OPHS.uo%2fe3qE2VBGTLw474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição: 'elevation de  King, Stephen King',
        categorias:['Home',' Produtos']
    },
    {
        id: 12, 
        nome:" Sombra das Noites", 
        preco: "79,99",
        imagem:'https://th.bing.com/th?id=OPHS.5pmFn4i9yQmbgQ474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição:'Stephen King reúne aqui vinte de suas mais inquietantes obras curtas',
        categorias:['Home',' Produtos']
    },
    {
        id: 13, 
        nome:"O mistério de Sttaford", 
        preco: "38,99",
        imagem:'https://th.bing.com/th?id=OPHS.2gcVXr6qjIGVow474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
        descrição:'Como passatempo, escolhem algo inesperado: uma sessão espírita',
        categorias:['Home',' Produtos']
    },
    {
        id: 14, 
        nome:"Morte na Mesopotâmia", 
        preco: "40,90",
        imagem:'https://th.bing.com/th?id=OPHS.MWOBnRpKzanuEA474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:'Morte na Mesopotâmia, de Christie, Agatha. Agatha Christie',
        categorias:['Home',' Produtos']
    },
    {
        id: 15, 
        nome:" Os Crimes do Monograma", 
        preco: "32,99",
        imagem:'https://th.bing.com/th?id=OPHS.owOnivHgimhr%2fw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
        descrição:' Os Crimes do Monogramade Christie, Agatha. Agatha Christie',
        categorias:['Home',' Produtos']
    },
    ]);
    
    return(
    <>
    <ListarProdutos Produtos={listaProdutos} Nome={''}/>


    </>

        
     
    );
}