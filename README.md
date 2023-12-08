# 4LOM
## Introduction
This project is a proof of concept for a direct Matter to Web of Things (WoT) mapping. At the moment (12/2023) our cloud infrastructure is working with a Web of Things data model. The Smart Home Stack on our Gateways is using the data model from the manufacturer and translates them into the Eclipse Smart Home (ESH) data model. From the ESH model the Cloud Connector then translates it to WoT.
<br>The new Smart Home Application Layer Standard Matter is on the market and with that a lot of new devices from many manufacturer that can be supported with just one protocol that needs to be implemented.
<br>The current runtime is mapping Matter to ESH and then to WoT because of the historic runtime. This leads to the question and assumption that a direct mapping would be more efficient.

## Naming
The name 4LOM comes from a protocol droid from Star Wars. He overrode his programming (hope this one goes well...) and become a bounty hunter. His most famous occurs was in episode V, where he was hired by Darth Vader to capture the Millennium Falcon. <br> [more](https://starwars.fandom.com/wiki/4-LOM)

## Data model overview
The Matter data model is structured in different layers of abstraction. On the top is the device itself, which is a physical thing. On the next layer is the node, which is the software abstraction of a physical thing, it receives a Ipv6 address. The end of the communication is the Endpoint, it can be compared with a port in the TCP/IP. An Endpoint implements a device type, which is described by the Matter Standard. Depending on the device type a Endpoint has to implement clusters, which are also specified by the standard. A cluster comes with attributes and commands, that it supports.
<br>The Web of Things data model is generally structured in properties, actions and events. It has not so many layers but allows more individual description of the attributes because of its semistructured format.
<br> This is a picture of the two models:
![image of the structure](docs/Runtime%20Architecture.jpg)

## Concept
As shown above the two models are different in many aspects. For the mapping of the Matter model to the WoT model every endpoint gets an WoT Device abstraction. This is because of the encapsulated functionality. An endpoint defines a Device Type, which is what we want to abstract and describe in WoT.
<br>The attributes are mapped to properties and the commends to actions. This is working well because WoT uses similar data types. A problem that occurs is the similar naming of attributes and actions in different cluster definitions. This is no problem for Matter because of the different layers but as WoT has not that many layers it is leading to problems. The solution is simple, the naming of an attribute or command has to include its cluster name. The naming now looks like this: "cluster_name:attribute/command_name". An example is "LevelControl:MoveToLevel".

## Getting started
Clone the project and open it in the terminal.
Use `npm i` to install the dependencies. Before starting the project make sure to edit the **ip-address** and the **port** of the Magenta Matter Controller in the `.env` file. After that you can start 4LOM with the `npm run start` command. 4LOM is now running and you can see on the console which devices are found and exposed.

## Call 4LOM
After starting the program 4LOM exposes the devices in the local network through a HTTP REST API. You can GET the WoT Thing Description like this: `GET http://localhost:8081/<node_id>-<device_type>`. To call an action you can use the `invoke` POST route and to get a property the `properties` GET route.
<br> There is an Postman Collection with some example calls in the *../docs* folder.

## Currently supported devices
- Extended Color Light*
- Color Temperature Light*
- Dimmable Light*
- On/Off Light*
- Smart Plug

\*without the Occupancy Sensing Cluster