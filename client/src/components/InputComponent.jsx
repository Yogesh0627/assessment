/* eslint-disable react/prop-types */

const InputComponent = ({
  labelName,
  // eslint-disable-next-line no-unused-vars
  inputValue,
  inputName,
  defaultValue,
  inputPlaceHolder,
  onChange,
  inputType,
}) => {
  return (
    <div>
      <label htmlFor="">{labelName}</label>
      <br />
      <input
        type={inputType}
        onChange={onChange}
        defaultValue={defaultValue}
        name={inputName}
        placeholder={inputPlaceHolder}
        className="border-2 border-gray-400 w-full px-2 py-1.5 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default InputComponent;
