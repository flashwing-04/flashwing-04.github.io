import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, imgUrl, link }) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-img-bx">
                <a href={link} target="blank">
                    <img src={imgUrl} alt="project thumbnail"/>
                    <div className="proj-text">
                        <h4>{title}</h4>
                    </div>
                </a>
            </div>
        </Col>
    )
}