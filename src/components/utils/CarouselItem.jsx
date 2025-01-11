

function CarouselItem({coin}) {
    const coinPriceInUsd = coin['data']['price'];
    const coinUsdChange24h = coin['data']['price_change_percentage_24h']['usd'];
    const positiveGrowth = coinUsdChange24h >= 0;

    return (
        <div className="flex flex-col gap-1 rounded-lg border border-gray-200 min-w-52 lg:min-w-72 p-4">
            <div className="flex gap-1 items-center text-sm lg:text-base">
                <img className="w-6 h-6" src={coin.thumb}/>
                <span>{coin.name}</span>
                <span
                    className={`rounded text-[12px] px-2 font-medium ${positiveGrowth ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}>{positiveGrowth ? "▲" : "▼"} {coinUsdChange24h.toFixed(2)}%
                </span>
            </div>
            <span className="text-xl font-semibold">${coinPriceInUsd.toFixed(2)}</span>
            <img src={coin.data.sparkline} className="h-12 lg:h-20"/>
        </div>
    )
}

export default CarouselItem;