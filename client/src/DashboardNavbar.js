import React from 'react';
import TopTracks from './pages/TopTracks';
import TopArtists from './pages/TopArtists';
import { Link } from 'react-router-dom';
import 'dashboardNavbar.css';

export default function DashboardNavbar({ accessToken }) {
    return (
        <div className="navigation-bar">
            <Link to={{
                pathname: "/pages/TopTracks",
                state: {
                    accessToken: accessToken
                }
            }}>Top Tracks</Link>

            <Link to={{
                pathname: "/pages/TopArtists",
                state: {
                    accessToken: accessToken
                }
            }}>Top Artists</Link>
        </div>
    )
}