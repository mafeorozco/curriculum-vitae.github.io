import PropTypes from 'prop-types';
import "../../styles/cards/style.css"
import "../../styles/templates/style.css"

const Cards = ({style,children,col,isTemplate}) => {
    return ( 
        <div className={`${col}`}>
            <div className={isTemplate ? `${style}` :`cards ${style}`}>
                {children}
            </div>
        </div>
     );
}
 
Cards.propTypes={
    style:PropTypes.string,
    children:PropTypes.node.isRequired,
    col:PropTypes.string,
    isTemplate:PropTypes.bool
}

export default Cards;