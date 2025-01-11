import CarouselItem from "./CarouselItem.jsx";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";
import {useEffect, useRef, useState} from "react";


function TrendingCoinCarousel({coins}) {
    const [leftArrowVisible, setLeftArrowVisible] = useState(false);
    const [rightArrowVisible, setRightArrowVisible] = useState(false);

    const contRef = useRef();

    const handleLeftArrowClick = () => {
        contRef.current.scrollTo({
            top: 0,
            left: contRef.current.scrollLeft - 500,
            behavior: "smooth"
        });
    }

    const handleRightArrowClick = () => {
        contRef.current.scrollTo({
            top: 0,
            left: contRef.current.scrollLeft + 500,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        const scrollHandler = () => {
            setLeftArrowVisible(contRef.current.scrollLeft > 0);
            setRightArrowVisible((contRef.current.offsetWidth + contRef.current.scrollLeft ) < contRef.current.scrollWidth);
        };

        contRef.current.onscroll = scrollHandler;
        setLeftArrowVisible(contRef.current.scrollLeft > 0);
        setRightArrowVisible((contRef.current.offsetWidth + contRef.current.scrollLeft ) < contRef.current.scrollWidth);

        return () => contRef.current.onscroll = null;
    }, [coins]);

    return (
        <div className="relative">
            {leftArrowVisible &&
                <div
                    onClick={handleLeftArrowClick}
                    className="cursor-pointer shadow absolute left-0 top-2/4 -translate-y-2/4 translate-x-2/4 bg-white w-4 h-4 rounded-full flex items-center justify-center">
                    <img src={chevronLeft}/>
                </div>
            }
            {rightArrowVisible &&
                <div
                    onClick={handleRightArrowClick}
                    className="cursor-pointer shadow z-10 absolute right-0 top-2/4 -translate-y-2/4 -translate-x-2/4 bg-white w-4 h-4 rounded-full flex items-center justify-center">
                    <img src={chevronRight}/>
                </div>
            }
            <div ref={contRef} className="flex gap-4 flex-nowrap overflow-hidden">

                {
                    coins.map(coin => (
                        <CarouselItem coin={coin.item} key={coin.item.coin_id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TrendingCoinCarousel;