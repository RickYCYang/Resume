import React from 'react'
import MaterialIcon from '@material/react-material-icon';

const Contact = () => {
    return(
        <div className="left_bar_block">
            <div style={{width: '100%'}}>
                <div className='block_title'>
                    <MaterialIcon icon="person" className="material-icons-title"/>
                    <a>Contact Info.</a>
                </div>
                <ul>
                    <li className='horizontal_li'>
                        <MaterialIcon icon="work" className="material-icons"/>
                        <a>System Engineer (4.5Y)</a>
                    </li>
                    <li className='horizontal_li'>
                        <MaterialIcon role='button' icon="email" className="material-icons"/>
                        <a>Rickyang2910@gmail.com</a>
                    </li>
                    <li className='horizontal_li'>
                        <MaterialIcon icon="phone" className="material-icons"/>
                        <a>0920-692-531 / 0965-875-682</a>
                    </li>
                    <li className='horizontal_li'> 
                        <MaterialIcon icon="home" className="material-icons"/>
                        <a>New Taipei City</a>
                    </li>
                </ul>
            </div>
            <hr className='separate_line'/>
        </div>
    )
}

export default Contact