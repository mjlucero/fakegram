import React from 'react';
import './PageLayout.css';

const PageLayout = ({children, footer, header}) => {
    const renderComponent = component => {
        if (component) {
            const Component = component;
            return (
                <Component/>
            )
        }
    };

    return (
        <div className="main-container">
            <div className="header">
                {renderComponent(header)}
            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                {renderComponent(footer)}
            </div>
        </div>
    )
};

export default PageLayout;