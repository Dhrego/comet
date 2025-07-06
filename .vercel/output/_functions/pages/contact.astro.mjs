import { c as createComponent, r as renderComponent, a as renderScript, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ceetm91e.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CjBSbxts.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact", "description": "Ready to make things happen? \u{1F525} Reach out to Andrea and ignite the spark of collaboration. Let's turn ideas into reality, together.", "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-uw5kdbxl> <main data-astro-cid-uw5kdbxl> <form action="#" id="emailForm" data-astro-cid-uw5kdbxl> <div class="contact-row" data-astro-cid-uw5kdbxl> <div class="contact-form" data-astro-cid-uw5kdbxl> <div class="heading" data-astro-cid-uw5kdbxl>
Let's work together! <br data-astro-cid-uw5kdbxl>Fill out this form.
</div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="inputFullname" data-astro-cid-uw5kdbxl>first and last name *</label> <input id="inputFullname" class="form-control custom-input" type="text" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="inputCompany" data-astro-cid-uw5kdbxl>company name</label> <input id="inputCompany" class="form-control custom-input" type="text" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="inputEmail" data-astro-cid-uw5kdbxl>email *</label> <input id="inputEmail" class="form-control custom-input" type="email" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label class="mb-2" for="inputDetails" data-astro-cid-uw5kdbxl>
tell me about your company and project *
</label> <textarea id="inputDetails" placeholder="Type something interesting..." class="form-control textarea custom-input-textarea" required data-astro-cid-uw5kdbxl></textarea> <button type="submit" class="btn btn-outline-success" data-astro-cid-uw5kdbxl>
Get in touch
</button> </div> </div> <hr class="separator" data-astro-cid-uw5kdbxl> <div class="contact-info" data-astro-cid-uw5kdbxl> <div class="img-block" data-astro-cid-uw5kdbxl> <img src="guy.svg" alt="" class="guy" draggable="false" data-astro-cid-uw5kdbxl> </div> <div class="info-details" data-astro-cid-uw5kdbxl> <div class="info-item" data-astro-cid-uw5kdbxl> <small data-astro-cid-uw5kdbxl>let's collaborate</small> <a href="mailto:work@dhrego.com" class="info-link" data-astro-cid-uw5kdbxl>work@dhrego.com</a> </div> <div class="info-item" data-astro-cid-uw5kdbxl> <small data-astro-cid-uw5kdbxl>feature me</small> <a href="mailto:press@dhrego.com" class="info-link" data-astro-cid-uw5kdbxl>press@dhrego.com</a> </div> </div> </div> </div> </form> <div class="success_msg" style="display: none;" data-astro-cid-uw5kdbxl> <div class="logo" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl> <img class="icon-1" src="smile.svg" alt="smile" srcset="" data-astro-cid-uw5kdbxl> </span> </div> <span class="message" data-astro-cid-uw5kdbxl>Message succesfully sent</span> </div> <div class="error_msg" style="display: none;" data-astro-cid-uw5kdbxl> <div class="logo" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl> <img class="icon-1" src="sad.svg" alt="smile" srcset="" data-astro-cid-uw5kdbxl> </span> </div> <span class="message" data-astro-cid-uw5kdbxl>Unable to send message</span> </div> </main> </div> ` })}  ${renderScript($$result, "/Users/dhrego/Desktop/comet/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/dhrego/Desktop/comet/src/pages/contact.astro", void 0);

const $$file = "/Users/dhrego/Desktop/comet/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
