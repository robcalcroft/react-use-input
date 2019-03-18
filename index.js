import { useState } from 'react';

export default function useInput(initialState = '', valueKey = 'value') {
  const [value, setValue] = useState(initialState);

  function setValueFromEvent(event) {
    setValue(event.target[valueKey]);
  }

  return [value, setValueFromEvent, setValue];
}
