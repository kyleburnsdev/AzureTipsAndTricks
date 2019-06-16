(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{424:function(e,n,t){"use strict";t.r(n);var s=t(43),a=Object(s.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("Tip 200!")]),e._v(" "),t("p",[e._v("🔥 Checkout our new Azure Developer page at "),t("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/azure-cli-extensions-overview?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Extensions with Azure CLI"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=WOxjyJgw-ZY&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=57?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to build your own Azure CLI Extensions"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("p",[t("strong",[e._v("Side note:")]),e._v(" Michael here - I just wanted to thank all the readers and contributors to this project. It wouldn't be successful without your help and support. Here is to another 200!")]),e._v(" "),t("h4",{attrs:{id:"build-your-own-azure-cli-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-your-own-azure-cli-extensions","aria-hidden":"true"}},[e._v("#")]),e._v(" Build your own Azure CLI Extensions")]),e._v(" "),t("p",[e._v("Azure CLI extensions are really helpful. You can read about them in this [Azure Tip](link to tip about Azure CLI Extensions). You can use extensions from the list "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/azure-cli-extensions-list?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(", which you can also get when you enter the "),t("strong",[e._v("az extension list-available --output table")]),e._v(" command in the Azure CLI.")]),e._v(" "),t("p",[e._v("And you can also built Azure CLI extensions yourself. You do that by creating a "),t("strong",[e._v("Python wheel")]),e._v(", which is a package of Python code.")]),e._v(" "),t("p",[e._v("Let me show you how you can create and use your own Azure CLI extension.")]),e._v(" "),t("h5",{attrs:{id:"creating-an-azure-cli-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-azure-cli-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating an Azure CLI Extension")]),e._v(" "),t("p",[e._v("Azure CLI extensions can currently only been Python wheel packages. So to create a new extension, you need to have the following prerequisites installed on your development machine:")]),e._v(" "),t("ul",[t("li",[e._v("Python (version 2.7.9 or 3.4 or up). Download it "),t("a",{attrs:{href:"https://www.python.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://pypi.org/project/wheel",target:"_blank",rel:"noopener noreferrer"}},[e._v("Python wheel"),t("OutboundLink")],1),e._v(" (once Python is installed, you can get wheel by using the command "),t("strong",[e._v("pip install wheel")]),e._v(")")])]),e._v(" "),t("p",[e._v("Now that we have Python and wheel installed, we can start to create the extension.")]),e._v(" "),t("ol",[t("li",[e._v("We'll start by creating a new folder that holds all of the files that we need for he extension. Let's call it "),t("code",[e._v("Tipsextension")]),e._v(".")]),e._v(" "),t("li",[e._v("In the "),t("code",[e._v("Tipsextension")]),e._v(" folder, we'll create some files that make up the extension. These are:")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("(folder) azext_tipsextension")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("\\_\\_init\\_\\_.py")])])])]),e._v(" "),t("li",[t("code",[e._v("setup.cfg")])]),e._v(" "),t("li",[t("code",[e._v("setup.<nolink>py")])])]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Now, we will fill in the content of the files. We'll start with the "),t("code",[e._v("setup.<nolink>py file")]),e._v(". This file will tell the Azure CLI what is in the extension. We'll put in this code:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("from codecs import open\nfrom setuptools import setup, find_packages\n\nVERSION = \"0.0.1\"\n\nCLASSIFIERS = [\n    'Development Status :: 4 - Beta',\n    'Intended Audience :: Developers',\n    'Intended Audience :: System Administrators',\n    'Programming Language :: Python',\n    'Programming Language :: Python :: 2',\n    'Programming Language :: Python :: 2.7',\n    'Programming Language :: Python :: 3',\n    'Programming Language :: Python :: 3.4',\n    'Programming Language :: Python :: 3.5',\n    'Programming Language :: Python :: 3.6',\n    'License :: OSI Approved :: MIT License',\n]\n\nDEPENDENCIES = []\n\nsetup(\n    name='tipsextension',\n    version=VERSION,\n    description='My CLI extension',\n    long_description='An example Azure CLI Extension.',\n    license='MIT',\n    author='MY CORP.',\n    author_email='example@contoso.com',\n    url='https://github.com/ORG/REPO',\n    classifiers=CLASSIFIERS,\n    packages=find_packages(),\n    install_requires=DEPENDENCIES\n)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br"),t("span",{staticClass:"line-number"},[e._v("30")]),t("br"),t("span",{staticClass:"line-number"},[e._v("31")]),t("br"),t("span",{staticClass:"line-number"},[e._v("32")]),t("br"),t("span",{staticClass:"line-number"},[e._v("33")]),t("br"),t("span",{staticClass:"line-number"},[e._v("34")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("The next file that we are going to fill, is the "),t("strong",[e._v("setup.cfg file")]),e._v(". This file will be used by wheel to create the package that the CLI can use. This file is short and will contain only this code:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[bdist_wheel]\nuniversal=1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("The last file that we'll fill is the "),t("strong",[e._v("__init__.py file")]),e._v(" in the "),t("strong",[e._v("azext_tipsextension folder")]),e._v(". This file contains the actual functionality of the extension. It is written in Python. I'm not a Python expert myself, but it's easy enough to pick up. We'll put this code in the file:")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("from knack.help_files import helps\n\nfrom azure.cli.core import AzCommandsLoader\n\nhelps['gimme tips'] = \"\"\"\n    type: command\n    short-summary: Points you to a world of Azure Tips and Tricks.\n\"\"\"\n\ndef showtipsurl():\n    print('Azure Tips and Tricks - The Complete List: tip-complete-list/')\n\nclass TipsAndTricksCommandsLoader(AzCommandsLoader):\n\n    def __init__(self, cli_ctx=None):\n        from azure.cli.core.commands import CliCommandType\n        custom_type = CliCommandType(operations_tmpl='azext_tipsextension#{}')\n        super(TipsAndTricksCommandsLoader, self).__init__(cli_ctx=cli_ctx,\n                                                       custom_command_type=custom_type)\n\n    def load_command_table(self, args):\n        with self.command_group('gimme') as g:\n            g.custom_command('tips', 'showtipsurl')\n        return self.command_table\n\n    def load_arguments(self, _):\n        pass\n\nCOMMAND_LOADER_CLS = TipsAndTricksCommandsLoader\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br"),t("span",{staticClass:"line-number"},[e._v("25")]),t("br"),t("span",{staticClass:"line-number"},[e._v("26")]),t("br"),t("span",{staticClass:"line-number"},[e._v("27")]),t("br"),t("span",{staticClass:"line-number"},[e._v("28")]),t("br"),t("span",{staticClass:"line-number"},[e._v("29")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Next, we need to build the application and compile it into a wheel package. We can do that with the command below. The directory should match the directory that contains all of the extension files")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd /Source/extension/Tipsextension\npython setup.py bdist_wheel\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("This output of the build result looks like this and produces a "),t("strong",[e._v(".whl")]),e._v(" file.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/BuildResult.png")}}),e._v(" "),t("p",[e._v("(Results of building the extension)")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Now, we can try the extension out. We can do that by installing it with the following command")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az extension add --source C:\\Source\\extension\\tipsextension\\dist\\tipsextension-0.0.1-py2.py3-none-any.whl\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ol",{attrs:{start:"8"}},[t("li",[e._v("When the extension is installed, you can see the help by using "),t("strong",[e._v("az gimme tips -h")]),e._v(" or get the results by using "),t("strong",[e._v("az gimme tips")])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/TryingTheExtension.png")}}),e._v(" "),t("p",[e._v("(Trying the extension)")]),e._v(" "),t("p",[e._v("The above is the happy flow of developing an Azure CLI Extension. Usually, you need to debug the extension and have more control when you are developing it. You can read more about that "),t("a",{attrs:{href:"https://github.com/Azure/azure-cli/blob/master/doc/extensions/authoring.md?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". And you can also publish the extension so that people can start using it. You can read about how to do that "),t("a",{attrs:{href:"https://github.com/Azure/azure-cli/blob/dev/doc/extensions/publishing.md?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Here are some of the published CLI Extensions that I find very useful:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("find")]),e._v(", which helps you to get contextual information with the CLI")]),e._v(" "),t("li",[t("strong",[e._v("webapp")]),e._v(", which has some extra commands for managing Web Apps, ike creating a new one from the CLI")]),e._v(" "),t("li",[t("strong",[e._v("resource-graph")]),e._v(", which enables you to query the Azure Resource Graph")])]),e._v(" "),t("h5",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("Azure CLI extensions are a very powerful way to make the CLI work for you. The steps to develop an Azure CLI extension are relatively easy. The downside (to me) is that it is currently only possible to develop the extensions in Python. Maybe in the future, other languages will be supported. In any case, it is wonderful that it is possible to extend the CLI. Go and develop your ultimate extension and share it with the community!")])])},[],!1,null,null,null);n.default=a.exports}}]);