import CardForm from "./CardForm";
import CardVisual from "./CardVisual";
import styles from './Card.module.css'

const Card = () => {
    return ( 
        <div>
            <CardVisual />
            <CardForm />
        </div>
     );
}
 
export default Card;