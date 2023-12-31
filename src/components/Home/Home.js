import React from "react";
import HomeWhatIsAbout from "./WhatIsAbout";
import HomeOrganizations from "./Organizations/HomeOrganizations";
import HomeAboutUs from "./AboutUs/HomeAboutUs";
import HomeContact from "./Contact";
import HomeHero from "./Hero";
import styles from "./Home.module.scss"

const Home = () => {

    return (
        <>
            <div className={styles.hero}>
                <HomeHero />
            </div>
            <HomeWhatIsAbout />
            <HomeAboutUs />
            <HomeOrganizations />
            <HomeContact />
        </>

    )
}

export default Home