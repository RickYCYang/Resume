import React from 'react'
import MaterialIcon from '@material/react-material-icon';

const Skill = () => {
    return (
        <div className='left_bar_block'>
            <div>
                <div className='block_title'>
                    <MaterialIcon icon="verified" className="material-icons-title"/>
                    <a>Skill</a>
                </div>
                <ul>
                    <li>
                        <a className='list_item'>
                            <MaterialIcon icon="lens" className="material-icons"/>
                            Frontend
                        </a>
                        <a className='list_detail'>
                            React, Redux, Javascript, Typescript, Html, Css/Scss, RWD, JQuery, Webpack
                        </a>
                    </li>
                    <li>
                        <a className='list_item'>
                            <MaterialIcon icon="lens" className="material-icons"/>
                            Backend
                        </a>
                        <a className='list_detail'>
                            Node.js, ASP.NET Web API, Oracle Database(PL/SQL, Stored Procedure), Scriptella ETL
                        </a>
                    </li>
                    <li>
                        <a className='list_item'>
                            <MaterialIcon icon="lens" className="material-icons"/>
                            Others
                        </a>
                        <a className='list_detail'>
                            Git, Delphi, ASP.NET MVC, Windows / Linux Server, AWS EC2/S3, World Press
                        </a>
                    </li>
                </ul>
            </div>
            <hr className='separate_line'/>
        </div>
    )
}

export default Skill;