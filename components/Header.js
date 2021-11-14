
function header() {
    return (
        <header className="sticky top-0 z-50 grid
        grid-cols-2 bg-white shadow-md py-5 px-5
        md: px-10 ">

            <div className="flex items-center">
                <img className="w-40" src="https://www.instacart.com/assets/beetstrap/brand/logo@3x-c01b12eeb889d8665611740b281d76fa1cf88d06bcbd8a50dbcae6baecdbe9da.png" alt=""/>
            </div>

            <div className="flex items-center space-x-4 justify-end
            text-gray-600">

                <div className="flex space-x-1 rounded-full p-1 cursor-pointer font-semibold">
                    <h1>Log in</h1>
                </div>
                
                <div className="flex bg-green-600 space-x-1 rounded-full p-2 pl-4 pr-4 cursor-pointer text-white font-semibold">
                    <h1>Sign Up</h1>
                </div>
            </div>
            
            
        </header>
    )
}

export default header
