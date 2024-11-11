import { Github } from "lucide-react"
import { Button } from "../ui/button"
import Logo from "./Logo"

const Header = () => {
    return (
        <div className="flex items-center justify-between container mx-auto h-[3rem]  py-.5 px-2">
            <Logo />
            //Some items will be added later on
            <Button variant={"secondary"}><Github /> View Source</Button>
        </div>
    )
}

export default Header