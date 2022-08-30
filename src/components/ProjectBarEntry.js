import getLanguageColor from "../functions/getLanguageColor";
import getCompanyColor from "../functions/getCompanyColor";

const ProjectsBarEntry = ({projectName, description, fileType, companyType, src, alt, duration, imgStyle}) => {
    const [ backgroudColor, color ] = fileType !== undefined ? 
        getLanguageColor(fileType) : getCompanyColor(companyType);

    const style = {
        color: color,
        background: backgroudColor,
    }

    const fileTypeComponent = fileType !== undefined ? (
        <h3 className="projects__bar-entry-filetype">
            {'.'+fileType}
        </h3>
    ) : null;

    return (
        <div className="portfolio__bar-entry" style={style}>
            <img
                style={{
                    "objectFit": imgStyle || 'cover',
                }}
                src={src}
                alt={alt}
                className="projects__bar-entry-image"
            />
            <div className="projects__bar-content">
                <h1>
                    {projectName}
                </h1>
                <p>
                    {description}
                </p>
            </div>
            {fileTypeComponent}
            <h3 className="project__bar-entry-duration">
                {duration}
            </h3>
        </div>
    );
};

export default ProjectsBarEntry;