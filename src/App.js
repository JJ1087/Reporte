import logo from './logo.svg';
import './App.css';
import CryptoJS from "crypto-js";
function App() {

  const cifrar=(texto)=>{
    var textoCifrado=CryptoJS.AES.encrypt(texto,'@borjascript').toString();
    return textoCifrado;
  }

  const descifrar=(texto)=>{
    var bytes=CryptoJS.AES.decrypt(texto,'@borjascript');
    var textoDescifrado=bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado;
  }

  return (
    <div className="App">

    <p>Texto Cifrado: {cifrar("hola")}</p>
    <p>Texto Descifrado: {descifrar("U2FsdGVkX18eo2DlodR6K00VB2wkEujnWECHmEx9Bns=")}</p>
    </div>
    
  );
}
export default App;
