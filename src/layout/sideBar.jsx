import React, { Component } from 'react';
import CatagoriList from './Catagoris';
import RecentPost from '../ContentData/recentPost';
import PopulatTag from '../ContentData/popularTag';
import InstagramThumb from '../ContentData/instagramPost';
import AddBanner from '../ContentData/addBanner';
import SearchArea from '../ContentData/search';

class SideBar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-widget">
                    <SearchArea />
                    <CatagoriList />
                    <RecentPost />
                    <PopulatTag />
                    <InstagramThumb />
                    <AddBanner />
                </div>
            </div>
        );
    }
}

export default SideBar;