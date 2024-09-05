import React, { useContext} from 'react'
import { shopcontext } from '../../ContextApi'

function MenuIconList() {
  const {menuIcons,selected,SetSelected} = useContext(shopcontext)


  function handleclick(nam){
    SetSelected(nam)
  }
        


  return (
    <>
    <div className='flex md:justify-center overflow-x-scroll gap-[30px] px-[15px] menu-nav w-full'>

      {menuIcons.map(item => {
        return(

        <div key={item.id} 
        className={`border-2 flex flex-col items-center gap-[10px] justify-center ${item.name=== selected ? "border-underline text-underline bg-underline/20" : "border-transparent  text-black" }  font-jost text-md font-medium rounded-[10px] px-[20px] py-[10px] min-w-[85px]`} 
        onClick={()=>{handleclick(item.name)}}>


          <img src={item.icon} alt="" className='w-[50px] min-w-[50px]' />
          <p className='text-center '>{item.name}</p>

        </div>

        )




      })}

   
    
    

    </div>
    </>
  )
}

export default MenuIconList