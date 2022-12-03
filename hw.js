

class OSIModel {
  constructor(msg = "") {
    this._message = msg;
  }
  application(value) {
    this._message += value;
    return this;
  }
  presentation() {
    this._message += "98673552";
    return this;
  }
  session(sourceId, destId) {
    this._message += sourceId + destId;
    return this;
  }
  transport(sourcePort, destPort) {
    this._message += sourcePort + destPort;
    return this;
  }
  network(sourceIP, destIP) {
    this._message += sourceIP + destIP;
    return this;
  }
  datalink(sourceMAC, destMAC) {
    this._message += sourceMAC + destMAC;
    return this;
  }
  physical() {
    this._message = this._message
      .split("")
      .map(function (char) {
        return char.charCodeAt(0).toString(2);
      })
      .join(" ");
    return this;
  }
}
// osi model printing in the pageXOffset.

const OSIMessage = new OSIModel();
document.write(
  OSIMessage.application("Hello")
    .presentation()
    .session("120", "100")
    .transport("9000", "8000")
    .network("192.168.11.163", "192.168.11.164")
    .datalink("00-B0-D0-63-C2-26", "10-D0-B0-12-c8-20")
    .physical()._message
);