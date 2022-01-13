import type { PageProps } from '../types';

const ToolBar = ({ user }: PageProps) => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                      <a className="nav-link active" href="/">Home</a>
                    </li>
                    { 
                        user !== null ?
                        (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    <i className="ion-compose"></i>&nbsp;New Article
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">
                                    <i className="ion-gear-a"></i>&nbsp;Settings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <img className="user-pic" ng-src="" />
                                    {user.username}
                                </a>
                            </li>
                        </>
                        ) : 
                        (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Sign up</a>
                            </li>
                        </>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}

export default ToolBar;