import './index.css'

const Header=()=>{
    return(
        <div className='header-container'>
            <img src="https://i.imgur.com/0ZBZ5hz.png" alt="file" className='file-img'/>
            <ul className='header-items-container'>
                <li>Home</li>
                <li>Services</li>
                <li>About Us</li>
                <li>Order Company</li>
                <li>Apply for Tax Rebate</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header