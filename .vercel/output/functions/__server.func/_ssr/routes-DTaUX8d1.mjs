import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, i as Root2, l as require_react, n as Header$1, o as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as MessageCircle, c as Eye, d as Check, f as ArrowRight, i as Send, l as ChevronRight, n as Smartphone, o as Menu, r as ShieldCheck, s as Flame, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DTaUX8d1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$4 = "/app/applet/src/components/ui/button.tsx";
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			cta: "bg-cta text-cta-foreground shadow-cta hover:bg-cta-hover"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 44,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName$3 = "/app/applet/src/components/ui/accordion.tsx";
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 13,
	columnNumber: 3
}, void 0));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header$1, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 31,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 22,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 21,
	columnNumber: 3
}, void 0));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("pb-4 pt-0", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 46,
		columnNumber: 5
	}, void 0)
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 41,
	columnNumber: 3
}, void 0));
AccordionContent.displayName = Content2.displayName;
var offer_earbuds_default = "/assets/offer-earbuds-zx_95m8d.jpg";
var offer_tools_default = "/assets/offer-tools-YE9iniPl.jpg";
var offer_airfryer_default = "/assets/offer-airfryer-C2mP9RDf.jpg";
var offer_speaker_default = "/assets/offer-speaker-BxSxkl2z.jpg";
var offer_tumbler_default = "/assets/offer-tumbler-BwyTAHZA.jpg";
var offer_galaxy_s25_ultra_default = "/assets/offer-galaxy-s25-ultra-CuqxDOfe.jpg";
var offer_fitness_grace_default = "/assets/offer-fitness-grace-B8xIqB7p.jpg";
var at_promo_logo_default = "/assets/at-promo-logo-D9RpyYnu.png";
var _jsxFileName$2 = "/app/applet/src/components/marketplace-marquee.tsx";
function MercadoLivreLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 170 34",
		className,
		fill: "currentColor",
		role: "img",
		"aria-label": "Mercado Livre",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Mercado Livre" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
				transform: "translate(0, 5) scale(0.95)",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 14,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 13,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
				x: "29",
				y: "23",
				fontFamily: "var(--font-sans), system-ui, sans-serif",
				fontWeight: "800",
				fontSize: "16.5",
				letterSpacing: "-0.4px",
				fill: "currentColor",
				children: "mercado livre"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
function ShopeeLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 135 34",
		className,
		fill: "currentColor",
		role: "img",
		"aria-label": "Shopee",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Shopee" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
				transform: "translate(0, 5) scale(0.95)",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 42,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 41,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
				x: "28",
				y: "23",
				fontFamily: "var(--font-sans), system-ui, sans-serif",
				fontWeight: "800",
				fontSize: "18",
				letterSpacing: "-0.4px",
				fill: "currentColor",
				children: "Shopee"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 44,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 33,
		columnNumber: 5
	}, this);
}
function AmazonLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 603 182",
		className,
		fill: "currentColor",
		role: "img",
		"aria-label": "Amazon",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Amazon" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 68,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 70,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 71,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 72,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 73,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "m 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 74,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 75,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 76,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 69,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 61,
		columnNumber: 5
	}, this);
}
function AliExpressLogo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 8.8 24 5.2",
		className,
		fill: "currentColor",
		role: "img",
		"aria-label": "AliExpress",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "AliExpress" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 91,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M5.166 9.096a.022.022 0 0 0-.022.021c0 .396-.32.717-.713.717a.021.021 0 0 0-.021.022c0 .012.01.021.021.021.394 0 .713.322.713.718 0 .012.01.021.022.021.011 0 .021-.01.021-.021A.717.717 0 0 1 5.9 9.88a.021.021 0 0 0 0-.043.716.716 0 0 1-.713-.718v-.002a.021.021 0 0 0-.006-.015.022.022 0 0 0-.015-.006zm-3.693.526L0 13.462h.48l.355-.922h1.782l.354.922h.481L1.98 9.622zm2.264.002v3.838h.491V9.624zm2.375 0v3.838h2.413v-.502H6.613v-1.19H8.19v-.477H6.613v-1.166h1.773v-.502zm-4.386.592l.698 1.82H1.028zm14.689.402a1.466 1.466 0 0 0-.966.366V10.7h-.491v2.763h.49c.002-.477 0-.955.002-1.433a.969.969 0 0 1 .965-.918zm4.18.007c-.053 0-.105.003-.158.01-.315.031-.606.175-.753.377a.689.689 0 0 0-.14.465c.007.2.066.357.233.496.184.147.42.2.657.259.311.067.426.095.546.186.08.07.133.127.136.27 0 .25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5.54-.01.891-.217 1.029-.534.066-.153.063-.309.063-.38a.677.677 0 0 0-.267-.545c-.228-.177-.583-.228-.636-.242-.437-.078-.658-.196-.697-.341-.043-.192.102-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.166 1.166 0 0 0-.939-.494zm2.387 0c-.052 0-.105.003-.157.01-.316.031-.607.175-.753.377a.689.689 0 0 0-.14.465c.006.2.065.357.233.496.183.147.42.2.657.259.31.067.426.095.545.186.081.07.134.127.136.27.001.25-.221.372-.42.41a.89.89 0 0 1-.894-.344l-.371.288c.33.382.777.505 1.09.5.541-.01.891-.217 1.03-.534.065-.153.062-.309.062-.38a.677.677 0 0 0-.267-.545c-.227-.177-.583-.228-.636-.242-.437-.078-.658-.196-.696-.341-.043-.192.101-.35.297-.411a.76.76 0 0 1 .857.277l.367-.247a1.167 1.167 0 0 0-.94-.494zm-9.84.002a1.461 1.461 0 0 0-1.42 1.117 1.305 1.305 0 0 0-.041.327v2.833h.491v-1.813c.17.18.487.42.96.454a1.447 1.447 0 0 0 1.208-.627 1.457 1.457 0 0 0-1.199-2.292zm4.804 0a1.448 1.448 0 0 0-1.288 2.08c.255.53.811.87 1.412.833a1.452 1.452 0 0 0 1.012-.51l-.363-.291a.968.968 0 0 1-1.106.273 1.01 1.01 0 0 1-.602-.69h2.239l.002-.427a1.295 1.295 0 0 0-1.306-1.268zm-9.2.08l1.062 1.377-1.062 1.378h.581l.779-1.01.778 1.01h.581l-1.062-1.378 1.062-1.378h-.581l-.778 1.01-.779-1.01zm-3.825.015v2.74h.49v-2.74zm8.233.37a.96.96 0 0 1 .95.993.963.963 0 0 1-.863.998.962.962 0 0 1-1.034-.739c-.074-.382 0-.746.307-1.019a.959.959 0 0 1 .64-.233zm4.79.015a.823.823 0 0 1 .819.755h-1.76a.964.964 0 0 1 .94-.755z" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 92,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 84,
		columnNumber: 5
	}, this);
}
var MARKETPLACES = [
	{
		id: "mercadolivre",
		name: "Mercado Livre",
		component: MercadoLivreLogo
	},
	{
		id: "shopee",
		name: "Shopee",
		component: ShopeeLogo
	},
	{
		id: "amazon",
		name: "Amazon",
		component: AmazonLogo
	},
	{
		id: "aliexpress",
		name: "AliExpress",
		component: AliExpressLogo
	}
];
function MarketplaceMarquee() {
	const renderGroup = (keyPrefix, isAriaHidden = false) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "marquee-group",
		"aria-hidden": isAriaHidden || void 0,
		children: MARKETPLACES.map((item) => {
			const LogoComponent = item.component;
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "marquee-item",
				"data-marketplace": item.id,
				title: item.name,
				tabIndex: isAriaHidden ? -1 : 0,
				role: "img",
				"aria-label": item.name,
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoComponent, { className: "marketplace-icon" }, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 125,
					columnNumber: 13
				}, this)
			}, `${keyPrefix}-${item.id}`, false, {
				fileName: _jsxFileName$2,
				lineNumber: 116,
				columnNumber: 11
			}, this);
		})
	}, keyPrefix, false, {
		fileName: _jsxFileName$2,
		lineNumber: 112,
		columnNumber: 5
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "marketplace-marquee-strip",
		role: "region",
		"aria-label": "Marketplaces parceiros monitorados",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "marquee-header-label",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "OFERTAS GARIMPADAS NOS PRINCIPAIS MARKETPLACES" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 139,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 138,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "marquee-wrapper",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "marquee-track",
				children: [
					renderGroup("g1", false),
					renderGroup("g2", true),
					renderGroup("g3", true),
					renderGroup("g4", true)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 143,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 142,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 133,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/at-promo-landing.tsx";
var LINKS = {
	offers: "#ofertas",
	instagram: "https://www.instagram.com/atpromoo?stkn=MXU0bnR6cnYwYnhnag==",
	whatsapp: "https://chat.whatsapp.com/IDN79MDjG97Dj8NqsvKlqh",
	telegram: "https://t.me/ATPROMOC",
	whatsappGerais: "https://chat.whatsapp.com/IDN79MDjG97Dj8NqsvKlqh",
	telegramGerais: "https://t.me/ATPROMOGERAIS",
	telegramTech: "https://t.me/ATPROMOC"
};
var offers = [
	{
		image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
		name: "Carregador Portatil Power Bank i2GO 10000mAh 1 Usb-C e 2 Usb-A",
		old: "R$ 99,90",
		price: "R$ 53,00",
		off: "47% OFF",
		store: "Shopee",
		link: "https://s.shopee.com.br/7fZqVt4quO?lp=aff"
	},
	{
		image: offer_earbuds_default,
		name: "Basike Fone De Ouvido Sem Fio Bluetooth Com Gancho Gamer Esportivo Baixa Latência 100h, Design Aberto",
		old: "R$ 159,90",
		price: "R$ 78,00",
		off: "51% OFF",
		store: "Mercado Livre",
		link: "https://meli.la/2ATJe3U"
	},
	{
		image: offer_tools_default,
		name: "Kit de ferramentas",
		old: "R$ 149,90",
		price: "R$ 99,90",
		off: "33% OFF",
		store: "Loja parceira",
		link: "#"
	},
	{
		image: offer_airfryer_default,
		name: "Air fryer compacta",
		old: "R$ 499,90",
		price: "R$ 329,90",
		off: "34% OFF",
		store: "Marketplace",
		link: "#"
	},
	{
		image: offer_speaker_default,
		name: "Caixa de som portátil",
		old: "R$ 119,90",
		price: "R$ 69,90",
		off: "41% OFF",
		store: "Loja parceira",
		link: "#"
	},
	{
		image: offer_tumbler_default,
		name: "Copo térmico",
		old: "R$ 79,90",
		price: "R$ 49,90",
		off: "37% OFF",
		store: "Marketplace",
		link: "#"
	}
];
function Logo({ inverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: "#top",
		"aria-label": "AT Promoções — início",
		className: `logo ${inverse ? "logo-inverse" : ""}`,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			src: at_promo_logo_default,
			alt: "AT Promoções — Ofertas que valem a pena!",
			width: 1191,
			height: 1034,
			referrerPolicy: "no-referrer"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 110,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 105,
		columnNumber: 5
	}, this);
}
function CTA({ children = "ENTRAR NO GRUPO", className = "", flame = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
		asChild: true,
		variant: "cta",
		size: "lg",
		className: `cta ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
			href: LINKS.offers,
			children: [
				flame && /* @__PURE__ */ (void 0)(Flame, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 133,
					columnNumber: 19
				}, this),
				children,
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 135,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 132,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 131,
		columnNumber: 5
	}, this);
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const nav = [
		["Grupos", "#ofertas"],
		["Como funciona", "#como-funciona"],
		["Dúvidas", "#duvidas"]
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "site-header",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container header-inner",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 151,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "desktop-nav",
					"aria-label": "Navegação principal",
					children: nav.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href,
						children: label
					}, href, false, {
						fileName: _jsxFileName$1,
						lineNumber: 154,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 152,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					variant: "ghost",
					size: "icon",
					className: "menu-button",
					onClick: () => setOpen(!open),
					"aria-label": open ? "Fechar menu" : "Abrir menu",
					children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 166,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 166,
						columnNumber: 27
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 159,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 150,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("nav", {
			className: "mobile-nav",
			"aria-label": "Navegação móvel",
			children: [nav.map(([label, href]) => /* @__PURE__ */ (void 0)("a", {
				href,
				onClick: () => setOpen(false),
				children: [label, /* @__PURE__ */ (void 0)(ChevronRight, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 174,
					columnNumber: 15
				}, this)]
			}, href, true, {
				fileName: _jsxFileName$1,
				lineNumber: 172,
				columnNumber: 13
			}, this)), /* @__PURE__ */ (void 0)(CTA, { children: "ENTRAR NO GRUPO" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 177,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 170,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 149,
		columnNumber: 5
	}, this);
}
function DealMessage({ second = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "deal-message",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "message-kicker",
				children: second ? "⚡ OFERTA RELÂMPAGO" : "🔥 ACHADINHO"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 187,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "message-product",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: second ? offer_fitness_grace_default : offer_galaxy_s25_ultra_default,
					alt: second ? "Conjunto Academia Fitness Grace Azul Claro Cós Alto Forro Duplo AQN SPORT" : "Samsung Galaxy S25 Ultra 5g, 256GB, 12GB, Câm. Quád. Titanium Black",
					width: 768,
					height: 768,
					referrerPolicy: "no-referrer"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 189,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: second ? "Conjunto Academia Fitness Grace Azul Claro Cós Alto Forro Duplo AQN SPORT" : "Samsung Galaxy S25 Ultra 5g, 256GB, 12GB, Câm. Quád. Titanium Black" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 201,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { children: second ? "R$ 90,00" : "R$ 5.998,89" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 206,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: second ? "R$ 53,00" : "R$ 4859" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 207,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 200,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 188,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "message-bottom",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: second ? "41% OFF" : "🏷️ Cupom disponível" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 211,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "APROVEITAR" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 212,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 210,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 186,
		columnNumber: 5
	}, this);
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "top",
		className: "hero",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container hero-grid",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
						"A GENTE ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", { children: "GARIMPA." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 224,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 225,
							columnNumber: 13
						}, this),
						"VOCÊ ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "APROVEITA." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 226,
							columnNumber: 18
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 223,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Ofertas, cupons e achadinhos, sem você precisar procurar." }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 228,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA, {
						flame: true,
						children: "ENTRAR NO GRUPO"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 229,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "hero-bullets",
						"aria-label": "Benefícios do grupo",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "bullet-icon" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 232,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "100% gratuito" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 233,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 231,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "bullet-icon" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 236,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sem cadastro" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 237,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 235,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "bullet-icon" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 240,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Você decide o que comprar" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 241,
								columnNumber: 15
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 239,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 230,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 222,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 221,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MarketplaceMarquee, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 246,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 220,
		columnNumber: 5
	}, this);
}
function OfferPreview() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "ofertas",
		className: "section preview-section",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container preview-grid",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "preview-action-column",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "section-index",
						children: "Direto no celular"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 319,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mini-steps",
						"aria-label": "Como funciona o grupo",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mini-step",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Smartphone, { className: "mini-step-icon" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 323,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Você recebe" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 324,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 322,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "mini-step-arrow" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 326,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mini-step",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "mini-step-icon" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 328,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Olha" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 329,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 327,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "mini-step-arrow" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 331,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mini-step",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "mini-step-icon" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 333,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Decide" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 334,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 332,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 321,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "channel-selection",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "primary-channel-wrapper",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "channel-badge",
								children: "CANAL MAIS POPULAR"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 340,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								id: "btn-whatsapp-ofertas-gerais",
								href: LINKS.whatsappGerais,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group-btn group-btn-whatsapp primary-channel-btn",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, {
										className: "group-btn-icon",
										strokeWidth: 2.5
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 348,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "group-btn-content",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "group-btn-main",
											children: "ENTRAR NO GRUPO"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 350,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "group-btn-sub",
											children: "WhatsApp • Ofertas Gerais"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 351,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 349,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "group-btn-arrow" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 353,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 341,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 339,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "secondary-channels",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "secondary-channels-label",
								children: "Prefere outro canal?"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 358,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "secondary-channels-links",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										id: "btn-telegram-ofertas-gerais",
										href: LINKS.telegramGerais,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "secondary-channel-btn",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "secondary-btn-icon" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 367,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Telegram Geral" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 368,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 360,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "secondary-dot",
										"aria-hidden": "true",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 370,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										id: "btn-telegram-ofertas-tech",
										href: LINKS.telegramTech,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "secondary-channel-btn",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "secondary-btn-icon" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 380,
											columnNumber: 19
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Telegram Tech" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 381,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 373,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 359,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 357,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 338,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "trust-badge",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "trust-badge-icon" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 388,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "🔒 Só moderadores enviam links — 100% verificado." }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 389,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 387,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 318,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "message-stack",
				"aria-label": "Exemplos reais de ofertas no grupo",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DealMessage, {}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 393,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DealMessage, { second: true }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 394,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 392,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 317,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 316,
		columnNumber: 5
	}, this);
}
function OfferCard({ offer }) {
	const content = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "offer-image",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
			loading: "lazy",
			src: offer.image,
			alt: offer.name,
			width: 768,
			height: 768
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 451,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: offer.off }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 452,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 450,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "offer-info",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { children: offer.store }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 455,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: offer.name }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 456,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", { children: offer.old }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 457,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: offer.price }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 458,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 454,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 449,
		columnNumber: 5
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "offer-card",
		children: offer.link && offer.link !== "#" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
			href: offer.link,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "offer-card-link",
			style: {
				textDecoration: "none",
				color: "inherit",
				display: "block"
			},
			children: content
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 466,
			columnNumber: 9
		}, this) : content
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 464,
		columnNumber: 5
	}, this);
}
function OffersShowcase() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "section showcase",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: ["Olha o que a gente pode encontrar ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "👀" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 488,
						columnNumber: 47
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 487,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Produtos e valores ilustrativos. As oportunidades reais variam ao longo do dia." }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 490,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 486,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "offers-grid",
					children: offers.map((offer) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OfferCard, { offer }, offer.name, false, {
						fileName: _jsxFileName$1,
						lineNumber: 494,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 492,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "center-cta",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA, {
						flame: true,
						children: "ENTRAR NO GRUPO"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 498,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 497,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 485,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 484,
		columnNumber: 5
	}, this);
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "como-funciona",
		className: "section steps",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "section-heading centered",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Como funciona?" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 515,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 514,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "steps-grid",
					children: [
						[
							"01",
							"Você entra",
							"Comece gratuitamente."
						],
						[
							"02",
							"A gente garimpa",
							"Procuramos ofertas, cupons e achadinhos."
						],
						[
							"03",
							"Você aproveita",
							"Receba as oportunidades e decida se alguma interessa."
						]
					].map(([n, title, text], i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: n }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 520,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: title }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 521,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 522,
							columnNumber: 15
						}, this),
						i < 2 && /* @__PURE__ */ (void 0)(ChevronRight, {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 523,
							columnNumber: 25
						}, this)
					] }, n, true, {
						fileName: _jsxFileName$1,
						lineNumber: 519,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 517,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "free-note",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, {}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 528,
						columnNumber: 11
					}, this), " Sem mensalidade. Sem obrigação de comprar."]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 527,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 513,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 512,
		columnNumber: 5
	}, this);
}
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "duvidas",
		className: "section faq",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "container faq-grid",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Ainda tem dúvida?" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 557,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "A gente responde sem letras miúdas." }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 558,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 556,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, {
				type: "single",
				collapsible: true,
				children: [
					["É gratuito?", "Sim. Você pode começar gratuitamente."],
					["Preciso comprar alguma coisa?", "Não. Você recebe as ofertas e decide se alguma interessa."],
					["Quais lojas aparecem?", "Podem aparecer ofertas de diferentes lojas e marketplaces, como Shopee, Mercado Livre, Amazon e AliExpress."],
					["Vocês vendem os produtos?", "O AT promo divulga oportunidades e direciona você para a loja indicada na oferta."],
					["Posso sair quando quiser?", "Sim."],
					["Vou receber muitas mensagens?", "A frequência pode variar conforme a quantidade de oportunidades encontradas. O conteúdo é focado em ofertas, descontos e achadinhos."]
				].map(([q, a], i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, {
					value: `item-${i}`,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, { children: q }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 563,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, { children: a }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 564,
						columnNumber: 15
					}, this)]
				}, q, true, {
					fileName: _jsxFileName$1,
					lineNumber: 562,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 560,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 555,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 554,
		columnNumber: 5
	}, this);
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "container footer-top",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { inverse: true }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 578,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "A gente garimpa. Você aproveita." }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 579,
			columnNumber: 11
		}, this)] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 577,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
			"aria-label": "Links do rodapé",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: LINKS.instagram,
					children: "Instagram"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 582,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: LINKS.whatsapp,
					children: "WhatsApp"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 583,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: LINKS.telegram,
					children: "Telegram"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 584,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 581,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 576,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "container copyright",
		children: [
			"© ",
			(/* @__PURE__ */ new Date()).getFullYear(),
			" AT promo. Todos os direitos reservados."
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 587,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 575,
		columnNumber: 5
	}, this);
}
function MobileStickyCTA() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			if (window.scrollY > 120) setShow(true);
			else setShow(false);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	if (!show) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mobile-sticky",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA, {
			flame: true,
			children: "ENTRAR NO GRUPO"
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 614,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 613,
		columnNumber: 5
	}, this);
}
function ATPromoLanding() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 622,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 624,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OfferPreview, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 625,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OffersShowcase, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 626,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HowItWorks, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 627,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FAQ, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 628,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 623,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 630,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileStickyCTA, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 631,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 621,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ATPromoLanding, {}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
