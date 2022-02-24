import uniqid from "uniqid";
import unbound from "../assets/images/unbound.png";
import kabila from "../assets/images/kabila.png";
import breathe from "../assets/images/breathe.png"
import Javascript from "../assets/icons/javascript.png";
import ReactLogo from "../assets/icons/react.png";
import SassLogo from "../assets/icons/Sass.png";
import AxiosLogo from "../assets/icons/axios.svg";
import ExpressLogo from "../assets/icons/express.png";
import NodeLogo from "../assets/icons/node.png";
import MySQLLogo from "../assets/icons/mysql.png";
import KnexLogo from "../assets/icons/knex.png";
import StripeLogo from "../assets/icons/stripe.png";
import GoogleMapsLogo from "../assets/icons/google-maps.png";
import DigitalOceanLogo from "../assets/icons/digital-ocean.png";
import BubbleLogo from "../assets/icons/bubble.png";
import FacebookLogo from "../assets/icons/facebook.png"

export default [
    {
        "id": uniqid(),
        "name": "unbound",
        "description": "A tech enabled self-serve platform that helps entrepreneurs hire and manage top talent across borders through automated compliance and payroll management",
        "image": unbound,
        "link": "https://github.com/enriquebarco/unbound",
        "stack": [
            Javascript,
            ReactLogo,
            SassLogo,
            AxiosLogo,
            ExpressLogo,
            NodeLogo,
            MySQLLogo,
            KnexLogo,
            StripeLogo,
            GoogleMapsLogo,
            DigitalOceanLogo,
        ]
    },
    {
        "id": uniqid(),
        "name": "Kabila Group",
        "description": "Kabila is a multi-day kitesurfing experience platform. We have listings in nearly 20 countries and include luxury kite & stays, kite cruises, kite camps / lessons, downwinders, safaris, and much more!",
        "image": kabila,
        "link": "https://www.kabilagroup.com/",
        "stack": [
            BubbleLogo,
            StripeLogo,
            FacebookLogo,
        ]
    },
    {
        "id": uniqid(),
        "name": "breathe",
        "description": "Created in a hack-a-thon led by WHOOP, breath is an additional health feature for the whoop app created by a team of 3 UX designed and 3 full stack developers (including myself) that allows users to perform guided breathing exercises",
        "image": breathe,
        "link": "https://github.com/jtkwan91/whoop-industry-project",
        "stack": [
            Javascript,
            ReactLogo,
            SassLogo,
        ]
    }
    
]