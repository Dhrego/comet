import { c as createComponent, m as maybeRenderHead, b as renderTemplate, f as createAstro, d as addAttribute, s as spreadAttributes, h as renderSlot, r as renderComponent, a as renderScript, F as Fragment, i as renderHead } from './astro/server_Ceetm91e.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const $$Circle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="circle bg-transition" data-astro-cid-qjo3q37j></div> `;
}, "/Users/dhrego/Desktop/comet/src/components/Circle.astro", void 0);

const $$Astro$6 = createAstro();
const $$Navlink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Navlink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-aztgyhfm> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/dhrego/Desktop/comet/src/components/Navlink.astro", void 0);

const $$Astro$5 = createAstro();
const $$HamburgerMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$HamburgerMenu;
  const { items, data = "navbar1" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bobo"${addAttribute(data, "data-nav")} data-astro-cid-3tl7d3ae> <button class="hamburger-menu" aria-label="Toggle menu" aria-expanded="false" data-astro-cid-3tl7d3ae> <span data-astro-cid-3tl7d3ae></span> <span data-astro-cid-3tl7d3ae></span> <span data-astro-cid-3tl7d3ae></span> </button> <div class="koko" data-astro-cid-3tl7d3ae> <div class="overlay" data-astro-cid-3tl7d3ae> <ul class="nav-links" data-astro-cid-3tl7d3ae> ${items.map((navlink) => renderTemplate`<li class="nav-link" data-astro-cid-3tl7d3ae> ${renderComponent($$result, "Navlink", $$Navlink, { "href": navlink.href, "data-astro-cid-3tl7d3ae": true }, { "default": ($$result2) => renderTemplate`${navlink.text}` })} </li>`)} </ul> </div> ${renderComponent($$result, "Circle", $$Circle, { "data-astro-cid-3tl7d3ae": true })} </div> </div>  ${renderScript($$result, "/Users/dhrego/Desktop/comet/src/components/HamburgerMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/src/components/HamburgerMenu.astro", void 0);

const links = [
  {
    text: "The Bag Shop",
    href: "https://thebagshopgh-seven.vercel.app/"
    // img: "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    text: "Upop",
    href: "https://upop-seven.vercel.app/"
    // img: "shot.webp",
  },
  {
    text: "Freedom Photos",
    href: "https://freedom-roan.vercel.app/"
    // img: "shot_1.webp",
  },
  {
    text: "Hairlo",
    href: "https://www.figma.com/proto/g3sIrJB07eXhsZTHZTBIAf/Hairlo?node-id=1-3&t=WYHzUPMf8VYRKxHs-1&starting-point-node-id=34%3A733&show-proto-sidebar=1"
    // img: "shot_2.webp",
  }
];
const cards = [
  {
    title: "Design",
    content: "Design services are focused on transforming the essence of your brand into a visually appealing and intuitively",
    img: "design.svg"
  },
  {
    title: "Development",
    content: "Development services bring your vision to life with robust, scalable solutions tailored to your unique needs",
    img: "development.svg"
  },
  {
    title: "Performance",
    content: "Performance optimization ensures your digital presence is lightning-fast, reliable, and ready to exceed user expectations",
    img: "performance.svg"
  },
  {
    title: "Compatibility",
    content: "Compatibility services guarantee seamless user experiences across all devices and platforms, maximizing your reach and impact",
    img: "compatibility.svg"
  }
];
const hobbies = [
  {
    name: "Gaming",
    content: "As a die-hard Madridista, my relationship with FIFA has been a thrilling love-hate saga. It goes beyond just the game; it's become a part of me. I relish the thrill of dismantling my opponents 😹. I also had some great moments on Fortnite too. Through gaming, I've made invaluable friends and connected with fellow developers who share my passion for coding and gaming. Gaming has not just been a pastime for me; it's been a way to connect, compete, unwind, and annihilate others.",
    tag: "gaming"
  },
  {
    name: "Music",
    content: "Listening to music is a passion of mine. I enjoy a diverse range of genres that provide the perfect soundtrack to my day, whether I am coding, working out, or relaxing. Music has the power to transport me to another world, and I am always on the lookout for new artists and songs that inspire me. Music is a form of self-expression that connects me to my emotions and helps me process my thoughts. It's a constant source of joy and inspiration in my life. Here is my wrapped of 2023 from Spotify",
    tag: "music",
    img: ["wrapped_2023.jpg", "wrapped_2024.jpg"]
  },
  {
    name: "Movies & Tv Shows",
    content: "I love delving into the latest movies and TV shows, exploring everything from spine-chilling horror to captivating sci-fi. Storytelling in visual media intrigues me because it offers a diverse range of narratives and characters to explore. One of my favorite franchises is Game of Thrones. It blends epic battles, political intrigue, and complex relationships into a compelling narrative. The series has a unique way of blending fantasy elements with deep themes, making it a memorable and thought-provoking watch.",
    tag: "moviesandshows"
  },
  {
    name: "Anime & Manga",
    content: "I enjoy anime and manga, offering endless adventures with diverse characters and captivating new series. I am a perceptive critic with high standards, interested in rich narratives and unique art styles that ignite my imagination. Subpar stories usually do not cut it for me. I thrive on finding those exceptional stories that inspire and resonate deeply. My passion for unpredictable storytelling means I never settle for anything less than the best, with Attack on Titan currently being the only piece of art to exceed that criteria and Vagabond being one of the best reads in manga.",
    tag: "animeandmanga"
  },
  {
    name: "Fitness",
    content: `Working out is one of my key hobbies. I believe in maintaining a healthy and active lifestyle, and I enjoy various forms of exercise, from weightlifting to cardio workouts. Living by the creed stated by Thomas Jefferson, "A strong body makes the mind strong," is not just a guiding principle but also a basis of motivation and discipline for me. With Bulgarian splits being the simplest, and #1 as everyone's favorite workout 🤣 (if you know, you know).`,
    tag: "fitness"
  }
];
const tiles = [
  {
    img: "shot_3.webp",
    title: "The Bag Shop",
    type: "Web App",
    date: "20 Jan 2025",
    link: "https://thebagshopgh-seven.vercel.app/"
  },
  {
    img: "shot.webp",
    title: "Upop",
    type: "Website",
    date: "12 Dec 2023",
    link: "https://upop-seven.vercel.app/"
  },
  {
    img: "shot_1.webp",
    title: "Freedom Photos",
    type: "Website",
    date: "12 Nov 2024",
    link: "https://freedom-roan.vercel.app/"
  },
  {
    img: "shot_2.webp",
    title: "Hairlo",
    type: "Design",
    date: "1 Dec 2024",
    link: "https://www.figma.com/proto/g3sIrJB07eXhsZTHZTBIAf/Hairlo?node-id=1-3&t=WYHzUPMf8VYRKxHs-1&starting-point-node-id=34%3A733&show-proto-sidebar=1"
  }
];
const navlinks = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Myself",
    href: "/me"
  },
  {
    text: "Works",
    href: "/works"
  },
  {
    text: "Contact",
    href: "/contact"
  }
];

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname === "/me";
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div id="nav-marker" style="height: 1px;" data-astro-cid-5blmo7yk></div><nav data-astro-cid-5blmo7yk><div class="logo" data-astro-cid-5blmo7yk><svg width="357" height="241" viewBox="0 0 357 241" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5blmo7yk><path d="M356.257 162.119C346.988 188.282 329.273 210.297 306.13 224.412C282.987 238.528 255.849 243.871 229.339 239.531C202.828 235.191 75.0995 222.991 57.2572 202.167C39.415 181.342 132.563 153.18 131.489 125.324C130.414 97.4685 -14.9239 197.538 1.25723 175.297C17.4384 153.056 194.138 9.88056 220.229 3.35144C246.319 -3.17768 273.782 -0.107226 297.938 12.0396C322.094 24.1865 341.448 44.6582 352.703 69.9666L295.875 97.2366C290.694 85.5857 281.784 76.1613 270.663 70.5694C259.543 64.9775 246.9 63.564 234.889 66.5697C222.878 69.5755 242.338 86.9978 234.889 97.2366C227.44 107.475 193.542 109.897 194.037 122.721C194.532 135.545 212.015 130.073 220.229 139.66C228.442 149.247 226.879 173.299 239.083 175.297C251.287 177.295 253.742 155.498 264.396 149C275.05 142.502 293.244 151.704 297.511 139.66L356.257 162.119Z" fill="#8AAAE5" data-astro-cid-5blmo7yk></path></svg></div>${renderComponent($$result2, "HamburgerMenu", $$HamburgerMenu, { "data": "navbar1", "items": navlinks, "data-astro-cid-5blmo7yk": true })}</nav>${!currentPath && renderTemplate`<div class="sticky_one" data-astro-cid-5blmo7yk><div class="logo" data-astro-cid-5blmo7yk><svg width="357" height="241" viewBox="0 0 357 241" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5blmo7yk><path d="M356.257 162.119C346.988 188.282 329.273 210.297 306.13 224.412C282.987 238.528 255.849 243.871 229.339 239.531C202.828 235.191 75.0995 222.991 57.2572 202.167C39.415 181.342 132.563 153.18 131.489 125.324C130.414 97.4685 -14.9239 197.538 1.25723 175.297C17.4384 153.056 194.138 9.88056 220.229 3.35144C246.319 -3.17768 273.782 -0.107226 297.938 12.0396C322.094 24.1865 341.448 44.6582 352.703 69.9666L295.875 97.2366C290.694 85.5857 281.784 76.1613 270.663 70.5694C259.543 64.9775 246.9 63.564 234.889 66.5697C222.878 69.5755 242.338 86.9978 234.889 97.2366C227.44 107.475 193.542 109.897 194.037 122.721C194.532 135.545 212.015 130.073 220.229 139.66C228.442 149.247 226.879 173.299 239.083 175.297C251.287 177.295 253.742 155.498 264.396 149C275.05 142.502 293.244 151.704 297.511 139.66L356.257 162.119Z" fill="#8AAAE5" data-astro-cid-5blmo7yk></path></svg></div>${renderComponent($$result2, "HamburgerMenu", $$HamburgerMenu, { "data": "navbar2", "items": navlinks, "data-astro-cid-5blmo7yk": true })}</div>`}` })}${renderScript($$result, "/Users/dhrego/Desktop/comet/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/src/components/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const date = /* @__PURE__ */ new Date();
  let year = date.getFullYear();
  const isIndexPage = Astro2.url.pathname === "/";
  return renderTemplate`${isIndexPage ? renderTemplate`${maybeRenderHead()}<footer class="index" data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>
Copyright © ${year} Dhrego.
<br data-astro-cid-sz7xmlte> All rights reserved
</span><a class="icon" href="https://github.com/Dhrego" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile" data-astro-cid-sz7xmlte><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github" aria-hidden="true" data-astro-cid-sz7xmlte><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" data-astro-cid-sz7xmlte></path><path d="M9 18c-4.51 2-5-2-7-2" data-astro-cid-sz7xmlte></path></svg></a></footer>` : renderTemplate`<footer data-astro-cid-sz7xmlte><span data-astro-cid-sz7xmlte>© ${year} Dhrego. All rights reserved. version 2023.11.02/1</span></footer>`}`;
}, "/Users/dhrego/Desktop/comet/src/components/Footer.astro", void 0);

const AlternateGothicCondATFBold = "/_astro/AlternateGothicCondATF-Bold.DWkgHJxu.woff2";

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: AlternateGothicCondATFBold
}, Symbol.toStringTag, { value: 'Module' }));

const JollyLodger = "/_astro/JollyLodger.CrmGDuJU.woff2";

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: JollyLodger
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansBlack = "/_astro/MonaSans-Black.PpyXha70.woff2";

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansBlack
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansBlackItalic = "/_astro/MonaSans-BlackItalic.EtU-MhiC.woff2";

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansBlackItalic
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansBold = "/_astro/MonaSans-Bold.xgig_Gud.woff2";

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansBold
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansLight = "/_astro/MonaSans-Light.lPEVL4zt.woff2";

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansLight
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansRegular = "/_astro/MonaSans-Regular.C_k674dL.woff2";

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansRegular
}, Symbol.toStringTag, { value: 'Module' }));

const MonaSansExpandedBlack = "/_astro/MonaSansExpanded-Black.z2mSzPPa.woff2";

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: MonaSansExpandedBlack
}, Symbol.toStringTag, { value: 'Module' }));

const SedgwickAveDisplayRegular = "/_astro/SedgwickAveDisplay-Regular.C-0WqFyX.woff2";

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: SedgwickAveDisplayRegular
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$FontPreloader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FontPreloader;
  const fonts = Object.values(
    [__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4,__vite_glob_0_5,__vite_glob_0_6,__vite_glob_0_7,__vite_glob_0_8]
  );
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${fonts.map((font) => renderTemplate`<link rel="preload" as="font"${addAttribute(font.default, "href")}${addAttribute(`font/${font.default.split(".").pop()}`, "type")} crossorigin="anonymous">`)}` })}`;
}, "/Users/dhrego/Desktop/comet/src/components/FontPreloader.astro", void 0);

const $$Cursor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-msvfyisy": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="preview" data-astro-cid-msvfyisy><div class="preview-img" data-astro-cid-msvfyisy></div></div><div class="cursor-outline" data-astro-cid-msvfyisy></div><div class="cursor-dot" data-astro-cid-msvfyisy></div><div class="cursor-works" data-astro-cid-msvfyisy><div class="cursor-text" data-astro-cid-msvfyisy><div class="mask" data-astro-cid-msvfyisy><div data-text="View" data-astro-cid-msvfyisy>Drag</div></div></div><div class="cursor-svg" data-astro-cid-msvfyisy><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 0 10 10" version="1.1" data-astro-cid-msvfyisy><title>Path</title><g id="Desktop" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-astro-cid-msvfyisy><g id="Projects-Section" transform="translate(-948, -584)" fill="#FFFFFF" fill-rule="nonzero" stroke="#FFFFFF" stroke-width="0.542084" data-astro-cid-msvfyisy><g id="View-Project-Btn" transform="translate(872, 578)" data-astro-cid-msvfyisy><g id="Group" transform="translate(81.2399, 11.2386) rotate(90) translate(-81.2399, -11.2386)translate(77, 7)" data-astro-cid-msvfyisy><path d="M6.85063698,0.991467062 L-7.54301773e-17,7.8420592 L0.635086908,8.477176 L7.48568584,1.62655669 L7.61450285,6.07517349 L8.47980533,5.82270981 L8.34759125,1.25681924 C8.33013029,0.651943185 7.82444198,0.146251474 7.21955912,0.128740921 L2.77246421,-7.54301773e-17 L2.5192124,0.864532025 L6.85063698,0.991467062 Z" id="Path" data-astro-cid-msvfyisy></path></g></g></g></g></svg></div></div>` })}${renderScript($$result, "/Users/dhrego/Desktop/comet/src/components/Cursor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/src/components/Cursor.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/dhrego/Desktop/comet/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { description } = Astro2.props;
  const OgImage = "https://dhrego.com/OG.png";
  const url = "https://dhrego.com";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="logo.svg"><!-- FB --><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter--><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain" content="dhrego.com"><meta property="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', ">", '<meta name="generator"', "><title>", '</title><!-- Preload the image --><link rel="preload" href="img-group.png" as="image">', "</head> <body> ", " ", " ", " ", ' <script>\n      function speedInsightsBeforeSend(data) {\n        console.log("Speed Insights before send", data);\n        return data;\n      }\n    <\/script> ', " ", " ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(OgImage, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(OgImage, "content"), renderComponent($$result, "FontPreloader", $$FontPreloader, {}), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Cursor", $$Cursor, {}), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "SpeedInsights", $$Index, {}), renderScript($$result, "/Users/dhrego/Desktop/comet/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "/Users/dhrego/Desktop/comet/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "/Users/dhrego/Desktop/comet/src/layouts/Layout.astro", void 0);

export { $$Layout as $, cards as c, hobbies as h, links as l, tiles as t };
