import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

// MEMO: proxy props는 해당 section 처럼 wrapper 역할의 컴포넌트에 사용하기 적합하다.
export default function Section({title, children, ...props}: SectionProps) {
  // *매개변수 설정에서 객체구조분해는 데이터를 객체화 하는데 사용됨
  return (
    // *데이터를 분해 & 할당하는데 사용됨
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}