import { useState } from "react";
import QRcode from "react-qr-code";
import QRCodeLink from "qrcode";
import "./App.css";

function App() {
  const [link, setLink] = useState("");
  const [qrcodeLink, setQRcodeLink] = useState("");

  function handleQRcode(ev) {
    setLink(ev.target.value);
    handleGenerateQRcodeLink(ev.target.value);
  }

  function handleGenerateQRcodeLink(link_url) {
    QRCodeLink.toDataURL(
      link_url,
      {
        width: 500,
        margin: 3,
      },
      function (err, url) {
        setQRcodeLink(url);
      }
    );
  }
  return (
    <div className="container">
      <h1 className="title">Gere seu QRCode aqui</h1>

      <QRcode value={link} />

      <input
        className="input"
        placeholder="Digite o link"
        value={link}
        onChange={(ev) => handleQRcode(ev)}
      />

      <a href={qrcodeLink} download={`QRcode.png`}>
        Download do QRCode em PNG
      </a>
    </div>
  );
}

export default App;
