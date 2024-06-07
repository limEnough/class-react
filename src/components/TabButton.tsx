interface TabButtonProps {
  isSelected: boolean;
  label: string;
  onClick?: () => void;
}

export default function TabButton({label, isSelected, ...props}: TabButtonProps) {
  return (
    <button {...props} className={isSelected ? 'active' : ''}>{label}</button>
  )
}