import './index.css'
import {useState} from "react";
import listLanguage from './list'
import i18n from '../../i18n/translation/i18n';
import { useTranslation } from 'react-i18next';

export default function () {
    const { t } = useTranslation()
    const [language, setLanguage] = useState('')
    const [showLanguages, setShowLanguages] = useState('d-none')

    const mouseEnterLanguage = () => {
        setShowLanguages('')
    }
    const mouseLeaveLanguage = () => {
        setShowLanguages('d-none')
    }
    const handleLanguage = (e, lang) => {
        i18n.changeLanguage(lang)
        setShowLanguages('d-none')
        setLanguage(t(`language.${lang}`))
    }

    return ( 
        <div className={'app-header-language'}
             onMouseEnter={mouseEnterLanguage}
             onMouseLeave={mouseLeaveLanguage}   >
            <p className={'app-header-language__focus'}>{language || t(`language.${listLanguage[0].code}`)}</p>
            <div className={'app-header-language__list ' + showLanguages || ''}>
                <ul>
                {listLanguage.map(lang => (
                   <li key={lang.id} onClick={e => handleLanguage(e, lang.code)}>{t(`language.${lang.code}`)}</li>
                ))}
                </ul>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 13.0941L15.0084 8.08578L13.8309 6.90662L10 10.74L6.17003 6.90662L4.9917 8.08495L10 13.0941Z" fill="#B9BBD3"/>
            </svg>
        </div>
    );
}