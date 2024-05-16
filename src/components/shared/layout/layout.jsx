// import React, { Children } from 'react';

const Layout = ({children}) => {
    return (
        <div className="container">
            {
                children
            }
        </div>
    );
}

export default Layout;
