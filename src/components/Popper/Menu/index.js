import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => 
            <MenuItem key={index} data={item} />
        );
    };

    return (
        <Tippy
            delay={[0, 700]}
            placement="bottom-end"
            interactive={true}
            render={(attrs) => (
                <div className={cx('menu-item-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
