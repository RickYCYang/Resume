import React from 'react'
import Card, {
    CardPrimaryContent,
    CardMedia,
    CardActions,
    CardActionButtons,
    CardActionIcons
  } from "@material/react-card";

import PhotoName from './PhotoName';
import Contact from './Contact';
import Skill from './Skill'
import Language from './Language';

const LeftBar = () => {
    return(
        <nav className="leftBar">
            <Card>
                <PhotoName/>
                <Contact />
                <Skill />
                <Language />
            </Card>
        </nav>
    );
};

export default LeftBar;