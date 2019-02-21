import React from 'react';

export default class RightSide extends React.Component {



    render() {
        return (


            <div className='video-container'  >
                <div className='video-container' >
                    <iframe src="https://www.youtube.com/embed/zd8hHZI_rHU" frameBorder="0" allow=' allowFullScreen' ></iframe >
                </div>
                <iframe src="https://www.youtube.com/embed/WSWPgFkUUeU" frameBorder="0" allow=' allowFullScreen'></iframe>
                <div className='video-container'>
                    <iframe src="https://www.youtube.com/embed/qu645wvzMwQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='video-container'>
                    <iframe src="https://www.youtube.com/embed/WSWPgFkUUeU" frameBorder="0" allow=' allowFullScreen'></iframe>
                </div>

            </div >
        )

    }
}



