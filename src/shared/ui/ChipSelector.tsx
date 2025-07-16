
type Props<T extends string> = {
    label: string;
    options: T[];
    value?: T;
    onChange?: (val: T) => void;
};
export const ChipSelector = <T extends string> ({ label, options, value, onChange }: Props<T>) => {
  return (
    <div className=" mb-4 ">
    <p className="mb-1 font-bold">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map(status =>(
            <span onClick={() => onChange?.(status)} key={status} className={`border-2 border-indigo-500 font-bold rounded-full text-indigo-500 px-2 py-1 md:px-4 md:py-2 cursor-pointer shadow-sm
                ${status === value ? 'bg-indigo-500 text-white '
                : 'bg-indigo-200 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-300  active:bg-indigo-500 hover:text-white active:text-white transition-all duration-300'}`} 
                >{status}</span>))}
      </div>
    </div>
  )
}

export default ChipSelector
