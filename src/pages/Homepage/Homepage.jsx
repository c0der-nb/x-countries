import React, {useState, useEffect, lazy, Suspense} from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
const Flag = lazy(() => import("../../components/Flag/Flag"));

export default function Homepage() {
    const [flagData, setFlagData] = useState([]);

    const generateData = async () => {
       try {
        const apiResponse = await axios.get("https://restcountries.com/v3.1/all");
        setFlagData(apiResponse.data);
       }
       catch (ex) {
        console.error(ex);
       }
    }

    useEffect(() => {
        generateData();
    }, []);

    return (
        <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
            {flagData.map((data) => (
                <Flag image={data.flags.svg} name={data.name.common} alt={data.flags.alt} key={data.name.official} />
            ))}
            </Suspense>
        </div>
    )
}