export default function AuthLayout({children}){
    return (
        <div className="flex flex-row h-[100vh] w-full">
            <div className="lg:flex hidden align-center justify-center w-[30%] bg-[#031434] ">
<img src="/star-wars-bg.png" alt="" />
            </div>
            <div className="w-[100%] lg:w-[70%] flex align-center justify-center">
            {children}
            </div>
        </div>
    )
}