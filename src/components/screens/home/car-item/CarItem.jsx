import styles from './../Home.module.css'
import { Link } from 'react-router-dom';

function CarItem({car}){
    return(
        <div className={styles.item} key={car.id}>
            <div className={styles.image} style={{backgroundImage:`url(${car.image})`}}></div>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{car.price}</p>
                <Link to={`/car/${car.id}`} className='btn'>Узнать больше</Link>
            </div>
        </div>
    )
}

export default CarItem;