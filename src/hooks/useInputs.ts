import { ChangeEvent, useState } from "react";

function useInputs<T>(initialState: T) {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs(initialState);
  };
  return [inputs, onChange, onReset] as [T, () => void, () => void];
}

export default useInputs;
