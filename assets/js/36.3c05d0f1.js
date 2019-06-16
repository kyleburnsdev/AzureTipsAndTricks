(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{343:function(t,s,a){"use strict";a.r(s);var n=a(43),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure IoT Hub Overview"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"special-thanks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-thanks","aria-hidden":"true"}},[t._v("#")]),t._v(" Special Thanks")]),t._v(" "),a("p",[t._v("Special Thanks to "),a("a",{attrs:{href:"http://twitter.com/StefanWickDev?WT.mc_id=twitter-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stefan Wick"),a("OutboundLink")],1),t._v(" on the Azure IoT Team for his review and edits on this post.")]),t._v(" "),a("h4",{attrs:{id:"the-series-so-far"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-series-so-far","aria-hidden":"true"}},[t._v("#")]),t._v(" The Series so Far")]),t._v(" "),a("p",[t._v("At Build 2018, we first saw the "),a("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button"),a("OutboundLink")],1),t._v(". I started "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=OdGHWwRBf_c?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("exploring the device"),a("OutboundLink")],1),t._v(" with the very first unboxing and decided to create a mini-series to walk you how to use the device from start to finish. The series (so far) is located below")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip122.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an IoT for the IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip123.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring and Setting up the IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip124.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating the Azure Logic App for our IoT Button"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip125.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Azure Function to call our Logic App with the IoT Button"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("We know how to setup an IoT Hub and configure our device to get on the network, we've worked with Logic Apps that will automatically add a row to an excel sheet that includes a time along with a status (such as start or stop). All that is left is to add an Azure Function that calls the Logic Apps and passes a parameter.")]),t._v(" "),a("h4",{attrs:{id:"using-azure-function-to-call-our-logic-app-with-the-iot-button"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-function-to-call-our-logic-app-with-the-iot-button","aria-hidden":"true"}},[t._v("#")]),t._v(" Using Azure Function to call our Logic App with the IoT Button")]),t._v(" "),a("p",[t._v("Open Visual Studio and click on "),a("strong",[t._v("Cloud")]),t._v(" and then "),a("strong",[t._v("Azure Functions")]),t._v(" and give it a name and click OK.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton22.png")}}),t._v(" "),a("p",[t._v("We'll begin with an "),a("strong",[t._v("Empty")]),t._v(" project type and "),a("strong",[t._v("Azure Function v2")]),t._v(". You can leave the Storage Account as the emulator. We won't need it.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton23.png")}}),t._v(" "),a("p",[t._v("After your project is loaded, we need to add an item. So right click the project and select "),a("strong",[t._v("Add new item")]),t._v(" and select "),a("strong",[t._v("Azure Functions")]),t._v(" and give it a name and click Add.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton24.png")}}),t._v(" "),a("p",[t._v("Make sure you select "),a("strong",[t._v("IoT Hub trigger")]),t._v(".")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton25.png")}}),t._v(" "),a("p",[t._v("For the Connection string, give it the name "),a("strong",[t._v("IoTHubConnectionString")]),t._v(" and leave the "),a("strong",[t._v("Path")]),t._v(" as-is and click OK.")]),t._v(" "),a("p",[t._v("Once your project settles down, go into your "),a("code",[t._v("local.settings.json")]),t._v(" and add the following placeholder for our connection string (which will be used shortly:")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "IsEncrypted": false,\n  "Values": {\n    "AzureWebJobsStorage": "UseDevelopmentStorage=true",\n    "AzureWebJobsDashboard": "UseDevelopmentStorage=true",\n    "IoTHubConnectionString": ""\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("Go into the IoT Hub that you created, select Built-in endpoints, and copy the "),a("strong",[t._v("Event Hub-compatible endpoint")]),t._v(" to notepad somewhere.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton28.png")}}),t._v(" "),a("p",[t._v("For example mine is "),a("code",[t._v("Endpoint=sb://xxxservicebus.windows.net/;SharedAccessKeyName=xxx=;EntityPath=myioteventhubcompatiblename")]),t._v(". Now copy that into the "),a("strong",[t._v("IoTHubConnectionString")]),t._v(" field in our  "),a("code",[t._v("local.settings.json")]),t._v(".")]),t._v(" "),a("p",[t._v("If you run the application now, you'll see our function can accept messages. So go ahead and press your IoT Button and you should see something return.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton26.png")}}),t._v(" "),a("p",[t._v("Now in order for our app to use the Logic App, we need to write some code, but remember how we added a "),a("strong",[t._v("status")]),t._v(" field that the Logic App is looking for?")]),t._v(" "),a("p",[t._v("We'll first use create a file that will store the value either "),a("strong",[t._v("Started")]),t._v(" or "),a("strong",[t._v("Stopped")]),t._v(" and save that on the local machine or published app service site. We'll create a quick helper method that will toggle the fields every time the function runs.")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" persistedCount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadCurrentStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Status is "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" persistedCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("LoadCurrentStatus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" folder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExpandEnvironmentVariables")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"%HOME%\\data\\AzureFunctionAppData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fullPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Combine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Directory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateDirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("File"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" File"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadAllText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            persistedState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    File"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteAllText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fullPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" persistedState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" persistedState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("Now we need to send the status to our Logic App. We'll use "),a("strong",[t._v("Newtonsoft.Json")]),t._v(" by pulling in the proper NuGet package.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton27.png")}}),t._v(" "),a("p",[t._v("And we'll add the following "),a("strong",[t._v("status")]),t._v(" code to be serialized as a class:")]),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyStatus")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("We'll initialize the field with the current status as indicated on our file system and then set the header and call our Azure Logic App url which can be copied in the Logic App Designer after you save it.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/iotbutton29.png")}}),t._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" JsonConvert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SerializeObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myStatus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buffer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UTF8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" byteContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteArrayContent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbyteContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContentType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MediaTypeHeaderValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("PostAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://xxx.westus.logic.azure.com:443/workflows/xxx/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" byteContent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("Now if we run the Azure Function (either locally or published) and press our IoT Button, then it will call the Logic App and finally insert a Start (or Stop) status along with the DateTime in our Excel workbook.")]),t._v(" "),a("p",[t._v("In the sample below, I'll use the "),a("a",{attrs:{href:"https://prodiotsimulator.blob.core.windows.net/site/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IoT Button Simulator"),a("OutboundLink")],1),t._v(" to paste in my Connection String, which my Azure Function will process and it will call my Logic App which writes an entry to my table in MS Excel. Very cool!")]),t._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/-EWIbX_DfF0?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])},[],!1,null,null,null);s.default=e.exports}}]);