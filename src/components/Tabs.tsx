import { ReactNode } from "react"

interface TabsProps {
  children: ReactNode;
  buttons: ReactNode
}
export default function Tabs({children, buttons}: TabsProps) {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  )
}