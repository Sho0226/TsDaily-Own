import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <div className={styles.daily}>Daily Note for 20250418</div>
      {/* 通常の文書フロー通りに配置され、top/left等は効かない */}
      <div className={styles.box}>Static</div>
      {/* 通常位置からtop/left分だけズレるが、他の要素のレイアウトには影響しない */}
      <div className={styles.relativeBox}>通常</div>
      <div className={`${styles.relative} ${styles.relativebox}`}>相対</div>
      <div className={styles.relativeBox}>通常</div>
      {/* .containerを基準に、top/leftで絶対配置されます。文書フローから外れるため、他の要素の配置に影響しない */}
      <div className={styles.container}>
        <div className={styles.absolute}>絶対</div>
      </div>
      {/* ビューポート（画面）を基準に配置され、スクロールしても常に同じ場所に表示 */}
      <div className={styles.fixedBox}>固定</div>
      <div className={styles.stickyContainer}>
        <div className={styles.stickyBox}>粘着</div>
        <div style={{ height: "1000px" }}>スクロール用ダミー</div>
      </div>

      <div className={styles.parent}>
        <button className={styles.closeBtn}>x</button>
        <p>モーダルウィンドウの内容</p>
      </div>
    </>
  );
}
