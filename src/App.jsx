import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-sm bg-white
              px-3 py-2 rounded-full">
                    <button 
                     onClick={()=>setColor("red")}
                     className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"red"}}>Red</button>

                    <button
                    onClick={()=>setColor("blue")}
                     className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"blue"}}>Blue</button>

                    <button
                    onClick={()=>setColor("pink")}
                     className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"pink"}}>Pink</button>

                    <button
                    onClick={()=>setColor("white")}
                     className="outline-none px-4 py-1 rounded-full border-black-400 border-2 "
                     style={{backgroundColor:"White"}}>White</button>

                    <button
                    onClick={()=>setColor("black")}
                     className="outline-none px-4 py-1 rounded-full text-white"
                     style={{backgroundColor:"Black"}}>Black</button>

                    <button
                    onClick={()=>setColor("purple")}
                     className="outline-none px-4 py-1 rounded-full  text-white"
                     style={{backgroundColor:"purple"}}>purple</button>

                    <button
                    onClick={()=>setColor("yellow")}
                     className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"yellow"}}>Yellow</button>

                    <button
                    onClick={()=>setColor("gray")}
                     className="outline-none px-4 py-1 rounded-full  text-white"
                     style={{backgroundColor:"gray"}}>Gray</button>

                    <button
                    onClick={()=>setColor("Lavender")}
                     className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"lavender"}}>Lavender</button>

                    <button 
                    onClick={()=>setColor("green")}
                    className="outline-none px-4 py-1 rounded-full"
                     style={{backgroundColor:"green"}}>Green</button>
              </div> 
          </div>
      </div>
    </>
  )
}

export default App
