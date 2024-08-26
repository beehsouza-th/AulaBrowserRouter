import { useState } from "react";

export default function ListarProdutos({Produtos}){

    const [listaPedidos, setlistaPedidos] = useState ([]); 
 const adicionarItemPedidos = (objeto) =>{
    setlistaPedidos([...listaPedidos,objeto]);
    }
  
      return(
        <>
     <div class='container-produtos'>
      

        {
            Produtos.map((objeto) =>
                <div class='item-produtos' key= {objeto.id}>
                    <img src= {objeto.imagem}/>
                    <h2>{objeto.nome}</h2>
                    <h3>{objeto.preco}</h3>
                    <p>{objeto.descrição}</p>
                    <h4>{objeto.categorias}</h4>
                    <button onClick={()=>adicionarItemPedidos(objeto)}>Comprar</button>
                </div>
        
            )
        }   


     </div>
      </>
    )

}