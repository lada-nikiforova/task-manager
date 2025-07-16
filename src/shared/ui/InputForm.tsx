import { TextareaAutosize } from "@mui/material";

interface Props {
  label: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

export const InputForm: React.FC<Props> = ({ label, value, placeholder, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
        <label className="font-bold mb-1">{label}</label>
        <TextareaAutosize value={value} placeholder={placeholder} onChange={(e) => onChange?.(e.target.value)} className="bg-white overflow-visible border-2 border-indigo-300 focus:outline-none focus:border-indigo-400  hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-300  active:border-indigo-400 transition-all duration-300 rounded-2xl px-4 py-2 resize-none shadow-xl" minRows={1}/>
    </div>
  )
}

export default InputForm
