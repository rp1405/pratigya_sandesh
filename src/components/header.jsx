export default function header() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: "2vw",
      }}
    >
      <img style={styles.image} src="../../assets/logo.png"></img>
    </div>
  );
}
const styles = {
  image: {
    width: "70vw",
    height: "15vw",
  },
};
