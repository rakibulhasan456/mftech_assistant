// Sidebar elements
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector(".closebtn");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Sidebar links: load content & close sidebar
sidebar.querySelectorAll("a[data-section]").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const section = link.getAttribute("data-section");
    loadContent(section);
    sidebar.classList.remove("open"); // close sidebar after click
  });
});

// Close sidebar when clicking outside
document.addEventListener("click", (e) => {
  const sidebarOpen = sidebar.classList.contains("open");
  if (sidebarOpen && !sidebar.contains(e.target) && e.target !== menuBtn) {
    sidebar.classList.remove("open");
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
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="home-wrap">
      <h4 class="home-h4">Welcome to</h4>
      <h1 class="home-h1">MFTech</h1>
      <h2 class="home-h2">ASSISTANT</h2>
      <h5 class="home-h5">Find all your essential shortcuts in the menu.</h5>
    </div>
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
      <hr>
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
Personal SIM Number (only if doesn’t have BRAC SIM):</pre>
      <button class="copy-btn" onclick="copyTextById('emailBody', this)">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "createEmail") {
  content.innerHTML = `
    <div class="card">
      <h3>Create New BRAC Email</h3>
      <hr>
      <p><b>To:</b> it-support@brac.net</p>
      <p><b>CC:</b> mf.email@brac.net, Supervisors (if needed)</p>
      <p><b>Subject:</b> Request to Create New Email ID (Branch Name - Code OR Area Name OR Region Name)</p>
      <hr>
      <p><b>Email Body:</b></p>
      <div id="createEmailBody">
        <p>Dear Concern:<br>
        Please create a new Email ID for the User mentioned below:</p>

        <div style="overflow-x: auto; max-width: 100%;">
          <table cellspacing="0" cellpadding="5" 
            style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 13px; min-width: 900px; text-align: center; border: 1px solid black; width: 100%;">
            <thead>
              <tr>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">SL</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User Name</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User PIN</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Designation<br>(Dabi/Progoti/BCUP/SCDP/NCDP)</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User Grade</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Phone Number<br>(Personal/Official)</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Base Office Name & Code</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Area Name</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Region Name</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Division Name<br>(If Request for <b>RM (SAM)</b> Mail Id)</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Supervisor's Email<br>(If Request for AAM/ABM/ARM Mail Id)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid black;">1</td>
                <td style="border: 1px solid black;">Example</td>
                <td style="border: 1px solid black;">00000</td>
                <td style="border: 1px solid black;">AAM (Progoti)</td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;">017********</td>
                <td style="border: 1px solid black;">Example-0000</td>
                <td style="border: 1px solid black;">Example</td>
                <td style="border: 1px solid black;">Example</td>
                <td style="border: 1px solid black;">Example</td>
                <td style="border: 1px solid black;">am.p.example@brac.net</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button class="copy-btn" onclick="copyCreateEmail()">Copy Email Body</button>
    </div>
  `;
}
else if (page === "renameEmail") {
  content.innerHTML = `
    <div class="card">
      <h3>Rename Email ID</h3>
      <hr>
      <p><b>To:</b> it-support@brac.net</p>
      <p><b>CC:</b> mf.email@brac.net, User mail ID, Staff’s Supervisor mail ID, Yours’s Supervisor mail ID</p>
      <p><b>Subject:</b> Request to rename Email ID (Branch name- Code Or Area Name Or Region Name)</p>
      <hr>
      <p><b>Email Body:</b></p>
      <div id="renameEmailBody">
        <p>Dear IT support:<br>
        Greetings! For operational purposes (The reason for changing the name of the mentioned email id). The information are as follows:</p>

        <div style="overflow-x: auto; max-width: 100%;">
          <table cellspacing="0" cellpadding="5" 
       style="border-collapse: collapse; font-family: Arial, sans-serif; font-size: 13px; table-layout: fixed; min-width: 700px; border: 1px solid black;">
            <thead>
              <tr>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">SL</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User Name</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User PIN</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">User Designation</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Phone Number</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Base Office Name & Code</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Present Email ID</th>
                <th style="border: 1px solid black; padding: 5px; white-space: nowrap;">Proposal for Renaming Email Id As-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid black;">1</td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
                <td style="border: 1px solid black;"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button class="copy-btn" onclick="copyrenameEmail()">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "addToGroup") {
  content.innerHTML = `
    <div class="card">
      <h3>Add to Email Group</h3>
      <hr>
      <p><b>To:</b> it-support@brac.net</p>
      <p><b>CC:</b> mf.email@brac.net, User mail ID, Staff’s Supervisor mail ID, Yours’s Supervisor mail ID</p>
      
      <p><b>Subject:</b> Request to add mentioned email to specific email group</p>
      <hr>
      <p><b>Email Body:</b></p>
      <pre id="groupEmailBody">
Dear Concern:
Greetings! Please add this below mentioned Email Id to necessary email groups as the email doesn't receive all operational emails & circulars.

Email Id: xyz@brac.net
Pin:
Grade:

Thanks in advance!</pre>
      <button class="copy-btn" onclick="copyTextById('groupEmailBody', this)">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "leaveBackup") {
  content.innerHTML = `
    <div class="card">
      <h3>Leave Backup Email</h3>
      <hr>
      <p><b>To:</b> All Field Colleagues</p>
      <p><b>Cc:</b> parvez.mosaraf@brac.net, nayan.das@brac.net, Nearest Technology Officers</p>
      <p><b>Subject:</b> Backup Support During My Leave</p>
      <hr>

      <div id="leaveBackupBody">
        <p>Dear Respected Bhai & Apa,</p>
        <p>Greetings from MF Technology <b><i>Narail</i></b> Region!</p>

        <p>
          Please be informed that I will be on leave on 
          <b><i>02/05/2025 (or alternatively, from 27 to 29 July 2025 for 2 days)</i></b>.  
          During my absence, the following Technology Officers will remain as my backup support:
        </p>

        <table style="border-collapse: collapse; width: 100%; margin-top:10px; border:1px solid black;">
          <tr>
            <th style="border:1px solid black; padding:6px; text-align:left;">Remote support</th>
            <th style="border:1px solid black; padding:6px; text-align:left;">Emergency Physical/ Remote support</th>
          </tr>
          <tr>
            <td style="border:1px solid black; padding:6px;">
              <b>Name:</b> Nayan Kumar Das<br>
              <b>Email:</b> nayan.das@brac.net<br>
              <b>Phone:</b> 01713-350478<br>
              <b>Base:</b> BRAC-HO
            </td>
            <td style="border:1px solid black; padding:6px;">
              <b>Name:</b> <br>
              <b>Email:</b> <br>
              <b>Phone:</b> <br>
              <b>Base:</b> 
            </td>
          </tr>
        </table>

        <p style="margin-top:15px;">
          <b>Note:</b><br>
          Kindly register any complaints via Trendx CRM. Our respectable personnel will contact you to resolve any issues.
        </p>

        <p><i>If there is an emergency feel free to contact me. I will be available over the phone and on WhatsApp. (Optional)</i></p>

        <p>
          I will be available for all kinds of support after leaving. Thanks for your patience & cooperation.
        </p>

        <p>Best regards,<br>[Your Information]</p>
      </div>

      <div class="copy-button-container">
        <button class="copy-btn" onclick="copyleaveBackupEmail()">Copy Email Body</button>
      </div>
    </div>
  `;
}
    else if (page === "complainEmail") {
  content.innerHTML = `
    <div class="card">
      <h3>Laptop Complaint Email</h3>
      <hr>
      <p><b>To:</b> Corporate.support@1000fix.com</p>
      <p><b>CC:</b> related stockholders, supervisor</p>
      <p><b>Subject:</b> Urgent: Request to Laptop Warranty Support (Dell Latitude 3520 – 9SWRFG3)</p>
      <hr>
      <p><b>Email Body:</b></p>

      <div id="complainEmailBody">
        <p>Dear Concern,<br>
        Greetings!<br><br>
        Please be informed that the Dell Latitude 3520 laptop’s display unit is problematic. Detailed information is below.</p>

        <div style="overflow-x:auto;">
          <table cellspacing="0" cellpadding="6"
                 style="border-collapse: collapse; font-family: Arial, sans-serif; font-size:13px; border:1px solid black;">
            <tbody>
              <tr>
                <td colspan="2" style="border:1px solid black; padding:6px; text-align:center; font-weight:bold;">Microfinance</td>
              </tr>
              <tr>
                <td colspan="2" style="border:1px solid black; padding:6px; text-align:center; font-weight:bold;">Technology Unit</td>
              </tr>
              <tr>
                <td colspan="2" style="border:1px solid black; padding:6px; text-align:center; font-weight:bold;">Laptop Complain Sheet</td>
              </tr>

              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">Complain Date:</td>
                <td style="border:1px solid black; padding:6px;">07/07/2024</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">Region Name:</td>
                <td style="border:1px solid black; padding:6px;">Gopalgonj-2</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">User Name:</td>
                <td style="border:1px solid black; padding:6px;">Bkash Das</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">User Mobile No:</td>
                <td style="border:1px solid black; padding:6px;">01798485601</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">User’s current Address:</td>
                <td style="border:1px solid black; padding:6px;">
                  BRAC Muksedpur Area Office, Muksedpur, Gopalgonj
                </td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">User BRAC E-mail Address:</td>
                <td style="border:1px solid black; padding:6px;">bao.muksedpur@brac.net</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">Laptop SL #</td>
                <td style="border:1px solid black; padding:6px;">Dell Latitude 3520- 9SWRFG3</td>
              </tr>
              <tr>
                <td style="border:1px solid black; padding:6px; width:50%;">Problem Description:</td>
                <td style="border:1px solid black; padding:6px;">Display Problematic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style="margin-top:12px;">Please see the attachment. Please take initiative as soon as possible.</p>
      </div>

      <button class="copy-btn" onclick="copyComplainEmail()">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "whatsappDcsSupportFormat") { 
  content.innerHTML = `
    <div class="card">
      <h3>Whatsapp DCS Support Format</h3> 
      <hr> 
      <p><b>Message Body:</b></p> 
      <pre id="whatsappDcsBody">নিন্মলিখিত বিবরণ দিয়ে সমস্যা তুলে ধরতে হবে:
- শাখা কোড: 
- সিডিও/সিও পিন/ বিএম পিন:
- ⁠ভিও কোড (প্রযোজ্য ক্ষেত্রে):
- ⁠সদস্য নম্বর:
- ⁠সদস্যের নাম:
- সমস্যার স্ক্রিনশট: 
- সমস্যার বিস্তারিত:

Thank you.</pre> 
      <button class="copy-btn" onclick="copyTextById('whatsappDcsBody', this)">Copy Message Body</button>

    </div>
  `;
}
    else if (page === "bandwidthUpgradation") { 
  content.innerHTML = `
    <div class="card">
      <h3>Bandwidth Upgradation Request Format</h3> 
      <hr> 
      <p><b>Message Body:</b></p> 
      <pre id="bandwidthUpgradationBody">Branch Code:
Connectivity Type (Fiber/Radio):
Total Staff :
Number of Devices:
Current Bandwidth:
Required Bandwidth:
Upload Image: Current BW Screenshot</pre> 
      <button class="copy-btn" onclick="copyTextById('bandwidthUpgradationBody', this)">Copy Message Body</button>

    </div>
  `;
}
    else if (page === "resolutionCellularNetwork") {
  content.innerHTML = `
    <div class="card">
      <h3>Request for Resolution of Cellular Network Issue</h3>
      <hr>
      <p><b>To:</b> chandana.roy@brac.net</p>
      <p><b>CC:</b> walid.hashem@brac.net</p>
      <div style="margin-left: 34px;">
<p>monirul.islm@brac.net</p>
        <p>Relevant Management</p>
        <p>Technology Focal </p>
      </div>
      
      <p><b>Subject:</b> Request for Resolution of Cellular Network Issue (BRAC-Office_Name-Office_Code)</p>
      <hr>
      <p><b>Email Body:</b></p>
      <pre id="emailBody">
Dear Chandana Didi,

Greetings!

I am writing to bring to your immediate attention the issue of poor cellular network signals (both voice and data) at our BRAC Naihati office. (Problem Short Summary)

Office Location:
BRAC-Naihati Office, Location: ........ 
Branch Code: 8890

This connectivity issue is impacting our daily operations and causing significant disruption. We kindly request that you take the necessary steps to resolve this matter as soon as possible.

We appreciate your prompt attention to this matter and look forward to a quick resolution.</pre>

<span class="p1">Please remember to attach the filled Complaint Form (Word Copy) before sending the email.</span>
      <button class="copy-btn" onclick="copyTextById('emailBody', this)">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "about") {
  content.innerHTML = `
    <div class="card">
      <h3>About MFTech Assistant</h3>
      <hr>
      <p><b>App Version:</b> 1.0.0</p>
      <p><b>Changelog:</b></p>
      <p>26 August 2025</p>
      <ul style="margin-left: 20px;">
<li>v1.0.0 – Initial release.</li>
        <li>v1.0.0 – Added Staff Info section.</li>
        <li>v1.0.0 – Added several email format.</li>
        <li>v1.0.0 – Added frequently used message format.</li>
      </ul>
    </div>
  `;
}
}

// Copy create email function

function copyCreateEmail() {
  const range = document.createRange();
  const emailBody = document.getElementById("createEmailBody");
  range.selectNode(emailBody);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyCreateEmail()']");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
  selection.removeAllRanges();
}

// Copy rename email function

function copyrenameEmail() {
  const range = document.createRange();
  const emailBody = document.getElementById("renameEmailBody");
  range.selectNode(emailBody);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyrenameEmail()']");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
  selection.removeAllRanges();
}

// copy add email id to specific group

function copyCreateEmailBody(btn, targetId) {
  const emailBody = document.getElementById(targetId);
  if (!emailBody) return;

  const range = document.createRange();
  range.selectNode(emailBody);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }

  selection.removeAllRanges();
}

// copy backup email

function copyleaveBackupEmail() {
  const range = document.createRange();
  const emailBody = document.getElementById("leaveBackupBody");
  range.selectNode(emailBody);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyleaveBackupEmail()']");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
  selection.removeAllRanges();
}

// Copy complain email

function copyComplainEmail() {
  const range = document.createRange();
  const emailBody = document.getElementById("complainEmailBody");
  range.selectNode(emailBody);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyComplainEmail()']");
    btn.textContent = "Copied!";
    setTimeout(() => btn.textContent = "Copy Email Body", 2000);
  } catch (err) {
    console.error("Copy failed:", err);
  }
  selection.removeAllRanges();
}

// Universal copy text button
function copyTextById(elementId, btn) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const text = element.innerText || element.textContent;

  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);

  try {
    document.execCommand("copy");
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = originalText, 2000);
    }
  } catch (err) {
    console.error("Copy failed:", err);
  }

  document.body.removeChild(textarea);
}


document.addEventListener("DOMContentLoaded", () => {
  loadContent("home");
});

