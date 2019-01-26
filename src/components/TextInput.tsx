import React from 'react';

interface IProps {
  placeholder: string;
}

const TextInput: React.FunctionComponent<IProps> = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} />;
};

export default TextInput;
