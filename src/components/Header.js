import './Header.css'
import tf from './image/tf.png'



function Header(){
    return(
        <header className='header'>
            <img src={tf} alt="tf" className='header-img'></img>
            <h2 className='header-title'>Aravs Meme Generator</h2>
            <h4  className='header-project'>React Project </h4>
        </header>
        
    )
}

export default Header;