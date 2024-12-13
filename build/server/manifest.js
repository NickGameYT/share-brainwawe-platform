const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Bc17kgZU.js","app":"_app/immutable/entry/app.GbbYp1ZM.js","imports":["_app/immutable/entry/start.Bc17kgZU.js","_app/immutable/chunks/entry.BauIi3_i.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/entry/app.GbbYp1ZM.js","_app/immutable/chunks/scheduler.ChSTGxN4.js","_app/immutable/chunks/index.zzQGVg1l.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DCGAEz3J.js')),
			__memo(() => import('./chunks/1-zks-N9IY.js')),
			__memo(() => import('./chunks/2-MypROMOj.js')),
			__memo(() => import('./chunks/3-CSmwS2M-.js')),
			__memo(() => import('./chunks/4-D633xBLB.js')),
			__memo(() => import('./chunks/5-CfETf_10.js')),
			__memo(() => import('./chunks/6-DshcwEfb.js')),
			__memo(() => import('./chunks/7-Dk7YybRk.js')),
			__memo(() => import('./chunks/8-BbQ_0WfD.js')),
			__memo(() => import('./chunks/9-BXGE36p1.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main-ideas)/ideas",
				pattern: /^\/ideas\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(main-ideas)/ideas/new",
				pattern: /^\/ideas\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main-ideas)/ideas/[id]",
				pattern: /^\/ideas\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,,], errors: [1,,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(main-ideas)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(main-ideas)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
