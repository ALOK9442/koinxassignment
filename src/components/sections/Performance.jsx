import Section from "../utils/Section.jsx";
import FundamentalItem from "../utils/FundamentalItem.jsx";
import PerformanceMeter from "../utils/PerformanceMeter.jsx";

const fundamentals = [
    {
        heading: "Bitcoin Price",
        value: <>$16,815.46</>
    },
    {
        heading: "Market Cap Rank",
        value: <>#1</>
    },
    {
        heading: "24h Low / 24h High",
        value: <>$16,382.07 / $16,874.12</>
    },
    {
        heading: "Market Cap Dominance",
        value: <>38.343%</>
    },
    {
        heading: "7d Low / 7d High",
        value: <>$16,382.07 / $16,874.12</>
    },
    {
        heading: "Volume / Market Cap",
        value: <>0.0718</>
    },
    {
        heading: "Trading Volume",
        value: <>$23,249,202,782</>
    },
    {
        heading: "All time High",
        value: <>
            $69,044.77 <span className="text-red-500">&nbsp;-75.6%</span> <br />
            <span className="text-sm font-normal">Nov 10, 2021 (about 1 year)</span>
        </>
    },
    {
        heading: "Market Cap",
        value: <>$323,507,290,047</>
    },
    {
        heading: "All time Low",
        value: <>
            $67.81 <span className="text-green-500">&nbsp;24729.1%</span> <br />
            <span className="text-sm font-normal">Jul 06, 2013 (about 9 years)</span>
        </>
    },

]

function Performance() {
    return (
        <Section heading="Performace">
            <div className="grid grid-cols-performance text-[12px] gap-y-4 gap-x-4 my-2 text-gray-500">
                <div className="flex flex-col">
                    <span>Today's Low</span>
                    <span className="font-medium text-gray-900">46, 930.22</span>
                </div>
                <PerformanceMeter value={true}/>
                <div className="flex flex-col items-center">
                    <span>Today's High</span>
                    <span className="font-medium text-gray-900">46, 930.22</span>
                </div>
                <div className="flex flex-col">
                    <span>52W Low</span>
                    <span className="font-medium text-gray-900">46, 930.22</span>
                </div>
                <PerformanceMeter />
                <div className="flex flex-col items-center">
                    <span>52W High</span>
                    <span className="font-medium text-gray-900">46, 930.22</span>
                </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-600">Fundamentals 🅘</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-sm lg:text-base gap-x-28 mt-4 mr-4">
                {
                    fundamentals.map(item => (
                        <FundamentalItem heading={item.heading}>
                            {item.value}
                        </FundamentalItem>
                    ))
                }
            </div>
        </Section>
    )
}

export default Performance;