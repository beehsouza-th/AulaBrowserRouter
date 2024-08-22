
export default function ListarProdutos({Produtos, categorias, Nome}){


    return(
        <>
    <div id="item">
        <h1>{Nome}</h1>

        {
            Produtos.map((objeto) =>
                <div key= {objeto.id}>
                    <img  src = {objeto.imagem}/>
                    <h2>{objeto.nome}</h2>
                        <h3>{objeto.preco}</h3>
                        <p>{objeto.descrição}</p>

                     

                    

                </div>
        
        )
       }   

    </div>
    </>
    )

}