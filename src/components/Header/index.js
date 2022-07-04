import './index.css'
import Notification from '../Notification';
import Message from '../Message';
import Language from '../Language';
import UserInformation from '../UserInformation';

export default function () {
    return ( 
        <div className="app-header">
            <div className='app-header-left'>
                <img className="logo-header" alt="upos-logo" src="/my-assets/images/logo/full-logo-v1.png" />
            </div>
            <div className='app-header-right'>
                <Notification />
                <Message />
                <Language />
                <div className='app-header-right__seraphine'>
                    <span></span>
                </div>
                <UserInformation />
            </div>
        </div>
    );
}