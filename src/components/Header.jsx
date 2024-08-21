import {Link,} from "react-router-dom";

export default function Header(){
        return(
            <>
            <header>
                <div>
                <h1>Targaryen Bookstore</h1>
                </div>
                  <nav>
                
                    <Link to="/">
                        <h2 class='header-link'>Home</h2>
                    </Link>

                    <Link to="/oferta">
                        <h2 class='header-link'>Oferta</h2>
                    </Link>

                    <Link to="/produtos">
                        <h2 class='header-link'>Produtos</h2>
                    </Link>
                
            </nav>
                </header>
              
            </>
        )
    }