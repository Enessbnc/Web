import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function TopBar() {
    return(
        <div className="container-fluid topbar-top bg-primary">
            <div className="container">
                <div className="row py-2">
                    <div className="col-12 d-flex flex-column flex-md-row align-items-center mb-2 mb-md-0">
                        <a href="https://www.google.com/maps/search/52063+Nolu+Sk.+3H,+27090+Gaziantep,+Şehitkamil+Türkiye/@37.0814263,37.3843418,14z/data=!3m1!4b1?hl=tr&entry=ttu" className="me-md-4 mb-2 mb-md-0 text-secondary" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1.5' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2 text-dark" />
                            52063 Nolu Sk. 3H, 27090 Şehitkamil, Gaziantep Türkiye
                        </a>
                        <a href="#" className="me-md-4 mb-2 mb-md-0 text-secondary" style={{ lineHeight: '1.5' }}>
                            <FontAwesomeIcon icon={faPhoneAlt} className="me-2 text-dark" />+905317824989
                        </a>
                        <a href="mailto:setup.solar2@gmail.com" className="text-secondary" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '1.5' }}>
                            <FontAwesomeIcon icon={faEnvelope} className="me-2 text-dark" />setup.solar2@gmail.com
                        </a>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center justify-content-md-end">
                        <a href="https://www.facebook.com/SetupEnerjii?locale=tr_TR" className="me-4 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} className="text-dark" style={{ verticalAlign: 'middle' }} />
                        </a>
                        <a href="https://www.instagram.com/setupenerji1?igsh=YjRqZTV0ZTV5MGJk" className="me-4 d-flex align-items-center" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} className="text-dark" style={{ verticalAlign: 'middle' }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function NavBar(){
    return(
    <div className="container-fluid bg-dark">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary mb-0 display-5">Setup<span className="text-white">Enerji</span></h1>
                    </a>
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="text-dark">
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="project.html" className="nav-item nav-link">Projects</a>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}


export function Carousel() {
    return (
        <div className="container-fluid carousel px-0 mb-5 pb-5">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="3" aria-label="Fourth slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="4" aria-label="Fifth slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="src/img/resim1.png" className="img-fluid w-100" alt="First slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="#" className="me-2">
                                    <button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="src/img/resim2.jfif" className="img-fluid w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="#" className="me-2">
                                    <button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/src/img/irak.png" className="img-fluid w-100" alt="Third slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="#" className="me-2">
                                    <button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="src/img/resim3.jfif" className="img-fluid w-100" alt="Fourth slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="#" className="me-2">
                                    <button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="src/img/resim4.jfif" className="img-fluid w-100" alt="Fifth slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h4 className="text-white mb-4 animated slideInDown">No 1 Pest Control Services</h4>
                                <h1 className="text-white display-1 mb-4 animated slideInDown">Enjoy Your Home Totally Pest Free</h1>
                                <a href="#" className="me-2">
                                    <button type="button" className="px-5 py-3 btn btn-primary border-2 rounded-pill animated slideInDown">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev btn btn-primary border border-2 border-start-0 border-primary"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="prev"
                    style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "14px",
                        borderRadius: "50%",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next btn btn-primary border border-2 border-end-0 border-primary"
                    type="button"
                    data-bs-target="#carouselId"
                    data-bs-slide="next"
                    style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "14px",
                        borderRadius: "50%",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }}
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}






