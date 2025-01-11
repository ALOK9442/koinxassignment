import Section from "../utils/Section.jsx";
import SentimentEvent from "../utils/SentimentEvent.jsx";
import trendingImg from "../../assets/trending.svg";



function Sentiment() {
    return (
        <Section heading="Sentiment">
            <h3 className="text-xl font-semibold text-gray-600">Key Events 🅘</h3>
            <div className="flex gap-4 flex-nowrap overflow-x-auto">
                <SentimentEvent/>
                <SentimentEvent icon={trendingImg} contBg="bg-green-50" iconBg="bg-green-500"/>
            </div>
            <h3 className="text-xl font-semibold text-gray-600">Analyst Estimates 🅘</h3>
            <div className="grid grid-cols-[100px_1fr] gap-x-4 lg:gap-x-10 my-4">
                <div className="h-[100px] rounded-full bg-green-100 text-green-500 flex gap-0.5 items-center justify-center">
                    <span className="text-3xl font-semibold">76</span><span>%</span>
                </div>
                <div className="flex flex-col gap-4 text-sm text-gray-500 font-medium">
                    <div className="flex gap-3 items-center">
                        <span>Buy</span>
                        <span className="grow-[0.76] rounded-sm bg-green-500 h-2"></span>
                        <span>76%</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span>Hold</span>
                        <span className="grow-[0.08] rounded-sm bg-gray-200 h-2"></span>
                        <span>8%</span>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span>Sell</span>
                        <span className="grow-[0.16] rounded-sm bg-red-500 h-2"></span>
                        <span>16%</span>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Sentiment;