import {useState} from 'react';
import Header from "../Components/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";   
import ListarProdutos from '../Components/ListarProdutos';   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

    export default function Home(){

    const [listaProdutos, setProdutos] = useState([
        {
            id: 2, 
            nome: "Carrie", 
            preco: "14,62",
            imagem:'https://th.bing.com/th?id=OPHS.pFQvaC%2b6O6ybPg474C474&w=248&h=248&c=17&o=5&dpr=1.3&pid=21.1',
            descrição: ' Carrie, a estranha é um dos maiores clássicos de terror da literatura contemporânea e um dos livros mais aclamados de Stephen King.',
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
            id: 8, 
            nome:"A hora do Lobsomen", 
            preco: "91,99",
            imagem:'https://th.bing.com/th?id=OPHS.68knIqN1nnBVEw474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
            descrição:'Quem será o próximo? Quando a lua cresce no céu, um terror paralisante toma os moradores da cidade.',
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
            id: 9, 
            nome:" Misery", 
            preco: "40,90",
            imagem:'https://th.bing.com/th?id=OPHS.8lqsbgMtizYI0Q474C474&w=248&h=248&o=5&dpr=1.3&pid=21.1',
            descrição:'Misery: Louca obsessão, de King, Stephen.',
            categorias:['Home',' Produtos']
        }
   
    ]);

    return(
        <>
        <Header/>
        <div class='carousel-principal'>
        <Carousel 
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}

                dynamicHeight>
                <div id='carousel-img'>
                    <img src='https://image.tmdb.org/t/p/original/9dvbF3d97BpRAqZKNs49VDzJhqk.jpg' alt="Slide 1" />
                </div>

                <div id='carousel-img'>
                    <img src='https://is2-ssl.mzstatic.com/image/thumb/meo0_70GLoWlT8TI4p5esA/1200x675.jpg' alt="Slide 2" />
                </div>
                  
                <div id='carousel-img'>
                    <img src='https://loggado.com/wp-content/uploads/2017/03/it.jpg'alt="Slide 3" />
                </div>
      
            </Carousel>
            <ListarProdutos Produtos ={listaProdutos}  />
        </div>

        

        </>
    );
    }