import React from "react";
import styles from "./HomeOrganizations.module.scss"
import decoration from "../../../assets/Decoration.png"

const HomeOrganizations = () => {

    return (
        <div className={styles.organizations} id='organizations'>
            <div className={styles.org__container}>
                <div className={styles.org__hdl}>
                    Komu pomagamy?
                </div>
                <img className={styles.decoration} src={decoration}/>
                <div className={styles.org__three}>
                    <div className={styles.org__three__col}>
                        Fundacjom
                    </div>
                    <div className={styles.org__three__col}>
                        Organizacjom <br/>
                        pozarządowym
                    </div>
                    <div className={styles.org__three__col}>
                        Lokalnym <br/>
                        zbiórkom
                    </div>
                </div>
                <div className={styles.org__text}>
                    W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z <br/>
                    którymi współpracujemy. Możesz sprawdzić czym się zajmują, <br/>
                    komu pomagają i czego potrzebują.
                </div>
                <div className={styles.org__three__horizontal}>
                    <div className={styles.org__three__col__horizontal}>
                        Fundacja “Dbam o Zdrowie” <br/>
                        <div className={styles.org__three__col__horizontal__text}>
                            <span>
                                Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                            </span>
                            <span>
                                ubrania, jedzenie, sprzęt AGD, meble, zabawki
                            </span>
                        </div>

                    </div>
                    <div className={styles.org__three__col__horizontal}>
                        Fundacja “Dla dzieci” <br/>
                        <div className={styles.org__three__col__horizontal__text}>
                        <span >
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </span>
                        <span >
                            ubrania, meble, zabawki
                        </span>
                        </div>
                    </div>
                    <div className={styles.org__three__col__horizontal}>
                        Fundacja “Bez domu” <br/>
                        <div className={styles.org__three__col__horizontal__text}>
                        <span>
                            Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.
                        </span>
                        <span>
                            ubrania, jedzenie, ciepłe koce
                        </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeOrganizations