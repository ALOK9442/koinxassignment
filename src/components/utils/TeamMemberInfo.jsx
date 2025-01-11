function TeamMemberInfo({src, name}) {
    return (
        <div className="bg-[#e8f4fd] rounded-lg grid gap-y-1 gap-x-4 py-4 px-5 grid-cols-1 lg:grid-cols-[100px_1fr]">
            <img className="object-cover max-w-full max-h-full rounded-lg lg:min-w-full h-28 place-self-center" src={src}/>
            <p className="self-center row-start-4 lg:row-start-1 lg:row-end-4 lg:col-start-2 col-span-full">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus ea earum et molestias necessitatibus nesciunt nulla, rem ut voluptates? Aut enim, error eum illum laborum tenetur totam ut! Asperiores corporis cupiditate deserunt distinctio fugiat ipsa possimus, praesentium quas? Amet, ducimus exercitationem explicabo incidunt inventore ipsa itaque, laboriosam molestias, natus officiis perferendis quae ullam vel! Dicta doloremque magni sint voluptatum?</p>
            <h3 className="text-center row-start-2 text-sm font-bold">{name}</h3>
            <span className="text-[12px] text-center row-start-3 lg:col-start-1 lg:col-end-2">Designation here</span>
        </div>
    )
}

export default TeamMemberInfo;