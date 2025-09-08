// zonalReport.js

function loadZonalReports() {
  const reportsData = [
    {name: "South-West Zone Sheet", date: "01-May-2024", link: "https://docs.google.com/spreadsheets/d/1kA3-gBc1X1jX-7ibI6bHgswF1ENNQGX0R2QTWSTCzHg/edit?pli=1&gid=2023854126#gid=2023854126"},
    {name: "September Non-CRM Report", date: "01-Sep-2025", link: "https://docs.google.com/spreadsheets/d/1kA3-gBc1X1jX-7ibI6bHgswF1ENNQGX0R2QTWSTCzHg/edit?pli=1&gid=29221233#gid=29221233"},
    {name: "Team Presentation", date: "01-Jul-2025", link: "https://docs.google.com/spreadsheets/d/1kA3-gBc1X1jX-7ibI6bHgswF1ENNQGX0R2QTWSTCzHg/edit?pli=1&gid=684298777#gid=684298777"},
    {name: "South-West Zone Branch Mapping", date: "01-Jul-2025", link: "https://docs.google.com/spreadsheets/d/1amxaTwh8Au34M3t1KSfXxgVux1uumsLB/edit?gid=1086051388#gid=1086051388"},
    {name: "South-West Zone TO instrument/tools list", date: "01-Jul-2025", link: "https://docs.google.com/spreadsheets/d/1dSz7T68b7Q0DnOOlDTQxi9TCVSVWGauVdcA0yjhSqts/edit?gid=1430943911#gid=1430943911"}
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
        <h3><i class="fa-solid fa-chart-line"></i> Zonal Reports</h3>
        <hr>
        <div class="search-container">
          <i class="fa-solid fa-search search-icon"></i>
          <input type="text" id="reportsSearch" class="search-input" placeholder="Search reports...">
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
    const searchInput = document.getElementById("reportsSearch");
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

// Event delegation for report copy buttons
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("report-copy")) {
    const text = e.target.getAttribute("data-text");
    copyReportToClipboard(e.target, text);
  }
});

// Copy logic for reports
function copyReportToClipboard(el, text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showReportCopied(el);
    }).catch(() => {
      fallbackCopy(text);
      showReportCopied(el);
    });
  } else {
    fallbackCopy(text);
    showReportCopied(el);
  }
}

// Fallback copy method
function fallbackCopy(text) {
  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

// Store original text for each button to ensure proper restoration
const originalButtonText = new WeakMap();

// Temporary Copied! display for reports - fixed button behavior
function showReportCopied(el) {
  // Store original text if not already stored
  if (!originalButtonText.has(el)) {
    originalButtonText.set(el, el.textContent);
  }
  
  // Change to "Copied!" state
  el.textContent = "Copied!";
  el.classList.add("copied");
  
  // Set timeout to revert back
  setTimeout(() => {
    const originalText = originalButtonText.get(el);
    if (originalText) {
      el.textContent = originalText;
    } else {
      el.textContent = "Copy"; // Fallback
    }
    el.classList.remove("copied");
  }, 1200);
}