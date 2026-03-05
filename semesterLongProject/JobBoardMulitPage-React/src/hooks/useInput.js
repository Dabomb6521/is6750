import { useState } from "react";

export function useInput(defaultValue, validationFn = () => null) {
  const [data, setData] = useState(defaultValue);
  const [changed, setChanged] = useState(false);

  const errors = validationFn(data);

  const handleChange = (e) => {
    const { value } = e.target;
    setData(value);
    setChanged(true);
  };

  const reset = () => {
    setData(defaultValue);
    setChanged(false);
  };

  return [data, changed, errors, handleChange, reset];
}
