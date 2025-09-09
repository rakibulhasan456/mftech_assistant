// downloads.js

function loadDownloads() {
  const downloadsData = [
    {name: "Cellular Network Complain Form", link: "https://drive.google.com/uc?export=download&id=1DnP37U-1mN7STPfrmehijImTxylaBWwY"},
    {name: "Travelling Approval", link: "https://drive.google.com/uc?export=download&id=1omegnDicX2J2Uf-kQVbn7sGB3c0T8Ayk"},
      {name: "Travelling Bill", link: "https://drive.google.com/uc?export=download&id=1wrhYV0k_hB0GoP1kcfAfyrZYHHHtFz93"}
  ];

  let downloadsSortConfig = { key: null, direction: 0 }; // 0 = default, 1 = asc, 2 = desc

  function renderDownloadRows(data) {
    return data.map((r) => `
      <tr>
        <td><a href="${r.link}" target="_blank" class="report-link">${r.name}</a></td>
        <td><button class="report-copy" data-text="${r.link}">Copy</button></td>
      </tr>
    `).join("");
  }

  function renderDownloadTable(data) {
    return `
      <div class="card">
        <h3><i class="fa-solid fa-download"></i> Downloads</h3>
        <hr>
        <div class="search-container">
          <i class="fa-solid fa-search search-icon"></i>
          <input type="text" id="downloadsSearch" class="search-input" placeholder="Search downloads...">
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th data-key="name">Download Name <span class="sort-indicator">⇅</span></th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${renderDownloadRows(data)}
            </tbody>
          </table>
        </div>
        <div class="result-count">Showing ${data.length} of ${downloadsData.length} downloads</div>
      </div>
    `;
  }

  // Search functionality
  function filterDownloads(searchTerm) {
    if (!searchTerm) return downloadsData;
    
    const term = searchTerm.toLowerCase();
    return downloadsData.filter(download => 
      download.name.toLowerCase().includes(term)
    );
  }

  // Attach event listeners once the table is in DOM
  setTimeout(() => {
    const searchInput = document.getElementById("downloadsSearch");
    const tableBody = document.querySelector("#downloads-section tbody");
    const resultCount = document.querySelector("#downloads-section .result-count");
    
    // Search functionality
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const filteredData = filterDownloads(searchInput.value);
        if (tableBody) {
          tableBody.innerHTML = renderDownloadRows(filteredData);
        }
        if (resultCount) {
          resultCount.textContent = `Showing ${filteredData.length} of ${downloadsData.length} downloads`;
        }
      });
    }
    
    // Sorting functionality (only for name column)
    const downloadHeaders = document.querySelectorAll("#downloads-section th[data-key]");
    if (downloadHeaders.length) {
      downloadHeaders.forEach(th => {
        th.addEventListener("click", () => {
          const key = th.dataset.key;
          
          // If clicking on a different column, reset to ascending
          if (downloadsSortConfig.key !== key) {
            downloadsSortConfig.key = key;
            downloadsSortConfig.direction = 1; // Start with ascending
          } else {
            // Cycle through the directions: 0 → 1 → 2 → 0
            downloadsSortConfig.direction = (downloadsSortConfig.direction + 1) % 3;
          }

          let dataToSort = filterDownloads(searchInput ? searchInput.value : '');
          let sorted;
          
          if (downloadsSortConfig.direction === 0) {
            // Default (unsorted) - use original filtered data
            sorted = dataToSort;
          } else {
            // Sort the data
            sorted = [...dataToSort].sort((a, b) => {
              let valA = a[key].toString().toLowerCase();
              let valB = b[key].toString().toLowerCase();
              if (valA < valB) return downloadsSortConfig.direction === 1 ? -1 : 1;
              if (valA > valB) return downloadsSortConfig.direction === 1 ? 1 : -1;
              return 0;
            });
          }

          if (tableBody) {
            tableBody.innerHTML = renderDownloadRows(sorted);
          }
          if (resultCount) {
            resultCount.textContent = `Showing ${sorted.length} of ${downloadsData.length} downloads`;
          }

          // Reset all indicators in downloads section only
          document.querySelectorAll("#downloads-section .sort-indicator").forEach(ind => ind.textContent = "⇅");

          // Update clicked header indicator if not in default state
          const indicator = th.querySelector(".sort-indicator");
          if (downloadsSortConfig.direction === 1) {
            indicator.textContent = "↑";
          } else if (downloadsSortConfig.direction === 2) {
            indicator.textContent = "↓";
          }
          // If direction is 0 (default), keep the double arrow
        });
      });
    }
  }, 0);

  return renderDownloadTable(downloadsData);
}