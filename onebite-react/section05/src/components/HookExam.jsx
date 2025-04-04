import { use } from "react";
import { useInput } from "./../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

const HookExam = () => {
  const [input, onchange] = useInput();
  const [input2, onchange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onchange} />
      <input value={input2} onChange={onchange2} />
    </div>
  );
};

export default HookExam;
