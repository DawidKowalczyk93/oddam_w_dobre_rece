import React, {useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import styles from "./CreateAccount.module.scss"
import {Link} from 'react-router-dom';
import contact from "../../assets/Contactbackground.png";
import decoration from "../../assets/Decoration.png";
import NavBar from "../Global/NavBar";
import LogInOut from "../Global/LogInOut";
import auth from "../../Firebase";
import {useUserAuth} from "../../context/UserAuthContext";
const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const  {signUp}  = useUserAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('wiadomość z create account');
        signUp(email, password);
    }

    return (
        <div className={styles.wrapper}>
            <nav className={styles.login__nav}>
                <LogInOut/>
                <NavBar/>
            </nav>
            <div className={styles.login__container}>
                <div className={styles.login__col}>
                    <div className={styles.login__hdl}>
                        Załóż konto
                    </div>
                    <img className={styles.decoration} src={decoration}/>
                    <form
                        className={styles.form__container}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.form__data}>
                            <div className={styles.form__field}>
                                <label htmlFor='email' className={styles.form__label}>Email</label>
                                <input
                                    type="text"
                                    className={styles.form__input}
                                    id='email'
                                    value={email}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />
                            </div>
                            <div className={styles.form__field}>
                                <label htmlFor='password' className={styles.form__label}>Hasło</label>
                                <input
                                    type="text"
                                    className={styles.form__input}
                                    id='password'
                                    value={password}
                                    onChange={ e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className={styles.form__field}>
                                <label htmlFor='confirmPassword' className={styles.form__label}>Powtórz Hasło</label>
                                <input
                                    type="text"
                                    className={styles.form__input}
                                    id='confirmPassword'
                                    value={confirmPassword}
                                    onChange={ e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.form__button__wrapper}>
                            <button
                                className={styles.form__button}
                                type='submit'
                            >Załóż Konto</button>
                            <button className={styles.form__button}>Zaloguj się</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    )
}

export default SignUp