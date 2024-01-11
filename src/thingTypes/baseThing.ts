import { context0x0006 } from "../cluster/0x0006";
import { matterSecurity } from "../matterSecurityTD";

//base thing with pre defined values for all device types
export const baseThing: { [key: string]: object } = {
  "@context": [
    "https://www.w3.org/2019/wot/td/v1",
    "https://www.w3.org/2022/wot/td/v1.1",
    {
      matter: "https://github.com/project-chip/connectedhomeip",
      ...context0x0006
    }
  ],
  //...matterSecurity
}
