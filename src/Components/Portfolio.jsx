function Portfolio() {
    return ( 
    <div className="container">
        <div className="cup">
            <div>
                <span className="badge badge-success">My programming langauges </span> 
            </div>
            <div className="grid-cup" data-aos="fade-up">
                <div className="card-box-co" data-aos="fade-left"><Python /></div>
                <div className="card-box-co" data-aos="fade-left"><Java /></div>
                <div className="card-box-co" data-aos="fade-left"><JavaScript /></div>
            </div>
            <hr />
            <div>
                <span className="badge badge-success">My front-end frameworks </span> 
            </div>
            <div className="grid-cup" data-aos="fade-up">
                <div className="card-box-co" data-aos="fade-left"><ReactFrame /></div>
                <div className="card-box-co" data-aos="fade-left"><Vue /></div>
            </div>
            <hr />
            <div>
                <span className="badge badge-success">My back-end frameworks </span> 
            </div>
            <div className="grid-cup" data-aos="fade-up">
                <div className="card-box-co" data-aos="fade-left"><Django /></div>
                <div className="card-box-co" data-aos="fade-left"><Spring /></div>
            </div>

        </div>
    </div>
    
    );
}

export default Portfolio;

function Python() {
    return ( 
    <div className="card card-box">
        <div>
            <i className="fab fa-python p-icon"></i>
            <strong>Python</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
     );
}


function Java() {
    return (
        <div className="card card-box">
        <div>
            <i className="fab fa-java p-icon"></i>
            <strong>Java</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div> 
         );
}



function JavaScript() {
    return ( 
        <div className="card card-box">
        <div>
        <i className="fab fa-js p-icon"></i>
        <strong>JavaScript</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
    );
}

function ReactFrame() {
    return ( 
        <div className="card card-box">
        <div>
        <div className="ico-div">
        <box-icon className="p-icon1" name='react' type='logo' ></box-icon>
        </div>
        <strong>React</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
     );
}

function Vue() {
    return ( 
        <div className="card card-box">
        <div>
        <div className="ico-div">
        <box-icon className="p-icon1" name='vuejs' type='logo' ></box-icon>
        </div>
        <strong>Vue</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
     );
}


function Django() {
    return ( 
        <div className="card card-box">
        <div>
        <div className="ico-div">
        <box-icon className="p-icon1" type='logo' name='django'></box-icon>
        </div>
            <strong>Django</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
    );
}



function Spring() {
    return ( 
        <div className="card card-box">
        <div>
        <div className="ico-div">
        <box-icon className="p-icon1" name='spring-boot' type='logo' ></box-icon>
        </div>
        <strong>Spring</strong> ipsum dolor sit amet consectetur adipisicing.
        </div>
    </div>
     );
}






