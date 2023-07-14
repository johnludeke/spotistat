import React from 'react';

export default function ArtistCard({ name, genre, profilePictureUrl }) {

    return (
        <div className="mx-10 my-5 flex rounded-lg shadow-lg" >
            <img className="w-28 rounded-l-lg" src={profilePictureUrl} alt="Profile Picture" ></img>
            <div className="ml-5 flex flex-col justify-center pr-5" >
                <div className="items-center text-xl pb-2 font-bold" >{name}</div>
                <div className="items-center text-sm text-slate-700" >{genre}</div>
            </div>
        </div>
    )
}