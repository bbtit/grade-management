import { useEffect, useRef } from "react";

export default function InputForm(props) {

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  },[]);

  const refocus = () => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  };

  return (
    <div>

      <label htmlFor="code" className="block text-md font-medium text-gray-800">
        授業コード
      </label>

      <div className="flex items-center justify-between mt-1">

        <div className="relative rounded-md shadow-sm">
          <input type="text" value={props.text} onChange={props.handleChange} ref={inputElement} name="code" id="code" className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-blue-400 focus:ring-blue-400 sm:text-sm" placeholder="T0000"/>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="select-year" className="sr-only">
              select-year
            </label>
            <select onChange={e => props.setYear(e.target.value)} defaultValue="2022" id="select-year" name="select-year" className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-blue-400 focus:ring-blue-400 sm:text-sm">
              <option value="2022">2022年度</option>
              <option value="2021">2021年度</option>
            </select>
          </div>
        </div>

        <button onClick={() => {
          props.handleClick();
          refocus();
          }} 
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-2 rounded-lg">
          追加
        </button>

      </div>
    </div>
  );
}