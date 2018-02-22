import React from 'react';
import ProgressBar from './ProgressBar';

let ImageDetails = (props) => {
    return (
        <li className='media list-group-item'>
            <div className='media-left'>
                <img src={props.link} />
            </div>
            <div className='media-body'>
                <h4 className='media-heading'>
                    By <a href={props.user} target='blank'>{props.by}</a>
                    <p>{props.user_bio}</p>
                </h4>
                <ProgressBar likes={props.likes} />
            </div>
        </li>
    );
}

export default ImageDetails;