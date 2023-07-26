import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './index.css'

const Contentpage=()=>{
    return(
        <div>
        <div className='content-container'>
            <div className='left-content-container'>
                <h1>Take The Right Step For Your Business.</h1>
                <p style={{textAlign:'left'}}>TAx Associate is a leading consultancy firm that provides simple, effective company registration, and accounting solutions to enterprises in Ireland. </p>
                <button type="button" className='get-started-btn'>Get Started</button>
            </div>
            <form className='form-container'>
                <h3>Apply For Tax Rebate Now</h3>
                <label htmlFor="name">Name</label><br/>
                <input id="name" value=""/>
                <label htmlFor="email">Email ID</label><br/>
                <input id="email" value=""/>
                <label htmlFor="pps">PPS Number</label><br/>
                <input id="pps" value=""/>
                <div>
                <input id="tnc" type='checkbox'/>
                <label htmlFor='tnc'>I have read & agreed to the authorisation and the <a href='#tnc' target='_blank' rel='referrer' style={{color:'blue'}}>terms & conditions</a>.</label>
                </div>
                <button type='button' className='apply-btn'>Apply <BsFillArrowRightCircleFill className='apply-icon'/></button>
            </form>
        </div>
        <div className='cards-cotnainer'>
            <div className='card-item'>
                <p className='card-icon'>
                    <img src="https://i.imgur.com/n9DAj7w.png" alt="card1-img" className='card-img'/>
                    </p>
                <h4>Start Up Services</h4>
                <p>We support entrepreneurs to build their businesses by providing them with the ideal company formation legal services.</p>
            </div>
            <div className='card-item'>
                <p className='card-icon'>
                    <img src="https://i.imgur.com/dHI4cA7.png" alt="card2-img" className='card-img'/>
                </p>
           <h4> Finance & Accounting</h4>
            <p>We provide our clients with the best in the market, accounting, and financial services to help accelerate their business growth.</p>
            </div>
            <div className='card-item'>
                <p className='card-icon'>
                   <img src="https://i.imgur.com/LIqKehI.png" alt='card3-img' className='card-img'/>
                </p>
                <h4>Risk & Assurance</h4>
                <p>We offer risk and assurance services for new as well as established businesses to help them reduce risks and overcome any disruption.</p>
            </div>
           
    </div>
    </div>
    )
}
export default Contentpage