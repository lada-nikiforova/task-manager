import React from 'react'
interface Props {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}
export const SelectSort: React.FC<Props> = ({options, value, onChange}) => {
  return (
    <select value={value} onChange={(e) => onChange?.(e.target.value)} 
      className='outline-none border-1 rounded-md p-2 cursor-pointer border-indigo-300  hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-300  active:border-indigo-400 transition-all duration-300 focus:outline-none focus:border-indigo-400' id="sorting" name="sorting">
    {options.map(t=>(
        <option value={t}>{t}</option>
    ))}
    </select>
  )
}

export default SelectSort
