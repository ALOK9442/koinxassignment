function Section({heading, children}) {
    return (
        <div className="bg-white rounded-lg flex flex-col py-6 px-5 gap-[10px] text-base">
            {heading && <h2 className="text-2xl mb-2 font-semibold">{heading}</h2>}
            {children}
        </div>
    )
}

export default Section;