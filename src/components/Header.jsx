// Ao utilizar CSS Modules, para importar um arquivo é necessário nomear os estilos
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <strong>Ignite Feed</strong>
    </header>
  );
}
