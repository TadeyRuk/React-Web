
import profilePic from './assets/Rukkan.jpg'
function Card () {
    return(
        <div className="card">
            <img className = "Rukkan" src = {profilePic} alt="Profile Picture"></img>
            <h2 className="RukkanHeadline"> Rukkan Pukkan</h2>
            <p className="RukkanDesc"> Largest cat in the world!!</p>
        </div>
    );
}

export default Card