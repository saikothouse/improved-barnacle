import React from 'react';

const AudioPlayer = ({ audioSrc }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Audio Player</h2>
            <audio className="w-full" controls>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioPlayer;
