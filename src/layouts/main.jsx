import React from 'react';
import Header from '@/components/Header';
const MainLayout = (props) => {
    return (
        <div className="main_layout">
            <Header />
            {props.children}
        </div>
    )
}

export default MainLayout;