export const categoryColors: Record<string, string> = {
  Bug: 'bg-pink',
  Feature: 'bg-blue',
  Documentation: 'bg-lime',
  Refactor: 'bg-violet',
  Test: 'bg-coral',
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