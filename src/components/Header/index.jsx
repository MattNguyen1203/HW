import React from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.header}>
            <ul className={styles.list_nav}>
                <Link href={'/'}>
                    <li>Trang chủ</li>
                </Link>
                <Link href={'/todo'}>
                    <li>Ứng dụng</li>
                </Link>
                <Link href={'/todo/my'}>
                    <li>Của tôi</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;