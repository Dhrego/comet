import{$ as e}from"./hoisted.d179b896.js";e(document).ready(function(){e("#emailForm").on("submit",async function(l){l.preventDefault();const o=t=>t.length===0?t:t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),r=o(e("#inputFullname").val()),a=e("#inputEmail").val(),n=o(e("#inputCompany").val()),s=o(e("#inputDetails").val());try{const i=await(await fetch("api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({company:n,name:r,email:a,text:s,html:`<div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h3 style="color: #333; text-transform: uppercase;">Message from ${r}</h3>
          ${n?`<h4 style="color: #555;">Company: ${n}</h4>`:""}
          <p style="color: #333;">${s}</p>
          <br>
          <p style="color: #777;">Email: <a href="mailto:${a}" style="color: #1a73e8;">${a}</a></p>
        </div>`})})).json();e("#response").text(i.message||i.error)}catch{e("#response").text("An error occurred while sending the email.")}})});
