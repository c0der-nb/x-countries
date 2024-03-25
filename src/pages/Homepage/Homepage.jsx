import React, {useState, useEffect, lazy, Suspense} from "react";
import styles from "./Homepage.module.css";
import { fetchCountryFlags } from "../../api/api";
const Flag = lazy(() => import("../../components/Flag/Flag"));

export default function Homepage() {
    const [flagData, setFlagData] = useState([]);

    const generateData = (source) => {
        source().then((data) => {
            setFlagData(data);
        })
    }

    useEffect(() => {
        generateData(fetchCountryFlags);
    }, []);

    return (
        <div className={styles.container}>
            {flagData.map((data) => (
            <Suspense fallback={<div>Loading...</div>}>
                <Flag image={data.flags.svg} name={data.name.common} alt={data.flags.alt} />
            </Suspense>
            ))}
        </div>
    )
}