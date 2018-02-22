import React from 'react';

let ProgressBar = (props) => {
    return (
        <div>
            Likes
        <div className="progress">
                <div style={{ width: props.likes }}
                    className="progress-bar progress-bar-success progress-bar-striped" />
            </div>
        </div>
    );
}

export default ProgressBar