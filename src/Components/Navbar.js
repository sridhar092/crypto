import './Navbar.css'

const Navbar = () => {
return (
    <>
    <nav className='navbar'>
    <img alt='logo' className='logo' src={require('../Icons/logo.png')}></img>
            <span className='text'>
             NeoFi</span>
        <ul >
            <li >Trade</li>
            <li >Earn</li>
            <li >Report</li>
            <li>About</li>
        </ul>
        <button className='wallet'>
            <span className='walletText'>Connect Wallet</span>
         </button>
    </nav>
    </>
)
}

export default Navbar;