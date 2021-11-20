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
            <strong><a href="https://www.python.org" title="Python abdulaziz olinga">Python</a></strong> <small>being my primary language i use it for backed development.
            i also add cool features to my app using python AI and machine learning.</small>
        </div>
    </div>
     );
}


function Java() {
    return (
        <div className="card card-box">
        <div>
            <i className="fab fa-java p-icon"></i>
            <strong><a href="https://www.java.com" title="java abdulaziz olinga">Java</a></strong><small> i use it mostly for android apps development and server-side applications ,this was my first language</small>
        </div>
    </div> 
         );
}



function JavaScript() {
    return ( 
        <div className="card card-box">
        <div>
        <i className="fab fa-js p-icon"></i>
        <strong><a href="https://www.javascript.com" title="javascript abdulaziz olinga">JavaScript</a></strong><small>as it being my secondary language i use it for front-end and native mobile applications i spend most of my time coding with js</small>
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
        <strong><a href="https://reactjs.org" title="React abdulaziz olinga" >React</a></strong><small> my best front-end framework for signle page  applications</small>
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
        <strong><a href="https://vuejs.org" title="Vuejs abdulaziz olinga" >Vuejs</a></strong><small> my favourite front-end framework for signle page  applications</small>
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
            <strong><a href="https://www.djangoproject.com" title="Django abdulaziz">Django</a></strong><small> 80% of  backend (APIs) i do with python. this awesome</small>
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
        <strong><a href="https://spring.io/" title="Spring abdulaziz">Spring</a></strong><small> this is my secondary backend framework for my java technologies.</small>
        </div>
    </div>
     );
}






