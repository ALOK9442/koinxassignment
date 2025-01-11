function PerformanceMeter({value = false}) {
    return (
        <div className="h-1 rounded-full relative bg-black self-center text-gray-900 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 to-green-500">
            {
                value && (
                    <div className="flex flex-col items-center gap-0.5 lg:gap-1 absolute top-full left-2/4 lg:left-3/4">
                        <span>▲</span>
                        <span>$46.627.83</span>
                    </div>
                )
            }
        </div>
    )
}

export default PerformanceMeter;