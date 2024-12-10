import "./profilePage.scss"
import List from "../../components/list/List"
import Chat from "../../components/chat/Chat";

const ProfilePage = () => {
    return (  
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: 
                            <img src="https://i.pinimg.com/736x/17/72/71/177271d0c73b82903e897bfbd0718347.jpg" alt="" />
                        </span>
                        <span>Username: <b>HeatSynQ</b></span>
                        <span>E-mail: <b>dummymail@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
}
 
export default ProfilePage;