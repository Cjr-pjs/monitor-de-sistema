const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

// I simplified the names of the possible results to make them more understandable.
// Inside a dynamic class
const systemPlatformMap = {
  "win32": "Windows",
  "linux": "Linux",
  "darwin": "MacOS",
  "freebsd": "FreeBSD"
};

function getSystemInfo() {
  const system = systemPlatformMap[os.platform()] || os.platform();
  const cpu = os.cpus()[0].model;
  const systemArch = os.arch();

  const uptimeDays = Math.floor(os.uptime() / 86400);
  const uptimeHours = Math.floor((os.uptime() % 86400) / 3600);     // Converting system usage time to a normal number
  const uptimeMinutes = Math.floor((os.uptime() % 3600) / 60);
  const uptimeSeconds = Math.floor(os.uptime() % 60);
  const uptime = `${uptimeDays} days, ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`;

  const ramTotal = os.totalmem() / 1024 / 1024 / 1024; // Convert bytes to GB
  const ramFree = os.freemem() / 1024 / 1024 / 1024;   // Convert bytes to GB

  return { system, cpu, systemArch, uptime, ramTotal, ramFree };
}

function printLog({ system, cpu, systemArch, uptime, ramTotal, ramFree }) {
  console.clear();
  console.log("Details of the system:");
  console.log(`System operating: ${system}`);
  console.log(`System architecture: ${systemArch}`);
  console.log(`CPU: ${cpu}`);
  console.log(`System activity: ${uptime}`);
  console.log(`Total RAM: ${ramTotal.toFixed(2)} GB`);
  console.log(`Free RAM: ${ramFree.toFixed(2)} GB`); // toFixed(2) → format the number to 2 decimal places
}

function saveLog({ system, cpu, systemArch, uptime, ramTotal, ramFree }) {
  const logDir = path.join("/", "log"); // log folder at system root
  const logFilePath = path.join(logDir, "log.txt");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true }); // create folder if it doesn't exist
  }

  const logContent =
    `\n[${new Date().toLocaleString()}]\n` +
    `System operating: ${system}\n` +
    `System architecture: ${systemArch}\n` +
    `CPU: ${cpu}\n` +
    `System activity: ${uptime}\n` +
    `Total RAM: ${ramTotal.toFixed(2)} GB\n` +
    `Free RAM: ${ramFree.toFixed(2)} GB\n`;

  fs.appendFileSync(logFilePath, logContent);
}

// Main loop: update every 1 second
setInterval(() => {
  const systemInfo = getSystemInfo();
  printLog(systemInfo);
  saveLog(systemInfo);
}, 1000);
