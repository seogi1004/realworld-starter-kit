import type { PageProps } from '../types'
import React, { useState } from 'react';

type Props = {
    tag: string;
} & PageProps;

type TabType = 'private' | 'global';

const FeedTab = ({ user, tag }: Props) => {
    const [activeTab, setActiveTab] = useState<TabType>('global');

    const onChangeActiveTab = (tab: TabType) => {
        setActiveTab(tab);
    }

    return (
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            {
                user !== null ? 
                <li className="nav-item">
                    <a onClick={() => onChangeActiveTab('private')} className={['nav-link', 
                        (activeTab === 'private' && tag === '') ? 'active' : ''].join(' ')}>Your Feed</a>
                </li> : ''
            }
            <li className="nav-item">
              <a onClick={() => onChangeActiveTab('global')} className={['nav-link', 
                (activeTab === 'global' && tag === '') ? 'active' : ''].join(' ')}>Global Feed</a>
            </li>
            {
                tag !== '' ? 
                <li className="nav-item">
                    <a className="nav-link active">
                        <i className="ion-pound"></i> { tag } 
                    </a>
                </li> : ''
            }
          </ul>
        </div>
    )
}

export default FeedTab;