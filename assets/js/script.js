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

          <div class="responsive-table-container">
            <table>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>User Name</th>
                  <th>User PIN</th>
                  <th>Designation<br>(Dabi/Progoti/BCUP/SCDP/NCDP)</th>
                  <th>User Grade</th>
                  <th>Phone Number<br>(Personal/Official)</th>
                  <th>Base Office Name & Code</th>
                  <th>Area Name</th>
                  <th>Region Name</th>
                  <th>Division Name<br>(If Request for RM (SAM) Mail Id)</th>
                  <th>Supervisor's Email<br>(If Request for AAM/ABM/ARM Mail Id)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Example</td>
                  <td>00000</td>
                  <td>AAM (Progoti)</td>
                  <td></td>
                  <td>017********</td>
                  <td>Example-0000</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>Example</td>
                  <td>am.p.example@brac.net</td>
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
        <h3>Rename BRAC Email</h3>
        <hr>
        <p><b>To:</b> it-support@brac.net</p>
        <p><b>CC:</b> mf.email@brac.net, User mail ID, Staff's Supervisor mail ID, Yours's Supervisor mail ID</p>
        <p><b>Subject:</b> Request to Rename Email ID (Branch Name - Code OR Area Name OR Region Name)</p>
        <hr>
        <p><b>Email Body:</b></p>
        <div id="renameEmailBody">
          <p>Dear IT support:<br>
          Greetings! For operational purposes (The reason for changing the name of the mentioned email id). The information are as follows:</p>

          <div class="responsive-table-container">
            <table>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>User Name</th>
                  <th>User PIN</th>
                  <th>User Designation</th>
                  <th>Phone Number</th>
                  <th>Base Office Name & Code</th>
                  <th>Present Email ID</th>
                  <th>Proposal for Renaming Email Id As-</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Example User</td>
                  <td>00000</td>
                  <td>Example Designation</td>
                  <td>017********</td>
                  <td>Example-0000</td>
                  <td>old.email@brac.net</td>
                  <td>new.email@brac.net</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button class="copy-btn" onclick="copyRenameEmail()">Copy Email Body</button>
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
      <h3>Backup Support During Leave</h3>
      <hr>
      <p><b>To:</b> All Field Colleagues</p>
      <p><b>Cc:</b> parvez.mosaraf@brac.net, nayan.das@brac.net, Nearest Technology Officers</p>
      <p><b>Subject:</b> Backup Support During My Leave</p>
      <hr>
      <p><b>Email Body:</b></p>
      <div id="leaveBackupBody">
        <p>Dear Respected Bhai & Apa,</p>

        <p>Greetings from MF Technology <b>Narail</b> Region!</p>

        <p>Please be informed that I will be on leave on <b>02/05/2025 (or alternatively, from 27 to 29 July 2025 for 2 days)</b>. During my absence, the following Technology Officers will remain as my backup support:</p>

        <table class="leave-backup-table">
          <thead>
            <tr>
              <th>Remote support</th>
              <th>Emergency Physical/<br>Remote support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Name:</b> Nayan Kumar Das<br>
                <b>Email:</b> nayan.das@brac.net<br>
                <b>Phone:</b> 01713-350478<br>
                <b>Base:</b> BRAC-HO
              </td>
              <td>
                <b>Name:</b> <br>
                <b>Email:</b> <br>
                <b>Phone:</b> <br>
                <b>Base:</b>
              </td>
            </tr>
          </tbody>
        </table>
        <br>
        <p><b>Note:</b><br>
        Kindly register any complaints via <b>Trendx CRM</b>. Our respectable personnel will contact you to resolve any issues.</p>

        <p>If there is an emergency feel free to contact me. I will be available over the phone and on WhatsApp. (Optional)</p>

        <p>I will be available for all kinds of support after leaving. Thanks for your patience & cooperation.</p>
      </div>
      <button class="copy-btn" onclick="copyLeaveBackup()">Copy Email Body</button>
    </div>
  `;
}
    else if (page === "complainEmail") {
    content.innerHTML = `
      <div class="card">
        <h3>Laptop Warranty Complain Email</h3>
        <hr>
        <p><b>To:</b> Corporate.support@1000fix.com</p>
        <p><b>CC:</b> related stockholders, supervisor</p>
        <p><b>Subject:</b> Urgent: Request to Laptop Warranty Support (Dell Latitude 3520 – 9SWRFG3)</p>
        <hr>
        <p><b>Email Body:</b></p>
        <div id="complainEmailBody">
          <p>Dear Concern,<br>
          Greetings!</p>

          <p>Please be informed that the Dell Latitude 3520 laptop's display unit is problematic. Detailed information is below.</p>

          <div class="responsive-table-container">
            <table>
              <tr>
                <td colspan="2" style="text-align: center; font-weight: bold;">Microfinance</td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: center; font-weight: bold;">Technology Unit</td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: center; font-weight: bold;">Laptop Complain Sheet</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Complain Date:</td>
                <td>07/07/2024</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Region Name:</td>
                <td>Gopalgonj-2</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">User Name:</td>
                <td>Bkash Das</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">User Mobile No:</td>
                <td>01798485601</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">User's current Address:</td>
                <td>BRAC Muksedpur Area Office, Muksedpur, Gopalgonj</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">User BRAC E-mail Address:</td>
                <td>bao.muksedpur@brac.net</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Laptop SL #</td>
                <td>Dell Latitude 3520- 9SWRFG3</td>
              </tr>
              <tr>
                <td style="font-weight: bold;">Problem Description:</td>
                <td>Display Problematic</td>
              </tr>
            </table>
          </div>
          <br>
          <p>Please see the attachment. Please take initiative as soon as possible.</p>
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
<br>
<p>07 September 2025</p>
      <ul style="margin-left: 20px;">
<li>v1.0.0 – Fixed copy format in desktop and mobile.</li>
        <li>v1.0.0 – Added contacts information and search option.</li>
        <li>v1.0.0 – Added CRM message format.</li>
        <li>v1.0.0 – Various design changes.</li>
      </ul>
    </div>
  `;
}
    else if (page === "crmMessageFormat") { 
  content.innerHTML = `
    <div class="card">
      <h3>Whatsapp DCS Support Format</h3> 
      <hr> 
      <p><b>Message Body:</b></p> 
      <pre id="crmMessageFormatBody">1. Name: 

2. PIN: 

3. Designation: 

4. Branch: 

5. Area: 

6. Region: 

7. Division: 

8. Contact: 

9. Supervision branch name & code: 

10. Project name with project code: 

11. Present area joining date: 

12. Problem Details: 

13. Problem Screenshot:</pre> 
      <button class="copy-btn" onclick="copyTextById('crmMessageFormatBody', this)">Copy Message Body</button>

    </div>
  `;
}
    else if (page === "contacts") {
  content.innerHTML = loadContacts();
}
}

// Copy create email function

function copyCreateEmail() {
  const emailBody = document.getElementById("createEmailBody");
  const helper = document.getElementById("copy-helper");
  
  // Create a light mode version for copying
  helper.innerHTML = emailBody.innerHTML;
  
  // Replace the table with our light mode version
  const table = helper.querySelector('table');
  if (table) {
    table.className = 'copy-table';
    
    // Apply light mode styles to all elements
    const allElements = helper.getElementsByTagName('*');
    for (let element of allElements) {
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
      element.style.borderColor = 'black';
    }
    
    // Specifically style table headers and cells
    const ths = helper.querySelectorAll('th');
    ths.forEach(th => {
      th.style.backgroundColor = '#f1f1f1';
    });
    
    const tds = helper.querySelectorAll('td');
    tds.forEach(td => {
      td.style.backgroundColor = 'white';
    });
  }
  
  // Select and copy the content
  const range = document.createRange();
  range.selectNode(helper);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyCreateEmail()']");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Email Body";
      }, 2000);
    }
  } catch (err) {
    console.error("Copy failed:", err);
  }
  
  selection.removeAllRanges();
}

// Copy rename email function

function copyRenameEmail() {
  const emailBody = document.getElementById("renameEmailBody");
  const helper = document.getElementById("copy-helper");
  
  // Create a light mode version for copying
  helper.innerHTML = emailBody.innerHTML;
  
  // Replace the table with our light mode version
  const table = helper.querySelector('table');
  if (table) {
    table.className = 'copy-table';
    
    // Apply light mode styles to all elements
    const allElements = helper.getElementsByTagName('*');
    for (let element of allElements) {
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
      element.style.borderColor = 'black';
    }
    
    // Specifically style table headers and cells
    const ths = helper.querySelectorAll('th');
    ths.forEach(th => {
      th.style.backgroundColor = '#f1f1f1';
    });
    
    const tds = helper.querySelectorAll('td');
    tds.forEach(td => {
      td.style.backgroundColor = 'white';
    });
  }
  
  // Select and copy the content
  const range = document.createRange();
  range.selectNode(helper);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyRenameEmail()']");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Email Body";
      }, 2000);
    }
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

function copyLeaveBackup() {
  const emailBody = document.getElementById("leaveBackupBody");
  const helper = document.getElementById("copy-helper");
  
  // Create a light mode version for copying
  helper.innerHTML = emailBody.innerHTML;
  
  // Remove the leave-backup-table class to avoid dark mode styles
  const table = helper.querySelector('table');
  if (table) {
    table.classList.remove('leave-backup-table');
    table.className = 'copy-table leave-backup-table';
    table.style.width = '400px';
    table.style.maxWidth = '400px';
    table.style.borderCollapse = 'collapse';
    table.style.fontFamily = 'Arial, sans-serif';
    table.style.border = '1px solid black';
    table.style.tableLayout = 'fixed';
    
    // Style table cells
    const tds = helper.querySelectorAll('td');
    tds.forEach(td => {
      td.style.border = '1px solid black';
      td.style.padding = '8px';
      td.style.textAlign = 'left';
      td.style.verticalAlign = 'top';
      td.style.width = '50%';
      td.style.backgroundColor = 'white';
      td.style.color = 'black';
    });
    
    // Style table headers
    const ths = helper.querySelectorAll('th');
    ths.forEach(th => {
      th.style.backgroundColor = '#f1f1f1';
      th.style.border = '1px solid black';
      th.style.padding = '8px';
      th.style.textAlign = 'center';
      th.style.width = '50%';
      th.style.color = 'black';
    });
  }
  
  // Select and copy the content
  const range = document.createRange();
  range.selectNode(helper);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyLeaveBackup()']");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Email Body";
      }, 2000);
    }
  } catch (err) {
    console.error("Copy failed:", err);
  }
  
  selection.removeAllRanges();
}

// Copy complain email

function copyComplainEmail() {
  const emailBody = document.getElementById("complainEmailBody");
  const helper = document.getElementById("copy-helper");
  
  // Create a light mode version for copying
  helper.innerHTML = emailBody.innerHTML;
  
  // Replace the table with our light mode version
  const table = helper.querySelector('table');
  if (table) {
    table.className = 'copy-table';
    
    // Apply light mode styles to all elements
    const allElements = helper.getElementsByTagName('*');
    for (let element of allElements) {
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
      element.style.borderColor = 'black';
    }
    
    // Specifically style table cells
    const tds = helper.querySelectorAll('td');
    tds.forEach(td => {
      td.style.backgroundColor = 'white';
      td.style.border = '1px solid black';
    });
  }
  
  // Select and copy the content
  const range = document.createRange();
  range.selectNode(helper);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  
  try {
    document.execCommand("copy");
    const btn = document.querySelector("button[onclick='copyComplainEmail()']");
    if (btn) {
      btn.textContent = "Copied!";
      setTimeout(() => {
        btn.textContent = "Copy Email Body";
      }, 2000);
    }
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

