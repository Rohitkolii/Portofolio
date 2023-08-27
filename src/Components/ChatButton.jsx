import './ChatButton.css'
import {BsFillChatLeftFill, BsThreeDotsVertical} from 'react-icons/bs'
import {MdWavingHand, MdKeyboardArrowDown} from 'react-icons/md'
import {IoIosSend} from 'react-icons/io'
import { useState } from 'react'
const ChatButton = () => {

    const [chatbutton, setchatbutton] = useState(false)

    return(
        <>
            <div className='Chat-container'>
                <div onClick={() => setchatbutton(true)} className= { chatbutton ? 'send-button' : "Chat-Button"}>
                    <div className='chaticon-text'>
                        <p>Chat with me <MdWavingHand className='wave-icon' /> </p>
                    </div>

                    <div className='icon-cont'>
                        <BsFillChatLeftFill className='chat-icon' />
                    </div>

                    <div className='send-cont'>
                        <IoIosSend className='send-icon' />
                    </div>
                </div>

                <div>

                </div>
            </div>

            <div className={!chatbutton ? 'hide_chat-card' : 'chat-card'}>
                <div className='inner_chat-card'>
                    <div className='chat-card_heading'>
                        <div>
                            <h1>Hi There</h1>
                        </div>
                        <div>
                            <BsThreeDotsVertical className='chat-card_icon' />
                            <MdKeyboardArrowDown className='chat-card_icon' onClick={() => setchatbutton(false)} />
                        </div>
                    </div>
                    <div className='chat-card-intro'>
                        <div>
                            <p>Welcome to my website. Ask me anything</p>
                        </div>
                        <div>
                            <img src="/images/logo.webp" alt="profile" />
                        </div>
                    </div>
                    <div className='chat-card_para'>
                        <p>We reply immediately</p>
                    </div>
                    <div className='chat-card_input'>
                        {/* <input type="email" placeholder='Enter your email...' />
                        <hr className='chat-cart_hr' /> */}
                        <input type="text" placeholder='Enter your message...' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatButton;