import Button from "./utils/Button.jsx";
import arrowImg from "../assets/arrow-narrow-right.svg";
import getStartedImg from "../assets/get_started_img.svg";

function GetStartedForFree() {
    return (
        <div className="text-white bg-[#2870ea] rounded-lg flex gap-4 text-center flex-col py-8 px-8 leading-loose">
            <h2 className="text-xl font-bold leading-8">Get Started with KoinX <br /> for FREE</h2>
            <p className="text-[12px]">With our range of features that can equip for free, KoinX allows you to be more educated and aware of your tax reports</p>
            <img src={getStartedImg} className="w-[250px] place-self-center"/>
            <Button text="Get Started for FREE" className="bg-white text-black text-sm py-2.5 px-3.5 rounded-lg border-none self-center font-semibold flex items-center gap-1" img={arrowImg}/>
        </div>
    )
}

export default GetStartedForFree;