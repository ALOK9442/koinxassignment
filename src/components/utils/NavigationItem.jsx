function NavigationItem({text, selected = false}) {
    return (
        <div className={`font-medium pb-2 cursor-pointer text-nowrap ${selected ? "text-accent border-b-4 border-b-accent": "text-gray-700"}`}>
            {text}
        </div>
    )
}

export default NavigationItem;