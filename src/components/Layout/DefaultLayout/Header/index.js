import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo.default} alt = 'Tiktok'/>
                </div>

                {/* Search */}
                <div className= {cx('search')}>
                    <input placeholder='Search accounts and videos...' spellCheck={false}/>
                    <button>
                        <FontAwesomeIcon className={cx('clear')} icon = {faCircleXmark}/>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon = {faSpinner}/>
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon  icon = {faMagnifyingGlass}/>
                    </button>

                </div>

                {/* Action */}
                <div className={cx('actions')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
