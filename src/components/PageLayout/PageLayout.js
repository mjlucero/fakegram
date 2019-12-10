import React from 'react';
import classes from './PageLayout.css';


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
        <div className={classes.Main}>
            <div className={classes.Header}>
                {renderComponent(header)}
            </div>
            <div id="mainContainer" className={classes.Content}>
                {children}
            </div>
            <div className={classes.Footer}>
                {renderComponent(footer)}
            </div>
        </div>
    )
};

export default PageLayout;