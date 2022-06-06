import React,{ useState } from "react";
import downarrow from '../assets/images/down-arrow-svgrepo-com.svg'
import uparrow from '../assets/images/up-arrow-svgrepo-com.svg'

const DropdownItem = ({ item }) => {

    const [open, setOpen] = useState(false)

  return (
    <li>
      <div className="relative">
        <button className="hover:border-b-4 hover:border-white" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>{item.title}</button>
        <img className="w-[17px] ml-2 inline cursor-pointer" src={open? uparrow : downarrow} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}/>
        <div className={`${open? 'flex' : 'hidden'} flex-col rounded-md  gap-2 p-4 absolute bg-blue-100 text-black top-7 left-1 w-[9rem] shadow-lg`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
          {item.links.map((link, index) => (
            <a key={index} href="#" className="hover:font-semibold">
              {link}
            </a>
          ))}
        </div>
      </div>
    </li>
  );
};

export default DropdownItem;
