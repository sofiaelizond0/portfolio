import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="text-center">
        <p className="text-xl md:text-2xl font-bold text-white font-sans">
          Sofia Elizondo Piña
        </p>
        <p className="text-sm md:text-base font-medium text-white/90 font-sans">
          Portfolio
        </p>
      </div>
    </header>
  );
}
