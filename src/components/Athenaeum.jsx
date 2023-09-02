import React from 'react';
import InfoSection from './InfoSection';
import image from './../assets/warmup.jpg'

const Athenaeum = () => {
    return (
        <InfoSection props={{subtitle: 'The Athenaeum', title:'The warm-up', description: 'In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.', btntext: 'Read More', url:image}} />
    );
};

export default Athenaeum;