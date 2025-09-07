function loadContacts() {
      const contactsData = [
        {name: "Parvez Mosaraf", designation: "Deputy Manager", zone: "South-West", region: "Jashore BLC", email: "parvez.mosaraf@brac.net", mobile: "+8801759557236"},
        {name: "Md Humayun Kabir", designation: "Senior Officer", zone: "South-West", region: "Kustia", email: "to.kustia@brac.net", mobile: "+8801708913750"},
        {name: "Md Aktaruzzaman Azad", designation: "Senior Officer", zone: "South-West", region: "Barishal", email: "to.barishal@brac.net", mobile: "+8801708913751"},
        {name: "Md. Al- Amin", designation: "Senior Officer", zone: "South-West", region: "Chuadanga", email: "to.chuadanga@brac.net", mobile: "+8801708913763"},
        {name: "Senigda Azad Rini", designation: "Senior Officer", zone: "South-West", region: "Jhenaidha", email: "to.jhenaidha@brac.net", mobile: "+8801313795061"},
        {name: "Lutfor Rahman", designation: "Senior Officer", zone: "South-West", region: "Madaripur", email: "to.madaripur@brac.net", mobile: "+8801708913772"},
        {name: "Md. Rejaul Haque Khan", designation: "Senior Officer", zone: "South-West", region: "Patuakhali", email: "to.patuakhali@brac.net", mobile: "+8801708913771"},
        {name: "Md. Rumman Hossain", designation: "Senior Officer", zone: "South-West", region: "Rajbari", email: "to.rajbari@brac.net", mobile: "+8801708913759"},
        {name: "Md. Abdul Ahad Khan", designation: "Senior Officer", zone: "South-West", region: "Pirojpur", email: "to.pirojpur@brac.net", mobile: "+8801708913758"},
        {name: "Sandip Biswas", designation: "Senior Officer", zone: "South-West", region: "Magura", email: "to.magura@brac.net", mobile: "+8801332838268"},
        {name: "Md. Ashraful Alam", designation: "Senior Officer", zone: "South-West", region: "Khulna", email: "to.khulna@brac.net", mobile: "+8801313795083"},
        {name: "Mahafuzur Rahaman Ovi", designation: "Senior Officer", zone: "South-West", region: "Bagerhat", email: "to.bagerhat@brac.net", mobile: "+8801313795065"},
        {name: "Md. Hasan Mahmud", designation: "Senior Officer", zone: "South-West", region: "Sathkhira", email: "to.sathkhira@brac.net", mobile: "+8801313795062"},
        {name: "Md. Rashed", designation: "Senior Officer", zone: "South-West", region: "Faridpur", email: "to.faridpur@brac.net", mobile: "+8801313795070"},
        {name: "Md. Ariful Islam", designation: "Senior Officer", zone: "South-West", region: "Meherpur", email: "to.meherpur@brac.net", mobile: "+8801332838265"},
        {name: "Siamul Islam", designation: "Senior Officer", zone: "South-West", region: "Jashore", email: "to.jashore@brac.net", mobile: "+8801708913762"},
        {name: "Mohammad Mamun", designation: "Senior Officer", zone: "South-West", region: "Bhanga", email: "to.bhanga- faridpur@brac.net", mobile: "+8801332943762"},
        {name: "Hirok Kabiraj", designation: "Senior Officer", zone: "South-West", region: "Shariatpur", email: "to.shariatpur@brac.net", mobile: "+8801313795064"},
        {name: "Debasish Shaha", designation: "Senior Officer", zone: "South-West", region: "Narail", email: "to.narail@brac.net", mobile: "+8801730347805"},
        {name: "Mehedi Hasan", designation: "Officer", zone: "South-West", region: "Barguna", email: "to.barguna@brac.net", mobile: "+8801332943760"},
        {name: "Md. Yousuf", designation: "Officer", zone: "South-West", region: "Bhola", email: "to.bhola@brac.net", mobile: "+8801313795063"},
        {name: "Mohammad Rakibul Hasan", designation: "Officer", zone: "South-West", region: "Gopalgonj", email: "to.gopalgonj@brac.net", mobile: "+8801708913753"},
      ];

      let sortConfig = { key: null, direction: 0 }; // 0 = default, 1 = asc, 2 = desc

      function renderRows(data) {
        return data.map((c) => `
          <tr>
            <td>${c.name}</td>
            <td>${c.designation}</td>
            <td>${c.zone}</td>
            <td>${c.region}</td>
            <td><span class="contact-copy" data-text="${c.email}">${c.email}</span></td>
            <td><span class="contact-copy mobile-btn" data-text="${c.mobile}">${c.mobile}</span></td>
          </tr>
        `).join("");
      }

      function renderTable(data) {
        return `
          <div class="card">
            <h3><i class="fa-solid fa-address-book"></i> Contacts Information</h3>
            <hr>
            <div class="search-container">
              <i class="fa-solid fa-search search-icon"></i>
              <input type="text" id="contactsSearch" class="search-input" placeholder="Search contacts...">
            </div>
            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th data-key="name">Name <span class="sort-indicator">⇅</span></th>
                    <th data-key="designation">Designation <span class="sort-indicator">⇅</span></th>
                    <th data-key="zone">Zone <span class="sort-indicator">⇅</span></th>
                    <th data-key="region">Region <span class="sort-indicator">⇅</span></th>
                    <th data-key="email">Email <span class="sort-indicator">⇅</span></th>
                    <th data-key="mobile">Mobile <span class="sort-indicator">⇅</span></th>
                  </tr>
                </thead>
                <tbody>
                  ${renderRows(data)}
                </tbody>
              </table>
            </div>
            <div class="result-count">Showing ${data.length} of ${contactsData.length} contacts</div>
          </div>
        `;
      }

      // Search functionality
      function filterContacts(searchTerm) {
        if (!searchTerm) return contactsData;
        
        const term = searchTerm.toLowerCase();
        return contactsData.filter(contact => 
          contact.name.toLowerCase().includes(term) ||
          contact.designation.toLowerCase().includes(term) ||
          contact.zone.toLowerCase().includes(term) ||
          contact.region.toLowerCase().includes(term) ||
          contact.email.toLowerCase().includes(term) ||
          contact.mobile.toLowerCase().includes(term)
        );
      }

      // Attach event listeners once the table is in DOM
      setTimeout(() => {
        const searchInput = document.getElementById("contactsSearch");
        const tableBody = document.querySelector("tbody");
        const resultCount = document.querySelector(".result-count");
        
        // Search functionality
        searchInput.addEventListener("input", () => {
          const filteredData = filterContacts(searchInput.value);
          tableBody.innerHTML = renderRows(filteredData);
          resultCount.textContent = `Showing ${filteredData.length} of ${contactsData.length} contacts`;
        });
        
        // Sorting functionality
        document.querySelectorAll("th[data-key]").forEach(th => {
          th.addEventListener("click", () => {
            const key = th.dataset.key;
            
            // If clicking on a different column, reset to ascending
            if (sortConfig.key !== key) {
              sortConfig.key = key;
              sortConfig.direction = 1; // Start with ascending
            } else {
              // Cycle through the directions: 0 → 1 → 2 → 0
              sortConfig.direction = (sortConfig.direction + 1) % 3;
            }

            let dataToSort = filterContacts(searchInput.value);
            let sorted;
            
            if (sortConfig.direction === 0) {
              // Default (unsorted) - use original filtered data
              sorted = dataToSort;
            } else {
              // Sort the data
              sorted = [...dataToSort].sort((a, b) => {
                let valA = a[key].toString().toLowerCase();
                let valB = b[key].toString().toLowerCase();
                if (valA < valB) return sortConfig.direction === 1 ? -1 : 1;
                if (valA > valB) return sortConfig.direction === 1 ? 1 : -1;
                return 0;
              });
            }

            tableBody.innerHTML = renderRows(sorted);
            resultCount.textContent = `Showing ${sorted.length} of ${contactsData.length} contacts`;

            // Reset all indicators
            document.querySelectorAll(".sort-indicator").forEach(ind => ind.textContent = "⇅");

            // Update clicked header indicator if not in default state
            const indicator = th.querySelector(".sort-indicator");
            if (sortConfig.direction === 1) {
              indicator.textContent = "↑";
            } else if (sortConfig.direction === 2) {
              indicator.textContent = "↓";
            }
            // If direction is 0 (default), keep the double arrow
          });
        });
      }, 0);

      return renderTable(contactsData);
    }

    // Event delegation for contacts copy buttons
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("contact-copy")) {
        const text = e.target.getAttribute("data-text");
        copyToClipboard(e.target, text);
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

    // Temporary Copied! display
    function showCopied(el) {
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