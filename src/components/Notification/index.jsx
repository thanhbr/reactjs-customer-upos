import css from './index.module.scss'
import cls from "clsx"

const Index = () => {
    return ( 
        <div className={cls(css.header)}>
            <div className={cls(css.icon)}>
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4 16.6113C5.51684 16.607 4.80073 15.8945 4.792 15.0113H7.992C7.99369 15.2252 7.9529 15.4373 7.872 15.6353C7.66212 16.1169 7.23345 16.4682 6.72 16.5793H6.716H6.704H6.6896H6.6824C6.58945 16.5987 6.49492 16.6094 6.4 16.6113ZM12.8 14.2113H0V12.6113L1.6 11.8113V7.41133C1.55785 6.28262 1.81275 5.16263 2.3392 4.16333C2.86323 3.23654 3.75896 2.57843 4.8 2.35533V0.611328H8V2.35533C10.0632 2.84653 11.2 4.64173 11.2 7.41133V11.8113L12.8 12.6113V14.2113Z" fill="#B9BBD3"/>
                </svg>
            </div>
            <div className={cls(css.dot)}>
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="4.38867" r="3.6" fill="#EC5252" stroke="white"/>
                </svg>
            </div>
        </div>
    )
}

export default Index