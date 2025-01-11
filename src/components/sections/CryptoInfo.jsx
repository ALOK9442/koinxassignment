import Section from "../utils/Section.jsx";
import Chart from "../Chart.jsx";
import {useEffect, useState} from "react";
import bitcoinImg from "../../assets/bitcoin-logo.svg";
import commaNumber from "comma-number";

const COIN_GECKO_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";

function CryptoInfo() {
    const [cryptoInfo, setCryptoInfo] = useState({
        dollarValue: 0,
        rupeeValue: 0,
        usdChangeIn24h: 0,
        positiveGrowth: true
    });

    useEffect(() => {
        fetch(COIN_GECKO_URL)
            .then(res => res.json())
            .then(data => {
                const bitcoinData = data.bitcoin;

                setCryptoInfo({
                    dollarValue: bitcoinData.usd,
                    rupeeValue: bitcoinData.inr,
                    usdChangeIn24h: bitcoinData.usd_24h_change,
                    positiveGrowth: bitcoinData.usd_24h_change >= 0
                })
            })
    }, []);

    return (
        <Section>
            <div className="flex gap-2 items-center">
                <img className="w-7 h-7" src={bitcoinImg} />
                <h3 className="font-semibold text-xl">Bitcoin</h3>
                <span className="uppercase text-gray-500 text-[12px] font-semibold">BTC</span>
                <span className="text-white bg-[#768396] rounded-lg py-2 px-2 text-sm ml-4">Rank #1</span>
            </div>
            <div className="grid grid-cols-crypto-info gap-x-4 gap-y-2 mt-2 items-center">
                <span className="text-2xl font-semibold">${commaNumber(cryptoInfo.dollarValue)}</span>
                <span className={`rounded-lg text-[12px] px-2 font-medium ${cryptoInfo.positiveGrowth ? "bg-green-100 text-green-500": "bg-red-100 text-red-500"}`}>{cryptoInfo.positiveGrowth ? "▲" : "▼"} {cryptoInfo.usdChangeIn24h.toFixed(2)}%</span>
                <span>(24H)</span>
                <span className="font-medium text-base">₹{commaNumber(cryptoInfo.rupeeValue)}</span>
            </div>
            <hr/>
            <Chart />
        </Section>
    )
}

export default CryptoInfo;