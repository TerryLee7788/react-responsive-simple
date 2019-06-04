import React from 'react';
import MediaQuery from 'react-responsive';
import MobileHeader from './components/mobile/Header';
import DesktopHeader from './components/desktop/Header';
import LeftNavList from './components/desktop/LeftNavList';
// import './venders/normalize.css';
import './venders/reset.css';
import styles from './App.css';

const App = () => (
    <main className={styles.main}>
        <MediaQuery minWidth={993}>
            <DesktopHeader/>
            <div className={styles.container}>
                <LeftNavList/>
                <div className={styles['bd-content']}>
                    main content
                </div>
            </div>
            {/*
            <MediaQuery minDeviceWidth={1824}>
                <div>You also have a huge screen</div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <MobileHeader />
                <div>You are sized like a tablet or mobile phone though</div>
            </MediaQuery>
            */}
        </MediaQuery>

        <MediaQuery maxWidth={992}>
            <div>
                <MobileHeader />
                You are a tablet or mobile phone
            </div>
        </MediaQuery>

        {/*
        <MediaQuery orientation="portrait">
            <div>You are portrait</div>
        </MediaQuery>

        <MediaQuery orientation="landscape">
            <div>You are landscape</div>
        </MediaQuery>

        <MediaQuery minResolution="2dppx">
            <div>You are retina</div>
        </MediaQuery>
        */}
    </main>
);

export default App;