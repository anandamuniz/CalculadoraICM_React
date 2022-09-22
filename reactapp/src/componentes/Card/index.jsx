import './styles.css';

export function Card(props) {
    
    return(
        <div className='card'>
            <small>Seu ICM:</small>
            <strong>{props.medidas}</strong>
        </div>
    )
}