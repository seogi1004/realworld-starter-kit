import React, { ReactNode } from 'react';
import ToolBar from './ToolBar';
import Footer from './Footer';
import { User } from '../types'

type Props = {
    user: User | null,
    children: ReactNode
}

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