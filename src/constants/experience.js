import PortfolioBarEntry from '../components/ProjectBarEntry';

const experience = [
    <PortfolioBarEntry
        projectName={"TeleTracking Internship"}
        description={"Worked on the Productivity Engineering team, creating developer tools and contributing to a front-end framework."}
        src={"https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1506072120/uwinjs0oa1ekywa8so5o.png"}
        alt={"teletracking"}
        companyType={"tele"}
        duration={"May - August 2022"}
    />,
    <PortfolioBarEntry
        projectName={"Programming Livestreamer"}
        description={"Host an educational development stream, explaining code and collaborating with viewers."}
        src={"https://iconape.com/wp-content/png_logo_vector/twitch-2.png"}
        alt={"twitch"}
        companyType={"twitch"}
        duration={"Since May 2020"}
    />,
    <PortfolioBarEntry
        projectName={"Game Developer"}
        description={"Create a multitude virtual experiences that have reached thousands of unique users."}
        src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png"}
        alt={"roblox"}
        companyType={"blox"}
        duration={"Since May 2020"}
    />,
];

export default experience;