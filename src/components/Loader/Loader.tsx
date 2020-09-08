import React from 'react'
import styles from './Loader.module.css'

const Loader: React.FC =():React.ReactElement => {
    return (
        <div className={styles.loading}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Loader