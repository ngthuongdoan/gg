export class NFCController {
  private ndef: NDEFReader | null = null;

  loading: boolean = false;
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

    this.loading = true;
    console.log("Starting scan...");
    let timeoutId: number | undefined;

    try {
      await this.ndef.scan();
      console.log("> Scan started");

      timeoutId = setTimeout(() => {
        console.error("Scan timed out.");
        console.error("Scan timed out.");
        this.loading = false;
      }, 10000); // 10 seconds timeout

      this.ndef.addEventListener("readingerror", () => {
        clearTimeout(timeoutId);
        console.error("Argh! Cannot read data from the NFC tag. Try another one?");
        this.loading = false
      });

      this.ndef.addEventListener("reading", (event: unknown) => {
        clearTimeout(timeoutId);
        this.loading = false;
        const { message, serialNumber } = event as NDEFReadingEvent;
        alert(`> Serial Number: ${serialNumber}`);
        alert(`> Records: (${JSON.stringify(message.records, null, 2)})`);
      });
    } catch (error) {
      clearTimeout(timeoutId);
      console.error("Argh! " + error);
      this.loading = false
    }
  }

  async write(message: string) {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }

    try {
      await this.ndef.write(message);
      console.log("> Message written");
    } catch (error) {
      console.error("Argh! " + error);
    }
  }

  async clear() {
    if (!this.ndef) {
      console.error("NDEFReader is not initialized.");
      return;
    }

    try {
      await this.ndef.write({
        records: [],
      },{
        overwrite: true,
      });
      console.log("> Message written");
    } catch (error) {
      console.error("Argh! " + error);
    }
  }


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
