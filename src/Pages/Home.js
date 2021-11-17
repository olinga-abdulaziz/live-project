import me from '../Images/image3.png'
function Home() {
    return (
    <div className="container">
        <div className="content-wrapper">
            <div className="content-box">
            <h5>Hi am</h5>
            <h1>Olinga</h1>
            <p>Am a full-stack web developer, i build successfull web-app and native mobile applications with cool features and much more</p>
            <div><button className="btn btn-success">Get started</button></div>
            </div>
            <div className="content-box">
                <img className="my-image" src={me} alt="abdulaziz olinga said" />
            </div>
            <div className="empty-mobile">

            </div>
        </div>
    </div> 
    );
}

export default Home;