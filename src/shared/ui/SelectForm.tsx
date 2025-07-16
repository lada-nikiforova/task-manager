import { taskCategories, type TaskCategory } from '@/entities/task';

interface Props {
    value?: TaskCategory;
    onChange?: (value: TaskCategory) => void;
  }
export const SelectForm: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
        <label className=" font-bold mb-1">Category</label>
        <select
            id="contactMethod"
            name="contactMethod"
            value={value}
            onChange={(e) => onChange?.(e.target.value as TaskCategory)}
            className=" px-4 py-2 cursor-pointer bg-white border-2 border-gray-300 focus:outline-none focus:border-indigo-400 rounded-2xl shadow-xl">
                {taskCategories.map(cat =>(
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
      
    </div>
  )
}

export default SelectForm
