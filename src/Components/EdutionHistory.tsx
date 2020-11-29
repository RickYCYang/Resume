import React from 'react'
import MaterialIcon from '@material/react-material-icon';
import Card from "@material/react-card";
import chiaoTungLogo from '../images/chiao_tung_logo.png';
import tamkangLogo from '../images/tamkang_logo.png';


const chaiotungDetail = `
Thesis: Classify social media users into spammer or normal user by 
feeding user's historical posts and personal profile into machine learning model, 
implemented by Java and R.
`;

const EdutionHistory = () => {
    return(
        <Card className='content_card'>
            <div className='content_block'>
                <div className='block_title'>
                    <MaterialIcon icon="school" className="material-icons-title"/>
                    <a>Education</a>
                </div>
                <hr className='separate_line'/>
                <div className='content_sub_block'>
                    <div className='block_sub_title'>
                        <img src={chiaoTungLogo} />
                        <a>National Chiao Tung Unversity - Institute of Information Management</a>
                    </div>
                    <div className='block_sub_title2'>
                        <a className='theme_item'>Master Degree</a>
                    </div>
                    <div className='block_sub_title2'>
                        <MaterialIcon icon="date_range" className="material-icons-title"/>
                        <a className='theme_item'>Sep. 2014 - Jul. 2016</a>
                    </div>
                    <div className='block_detail'>
                        <a>{chaiotungDetail}</a>
                    </div>
                </div>
                <hr className='separate_line'/>
                <div className='content_sub_block'>
                    <div className='block_sub_title'>
                        <img src={tamkangLogo} />
                        <a>Tamkang University - Department of Information Management</a>
                    </div>
                    <div className='block_sub_title2'>
                        <a className='theme_item'>Bachelor Degree</a>
                    </div>
                    <div className='block_sub_title2'>
                        <MaterialIcon icon="date_range" className="material-icons-title"/>
                        <a className='theme_item'>Sep. 2009 - Jul. 2013</a>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default EdutionHistory;