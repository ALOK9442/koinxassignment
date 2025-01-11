function TrendingCoin({coin}) {
    const coinUsdChange24h = coin['data']['price_change_percentage_24h']['usd'];
    const positiveGrowth = coinUsdChange24h >= 0;

    return (
        <div className="flex gap-2 items-center">
            <img src={coin.thumb} className="w-7 h-7 rounded-full"/>
            <span className="grow font-medium">{coin.name}</span>
            <span
                className={`rounded-lg text-[12px] px-2 font-medium ${positiveGrowth ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>{positiveGrowth ? "▲" : "▼"} {coinUsdChange24h.toFixed(2)}%
            </span>
        </div>
    )
}

export default TrendingCoin;