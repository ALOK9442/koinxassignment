import Button from "./Button.jsx";
import arrowRight from "../../assets/arrow-narrow-right.svg";

function BitcoinSection({img, heading, bg = "bg-gradient-to-r from-emerald-500 to-cyan-500"}) {
    return (
        <div className={`grid grid-cols-[112px_1fr] p-3 lg:pr-20 gap-x-4 gap-y-3 ${bg} rounded-lg overflow-hidden`}>
            <img src={img} className="row-start-1 row-span-2 object-cover h-28 w-full rounded-lg"/>
            <h2 className="text-white font-medium self-center text-xl lg:text-2xl">{heading}</h2>
            <Button text="Check Now" img={arrowRight} className="col-start-2 bg-white text-black text-sm py-1 px-3 rounded-lg border-none place-self-start font-semibold flex items-center gap-1"/>
        </div>
    )
}

export default BitcoinSection;