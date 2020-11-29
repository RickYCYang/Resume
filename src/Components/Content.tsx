import React from 'react';
import WorkHistory from './WorkHistory';
import EducationHistory from './EdutionHistory';
import Introduction from './Introduction';

const Content = () => {
    return(
        <div className="content">
            <WorkHistory/>
            <EducationHistory/>
            <Introduction/>
        </div>
    );
}
export default Content;