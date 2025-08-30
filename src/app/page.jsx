import Link from 'next/link';
import styles from './Home.module.css';

export default function Home(){
    return (
        <>
        <main>
            <section id='home' className={styles.home}>
                <div className={styles.homeTitle}>

                    <h1>Natanael</h1>
                    
                    <div className={styles.descricaoContainer}>
                        <div className={styles.carrosselDescricao}>
                            <p className={styles.descricao}>Desenvolvedor Front-End</p>
                            <p className={styles.descricaoPonto}>●</p>
                        </div>
                    </div>

                    <h1>Santos</h1>
                    
                </div>
            </section>
        </main>
        </>
    );
}