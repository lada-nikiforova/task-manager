import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
export const Header = () => {
  return (
    <header className="w-full text-blue-500 mb-6 font-bold px-10 py-2 text-3xl border-b-3  border-blue-200 flex items-center justify-start gap-2">
        <ChecklistRtlOutlinedIcon sx={{fontSize:38}}/>
        <h1>TaskManager</h1>
    </header>
  )
}

export default Header
