import React from 'react'
import MaterialIcon from '@material/react-material-icon';
import Card from "@material/react-card";
import tsmcLogo from '../images/tsmc_logo.png';
import itriLogo from '../images/itri_logo.png';


const tsmcJobDetailPart1 = `
Provide TSMC internal business side user such as customer demand analysis department 
and capacity allocation department IT support, including multiple of reporting systems,
capacity allocation simulation system, and etc. 
`;
const tsmcJobDetailPart1Highlight = `Got the best performer award in the first season of 2020.`
const tsmcJobDetailPart2 = `
Act as new technique pioneer of department to survey and introduce suitable technique into 
our department, and support colleagues to catch up, for example,
React, Redux, Scss, Node.js, Flutter, and etc.
`;

const itriJobDetail = `
Participated multiple system development in system development department of 
Green Energy Research Labs, such as solar eneger monitor system, environment indices monitor 
system, and etc.
`;

const WorkHistory = () => {
    return(
        <Card className='content_card'>
            <div className='content_block'>
                <div className='block_title'>
                    <MaterialIcon icon="work" className="material-icons-title"/>
                    <a>Work Experience</a>
                </div>
                <hr className='separate_line'/>
                <div className='content_sub_block'>
                    <div className='block_sub_title'>
                        <img src={tsmcLogo} />
                        <a>TSMC 台灣積體電路製造股份有限公司</a>
                    </div>
                    <div className='block_sub_title2'>
                        <MaterialIcon icon="date_range" className="material-icons-title"/>
                        <a className='theme_item'>Aug. 2016 - <a id='current'>Current</a></a>
                    </div>
                    <div className='block_sub_title2'>
                        <a className='theme_item'>Full Stack Enginner / Project Manager</a>
                    </div>
                    <div className='block_detail'>
                        <a>{tsmcJobDetailPart1}</a>
                        <a className='textHightlight'>{tsmcJobDetailPart1Highlight}</a>
                    </div>
                    <div className='block_detail'>
                        <a>{tsmcJobDetailPart2}</a>
                    </div>
                </div>
                <hr className='separate_line'/>
                <div className='content_sub_block'>
                    <div className='block_sub_title'>
                        <img src={itriLogo} />
                        <a>ITRI 工業技術研究院</a>
                    </div>
                    <div className='block_sub_title2'>
                        <MaterialIcon icon="date_range" className="material-icons-title"/>
                        <a className='theme_item'>Mar. 2015 - Mar. 2016 (Intern)</a>
                    </div>
                    <div className='block_detail'>
                        <a>{itriJobDetail}</a>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default WorkHistory;