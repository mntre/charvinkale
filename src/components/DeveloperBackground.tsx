import styles from "./DeveloperBackground.module.css";

export default function DeveloperBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.nodes} />
      <div className={`${styles.orb} ${styles.orbOne}`} />
      <div className={`${styles.orb} ${styles.orbTwo}`} />
      <div className={styles.scan} />

      <div className={`${styles.terminal} ${styles.terminalOne}`}>
        <span className={styles.terminalBar}>● ● ●</span>
        <span>&gt; npm run build</span>
        <span className={styles.success}>✓ deployed</span>
      </div>

      <code className={`${styles.token} ${styles.tokenOne}`}>
        const workflow = automate(&quot;JQL&quot;);
      </code>
      <code className={`${styles.token} ${styles.tokenTwo}`}>
        SELECT impact FROM reliable_systems;
      </code>
      <code className={`${styles.token} ${styles.tokenThree}`}>
        {"<Build stack={['jira', 'sap', 'web']} />"}
      </code>
      <code className={`${styles.token} ${styles.tokenFour}`}>
        deploy({"{"} status: &quot;stable&quot;, scale: &quot;50+&quot; {"}"});
      </code>
    </div>
  );
}
