export const categoryColors: Record<string, string> = {
  Bug: 'bg-pink-200 text-pink-800',
  Feature: 'bg-blue-100 text-blue-800',
  Documentation: 'bg-yellow-100 text-yellow-800',
  Refactor: 'bg-purple-200 text-purple-800',
  Test: 'bg-green-200 text-green-800',
};

export const priorityColors: Record<string, string> = {
    Low: 'bg-yellow text-yellowTxt',
    Medium: 'bg-green text-greenTxt',
    High: 'bg-red text-redTxt',
};

export const statusColors: Record<string, string> = {
    'To Do' : 'bg-yellow text-yellowTxt',
    'In Progress': 'bg-red text-redTxt',
    Done: 'bg-green text-greenTxt',
}