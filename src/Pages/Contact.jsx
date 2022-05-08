import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import React, {useState} from 'react'
import Circle from '../Components/Circle'

const Contact = () => {

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }



  return (
    <div className='contact'>
        <div className="contactLeft">
            <h1 className="leftTitle">Contact Us</h1>
            <span className="leftText">
                Need to get in touch with us ? either send us an email or contact us through social media below.
            </span>
            <div className="leftSocialsContainer">
                <Facebook className='icon' fontSize='large'/>
                <Twitter className='icon' fontSize='large'/>
                <Instagram className='icon' fontSize='large'/>
                <YouTube className='icon' fontSize='large'/>
            </div>
        </div>
        <div className="contactRight">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Full Name' onChange={(e)=>setFullName(e.target.value)}  />
                <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                <textarea cols="30" rows="10" placeholder='What can we help you with ?' onChange={(e)=>setMessage(e.target.value)}  ></textarea>
                <button className="primaryBtn">Submit</button>
            </form>
        </div>

        <Circle right="-250px" top="-250px" bgColor="green"/>
        <Circle left="-250px" bottom="-300px" bgColor="red"/>
        <Circle left="-250px" top="-250px" bgColor="yellow"/>
        <Circle right="-250px" bottom="-300px" bgColor="blue"/>
    </div>
  )
}

export default Contact
