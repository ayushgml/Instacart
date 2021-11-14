function Largecard({ title , matter , img }) {
    return (
        <div className="cursor-pointer hover:scale-105 
        transform transition duration-300 ease-out mb-10
        rounded-xl bg-gray-100 min-w-full">
            <h1 className="text-3xl m-5">{ title }</h1>
            <h2 className="text-l font-light m-5 text-light">{ matter }</h2>
            <img
                className="rounded-b-xl"
                src={ img }
                alt=""
            />
        </div>
    )
}

export default Largecard
