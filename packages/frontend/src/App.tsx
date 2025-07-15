import styles from './App.module.css';
import ToolSpace from './components/bzi/ToolSpace';

function App() {
  return (
    <div className={styles.app}>
      <ToolSpace />
      <div className={styles.workspace}></div>
    </div>
  );
}

export default App;
