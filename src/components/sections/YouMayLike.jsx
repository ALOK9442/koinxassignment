import TrendingCoinCarousel from "../utils/TrendingCoinCarousel.jsx";

function YouMayLike({coins}) {
    return (
        <div className="bg-white flex flex-col gap-6 col-span-full row-start-2 px-6 lg:px-16 py-4">
            <h2 className="text-2xl mb-2 font-semibold">You May Also Like</h2>
            <TrendingCoinCarousel coins={coins}/>
            <h2 className="text-2xl mb-2 font-semibold">Trending Coins</h2>
            <TrendingCoinCarousel coins={coins}/>
        </div>
    )
}

export default YouMayLike;