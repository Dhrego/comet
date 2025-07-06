import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_Ceetm91e.mjs';
import 'kleur/colors';
import { $ as $$Layout, t as tiles } from '../chunks/Layout_C370FWn5.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Works = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Works", "description": "Enter the realm of creativity with \u2728 Andrea's portfolio. Witness the magic of innovation and the power of inspired design in every project.", "data-astro-cid-7atbypev": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-7atbypev> <main data-astro-cid-7atbypev> <!-- <div class="">Still working on them ........</div>
      <p>
        Welcome to Dhrego's Creative Hub! 🏄🏽 Explore my innovative projects and
        captivating artworks, showcasing my expertise as a Software Developer
        and UI/UX Designer.
      </p> --> <div class="container" data-astro-cid-7atbypev> <div class="project_carousel" data-astro-cid-7atbypev> <div class="title" data-astro-cid-7atbypev> <span data-astro-cid-7atbypev>PROJECTS</span> <span data-astro-cid-7atbypev>01</span> </div> <div class="scroll" data-mouseat="0" data-percentage="0" data-prev="0" data-astro-cid-7atbypev> ${tiles.map((tile, index) => renderTemplate`<div${addAttribute(`project_tile ${index === 0 ? "active" : ""}`, "class")} data-astro-cid-7atbypev> <img${addAttribute(tile.img, "src")} draggable="false" alt="" sizes="" srcset="" data-astro-cid-7atbypev> <div class="project_title" data-astro-cid-7atbypev>${tile.title}</div> <div class="project_info" data-astro-cid-7atbypev> <div class="keys" data-astro-cid-7atbypev> <div data-astro-cid-7atbypev>Category</div> <div data-astro-cid-7atbypev>Date</div> </div> <div class="values" data-astro-cid-7atbypev> <div data-astro-cid-7atbypev>${tile.type}</div> <div data-astro-cid-7atbypev>${tile.date}</div> </div> </div> <a class="btn"${addAttribute(tile.link, "href")} target="_blank" data-astro-cid-7atbypev>
view project
</a> </div>`)} </div> </div> </div> </main> </div> ` })}  ${renderScript($$result, "/Users/dhrego/Desktop/comet/src/pages/works.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/src/pages/works.astro", void 0);

const $$file = "/Users/dhrego/Desktop/comet/src/pages/works.astro";
const $$url = "/works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Works,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
