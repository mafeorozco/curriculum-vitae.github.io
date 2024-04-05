import PropTypes from 'prop-types';
import "../../styles/title/style.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const Title = ({titulo, icono}) => {
    return ( 
        <div className='title'>
            <div className='div-icon'>
                <i className={`${icono}`}></i>
            </div>
            <h1>{titulo}</h1>
        </div>
     );
}

Title.propTypes={
    titulo:PropTypes.string,
    icono:PropTypes.string,
}
 
export default Title;