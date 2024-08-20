import Header from "../Components/Header";
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

    export default function Home(){
    return(
        <>
        <Header/>
        <p> Minha Home</p>
        <Carousel
            infiniteloop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            >
                <div>
                    <img src=</>
                </div>
                <div>
                    <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRxmYioHHk4hvpG0wE-VmgWV9ZXxLLmMXHkzplRjSI16QA9UzRT4eP45bQnRrDIgIXelcs7GjLzJGZ1ywIPc8xV7prrcMVn82frmOAQ1sZE8b3bLGXIQzn_&usqp=CAE'/>
                </div>
                <div>
                    <img src= 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRWpfAnOxQTfr6MANZ3KN_pyOgW6gO4zAMsO0ZLYIVF5O3zyyrGjsWmQvfRpAfPzHlAP4ybgdkrMBH-L6J5_hGjfPOHgnhT9RBdpdTpdLw&usqp=CAE'/>
                </div>







            </Carousel>
        </>
    );
    }