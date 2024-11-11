import { Github } from "lucide-react"
import { Button } from "../ui/button"
import Logo from "./Logo"

interface HeaderProps {
    className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
    return (
        <div className={className}>
            <Logo />
            {/* //Some items will be added later on */}
            <Button variant={"secondary"}>
                <a href="https://github.com/f0rsakeN-afk/xChangeHub" className="flex items-center gap-2">
                    <Github /> View Source
                </a>
            </Button>
        </div>
    )
}

export default Header