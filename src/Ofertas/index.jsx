import { useState } from "react";
import ListarProdutos from "../Components/ListarProdutos";
export default function Oferta(){
    const [listaProdutos, setProdutos] = useState([
        {
          id: 1, 
          nome:'A Incendiária',
          preco: "119,99",
          imagem:'https://th.bing.com/th?id=OPHS.S2gqHFnoTK7Qjw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1' ,
          descrição:'A Incendiária Coleção Biblioteca Stephen King',
          categorias:['Home',' Produtos']
      },
  
      {
          id: 2, 
          nome: "Carrie", 
          preco: "14,62",
          imagem:'https://th.bing.com/th?id=OPHS.pFQvaC%2b6O6ybPg474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
          descrição: 'Carrie, de King, Stephen',
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
          nome:" A Torre Negra", 
          preco: "79,99",
          imagem:'https://th.bing.com/th?id=OPHS.M8UIwDd3bViNoQ474C474&w=300&h=300&qlt=20&o=5&dpr=1.3&pid=21.1',
          descrição:'A Torre Negra: A Torre Negra, De King, Stephen. ',
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
      ]);

    return(
        <div>
           <ListarProdutos Produtos={listaProdutos} Nome={''}/>
        </div>
    
      
    );
}