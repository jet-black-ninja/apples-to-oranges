import styles from "./Sidebar.module.scss"
import SidebarColor from "./sidebarColor/SidebarColor"
import SidebarFamily from "./sidebarFamily/SidebarFamily"
import SidebarVitamins from "./sidebarVitamins/SidebarVitamins"

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarColor/>
            <SidebarFamily/>
            <SidebarVitamins/>
            </div>
    );
};

export default Sidebar;