"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Bai10() {
    return (<div>
      <h1>Bài 10</h1>
      <div className='w-[700px] border-solid border-2 border-black-600'>
        <b>Username</b>
        <br />
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[650px]" type="text" placeholder='Enter'/>
        <br />
        <b>Password</b>
        <br />
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline w-[650px]" id="password" type="password" placeholder="Enter your password"/>
        <p>Your password is between 4 and 12 characters</p>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Input Text Label
        </label>
        <input className="shadow appearance-none rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-[650px] border-solid border-2 border-red-600" id="email" type="email" placeholder="Enter your text" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
        <span className="absolute right-0 top-0 mt-2 mr-3">
          <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </span>
        <p className="text-red-500 text-xs italic">Error message informing me of a problem</p>
        <br />
        <div className="inline-flex items-center">
          <input className="form-checkbox h-5 w-5 text-gray-600" type="checkbox" id="inlineCheckbox1" value="option1"/>
          <label className="ml-2 text-gray-700" htmlFor="inlineCheckbox1">Remember me</label>
        </div>
        <br /><br />
        <div className="inline-flex items-center">
          <input className="form-checkbox h-5 w-5 text-gray-600" type="radio" id="inlineCheckbox1" value="option1"/>
          <label className="ml-2 text-gray-700" htmlFor="inlineCheckbox1">Radio selection 1</label>
        </div>
        <br /><br />
        <div className="inline-flex items-center">
          <input className="form-checkbox h-5 w-5 text-gray-600" type="radio" id="inlineCheckbox1" value="option1"/>
          <label className="ml-2 text-gray-700" htmlFor="inlineCheckbox1">Radio selection 2</label>
        </div>
        <br /><br />
        <div className="inline-flex items-center">
          <input className="form-checkbox h-5 w-5 text-gray-600" type="radio" id="inlineCheckbox1" value="option1"/>
          <label className="ml-2 text-gray-700" htmlFor="inlineCheckbox1">Radio selection 3</label>
        </div>
        <br /><br />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Dropdown Title
        </label>
        <select name="" id="" className='w-[650px] border-solid border-3 border-blue-700 h-[40px] rounded-lg'>
            <option value="Dropdown option">Dropdown option</option>
            <option value="Dropdown option">Dropdown option 1</option>
            <option value="Dropdown option">Dropdown option 2</option>
        </select>
        <br /><br /><br /><br /><br />
        <div className='w-[650px] flex justify-around'>
            <button className='w-[120px] h-[45px] border-solid border-2 border-blue-700 text-blue-400 rounded-lg'>Cancel</button>
            <button className='w-[120px] h-[45px] border-solid border-2 border-blue-700 bg-blue-700 text-white rounded-lg'>Next</button>
        </div>
      </div>
    </div>);
}
exports.default = Bai10;
