import Section from "../utils/Section.jsx";
import TrendingCoin from "../utils/TrendingCoin.jsx";

function TrendingCoins({coins}) {
    const topThreeCoins = coins.slice(0, 3);

    return (
        <Section heading="Trending Coins (24h)">
            <div className="flex flex-col gap-4">
                {
                    topThreeCoins.map(coin => (
                        <TrendingCoin coin={coin.item} key={coin.item.coin_id}/>
                    ))
                }
            </div>
        </Section>
    )
}

export default TrendingCoins;