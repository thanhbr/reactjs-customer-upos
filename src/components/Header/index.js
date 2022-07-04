import './index.module.scss'
import Notification from '../Notification';
import Message from '../Message';
import Language from '../Language';
import UserInformation from '../UserInformation';
import css from './index.module.scss'
import clsx from "clsx";

export default function () {
    return ( 
        <div className={clsx(css['header'])}>
            <div className={clsx(css['header-left'])}>
                <img className={clsx(css['logo-header'])} alt="upos-logo" src={"/my-assets/images/logo/full-logo-v1.png"} />
            </div>
            <div className={clsx(css['header-right'])}>
                <Notification />
                <Message />
                <Language />
                <div className={clsx(css['separate'])}>
                    <span>|</span>
                </div>
                <UserInformation />
            </div>
        </div>
    );
}