export class NFCController {
  private ndef: NDEFReader | null = null;

  constructor() {
    if ("NDEFReader" in window) {
      this.ndef = new NDEFReader();
    } else {
      console.error("Web NFC is not supported in this browser.");
    }
  }

  async scan() {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }

    console.log("Starting scan...");

    try {
      await this.ndef.scan();
      console.log("> Scan started");

      this.ndef.addEventListener("readingerror", () => {
        console.error("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      this.ndef.addEventListener("reading", (event: unknown) => {
        const { message, serialNumber } = event as NDEFReadingEvent;
        alert(JSON.stringify(event, null, 2));
        alert(`> Serial Number: ${serialNumber}`);
        alert(`> Records: (${JSON.stringify(message.records, null, 2)})`);
      });
    } catch (error) {
      console.error("Argh! " + error);
    }
  }

  async write(message: string) {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }
    try {
      await this.ndef.write(message);
    } catch (error) {
      console.log("Argh! " + error);
    }
  };

  async makeReadOnly() {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }

    try {
      await this.ndef.makeReadOnly();
      console.log("> NFC tag has been made permanently read-only");
    } catch (error) {
      console.error("Argh! " + error);
    }
  }
}
