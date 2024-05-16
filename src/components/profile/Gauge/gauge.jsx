import GaugeChart from 'react-gauge-chart'

import styles from './gauge.module.css'

const Gauge = () => {
    return (
        <div className={styles?.["gauge-container"]}>
            <GaugeChart id="gauge-chart3"
                nrOfLevels={15}
                colors={["#FF5F6D", "#FFC371"]}
                arcWidth={0.6}
                arcsLength={[0.3, 0.5, 0.2]}
                arcPadding={0.02}
                percent={0.5}
            />
            <GaugeChart id="gauge-chart5"
                nrOfLevels={2}
                arcsLength={[.9, .1]}
                cornerRadius={10}
                colors={['#5BE12C', '#F5CD19']}
                percent={0.9}
                arcWidth={0.05}
                arcPadding={0.00}
                hideText={true}
            />
        </div>
    )
}

export default Gauge;

