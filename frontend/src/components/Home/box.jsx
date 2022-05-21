export default function Box(props) {
    return (
 <div className=" w-1/5">
     <div className="w-full h-2/4">
<img className="object-cover w-full h-full" src={props.image} alt=""/>
     </div>
     <h2 className="text-[#fff] text-center mt-8 text-lg">{props.title}</h2>
     <h2 className="text-[#fff] text-center">{props.description}</h2> 
 </div>
    )
}