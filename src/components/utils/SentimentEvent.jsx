import newsImg from "../../assets/news.svg";


function SentimentEvent({contBg = "bg-blue-50", icon = newsImg, iconBg = "bg-blue-500"}) {
    return (
        <div className={`grid grid-cols-[44px_1fr] gap-x-3 gap-y-1 p-3 pb-6 pr-4 auto-rows-max text-sm min-w-[450px] rounded-lg ${contBg}`}>
            <div className={`rounded-full h-[44px] text-white ${iconBg} flex items-center justify-center`}>
                <img src={icon}/>
            </div>
            <h3 className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, iusto?
            </h3>
            <div></div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores corporis distinctio explicabo, facere facilis quidem ratione tempora tempore ullam. A consectetur corporis nihil odit quo repellendus sint ullam vitae.
            </p>
        </div>
    )
}

export default SentimentEvent;