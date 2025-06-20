const express = require("express");
const ModbusRTU = require("modbus-serial");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();


app.use(cors());


app.use(express.static("public"));

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  }
});


const client = new ModbusRTU();
const IP = "172.19.11.55";
const PORT = 502;
const SLAVE_IDS = Array.from({ length: 17 }, (_, i) => i + 1); // 1 to 17

async function connectModbus() {
  try {
    await client.connectTCP(IP, { port: PORT });
    console.log(`✅ Connected to ${IP}:${PORT}`);
    pollSlaves();
  } catch (err) {
    console.error(`❌ Failed to connect: ${err.message}`);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function pollSlaves() {
  while (true) {
    for (const slaveId of SLAVE_IDS) {
      try {
        client.setID(slaveId);
        const data = await client.readHoldingRegisters(1, 4); // Read 1–4
        io.emit("sensor-data", {
          slaveId,
          values: data.data,
          timestamp: new Date().toLocaleTimeString(),
        });
        console.log(`✅ Slave ${slaveId} →`, data.data);
      } catch (err) {
        console.warn(`❌ Error reading slave ${slaveId} on ${IP}: ${err.message}`);
      }
      await sleep(200); 
    }

    console.log("⏱ Waiting 10 seconds before next full read...");
    await sleep(10000);
  }
}


io.on("connection", (socket) => {
  console.log("🖥️ Web client connected");
});

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
  connectModbus();
});