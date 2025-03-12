
const sizes = { height: "h-1/2", width: "w-full" };
const slogan = {
    title: "We Make Better Things In A Better Way",
    description: "By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about."
}

function Slogan() {
  return (
    

    <div className="w-full h-screen flex">
       <div className={`${sizes.height} ${sizes.width} flex justify-center items-center bg-rose-300`}> 
        <div className="w-1/2 h-auto flex flex-col items-center text-center">
        <div>{slogan.title}</div>
        <div>{slogan.description}</div>
        </div>
       </div>
    </div>
    
  )
}

export default Slogan