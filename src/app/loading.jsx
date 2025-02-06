import { Loader2 } from "lucide-react"

const loading = () => {
    return (
        <div
            className="flex justify-center items-center min-h-[50vh] "
        >
            <Loader2 className="mr-2 h-10 w-10 animate-spin" />
        </div>
    )
}
export default loading