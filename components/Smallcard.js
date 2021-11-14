
function Smallcard({ img ,  store , delivery }) {
    return (
        <div className="flex items-center rounded-xl p-3
        m-2 mt-5 space-x-4 cursor-pointer shadow-md hover:bg-gray-100
        hover:scale-105 transition duration-200 ease-out
        hover:font-bold hover:shadow-lg">
            {/* Left */ }
            <div className="relative h-16 w-16 ">
                <img
                    className="rounded-full"
                    src={ img }
                    alt="" />
            </div>

            {/* RIGHT */ }
            <div>
                <h2>{ store }</h2>
                <h3 className="text-green-600">{ delivery }</h3>
                
            </div>
        </div>
    )
}

export default Smallcard
