import './index.css'

const Header=()=>{
    return(
        <div className='header-container'>
            <img src="https://i.imgur.com/0ZBZ5hz.png" alt="file" className='file-img'/>
            <ul className='header-items-container'>
                <li className="header-nav-item">Home</li>
                <li className="header-nav-item">Services</li>
                <li className="header-nav-item">About Us</li>
                <li className="header-nav-item">Order Company</li>
                <li className="header-nav-item">Apply for Tax Rebate</li>
                <li className="header-nav-item">Blog</li>
                <li className="header-nav-item">Contact</li>
            </ul>
        </div>
    )
}
export default Header
