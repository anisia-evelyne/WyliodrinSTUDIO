async function loadPlugins (progress = () => {}) {
	var plugins = [];
	var index = 0;

	let plugin0 = import ('../plugins/console/index.js').then ((plugin) => { plugins.push ({name:'console', consumes:["workspace","xterm"], provides:["console"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('console', index, 50); });
	let plugin1 = import ('../plugins/dashboard/index.js').then ((plugin) => { plugins.push ({name:'dashboard', consumes:["workspace","projects"], provides:["dashboard"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard', index, 50); });
	let plugin2 = import ('../plugins/dashboard.graph.extra/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.extra', consumes:["workspace","dashboard"], provides:["dashboard_graph_extra"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.extra', index, 50); });
	let plugin3 = import ('../plugins/dashboard.graph.gauge/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.gauge', consumes:["workspace","dashboard"], provides:["dashboard_graph_gauge"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.gauge', index, 50); });
	let plugin4 = import ('../plugins/dashboard.graph.line/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.line', consumes:["workspace","dashboard"], provides:["dashboard_graph_line"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.line', index, 50); });
	let plugin5 = import ('../plugins/dashboard.graph.slider/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.slider', consumes:["workspace","dashboard"], provides:["dashboard_graph_slider"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.slider', index, 50); });
	let plugin6 = import ('../plugins/dashboard.graph.speedometer/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.speedometer', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.speedometer', index, 50); });
	let plugin7 = import ('../plugins/dashboard.graph.switch/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.switch', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.switch', index, 50); });
	let plugin8 = import ('../plugins/dashboard.graph.thermometer/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.thermometer', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.thermometer', index, 50); });
	let plugin9 = import ('../plugins/dashboard.graph.vumeter/index.js').then ((plugin) => { plugins.push ({name:'dashboard.graph.vumeter', consumes:["workspace","dashboard"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('dashboard.graph.vumeter', index, 50); });
	let plugin10 = import ('../plugins/device.rpk/index.js').then ((plugin) => { plugins.push ({name:'device.rpk', consumes:["workspace","projects","events","device_wyapp","console","filesystem","system"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.rpk', index, 50); });
	let plugin11 = import ('../plugins/device.simulator.raspberrypi/index.js').then ((plugin) => { plugins.push ({name:'device.simulator.raspberrypi', consumes:["workspace","console","projects"], provides:["device_simulator_raspberrypi"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.simulator.raspberrypi', index, 50); });
	let plugin12 = import ('../plugins/device.simulator.rpk/index.js').then ((plugin) => { plugins.push ({name:'device.simulator.rpk', consumes:["workspace","console","projects"], provides:["device_simulator_rpk"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.simulator.rpk', index, 50); });
	let plugin13 = import ('../plugins/device.wyapp/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp', consumes:["workspace","events","console","projects","shell","notebook","dashboard","filesystem"], provides:["device_wyapp"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp', index, 50); });
	let plugin14 = import ('../plugins/device.wyapp.beagleboneblack/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp.beagleboneblack', consumes:["device_wyapp","workspace","events","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp.beagleboneblack', index, 50); });
	let plugin15 = import ('../plugins/device.wyapp.picopi/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp.picopi', consumes:["device_wyapp","workspace","events","editor_visual","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp.picopi', index, 50); });
	let plugin16 = import ('../plugins/device.wyapp.raspberrypi/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp.raspberrypi', consumes:["device_wyapp","workspace","events","editor_visual","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp.raspberrypi', index, 50); });
	let plugin17 = import ('../plugins/device.wyapp.udooneo/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp.udooneo', consumes:["device_wyapp","workspace","events"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp.udooneo', index, 50); });
	let plugin18 = import ('../plugins/device.wyapp.websocket/index.js').then ((plugin) => { plugins.push ({name:'device.wyapp.websocket', consumes:["workspace","settings","device_wyapp"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('device.wyapp.websocket', index, 50); });
	let plugin19 = import ('../plugins/documentation/index.js').then ((plugin) => { plugins.push ({name:'documentation', consumes:["workspace","system"], provides:["documentation"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('documentation', index, 50); });
	let plugin20 = import ('../plugins/documentation.resistorcolorcodes/index.js').then ((plugin) => { plugins.push ({name:'documentation.resistorcolorcodes', consumes:["workspace"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('documentation.resistorcolorcodes', index, 50); });
	let plugin21 = import ('../plugins/events/index.js').then ((plugin) => { plugins.push ({name:'events', consumes:[], provides:["events"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('events', index, 50); });
	let plugin22 = import ('../plugins/filesystem.web/index.js').then ((plugin) => { plugins.push ({name:'filesystem.web', consumes:[], provides:["filesystem"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('filesystem.web', index, 50); });
	let plugin23 = import ('../plugins/first.run/index.js').then ((plugin) => { plugins.push ({name:'first.run', consumes:["events","settings","projects","system","workspace"], provides:["firstrun"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('first.run', index, 50); });
	let plugin24 = import ('../plugins/language.nodejs/index.js').then ((plugin) => { plugins.push ({name:'language.nodejs', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.nodejs', index, 50); });
	let plugin25 = import ('../plugins/language.python/index.js').then ((plugin) => { plugins.push ({name:'language.python', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.python', index, 50); });
	let plugin26 = import ('../plugins/language.shell/index.js').then ((plugin) => { plugins.push ({name:'language.shell', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.shell', index, 50); });
	let plugin27 = import ('../plugins/language.visual/index.js').then ((plugin) => { plugins.push ({name:'language.visual', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual', index, 50); });
	let plugin28 = import ('../plugins/language.visual.adafruitdht/index.js').then ((plugin) => { plugins.push ({name:'language.visual.adafruitdht', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.adafruitdht', index, 50); });
	let plugin29 = import ('../plugins/language.visual.adafruitlcd/index.js').then ((plugin) => { plugins.push ({name:'language.visual.adafruitlcd', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.adafruitlcd', index, 50); });
	let plugin30 = import ('../plugins/language.visual.gpiozero/index.js').then ((plugin) => { plugins.push ({name:'language.visual.gpiozero', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.gpiozero', index, 50); });
	let plugin31 = import ('../plugins/language.visual.libwyliodrin/index.js').then ((plugin) => { plugins.push ({name:'language.visual.libwyliodrin', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.libwyliodrin', index, 50); });
	let plugin32 = import ('../plugins/language.visual.rpk/index.js').then ((plugin) => { plugins.push ({name:'language.visual.rpk', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.rpk', index, 50); });
	let plugin33 = import ('../plugins/language.visual.social/index.js').then ((plugin) => { plugins.push ({name:'language.visual.social', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.social', index, 50); });
	let plugin34 = import ('../plugins/language.visual.wyapp/index.js').then ((plugin) => { plugins.push ({name:'language.visual.wyapp', consumes:["editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.wyapp', index, 50); });
	let plugin35 = import ('../plugins/language.visual.wyliozero/index.js').then ((plugin) => { plugins.push ({name:'language.visual.wyliozero', consumes:["workspace","projects","editor_visual"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('language.visual.wyliozero', index, 50); });
	let plugin36 = import ('../plugins/notebook/index.js').then ((plugin) => { plugins.push ({name:'notebook', consumes:["workspace","projects","filesystem"], provides:["notebook"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('notebook', index, 50); });
	let plugin37 = import ('../plugins/pinlayout/index.js').then ((plugin) => { plugins.push ({name:'pinlayout', consumes:["workspace"], provides:["pin_layout"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('pinlayout', index, 50); });
	let plugin38 = import ('../plugins/projects/index.js').then ((plugin) => { plugins.push ({name:'projects', consumes:["workspace","xterm","filesystem","settings"], provides:["projects"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects', index, 50); });
	let plugin39 = import ('../plugins/projects.editor.ace/index.js').then ((plugin) => { plugins.push ({name:'projects.editor.ace', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects.editor.ace', index, 50); });
	let plugin40 = import ('../plugins/projects.editor.images/index.js').then ((plugin) => { plugins.push ({name:'projects.editor.images', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects.editor.images', index, 50); });
	let plugin41 = import ('../plugins/projects.editor.monaco/index.js').then ((plugin) => { plugins.push ({name:'projects.editor.monaco', consumes:["workspace","projects"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects.editor.monaco', index, 50); });
	let plugin42 = import ('../plugins/projects.editor.opcuamodel/index.js').then ((plugin) => { plugins.push ({name:'projects.editor.opcuamodel', consumes:["workspace","projects","editor_visual"], provides:["editor_opcuamodel"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects.editor.opcuamodel', index, 50); });
	let plugin43 = import ('../plugins/projects.editor.visual/index.js').then ((plugin) => { plugins.push ({name:'projects.editor.visual', consumes:["workspace","projects"], provides:["editor_visual"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('projects.editor.visual', index, 50); });
	let plugin44 = import ('../plugins/settings/index.js').then ((plugin) => { plugins.push ({name:'settings', consumes:["filesystem"], provides:["settings"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('settings', index, 50); });
	let plugin45 = import ('../plugins/shell/index.js').then ((plugin) => { plugins.push ({name:'shell', consumes:["workspace","xterm"], provides:["shell"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('shell', index, 50); });
	let plugin46 = import ('../plugins/statistics/index.js').then ((plugin) => { plugins.push ({name:'statistics', consumes:["workspace","hooks","events","projects","settings","firstrun"], provides:[], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('statistics', index, 50); });
	let plugin47 = import ('../plugins/system.browser/index.js').then ((plugin) => { plugins.push ({name:'system.browser', consumes:[], provides:["system"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('system.browser', index, 50); });
	let plugin48 = import ('../plugins/workspace/index.js').then ((plugin) => { plugins.push ({name:'workspace', consumes:["system","settings","hooks"], provides:["workspace"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('workspace', index, 50); });
	let plugin49 = import ('../plugins/xterm/index.js').then ((plugin) => { plugins.push ({name:'xterm', consumes:["workspace"], provides:["xterm"], setup: plugin.setup || plugin.default || plugin}); index=index+1; progress ('xterm', index, 50); });
	await Promise.all ([plugin0, plugin1, plugin2, plugin3, plugin4, plugin5, plugin6, plugin7, plugin8, plugin9, plugin10, plugin11, plugin12, plugin13, plugin14, plugin15, plugin16, plugin17, plugin18, plugin19, plugin20, plugin21, plugin22, plugin23, plugin24, plugin25, plugin26, plugin27, plugin28, plugin29, plugin30, plugin31, plugin32, plugin33, plugin34, plugin35, plugin36, plugin37, plugin38, plugin39, plugin40, plugin41, plugin42, plugin43, plugin44, plugin45, plugin46, plugin47, plugin48, plugin49, ])
	progress ('Your workspace is almost ready ...');
	return plugins;
}
module.exports.loadPlugins = loadPlugins;
