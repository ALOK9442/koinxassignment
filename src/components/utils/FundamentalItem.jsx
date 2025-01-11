function FundamentalItem({heading, children}) {
    return (
        <div className="flex font-medium border-b border-b-gray-300 mb-4 items-center">
            <span className="text-gray-500">
                {heading}
            </span>
            <span className="ml-auto pb-4 text-right">
                {children}
            </span>
        </div>
    )
}

export default FundamentalItem;