import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import tech from "../../img/tech.jpg"
import tech2 from "../../img/tech2.jpg"

export const Techologies = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container-fluid home">
            <div className="row justify-content-center">
                <div className="className col-12 text-center">
                    <div className="className div">
                        <img className="home-image img-fluid mb-4" alt="Stocksy" src={tech} />
                        <div className="text-wrapper mb-4">Techonologies</div>
                        <div className="col-5 col-md-5 col-lg-5 col-sm-5 mx-auto mb-4">
                           <div className="container img-fluid" >
                           <img className="img-fluid" alt="Tech 2" src={tech2} />
                           </div>
                                <p className="content">
                                JavaScript, React.JS, Python, Html5, CSS, Bootstrap, RestApis, Apis, Jest, Postman, Git, Git Hub, Figma, Sql, SqlAlchemy, Postrges </p>
                                <p className="content">
                                </p>

                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};
