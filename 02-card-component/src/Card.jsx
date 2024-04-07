// if importing locally from the assets folder
// import profilePic from "./assets/profile.jpg"

function Card() {
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile pciture" />
            {/* <img src={profilePic} alt="" /> */}
            <h2 className="card-title">Lily Yu</h2>
            <p className="card-text">I am a designer and a developer {`<`}3</p>
        </div>
    );

}

export default Card