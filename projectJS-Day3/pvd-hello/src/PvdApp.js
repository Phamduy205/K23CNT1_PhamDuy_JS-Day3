// import logo from './logo.svg';
import './App.css';
import PvdClassComp from './components/PvdClassComp';
import PvdFuncComp from './components/PvdFuncComp';
import PvdJsxExpression from "./components/PvdJsxExpression";


function PvdApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1> Js Phạm Văn Duy</h1>

      <PvdJsxExpression />

      <hr/>
      {/*su dung   function components*/}
      <PvdFuncComp />

      {/*su dung class components*/}
      <PvdClassComp></PvdClassComp>
    </div>
  );
}

export default PvdApp;
