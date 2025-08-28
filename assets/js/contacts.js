function loadContacts() {
  const contactsData = [
    {name: "Parvez Mosaraf", designation: "Deputy Manager", region: "Jashore BLC", email: "parvez.mosaraf@brac.net", mobile: "+8801759557236"},
    {name: "Md Humayun Kabir", designation: "Senior Officer", region: "Kustia", email: "to.kustia@brac.net", mobile: "+8801708913750"},
    {name: "Md Aktaruzzaman Azad", designation: "Senior Officer", region: "Barishal", email: "to.barishal@brac.net", mobile: "+8801708913751"},
    {name: "Md. Al- Amin", designation: "Senior Officer", region: "Chuadanga", email: "to.chuadanga@brac.net", mobile: "+8801708913763"},
    {name: "Senigda Azad Rini", designation: "Senior Officer", region: "Jhenaidha", email: "to.jhenaidha@brac.net", mobile: "+8801313795061"},
    {name: "Lutfor Rahman", designation: "Senior Officer", region: "Madaripur", email: "to.madaripur@brac.net", mobile: "+8801708913772"},
    {name: "Md. Rejaul Haque Khan", designation: "Senior Officer", region: "Patuakhali", email: "to.patuakhali@brac.net", mobile: "+8801708913771"},
    {name: "Md. Rumman Hossain", designation: "Senior Officer", region: "Rajbari", email: "to.rajbari@brac.net", mobile: "+8801708913759"},
    {name: "Md. Abdul Ahad Khan", designation: "Senior Officer", region: "Pirojpur", email: "to.pirojpur@brac.net", mobile: "+8801708913758"},
    {name: "Sandip Biswas", designation: "Senior Officer", region: "Magura", email: "to.magura@brac.net", mobile: "+8801332838268"},
    {name: "Md. Ashraful Alam", designation: "Senior Officer", region: "Khulna", email: "to.khulna@brac.net", mobile: "+8801313795083"},
    {name: "Mahafuzur Rahaman Ovi", designation: "Senior Officer", region: "Bagerhat", email: "to.bagerhat@brac.net", mobile: "+8801313795065"},
    {name: "Md. Hasan Mahmud", designation: "Senior Officer", region: "Sathkhira", email: "to.sathkhira@brac.net", mobile: "+8801313795062"},
    {name: "Md. Rashed", designation: "Senior Officer", region: "Faridpur", email: "to.faridpur@brac.net", mobile: "+8801313795070"},
    {name: "Md. Ariful Islam", designation: "Senior Officer", region: "Meherpur", email: "to.meherpur@brac.net", mobile: "+8801332838265"},
    {name: "Siamul Islam", designation: "Senior Officer", region: "Jashore", email: "to.jashore@brac.net", mobile: "+8801708913762"},
    {name: "Mohammad Mamun", designation: "Senior Officer", region: "Bhanga", email: "to.bhanga- faridpur@brac.net", mobile: "+8801332943762"},
    {name: "Hirok Kabiraj", designation: "Senior Officer", region: "Shariatpur", email: "to.shariatpur@brac.net", mobile: "+8801313795064"},
    {name: "Debasish Shaha", designation: "Senior Officer", region: "Narail", email: "to.narail@brac.net", mobile: "+8801730347805"},
    {name: "Mehedi Hasan", designation: "Officer", region: "Barguna", email: "to.barguna@brac.net", mobile: "+8801332943760"},
    {name: "Md. Yousuf", designation: "Officer", region: "Bhola", email: "to.bhola@brac.net", mobile: "+8801313795063"},
    {name: "Mohammad Rakibul Hasan", designation: "Officer", region: "Gopalgonj", email: "to.gopalgonj@brac.net", mobile: "+8801708913753"},
  ];

  let rows = contactsData.map((c, index) => `
    <tr style="background: ${index % 2 === 0 ? "#ffffff" : "#f9f9f9"};">
      <td style="padding: 10px;">${c.name}</td>
      <td style="padding: 10px;">${c.designation}</td>
      <td style="padding: 10px;">${c.region}</td>
      <td style="padding: 10px;"><span class="contact-copy" data-text="${c.email}">${c.email}</span></td>
      <td style="padding: 10px;"><span class="contact-copy mobile-btn" data-text="${c.mobile}">${c.mobile}</span></td>
    </tr>
  `).join("");

  return `
    <div class="card">
      <h3>Contacts</h3>
      <hr>
      <div style="max-height: 400px; overflow-y: auto; border-radius: 8px;">
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr style="background: #f1f1f1; text-align: left;">
              <th style="padding: 10px;">Name</th>
              <th style="padding: 10px;">Designation</th>
              <th style="padding: 10px;">Region</th>
              <th style="padding: 10px;">Email</th>
              <th style="padding: 10px;">Mobile</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}




// Event delegation for contacts copy buttons
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("contact-copy")) {
    const text = e.target.getAttribute("data-text");
    copyToClipboard(e.target, text);

    // Mobile number call option
    if (e.target.classList.contains("mobile-btn")) {
      const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
      if (isMobile) {
        setTimeout(() => {
          if (confirm("Do you want to call?")) {
            window.location.href = "tel:" + text;
          }
        }, 200);
      }
    }
  }
});

// Copy logic
function copyToClipboard(el, text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showCopied(el);
    }).catch(() => {
      fallbackCopy(text);
      showCopied(el);
    });
  } else {
    fallbackCopy(text);
    showCopied(el);
  }
}

function fallbackCopy(text) {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

// Temporary Copied! display without breaking text
function showCopied(el) {
  // store original text if not stored yet
  if (!el.hasAttribute("data-original")) {
    el.setAttribute("data-original", el.innerText);
  }

  el.classList.add("copied");
  el.innerText = "Copied!";

  setTimeout(() => {
    el.innerText = el.getAttribute("data-original");
    el.classList.remove("copied");
  }, 1200);
}
