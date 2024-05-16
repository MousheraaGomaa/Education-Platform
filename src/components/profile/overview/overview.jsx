
import Gauge from './../Gauge/gauge'

import styles from './overview.module.css';

const Overview = () => {

    return (
        <div className={styles?.["overview-container"]}>
            <Gauge/>
        </div>
    );
}

export default Overview;