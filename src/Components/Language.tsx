import React from 'react';
import MaterialIcon from '@material/react-material-icon';

const Language = () => {
    return(
        <div className='left_bar_block left_bar_block_last'>
            <div>
                <div className='block_title'>
                    <MaterialIcon icon="language" className="material-icons-title"/>
                    <a>Language</a>
                </div>
                <ul>
                    <li className='horizontal_li'>
                        <MaterialIcon icon="lens" className="material-icons"/>
                        <a>English: Medium (TOEIC 735)</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Language;