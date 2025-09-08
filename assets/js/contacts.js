function loadContacts() {
      const contactsData = [
  {name: "Paul Purification", designation: "Senior Manager", zone: "All", region: "HO", email: "paul.pu@brac.net", mobile: "+8801729071448"},
  {name: "MD. SHOVAN SHAHRIAR", designation: "Deputy Manager", zone: "", region: "UTC", email: "shovan.shahriar@brac.net", mobile: "+8801313017000"},
  {name: "SEKH MD KAWSAR", designation: "Deputy Manager", zone: "", region: "UTC", email: "sekh.kawsar@brac.net", mobile: "+8801708913777"},
  {name: "Md. Osman Sarwar", designation: "Manager", zone: "South-East", region: "Cumilla BLC", email: "osman.sarwar@brac.net", mobile: "+8801714091472"},
  {name: "MD. MOSIAR RAHMAN", designation: "Manager", zone: "North-East", region: "UTC", email: "mosiar.rahman@brac.net", mobile: "+8801714091463"},
  {name: "AZMIR MAHMUD", designation: "Deputy Manager", zone: "South-East", region: "Bogura BLC", email: "azmir.mahmud@brac.net", mobile: "+8801759553272"},
  {name: "Md. Parvez Mosaraf", designation: "Deputy Manager", zone: "South-West", region: "Jessor BLC", email: "parvez.mosaraf@brac.net", mobile: "+8801759557236"},
  {name: "NUZHAT MOUMITA", designation: "Senior Officer", zone: "", region: "HO", email: "nuzhat.moumita@brac.net", mobile: "+8801713350479"},
  {name: "SAJAL KUMAR SHIL", designation: "Senior Officer", zone: "", region: "UTC", email: "sajal.kumar@brac.net", mobile: "+8801332838272"},
  {name: "MD ABDUR RAHIM", designation: "Deputy Manager", zone: "", region: "UTC", email: "abdur.rahim@brac.net", mobile: "+8801729071453"},
  {name: "ALJEREENA AHSAN ANANNA", designation: "Senior Officer", zone: "", region: "UTC", email: "aljereena.ananna@brac.net", mobile: "+8801332557092"},
  {name: "NEEL MUHAMMAD", designation: "Senior Officer", zone: "", region: "UTC", email: "neel.muhammad@brac.net", mobile: "+8801729071928"},
  {name: "GM MEHEDI HASAN", designation: "Deputy Manager", zone: "", region: "UTC", email: "mehedi.gm@brac.net", mobile: "+8801324737242"},
  {name: "SHARIFUZZAMAN KHAN SHAWRAV", designation: "Senior Officer", zone: "", region: "UTC", email: "sharif.shawrav@brac.net", mobile: "+8801324714677"},
  {name: "MD A HANNAN", designation: "Associate Officer", zone: "", region: "UTC", email: "hannan.a@brac.net", mobile: ""},
  {name: "M. G. MAHMUD", designation: "Officer", zone: "", region: "UTC", email: "mahmud.mg@brac.net", mobile: "+8801332512378"},
  {name: "Nasir Ahmed", designation: "Senior Officer", zone: "North-East", region: "Ashulia-Dhaka", email: "to.ashulia-dhaka@brac.net", mobile: "+8801332943769"},
  {name: "Md. Akramul Al Hossain", designation: "Senior Officer", zone: "North-East", region: "Bakshigonj-Jamalpur", email: "to.bakshigonj-jamalpur@brac.net", mobile: "+8801332838269"},
  {name: "Md. Saifullah", designation: "Officer", zone: "North-East", region: "Baniachong-Habiganj", email: "to.baniachong-habigonj@brac.net", mobile: "+8801332838266"},
  {name: "Kawser Ahamed", designation: "Technology Officer", zone: "North-East", region: "Barhatta-NetroKona", email: "to.barhatta-netrokona@brac.net", mobile: "+8801332943778"},
  {name: "Md Nadimul Haque", designation: "Officer", zone: "North-East", region: "Chatak-Sunamganj", email: "to.chatak-sunamgonj@brac.net", mobile: "+8801332943777"},
  {name: "Md. Osman Harun", designation: "Senior Officer", zone: "North-East", region: "Gazipur", email: "to.gazipur@brac.net", mobile: "+8801708913765"},
  {name: "Dipta Kumar Kundu", designation: "Senior Officer", zone: "North-East", region: "Gulshan-Dhaka", email: "to.gulshan-dhaka@brac.net", mobile: "+8801313795060"},
  {name: "Asish Karmakar", designation: "Officer", zone: "North-East", region: "Habigonj", email: "to.habigonj@brac.net", mobile: "+8801313795089"},
  {name: "Md Mehedi Hasan Rony", designation: "Officer", zone: "North-East", region: "Itna-Kishoreganj", email: "to.itna-kishoregonj@brac.net", mobile: "+8801332943768"},
  {name: "Shoaib", designation: "Senior Officer", zone: "North-East", region: "Jamalpur", email: "to.jamalpur@brac.net", mobile: "+8801313795092"},
  {name: "Md. Shahid Awal", designation: "Senior Officer", zone: "North-East", region: "Jatrabari-Dhaka", email: "to.jatrabari-dhaka@brac.net", mobile: "+8801313795085"},
  {name: "Ranjit Sutradhar", designation: "Senior Officer", zone: "North-East", region: "Kishoregong", email: "to.kishoregong@brac.net", mobile: "+8801313795082"},
  {name: "Shohag Roy", designation: "Senior Officer", zone: "North-East", region: "Lalbag-Dhaka", email: "to.lalbag-dhaka@brac.net", mobile: "+8801322943737"},
  {name: "Towfiqur Rahman", designation: "Senior Officer", zone: "North-East", region: "Madhupur", email: "to.madhupur@brac.net", mobile: "+8801313795090"},
  {name: "Gour Saha", designation: "Senior Officer", zone: "North-East", region: "Manikgonj", email: "to.manikgonj@brac.net", mobile: "+8801708913775"},
  {name: "Aminul Islam", designation: "Senior Officer", zone: "North-East", region: "Mymensingh", email: "to.mymensingh@brac.net", mobile: "+8801708913756"},
  {name: "Md. Anuwarul Islam", designation: "Senior Officer", zone: "North-East", region: "Narsingdi", email: "to.narsingdi@brac.net", mobile: "+8801313795078"},
  {name: "Md. Imran Hossain", designation: "Senior Officer", zone: "North-East", region: "Nawabgonj-Dhaka", email: "to.nawabgonj@brac.net", mobile: "+8801332943759"},
  {name: "Md. Mosarrof Hossain Sarker", designation: "Officer", zone: "North-East", region: "Netrokona", email: "to.netrokona@brac.net", mobile: "+8801313795081"},
  {name: "Md. Rabiul Islam", designation: "Senior Officer", zone: "North-East", region: "Savar-Dhaka", email: "to.savar-dhaka@brac.net", mobile: "+8801729071497"},
  {name: "Md. Ashiqul Islam", designation: "Senior Officer", zone: "North-East", region: "Sherpur", email: "to.sherpur@brac.net", mobile: "+8801313795067"},
  {name: "Md. Naeem Molla", designation: "Officer", zone: "North-East", region: "Sreemangal", email: "to.sreemangal@brac.net", mobile: "+8801313795068"},
  {name: "Rakib Ahmed", designation: "Senior Officer", zone: "North-East", region: "Sreepur-Gazipur", email: "to.sreepur-gazipur@brac.net", mobile: "+8801332943761"},
  {name: "Anik Chandra Paul", designation: "Senior Officer", zone: "North-East", region: "Sunamgonj", email: "to.sunamgonj@brac.net", mobile: "+8801313795093"},
  {name: "Nusrat Jahan Amy Nusrat", designation: "Officer", zone: "North-East", region: "Sylhet", email: "to.sylhet@brac.net", mobile: "+8801708913754"},
  {name: "Hafsa Binta Rahman Mim", designation: "Technology Officer", zone: "North-East", region: "Tangail", email: "to.tangail@brac.net", mobile: "+8801313795080"},
  {name: "Abid Hasan Ayon", designation: "Senior Officer", zone: "North-East", region: "Trishal-Mymensingh", email: "to.trishal-mymensingh@brac.net", mobile: "+8801332943735"},
  {name: "Md. Abdullah Al Mamun", designation: "Senior Officer", zone: "North-East", region: "Uttara-Dhaka", email: "to.uttara-dhaka@brac.net", mobile: "+8801332943776"},
  {name: "Md. Harun Or Rashid", designation: "Senior Officer", zone: "North-West", region: "Bagura", email: "to.bogura@brac.net", mobile: "+8801708913773"},
  {name: "Rafi Ahmed", designation: "Senior Officer", zone: "North-West", region: "Chapainawabgong", email: "to.chapainawabgong@brac.net", mobile: "+8801708913755"},
  {name: "Atiya Shobnom", designation: "Officer", zone: "North-West", region: "Dhupcachia-Bagura", email: "to.dupchachia-bogura@brac.net", mobile: "+8801332943770"},
  {name: "Md. Golam Mortuza", designation: "Senior Officer", zone: "North-West", region: "Dinajpur", email: "to.dinajpur@brac.net", mobile: "+8801313795076"},
  {name: "Md. Tanjirul Islam", designation: "Senior Officer", zone: "North-West", region: "Fulbari-Dinajpur", email: "to.fulbari-dinajpur@brac.net", mobile: "+8801313795075"},
  {name: "Fahomid Al Farid Hasan", designation: "Senior Officer", zone: "North-West", region: "Gabindaganj-Gaibandha", email: "to.gobindagonj-gaibandha@brac.net", mobile: "+8801332943773"},
  {name: "Md. Kamrul Hasan", designation: "Senior Officer", zone: "North-West", region: "Gaibandha", email: "to.gaibandha@brac.net", mobile: "+8801708913764"},
  {name: "Md. Abu Basher", designation: "Officer", zone: "North-West", region: "Hatibandha-Lalmonirhat", email: "to.hatibandah-lalmonirhat@brac.net", mobile: "+8801332943765"},
  {name: "Enayet Noby Nishan", designation: "Senior Officer", zone: "North-West", region: "Joypurhat", email: "to.joypurhat@brac.net", mobile: "+8801708913776"},
  {name: "Kamrun Nahar Shampa", designation: "Officer", zone: "North-West", region: "Kahaloo-Bagura", email: "to.kahaloo-bogura@brac.net", mobile: "+8801332943771"},
  {name: "Md. Abu Raihan Sarker", designation: "Senior Officer", zone: "North-West", region: "Kurigram", email: "to.kurigram@brac.net", mobile: "+8801708913768"},
  {name: "Md. Abdul Karim", designation: "Senior Officer", zone: "North-West", region: "Lalmonirhat", email: "to.lalmonirhat@brac.net", mobile: "+8801332838271"},
  {name: "Md. Imran Hossain", designation: "Senior Officer", zone: "North-West", region: "Naogaon", email: "to.naogaon@brac.net", mobile: "+8801708913760"},
  {name: "Most. Sabrina Nuzhat", designation: "Senior Officer", zone: "North-West", region: "Natore", email: "to.natore@brac.net", mobile: "+8801708913757"},
  {name: "Md. Mostafijur Rahman", designation: "Officer", zone: "North-West", region: "Nilphamari", email: "to.nilphamari@brac.net", mobile: "+8801313795086"},
  {name: "Md.Robiul Islam", designation: "Senior Officer", zone: "North-West", region: "Niyamatpur-Naogaon", email: "to.niamotpur-naogaon@brac.net", mobile: "+8801332943758"},
  {name: "Md. Ualiullah Khan", designation: "Senior Officer", zone: "North-West", region: "Pabna", email: "to.pabna@brac.net", mobile: "+8801708913761"},
  {name: "Md. Nur Hamza", designation: "Officer", zone: "North-West", region: "Panchagor", email: "to.panchagor@brac.net", mobile: "+8801332943766"},
  {name: "Md. Moniruzzaman", designation: "Senior Officer", zone: "North-West", region: "Rajshahi", email: "to.rajshahi@brac.net", mobile: "+8801708913774"},
  {name: "Hossain Md Ramzan Ali Sunny", designation: "Senior Officer", zone: "North-West", region: "Rangpur", email: "to.rangpur@brac.net", mobile: "+8801730348222"},
  {name: "SM. Moshiur Rahman", designation: "Senior Officer", zone: "North-West", region: "Sirajgonj", email: "to.sirajgonj@brac.net", mobile: "+8801313795072"},
  {name: "Md. Humayun Kabir", designation: "Senior Officer", zone: "North-West", region: "Sujanagar-Pabna", email: "to.sujanagar-pabna@brac.net", mobile: "+8801332838264"},
  {name: "Shambhu Kumar Roy", designation: "Senior Officer", zone: "North-West", region: "Syedpur", email: "to.syedpur@brac.net", mobile: "+8801332838267"},
  {name: "Md. Roni Kujjaman", designation: "Senior Officer", zone: "North-West", region: "Thakurgaon", email: "to.thakurgaon@brac.net", mobile: "+8801313795079"},
  {name: "Md. Khairul Islam", designation: "Senior Officer", zone: "North-West", region: "Ullapara-Sirajgonj", email: "to.ullapara-sirajgonj@brac.net", mobile: "+8801729071231"},
  {name: "Md. Maniruzzaman", designation: "Officer", zone: "South-East", region: "B.Baria", email: "to.bbaria@brac.net", mobile: "+8801313795074"},
  {name: "Md Khokon Miah", designation: "Senior Officer", zone: "South-East", region: "Bhairab", email: "to.bhairab@brac.net", mobile: "+8801332943779"},
  {name: "Mohammed Shafayet Ullah Rimon", designation: "Officer", zone: "South-East", region: "Chakaria-Chattogram", email: "to.chakaria-coxsbazar@brac.net", mobile: "+8801332943772"},
  {name: "Nishan Dey", designation: "Senior Officer", zone: "South-East", region: "Chandanish-Chattogram", email: "to.chandanish-chattogram@brac.net", mobile: "+8801313795088"},
  {name: "Nayon Kumar das", designation: "Senior Officer", zone: "South-East", region: "Chandpur", email: "to.chandpur@brac.net", mobile: "+8801313795071"},
  {name: "Priyanti Barua", designation: "Officer", zone: "South-East", region: "Chattogram", email: "to.chattogram@brac.net", mobile: "+8801313795087"},
  {name: "Sajnin Alam", designation: "Officer", zone: "South-East", region: "Cox's Bazar", email: "to.coxsbazar@brac.net", mobile: "+8801313795073"},
  {name: "Kawsar Ahammed", designation: "Senior Officer", zone: "South-East", region: "Cumilla", email: "to.cumilla@brac.net", mobile: "+8801708913770"},
  {name: "Hasibul Hasan Rahim", designation: "Officer", zone: "South-East", region: "Daudkandi-Cumilla", email: "to.daudkandi-cumilla@brac.net", mobile: "+8801313795077"},
  {name: "Aditi Khastagir", designation: "Officer", zone: "South-East", region: "Feni", email: "to.feni@brac.net", mobile: "+8801313795091"},
  {name: "Rehana Pervin", designation: "Senior Officer", zone: "South-East", region: "Kachua-Chandpur", email: "to.kachua-chandpur@brac.net", mobile: "+8801332943783"},
  {name: "Shuvo Kumar Saha", designation: "Officer", zone: "South-East", region: "Laksam-Cumilla", email: "to.laksam-cumilla@brac.net", mobile: "+8801313407693"},
  {name: "Shaikat Dev", designation: "Officer", zone: "South-East", region: "Laxmipur", email: "to.laxmipur@brac.net", mobile: "+8801313795066"},
  {name: "Himadri Das Reshmee", designation: "Officer", zone: "South-East", region: "Matiranga-Khagrachari", email: "to.matiranga-khagrachari@brac.net", mobile: "+8801332943775"},
  {name: "Md. Abdullah Al Khalid", designation: "Officer", zone: "South-East", region: "Munshigonj", email: "to.munshigonj@brac.net", mobile: "+8801313795069"},
  {name: "Md Jahid Alam", designation: "Officer", zone: "South-East", region: "Muradnagar-Cumilla", email: "to.muradnagar-cumilla@brac.net", mobile: "+8801332943780"},
  {name: "Md. Najmul Hasan Arif", designation: "Senior Officer", zone: "South-East", region: "Narayanganj", email: "to.narayangonj@brac.net", mobile: "+8801332838270"},
  {name: "Mahmudul Hasan", designation: "Senior Officer", zone: "South-East", region: "Noakhali", email: "to.noakhali@brac.net", mobile: "+8801708913769"},
  {name: "Joy Prakash Chowdhury", designation: "Officer", zone: "South-East", region: "Rangamati", email: "to.rangamati@brac.net", mobile: "+8801708913767"},
  {name: "Md. Hosna Mobarak", designation: "Officer", zone: "South-East", region: "Sonargaon", email: "to.sonargaon@brac.net", mobile: "+8801313795084"},
  {name: "Mahafuzur Rahaman Ovi", designation: "Senior Officer", zone: "South-West", region: "Bagerhat", email: "to.bagerhat@brac.net", mobile: "+8801313795065"},
  {name: "Mehedi Hasan", designation: "Officer", zone: "South-West", region: "Barguna", email: "to.barguna@brac.net", mobile: "+8801332943760"},
  {name: "Md Aktaruzzaman Azad", designation: "Senior Officer", zone: "South-West", region: "Barishal", email: "to.barishal@brac.net", mobile: "+8801708913751"},
  {name: "Mohammad Mamun", designation: "Senior Officer", zone: "South-West", region: "Bhanga-Faridpur", email: "to.bhanga-faridpur@brac.net", mobile: "+8801332943762"},
  {name: "Md. Yousuf", designation: "Officer", zone: "South-West", region: "Bhola", email: "to.bhola@brac.net", mobile: "+8801313795063"},
  {name: "Md. Al- Amin", designation: "Senior Officer", zone: "South-West", region: "Chuadanga", email: "to.chuadanga@brac.net", mobile: "+8801708913763"},
  {name: "Md. Rashed", designation: "Senior Officer", zone: "South-West", region: "Faridpur", email: "to.faridpur@brac.net", mobile: "+8801313795070"},
  {name: "Mohammad Rakibul Hasan", designation: "Officer", zone: "South-West", region: "Gopalgonj", email: "to.gopalgonj@brac.net", mobile: "+8801708913753"},
  {name: "Siamul Islam", designation: "Senior Officer", zone: "South-West", region: "Jashore", email: "to.jashore@brac.net", mobile: "+8801708913762"},
  {name: "Senigda Azad Rini", designation: "Senior Officer", zone: "South-West", region: "Jhenaidha", email: "to.jhenaidha@brac.net", mobile: "+8801313795061"},
  {name: "Md. Ashraful Islam", designation: "Senior Officer", zone: "South-West", region: "Khulna", email: "to.khulna@brac.net", mobile: "+8801313795083"},
  {name: "Md Humayun Kabir", designation: "Senior Officer", zone: "South-West", region: "Kustia", email: "to.kustia@brac.net", mobile: "+8801708913750"},
  {name: "Lutfor Rahman", designation: "Senior Officer", zone: "South-West", region: "Madaripur", email: "to.madaripur@brac.net", mobile: "+8801708913772"},
  {name: "Sandip Biswas", designation: "Senior Officer", zone: "South-West", region: "Magura", email: "to.magura@brac.net", mobile: "+8801332838268"},
  {name: "Md. Ariful Islam", designation: "Senior Officer", zone: "South-West", region: "Meherpur", email: "to.meherpur@brac.net", mobile: "+8801332838265"},
  {name: "Debasish Shaha", designation: "Senior Officer", zone: "South-West", region: "Narail", email: "to.narail@brac.net", mobile: "+8801730347805"},
  {name: "Md. Rejaul Haque Khan", designation: "Senior Officer", zone: "South-West", region: "Patuakhali", email: "to.patuakhali@brac.net", mobile: "+8801708913771"},
  {name: "Md. Abdul Ahad Khan", designation: "Senior Officer", zone: "South-West", region: "Pirojpur", email: "to.pirojpur@brac.net", mobile: "+8801708913758"},
  {name: "Md. Rumman Hossain", designation: "Senior Officer", zone: "South-West", region: "Rajbari", email: "to.rajbari@brac.net", mobile: "+8801708913759"},
  {name: "Md. Hasan Mahmud", designation: "Senior Officer", zone: "South-West", region: "Sathkhira", email: "to.sathkhira@brac.net", mobile: "+8801313795062"},
  {name: "Hirok Kabiraj", designation: "Senior Officer", zone: "South-West", region: "Shariatpur", email: "to.shariatpur@brac.net", mobile: "+8801313795064"}
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
            <h3><i class="fa-solid fa-address-book"></i> Contact Information</h3>
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
                    <th data-key="region">Base/Region <span class="sort-indicator">⇅</span></th>
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