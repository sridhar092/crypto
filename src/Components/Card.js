import './Card.css'

const Card = (props) => {
    return (
        <>
        
        <div className='card'>
            <img alt='crypto'src= {`${props.img}`} className='image'></img>
            {props.children}
        </div>
        </>
    )
}
export default Card;
/* */