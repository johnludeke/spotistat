import React from 'react';

export default function TrackCard({ artist, title, albumImageUrl }) {

    return (
        <div className="mx-10 my-5 flex rounded-lg shadow-lg" >
            <img className="w-28 rounded-l-lg" src={albumImageUrl} alt="Album Art" ></img>
            <div className="mx-5 flex flex-col justify-center" >
                <div className="items-center text-xl pb-2 font-bold" >{title}</div>
                <div className="items-center text-sm text-slate-700" >{artist}</div>
            </div>
        </div>
    )
}