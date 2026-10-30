export default function MovieType(props) {
    return (
<div className="flex rounded-lg justify-around items-center h-[25vh] w-[20vw] ml-2 bg-[#3C4049] text-[#fff] ">
    <div className="h-1/4 bg-[gray] w-1/4"></div>
    <div className="flex flex-col justify-around w-2/4 h-full">
        <h3>{props.type}</h3>
        <h3 className="font-normal">{props.num}</h3>
        <h3 className="font-normal text-[red]">View More</h3>
    </div>
</div>
    )
}