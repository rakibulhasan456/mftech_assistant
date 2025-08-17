// Sidebar elements
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".closebtn");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.style.width = "260px";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
});

// Sidebar links: load content & close sidebar
sidebar.querySelectorAll("a[data-section]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.getAttribute("data-section");
    loadContent(section);
    sidebar.style.width = "0"; // close sidebar after click
  });
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  const sidebarOpen = sidebar.style.width === "260px";
  if (sidebarOpen && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.style.width = "0";
  }
});

// Dark/Light Mode
const modeToggle = document.getElementById("modeToggle");
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark-mode");
  modeToggle.textContent = "☀️";
} else {
  modeToggle.textContent = "🌙";
}
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Load Content Function
function loadContent(page) {
  const content = document.getElementById("content");
  
  if (page === "home") {
    content.innerHTML = `
      <h2>Welcome to MFTech Helper</h2>
      <p>Navigate to Menu for more shortcuts.</p>
    `;
  } else if (page === "staffInfo") {
    content.innerHTML = `
      <iframe src="https://hrportal.brac.net/profile/StaffInfoIndividual.aspx"
              width="100%" height="600px" style="border:none;"></iframe>
    `;
  } else if (page === "emailReset") {
    content.innerHTML = `
      <div class="card">
        <h3>Email Password Reset</h3>
        <p><b>To:</b> it-support@brac.net</p>
        <p><b>CC:</b> mf.email@brac.net</p>
        <div style="margin-left: 34px;">
          <p>User mail ID</p>
          <p>Staff’s Supervisor mail ID</p>
          <p>Yours’s Supervisor mail ID</p>
        </div>
        
        <p><b>Subject:</b> Request to Reset Mail ID Password</p>
<hr>
        <p><b>Email Body:</b></p>
        <pre id="emailBody">
Dear IT support:
Hope this email finds you well.
Please reset xyz@brac.net mail ID’s password.

User information:
User Name:
User Pin:
User Designation:
Branch Name (MF):
Branch Code (MF):
Area Name (MF):
Region Name (MF):
BRAC SIM Number:
Personal SIM Number (only if doesn’t have BRAC SIM):
        </pre>
        <button class="copy-btn" onclick="copyEmail()">Copy Email Body</button>
      </div>
    `;
  }
}

// Copy Email Function
function copyEmail() {
  const text = document.getElementById("emailBody").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector(".copy-btn");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  }).catch(err => console.error("Copy failed:", err));
}
