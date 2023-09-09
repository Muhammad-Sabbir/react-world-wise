import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List Of Cities</p>
      <footer className={styles.footer}>
        <p>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  );
}

export default Sidebar;
