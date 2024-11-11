import Logo from "./Logo"

interface FooterProps {
    className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={className}>
            <Logo />
            <p className="text-sm font-medium text-muted-foreground">&copy; 2025 xChangeHub. All Rights Reserved.</p>
        </div>
    )
}

export default Footer

