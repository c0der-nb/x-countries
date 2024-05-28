import React, {useState, useEffect, lazy, Suspense} from "react";
import styles from "./Homepage.module.css";
import axios from "axios";
import Flag from "../../components/Flag/Flag"

export default function Homepage() {
    const [flagData, setFlagData] = useState([]);
    const [filteredFlagData, setFilteredFlagData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const generateData = async () => {
       try {
        setLoading(true);
        const apiResponse = await axios.get("https://restcountries.com/v3.1/all");
        setFlagData(apiResponse.data);
        setFilteredFlagData(apiResponse.data);
        setLoading(false);
       }
       catch (ex) {
        setLoading(false);
        console.error(ex);
       }
    }

    const searchHandler = (e) => {
        setFilteredFlagData((prevVal) => flagData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()) === true))
    }

    useEffect(() => {
        generateData();
    }, []);

    return (
        <>
        <header>
            <input onChange={searchHandler} className={styles.countrySearch} type="text" name="search" id="country-search" placeholder="Search for countries..." />
        </header>
        <div className={styles.wrapper}>
            {!isLoading ?
            <div className={styles.container}>
                {filteredFlagData.map((data) => (
                    <Flag image={data.flags.svg} name={data.name.common} alt={data.flags.alt} key={data.name.official} />
                ))}
            </div> : <div className="loader"></div> }
        </div>
        </>
    )
}