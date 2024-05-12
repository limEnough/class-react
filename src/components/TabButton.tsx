interface TabButtonProps {
  isSelected: boolean;
  label: string;
  onSelect: () => void;
}

export default function TabButton({label, onSelect, isSelected}: TabButtonProps) {
  return (
    <li>
      <button onClick={onSelect} className={isSelected ? 'active' : ''}>{label}</button>
    </li>
  )
}