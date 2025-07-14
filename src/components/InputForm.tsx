import { TextareaAutosize } from "@mui/material";

interface Props {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}

const InputForm: React.FC<Props> = ({ label, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
        <label className="font-bold mb-1">{label}</label>
        <TextareaAutosize value={value} onChange={(e) => onChange?.(e.target.value)} className="bg-white overflow-visible border-2 border-gray-300 focus:outline-none focus:border-indigo-400 rounded-2xl px-4 py-2 resize-none shadow-xl" minRows={1}/>
    </div>
  )
}

export default InputForm
