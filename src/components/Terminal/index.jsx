import "../../styles/terminal/style.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Terminal = () => {
    return ( 
        <div className="terminal">
            <div className="header">
                    <div className="circulo1"></div>
                    <div className="circulo2"></div>
                    <div className="circulo3"></div>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-1">
                        <ArrowForwardIosIcon/>
                    </div>
                    <div className="col-11 text-terminal">
                        <p><b className="text-yellow">Bienvenidos</b> a mi curriculum vitae online</p> 
                    </div>
                </div>
            </div>
            
            
        </div>
     );
}
 
export default Terminal;