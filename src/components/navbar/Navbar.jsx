import './Navbar.css'
function Navbar({userLenght}) {
    return(
        <div className="navbar">
            <div className="navbar-container container">
                <h1 className='navbar-logo'>CUser</h1>
                <h3 className='navbar-counter'>
                    {userLenght > 0 ? "Usr-lar bor" + userLenght : "No User :("}
                </h3>
            </div>
        </div>
    )
}
export default Navbar