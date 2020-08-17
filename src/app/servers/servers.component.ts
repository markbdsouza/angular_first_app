import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created";
  serverName: string = "asd";
  isServerCreated: boolean = false;
  username: string = "";
  servers: Array<string> = ["TestServer1", "TestServer2"];
  isParaVisible: boolean = true;
  logClick = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `server was created. Name is ${this.serverName}`;
    console.log(this.servers);
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  onDisplayDetailsClick() {
    this.isParaVisible = !this.isParaVisible;
    this.logClick.push(new Date());
  }

  getBgColor() {
    return this.logClick.length > 5 ? "blue" : "transparent";
  }
}
