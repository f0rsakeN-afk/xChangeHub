import Footer from "@/components/myComponents/Footer"
import Header from "@/components/myComponents/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout