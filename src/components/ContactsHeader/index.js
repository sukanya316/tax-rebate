import {FaPhoneSquareAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {RiTimer2Fill} from 'react-icons/ri'
import {BsFacebook} from 'react-icons/bs'
import {TiSocialTwitterCircular,TiSocialLinkedin} from 'react-icons/ti'
import './index.css'

const ContactsHeader=()=>{
    return(
        <div className='contacts-header-container'>
           <div className='display-row' style={{margin:'0px'}}>
            <p> <FaPhoneSquareAlt className='social-icon'/> <span>087 245 0049/ 01 8137811</span></p><hr/>
            <p><MdEmail className='social-icon'/>contact@sample.ie</p><hr/>
            <p><RiTimer2Fill className='social-icon'/><span>Mon-Thu: 8:00 am to 9:00 pm</span></p>
           </div>
           <div>
            <a href='https://en-gb.facebook.com/' target='_blank' rel='noreferrer'><BsFacebook className='facebook-icon'/></a>
            <a href='https://twitter.com/home?lang=en-gb/' target='_blank' rel='noreferrer'><TiSocialTwitterCircular className='twitter-icon'/></a>
            <a href='https://www.linkedin.com/feed/' target='_blank' rel='noreferrer'><TiSocialLinkedin className='facebook-icon'/></a>
           </div>
        </div>
    )
}
export default ContactsHeader