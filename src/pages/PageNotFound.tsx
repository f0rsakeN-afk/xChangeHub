import { Button } from '@/components/ui/button'
import { GoBack } from '@/utils/GoBack'
import { ArrowLeft } from 'lucide-react'

const PageNotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center space-y-4 px-2 text-center">
            <h2 className=" font-medium text-muted-foreground">The route you're trying to access could not be found.</h2>
            <Button onClick={GoBack()}> <ArrowLeft />Go Back</Button>
        </div>
    )
}

export default PageNotFound;