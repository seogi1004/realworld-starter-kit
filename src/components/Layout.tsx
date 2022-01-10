import React, { ReactNode } from 'react';
import ToolBar from './ToolBar';
import Footer from './Footer';

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <ToolBar></ToolBar>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Layout;