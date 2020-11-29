import React from 'react'
import MaterialIcon from '@material/react-material-icon';
import Card from "@material/react-card";
import chiaoTungLogo from '../images/chiao_tung_logo.png';
import tamkangLogo from '../images/tamkang_logo.png';


const introductionPart1 = `
It's Rick, work for TSMC from Aug. 2016 to now. 
My job is to support internal business user system service for 
their decision making like capacity allocation, customer demand analysis, and etc. 
`;

const introductionPart2 = `
Besides system development, I've also been trained for project management, 
including coordination, requirements clarification, converting user requirement to system requirement,
schedule management, and etc. 
`;

const introductionPart3 = `
Since the current major focus of mine is system development, so I want to find a new job of 
frontend developer, appreciate for your reading.
`;

const Introduction = () => {
    return(
        <Card className='content_card'>
            <div className='content_block'>
                <div className='block_title'>
                    <MaterialIcon icon="person" className="material-icons-title"/>
                    <a>Introduction</a>
                </div>
                <hr className='separate_line'/>
                <div id='intro-detail'>
                    <p>{introductionPart1}</p>
                    <p>{introductionPart2}</p>
                    <a>{introductionPart3}</a>
                </div>
            </div>
        </Card>
    )
}
export default Introduction;