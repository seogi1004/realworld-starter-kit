import type { PageProps } from '../types'
import React, { ReactNode } from 'react';
import ToolBar from './ToolBar';
import Footer from './Footer';

type Props = {
    children: ReactNode
} & PageProps;

const Layout = ({ user, children }: Props) => {
    return (
        <>
            <ToolBar user={user}></ToolBar>
            {children}
            <Footer></Footer>
        </>
    );
}

export default Layout;