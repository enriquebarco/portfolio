import uniqid from "uniqid";
import unbound from "../assets/images/unbound.png";
import kabila from "../assets/images/kabila.png";
import breathe from "../assets/images/breathe.png";
import waltjr from "../assets/images/waltjr.png";
import cloud9 from "../assets/images/cloud-9.png";
import snake from "../assets/images/snake.png";
import TypeScript from "../assets/icons/typescript.png";
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
import FacebookLogo from "../assets/icons/facebook.png";
import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import herokuLogo from "../assets/icons/heroku.png";

export default [
    {
        "id": uniqid(),
        "name": "Unbound",
        "description": "A tech-enabled, self-serve platform that helps entrepreneurs hire and manage top talent across borders through automated compliance and payroll management",
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
        "description": "Kabila is a multi-day kitesurfing experience platform. We have listings in more than 20 countries which include luxury kite & stays, kite cruises, kite camps / lessons, downwinders, safaris and much more!",
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
    "name": "Walt Jr.",
    "description": "Walt Jr. is a budgeting application that allows users to manage their expenses",
    "image": waltjr,
    "link": "https://walt-jr-336l2.ondigitalocean.app/",
    "stack": [
        Javascript,
        TypeScript,
        ReactLogo,
        SassLogo,
        DigitalOceanLogo,
    ]
    },
    {
        "id": uniqid(),
        "name": "Cloud 9",
        "description": "A fun little weather app where you can find weather information based on zip code",
        "image": cloud9,
        "link": "https://cloud-9-app.herokuapp.com/",
        "stack": [
            Javascript,
            TypeScript,
            ReactLogo,
            SassLogo,
            AxiosLogo,
            herokuLogo


        ]
    },
    {
        "id": uniqid(),
        "name": "Snake",
        "description": "Bringing back the classic snake game for people that have way too much time on their hands",
        "image": snake,
        "link": "https://snake-me.herokuapp.com/",
        "stack": [
            Javascript,
            cssLogo,
            htmlLogo,
            herokuLogo
        ]
    },
    {
        "id": uniqid(),
        "name": "Breathe",
        "description": "I created an additional health feature for the WHOOP app as a part of a team of 3 full-stack developers and 3 UX designers in a hackathon",
        "image": breathe,
        "link": "https://github.com/jtkwan91/whoop-industry-project",
        "stack": [
            Javascript,
            ReactLogo,
            SassLogo,
        ]
        
    },
]