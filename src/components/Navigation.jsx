import NavigationItem from "./utils/NavigationItem.jsx";
import {useState} from "react";

function Navigation() {
    const navigationItems = ["Overview", "Fundamentals", "News Insights", "Sentiments", "Team", "Technicals", "Tokenomics"];
    const [selected, setSelected] = useState(0);

    return (
        <div className="flex gap-8 border-b border-b-gray-300 text-sm lg:text-base overflow-x-auto flex-nowrap">
            {
                navigationItems.map((text, index) => <NavigationItem text={text} selected={index === selected}/>)
            }
        </div>
    )
}

export default Navigation;