import { SelectSort } from "@/shared";

interface Props {
    filters: {
        sortBy: string;
        category: string;
        status: string;
        priority: string;
        search: string;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        sortBy: string;
        category: string;
        status: string;
        priority: string;
        search: string;
    }>>;
    setIsSortOpen: (value: boolean) => void;
}

export const SortBar: React.FC<Props> = ({filters, setFilters, setIsSortOpen}) => {
    const SortTask = ['Date', 'Priority'];
    const Category = ['All Category', 'Bug', 'Feature', 'Documentation', 'Refactor', 'Test'];
    const Status = ['All Status', 'To Do', 'In Progress', 'Done'];
    const Priority = ['All Priority', 'Low', 'Medium', 'High'];

  return (
    <div className="absolute right-0 top-full grid gap-5 grid-cols-1 md:grid-cols-2 mt-2 bg-white border-2 border-indigo-200 rounded-lg shadow-lg p-4 z-50">
        <SelectSort value={filters.sortBy} options={SortTask} onChange={(val) => {setFilters((prev) => ({ ...prev, sortBy: val })); setIsSortOpen(false);}}/>
        <SelectSort value={filters.category} options={Category} onChange={(val) => { setFilters((prev) => ({ ...prev, category: val })); setIsSortOpen(false);}}/>
        <SelectSort value={filters.status} options={Status} onChange={(val) => { setFilters((prev) => ({ ...prev, status: val })); setIsSortOpen(false);}}/>
        <SelectSort value={filters.priority} options={Priority} onChange={(val) => { setFilters((prev) => ({ ...prev, priority: val })); setIsSortOpen(false);}}/>
    </div>
  );
};
