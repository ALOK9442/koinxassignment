import AboutBitcoin from "./sections/AboutBitcoin.jsx";
import Tokenomics from "./sections/Tokenomics.jsx";
import Team from "./sections/Team.jsx";
import CryptoInfo from "./sections/CryptoInfo.jsx";
import GetStartedForFree from "./GetStartedForFree.jsx";
import Sentiment from "./sections/Sentiment.jsx";
import Navigation from "./Navigation.jsx";
import Performance from "./sections/Performance.jsx";
import {useEffect, useState} from "react";
import TrendingCoins from "./sections/TrendingCoins.jsx";
import YouMayLike from "./sections/YouMayLike.jsx";

const CG_TRENDING_COINS_API_URL = "https://api.coingecko.com/api/v3/search/trending";

function MainContent() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        fetch(CG_TRENDING_COINS_API_URL)
            .then(res => res.json())
            .then(data => {
                const trendingCoins = data.coins;
                setTrendingCoins(trendingCoins);
            })
    }, []);

    return (
        <div className="grow grid bg-white-primary grid-cols-1 lg:grid-cols-[1fr_420px] py-4 gap-4">
            <div className="flex flex-col gap-4 ml-6 mr-6 lg:mr-0 lg:ml-16">
                <p className="text-sm">Cryptocurrencies {" >> "} <span className="font-medium">Bitcoin</span></p>
                <CryptoInfo />
                <Navigation />
                <Performance />
                <Sentiment />
                <AboutBitcoin />
                <Tokenomics />
                <Team />
            </div>
            <YouMayLike coins={trendingCoins}/>
            <div className="flex flex-col gap-4 lg:col-start-2 mx-6 lg:ml-0 lg:mr-16">
                <p className="text-sm hidden lg:block lg:invisible">Hidden Text</p>
                <GetStartedForFree />
                <TrendingCoins coins={trendingCoins}/>
            </div>
        </div>
    )
}

export default MainContent;