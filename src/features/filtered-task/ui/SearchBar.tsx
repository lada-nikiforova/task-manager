import SearchIcon from "@mui/icons-material/Search";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="w-50 md:w-80 px-2 py-1 border-2  border-indigo-300  rounded-xl flex gap-1 items-center">
        <SearchIcon sx={{fontSize:20}}/>
        <input 
            value={value} 
            onChange={(e) => onChange(e.target.value)} 
            className="w-full font-bold px-2 focus:outline-none " 
            type="text" 
            placeholder="Search"/>
    </div>
  );
};
