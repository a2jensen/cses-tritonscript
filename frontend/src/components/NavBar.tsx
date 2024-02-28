export default function NavBar(props: any) {
  return (
    <div style={{ width: "full", height: "90px", backgroundColor: "black" }}>
        <img src="src/assets/logo.png" width="120px" style={{ position: "absolute" }} />
        <div style={{ textAlign: "center", paddingTop: "30px", fontSize: "20px", textDecorationLine: "none" }}>
            <a href="./about" style={{ color: "white", paddingRight: "20px", textDecorationLine: "none" }}>About Us</a>
            <a href="./view" style={{ color: "white", paddingRight: "20px", textDecorationLine: "none" }}>View Classes</a>
            <a href="./add" style={{ color: "white", paddingRight: "20px", textDecorationLine: "none" }}>Add Classes</a>
            <a href="./contact" style={{ color: "white", textDecorationLine: "none" }}>Contact Us</a>
        </div>
    </div>
  );
}
