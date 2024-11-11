import Footer from "@/components/myComponents/Footer"
import Header from "@/components/myComponents/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header className="flex-shrink-0 flex items-center justify-between container mx-auto h-[3rem]  py-.5 px-2 lg:px-0" />
            <main className="flex-grow overflow-auto">
                <Outlet />
            </main>
            <Footer className="flex-shrink-0 flex flex-col md:flex-row items-center justify-between container mx-auto py-2 px-2 lg:px-0" />
        </div>
    )
}

export default Layout