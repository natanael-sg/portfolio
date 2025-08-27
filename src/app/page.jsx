import Link from 'next/link';
import styles from './Home.module.css';

export default function Home(){
    return (
        <>
        <main>
            <section id='home' className={styles.home}>
                <header className={styles.header}>
                    <div className={styles.titleHeader}>
                        <h1 className={styles.logoHeader}>Natanael</h1>
                        <h1 className={styles.logoHeader}>☰</h1>
                    </div>
                    {/*<div className={styles.navigation}>
                        <ul className={styles.menu}>
                            <li>
                                <Link href={"/sobre"}>Sobre</Link>
                            </li>
                            <li>
                                <Link href={"/projetos"}>Projetos</Link>
                            </li>
                            <li>
                                <Link href={"/contato"}>Contato</Link>
                            </li>
                        </ul>
                    </div>*/}
                </header>
                <div className={styles.homeContainer}>
                    <div>
                        <span className={styles.title}><h1 className={styles.colorWhite}>Olá, eu sou </h1><h1>Natanael</h1></span>
                    </div>
                    <div>
                        <p className={styles.normalText}>Desenvolvedor Front-End em React e Next.js</p>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}