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
            <Button variant={"secondary"}><Github /> View Source</Button>
        </div>
    )
}

export default Header