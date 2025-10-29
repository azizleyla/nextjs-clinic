export default function CardSkeleton() {
    return (

        <div className="w-[380px] p-4 border rounded-lg shadow flex flex-col gap-3">
            <div className="h-[380px]  bg-gray-300 rounded animate-pulse">
            </div>
            <div className="h-5 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
            <div className="h-3 bg-gray-300 rounded w-full animate-pulse"></div>
        </div>
    );
}
