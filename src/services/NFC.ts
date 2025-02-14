export class NFCController {
  private ndef: NDEFReader | null = null;

  constructor() {
    if ("NDEFReader" in window) {
      this.ndef = new NDEFReader();
    } else {
      console.error("Web NFC is not supported in this browser.");
    }
  }
  readTextRecord(records: readonly NDEFRecord[], serialNumber: string) {
    records.forEach((record) => {
      if (record.recordType === "text") {
        const textDecoder = new TextDecoder(record.encoding);
        const currentUser = JSON.parse(textDecoder.decode(record.data));
        currentUser.id = serialNumber;
        alert(JSON.stringify(currentUser, null, 2));
      }
    });
    return 
  }
  async scan() {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }

    try {
      await this.ndef.scan();

      this.ndef.addEventListener("readingerror", () => {
        console.error("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      this.ndef.addEventListener("reading", (event: unknown) => {
        const { message, serialNumber } = event as NDEFReadingEvent;
        this.readTextRecord(message.records, serialNumber);
      });
    } catch (error) {
      console.error("Argh! " + error);
    }
  }

  async write(message: Record<string, unknown>) {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }
    try {
      await this.ndef.write(JSON.stringify(message), { overwrite: true });
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
