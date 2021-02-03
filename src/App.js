import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from './components/Dropdown';
const items = [
  {
    title: "What is React ?",
    content: "React is a front end javascript library",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library among enginners",
  },
  {
    title: "How do you use React ?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    lable : 'The color Red',
    value : 'red'
  },
  {
    lable : 'The color Green',
    value : 'green'
  },
  {
    lable : 'The shade of Blue',
    value : 'blue'
  }
];
export default () => {
  const [selected , setSelected ] = useState(options[0]);
  const [showDropdown , setShowDropdown] = useState(true);

  return (
      <div>
        <button onClick={()  => setShowDropdown(!showDropdown)}>
          Toggole Dropdown
          </button>
         {showDropdown ?
         
         <Dropdown 
          selected={selected}
          onSelectedChange = {setSelected}
          options = {options} 
          
          />
          :
          null
        }
      </div>
  );
};
