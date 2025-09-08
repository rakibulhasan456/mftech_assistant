// centralReport.js

function loadCentralReports() {
  const reportsData = [
    {name: "Knowledge Sharing & Onboarding Report (2025-26)", date: "01-Aug-2025", link: "https://docs.google.com/spreadsheets/d/187MZoX9yIG4wkRSW7_XUZRdopDoHkVh8IrX0sxt2hFY/edit?gid=59728012#gid=59728012"},
    {name: "Aug25-F1-Report-TO", date: "01-Aug-2025", link: "https://docs.google.com/spreadsheets/d/1BPKIe-07tRVrDhc0lNCwUB48z030AghTtTjs5oFjU7c/edit?gid=0#gid=0"},
    {name: "May25-F1+EDR-Report-TO", date: "01-May-2025", link: "https://docs.google.com/spreadsheets/d/1x7ELN7AYaE2wTF-Pu96wV9KGn3S4rTx5S_sEZVjlcrA/edit?gid=433389044#gid=433389044"},
    {name: "Retrieve UPS Units from IPS-Installed Branches", date: "24-Aug-2025", link: "https://docs.google.com/spreadsheets/d/1S8hMMlKxX6nYfj71rlri_A_j54Qx7jU-ea2Oeul6FWw/edit?gid=429692720#gid=429692720"},
    {name: "Inactive Email List Of MF Users", date: "07-Sep-2025", link: "https://docs.google.com/spreadsheets/d/12CaNsy6lNXUHdpvXd0TK2WSoPCD6hzEEPH-Hr6qKf34/edit?gid=1978590975#gid=1978590975"},
    {name: "Epson M1170 Printer Piloting", date: "18-Jun-2025", link: "https://docs.google.com/spreadsheets/d/1PLZmjLlreofLVbwsLi2SzsoitMj27KV-rFIfpVTKEqU/edit?gid=0#gid=0"},
    {name: "MNO Migration Branch List", date: "01-Sep-2025", link: "https://docs.google.com/spreadsheets/d/1D0inJ53KqbABo3KeT0vrGIWe1bz-IJ3bKDXcED8qJPE/edit?gid=0#gid=0"},
      {name: "Field Pulse for MF-Dabi (Branch Wise Status-2025)", date: "07-May-2025", link: "https://docs.google.com/spreadsheets/d/15SC6lzpgoUd8dhL5F4_I9ULFWdGJKJDHR5hToNbjy_c/edit?gid=0#gid=0"},
      {name: "Special Complain Sheet: Cellular Network (2025)", date: "01-Jul-2025", link: "https://docs.google.com/spreadsheets/d/1n284k_VCGHC7sZovpRlHtog4u0OdnNNF4pZAqjSQG_c/edit?gid=0#gid=0"}
  ];

  let sortConfig = { key: null, direction: 0 }; // 0 = default, 1 = asc, 2 = desc

  // Function to parse date strings in the format "dd-MMM-yyyy"
  function parseDate(dateStr) {
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const parts = dateStr.split('-');
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
    
    return new Date(year, month, day);
  }

  function renderRows(data) {
    return data.map((r) => `
      <tr>
        <td><a href="${r.link}" target="_blank" class="report-link">${r.name}</a></td>
        <td>${r.date}</td>
        <td><button class="report-copy" data-text="${r.link}">Copy</button></td>
      </tr>
    `).join("");
  }

  function renderTable(data) {
    return `
      <div class="card">
        <h3><i class="fa-solid fa-chart-column"></i> Central Reports</h3>
        <hr>
        <div class="search-container">
          <i class="fa-solid fa-search search-icon"></i>
          <input type="text" id="centralReportsSearch" class="search-input" placeholder="Search reports...">
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th data-key="name">Report Name <span class="sort-indicator">⇅</span></th>
                <th data-key="date">Date <span class="sort-indicator">⇅</span></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${renderRows(data)}
            </tbody>
          </table>
        </div>
        <div class="result-count">Showing ${data.length} of ${reportsData.length} reports</div>
      </div>
    `;
  }

  // Search functionality
  function filterReports(searchTerm) {
    if (!searchTerm) return reportsData;
    
    const term = searchTerm.toLowerCase();
    return reportsData.filter(report => 
      report.name.toLowerCase().includes(term) ||
      report.date.toLowerCase().includes(term)
    );
  }

  // Attach event listeners once the table is in DOM
  setTimeout(() => {
    const searchInput = document.getElementById("centralReportsSearch");
    const tableBody = document.querySelector("tbody");
    const resultCount = document.querySelector(".result-count");
    
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const filteredData = filterReports(searchInput.value);
        tableBody.innerHTML = renderRows(filteredData);
        resultCount.textContent = `Showing ${filteredData.length} of ${reportsData.length} reports`;
      });
    }
    
    // Sorting functionality (only for name and date columns)
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

        let dataToSort = filterReports(searchInput ? searchInput.value : '');
        let sorted;
        
        if (sortConfig.direction === 0) {
          // Default (unsorted) - use original filtered data
          sorted = dataToSort;
        } else {
          // Sort the data
          sorted = [...dataToSort].sort((a, b) => {
            // For date column, use proper date parsing
            if (key === 'date') {
              const dateA = parseDate(a[key]);
              const dateB = parseDate(b[key]);
              return sortConfig.direction === 1 ? 
                dateA - dateB : 
                dateB - dateA;
            } else {
              // For name column, use string comparison
              let valA = a[key].toString().toLowerCase();
              let valB = b[key].toString().toLowerCase();
              if (valA < valB) return sortConfig.direction === 1 ? -1 : 1;
              if (valA > valB) return sortConfig.direction === 1 ? 1 : -1;
              return 0;
            }
          });
        }

        tableBody.innerHTML = renderRows(sorted);
        if (resultCount) {
          resultCount.textContent = `Showing ${sorted.length} of ${reportsData.length} reports`;
        }

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

  return renderTable(reportsData);
}