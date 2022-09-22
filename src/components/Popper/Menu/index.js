import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = (state) => {}
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick = {() => {
                if(isParent) {
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}/>
        }
        );
    };

    return (
        <Tippy
            delay={[0, 700]}
            offset={[12,8]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-item-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title = {current.title} onBack = {() => {
                            setHistory(prev => prev.slice(0, prev.length -1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide = {() => setHistory(prev => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
