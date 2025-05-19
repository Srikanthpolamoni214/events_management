// // const http= require("http");
// // const fs = require("fs").promises;



// // const server= http.createServer((req, res) => {
// //         // CORS Headers for every request
// //     res.setHeader("Access-Control-Allow-Origin", "*");
// //     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
// //     res.setHeader("Access-Control-Allow-Headers", "Content-Type");

// //     // Handle preflight OPTIONS
    
// //     if (req.method === "OPTIONS") {
// //         res.writeHead(204); // No content
// //         return res.end();
// //     }
// //     // Handle GET request
// //     if (req.method=="POST") {
// //         let body = "";
// //         req.on("data", (chunk) => {
// //             body += chunk.toString();
// //         });
// //         req.on("end", async() => {

// //             // Parse the JSON data
// //             const pareddata = JSON.parse(body);
            
// //     const existing = await fs.readFile("data.json", "utf-8");
// //             const existingData = JSON.parse(existing);
// //             existingData.push(pareddata);


// //           await  fs.writeFile("data.json", JSON.stringify(existingData) );
// //             console.log(body);
// //             res.writeHead(200, { "Content-Type": "application/json" });
// //             res.end(JSON.stringify({ message: "Data received" }));
// //         });
// //     }
// // }
// // );
// // server.listen(3000, () =>
// //     {
// //         console.log(`Server is running on port 3000`);
// //         console.log(`http://localhost:3000`);
// //     }
// // );
   
// //chatgpt
//  const http = require("http");
// const fs = require("fs").promises;

// const server = http.createServer((req, res) => {
//   // Set CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");
  
//   res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   // Handle OPTIONS preflight request
//   if (req.method === "OPTIONS") {
//     res.writeHead(204);
//     return res.end();
//   }

//   // Handle GET request
//   if (req.method === "GET") {

  
    
//     async function readData() {
//  const data = await  fs.readFile("data.json", "utf-8");
//    res.writeHead(200, { "Content-Type": "application/json" });
   
//    res.end(JSON.stringify({ data: JSON.parse(data) }));
//     // Read existing data

//     }
//     readData();
  
// }




//   // Handle POST request
//   if (req.method === "POST") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", async () => {
//       try {
//         const parsedData = JSON.parse(body);

//         // Read existing data
//         let existingData = [];
//         try {
//           const fileData = await fs.readFile("data.json", "utf-8");
//           existingData = fileData ? JSON.parse(fileData) : [];
//         } catch (err) {
//           if (err.code !== "ENOENT") throw err;
//         }

//         // Add new data
//         existingData.push(parsedData);

//         // Save file
//         await fs.writeFile("data.json", JSON.stringify(existingData, null, 2));

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Data received" }));
//       } catch (err) {
//         console.error("POST error:", err);
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Internal Server Error" }));
//       }
//     });
//   } else {
//     res.writeHead(405, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Method Not Allowed" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



// const http = require("http");
// const fsSync = require("fs").promises;
// const fs = require("fs");


// const formidable = require("formidable");
// const path = require("path");
// const url = require("url");
// const UPLOAD_DIR = path.join(__dirname, "uploads");
// // Ensure upload dir exists
// if (!fs.existsSync(UPLOAD_DIR)) {
//   fs.mkdirSync(UPLOAD_DIR);
// }

// const server = http.createServer(async (req, res) => {
//   // Set CORS headers
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   // Handle OPTIONS preflight request
//   if (req.method === "OPTIONS") {
//     res.writeHead(204);
//     return res.end();
//   }

//    const parsedUrl = url.parse(req.url, true);
//   const method = req.method;
//   const pathname = parsedUrl.pathname;

//   const filePath = path.join(__dirname, pathname);
//   if (pathname.startsWith("/uploads/")) {
//     fs.readFile(filePath, (err, content) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "File not found" }));
//       } else {
//         const ext = path.extname(filePath).toLowerCase();
//         const contentTypeMap = {
//           ".jpg": "image/jpeg",
//           ".jpeg": "image/jpeg",
//           ".png": "image/png",
//           ".gif": "image/gif",
//         };
//         res.writeHead(200, {
//           "Content-Type": contentTypeMap[ext] || "application/octet-stream",
//         });
//         res.end(content);
//       }
//     });
//     return;
//   }

//   // Handle GET request
//   if (req.method === "GET" && req.url === "/") {
//     try {
//       const data = await fsSync.readFile("data.json", "utf-8");
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ data: JSON.parse(data) }));
//     } catch (err) {
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Failed to read data" }));
//     }
//     return; // Important: prevent fall-through
//   }



//   // Handle POST request
//   if (req.method === "POST"&& req.url === "/") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", async () => {
//       try {
//         const parsedData = JSON.parse(body);

//         let existingData = [];
//         try {
//           const fileData = await fsSync.readFile("data.json", "utf-8");
//           existingData = fileData ? JSON.parse(fileData) : [];
//         } catch (err) {
//           if (err.code !== "ENOENT") throw err;
//         }

//         existingData.push(parsedData);

//         await fsSync.writeFile("data.json", JSON.stringify(existingData, null, 2));

//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Data received" }));
//       } catch (err) {
//         console.error("POST error:", err);
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Internal Server Error" }));
//       }
//     });
//     return; // Important: prevent fall-through
//   }



//   // Handle file upload
//   //post event
//   const cleanUrl = req.url.split("?")[0].replace(/\/+$/, "");
// if(cleanUrl==="/events" && req.method==="POST"){

//   const form = new formidable.IncomingForm();
//   form.uploadDir = UPLOAD_DIR;
//   form.keepExtensions = true;
//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       console.error("Error parsing form:", err);
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Internal Server Error" }));
//       } else {
//         try {
          
//             // const uploadedFile = files[0];
//                 const file = files.file || files.photo; // change this to your actual input field name

// // const file = uploadedFile || files.file;
//           if (!file) {
//             res.writeHead(400, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "No file uploaded" }));
//             return;
//           }
//           // Check if the file is an image
//           const allowedTypes = [".jpg", ".jpeg", ".png", ".gif"];
//           const fileExt = path.extname(file.originalFilename).toLowerCase();
//           if (!allowedTypes.includes(fileExt)) {
//             res.writeHead(400, { "Content-Type": "application/json" });
//             res.end(JSON.stringify({ error: "Invalid file type" }));
//             return;
//           }
          
//           const filename = file.originalFilename;
//           console.log('Files received:', file);

// const tempPath = file.filepath;  // CORRECT for v8.x
// const uniqueName = Date.now() + "_" + path.basename(file.originalFilename);
// const newPath = path.join(UPLOAD_DIR, uniqueName);

//           await
//           fsSync.rename(tempPath, newPath);
//           const eventData = {
//             filename: filename,
//             description: fields.description,
//             date: fields.date,
//             location: fields.location,
//             time: fields.time,
//             name: fields.name,
//             phone: fields.phone,
//             photo: `http://localhost:3000/uploads/${uniqueName}`,
//           };            
//           let existingData = [];
//           try {
//             const fileData = await fsSync.readFile("./events.json", "utf-8");
//             existingData = fileData ? JSON.parse(fileData) : [];
//           }
//           catch (err) {
//             if (err.code !== "ENOENT") throw err;
//           }
//           existingData.push(eventData);
//           await fsSync.writeFile("./events.json", JSON.stringify(existingData, null, 2));
//           res.writeHead(200, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ message: "Event data received" }));
//         } catch (err) {
//           console.error("Error processing file:", err);
//           res.writeHead(500, { "Content-Type": "application/json" });
//           res.end(JSON.stringify({ error: "Internal Server Error" }));
//         }
//       }
//   }
//   );
//   return; // Important: prevent fall-through
// }






// //get event
// if (cleanUrl === "/events" && req.method === "GET") {
//   try {
//     const fileData = await fsSync.readFile("./events.json", "utf-8");
//     const events = JSON.parse(fileData);
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(events));
//   } catch (err) {
//     if (err.code !== "ENOENT") throw err;

//     res.writeHead(500, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ error: "Failed to read events data" }));
//   }
//   return; // Important: prevent fall-through
// }


// if(cleanUrl === "/bookevent" && req.method === "POST"){
//   let body = "";
//   req.on("data", (chunk) =>
//     {
//     body += chunk.toString();
//   }
//   );
//   req.on("end", async () =>
//     {
//       try {
//         const parsedData = JSON.parse(body);
//         let existingData = [];
//         try {
//           const fileData = await fsSync.readFile("./bookevent.json", "utf-8");
//           existingData = fileData ? JSON.parse(fileData) : [];
//         }
//         catch (err) {
//           if (err.code !== "ENOENT") throw err;
//         }
//         existingData.push(parsedData);
//         await fsSync.writeFile("./bookevent.json", JSON.stringify(existingData, null, 2));
//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Booking data received" }));
//       }

//       catch (err) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Failed to process booking data" }));
//         }
//         }
//   );
//   return; // Important: prevent fall-through
//   }

//   // Method not allowed for any other method
//   res.writeHead(405, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Method Not Allowed" }));
// });



// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });





// const http = require("http");
// const fsSync = require("fs").promises;
// const fs = require("fs");
// const path = require("path");
// const url = require("url");
// const formidable = require("formidable");

// const PORT = 3000;
// const UPLOAD_DIR = path.join(__dirname, "uploads");

// fsSync.mkdir(UPLOAD_DIR, { recursive: true });

// const parseJSONBody = (req) =>
//   new Promise((resolve, reject) => {
//     let body = "";
//     req.on("data", (chunk) => (body += chunk));
//     req.on("end", () => {
//       try {
//         resolve(JSON.parse(body));
//       } catch (err) {
//         reject(new Error("Invalid JSON"));
//       }
//     });
//   });

// const readJSONFile = async (filename) => {
//   try {
//     const content = await fsSync.readFile(filename, "utf-8");
//     return content ? JSON.parse(content) : [];
//   } catch (err) {
//     if (err.code === "ENOENT") return [];
//     throw err;
//   }
// };

// const writeJSONFile = async (filename, data) => {
//   await fsSync.writeFile(filename, JSON.stringify(data, null, 2));
// };

// const server = http.createServer(async (req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname.replace(/\/+$/, "");
//   const method = req.method.toUpperCase();

//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");

//   if (method === "OPTIONS") {
//     res.writeHead(204);
//     return res.end();
//   }

//   // Serve uploaded images
//   if (pathname.startsWith("/uploads")) {
//     const filePath = path.join(__dirname, pathname);
//     fs.readFile(filePath, (err, content) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "File not found" }));
//       }

//       const ext = path.extname(filePath).toLowerCase();
//       const mime = {
//         ".jpg": "image/jpeg",
//         ".jpeg": "image/jpeg",
//         ".png": "image/png",
//         ".gif": "image/gif",
//       }[ext] || "application/octet-stream";

//       res.writeHead(200, { "Content-Type": mime });
//       res.end(content);
//     });
//     return;
//   }

//   // GET /
//   if (pathname === "/" && method === "GET") {
//     try {
//       const data = await readJSONFile("data.json");
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ data }));
//     } catch {
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Could not read data" }));
//     }
//     return;
//   }

//   // POST /
//   if (pathname === "/" && method === "POST") {
//     try {
//       const newData = await parseJSONBody(req);
//       const data = await readJSONFile("data.json");
//       data.push(newData);
//       await writeJSONFile("data.json", data);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Data saved" }));
//     } catch {
//       res.writeHead(400, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Invalid request body" }));
//     }
//     return;
//   }

//   // POST /events (with file upload)
//   if (pathname === "/events" && method === "POST") {
//     const form = new formidable.IncomingForm({ keepExtensions: true, uploadDir: UPLOAD_DIR });

//     form.parse(req, async (err, fields, files) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "Failed to process form data" }));
//       }

//       const file = files.file || files.photo;
//       if (!file) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "No file uploaded" }));
//       }

//       const ext = path.extname(file.originalFilename).toLowerCase();
//       const allowed = [".jpg", ".jpeg", ".png", ".gif"];
//       if (!allowed.includes(ext)) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ error: "Invalid file type" }));
//       }

//       const uniqueName = Date.now() + "_" + path.basename(file.originalFilename);
//       const newPath = path.join(UPLOAD_DIR, uniqueName);
//       await fsSync.rename(file.filepath, newPath);

//       const event = {
//         name: fields.name,
//         phone: fields.phone,
//         date: fields.date,
//         time: fields.time,
//         location: fields.location,
//         description: fields.description,
//         filename: uniqueName,
//         photo: `http://localhost:${PORT}/uploads/${uniqueName}`,
//       };

//       try {
//         const events = await readJSONFile("events.json");
//         events.push(event);
//         await writeJSONFile("events.json", events);

//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Event saved" }));
//       } catch {
//         res.writeHead(500, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Failed to save event" }));
//       }
//     });
//     return;
//   }

//   // GET /events
//   if (pathname === "/events" && method === "GET") {
//     try {
//       const events = await readJSONFile("events.json");
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(events));
//     } catch {
//       res.writeHead(500, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Could not read events" }));
//     }
//     return;
//   }

//   // POST /bookevent
//   if (pathname === "/bookevent" && method === "POST") {
//     try {
//       const booking = await parseJSONBody(req);
//       const bookings = await readJSONFile("bookevent.json");
//       bookings.push(booking);
//       await writeJSONFile("bookevent.json", bookings);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "Booking confirmed" }));
//     } catch {
//       res.writeHead(400, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ error: "Invalid booking data" }));
//     }
//     return;
//   }

//   // 404 fallback
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ error: "Not found" }));
// });

// server.listen(PORT, () => {
//   console.log(`✅ Server is running at http://localhost:${PORT}`);
// });










// const http = require("http");
// const fs = require("fs");
// const fsp = require("fs").promises;
// const path = require("path");
// const url = require("url");
// const formidable = require("formidable");


// const UPLOAD_DIR = path.join(__dirname, "uploads");
// const EVENTS_FILE = "./events.json";
// const BOOKINGS_FILE = "./bookevent.json";
// const GENERIC_FILE = "./data.json";

// // Ensure upload directory exists
// if (!fs.existsSync(UPLOAD_DIR)) {
//   fs.mkdirSync(UPLOAD_DIR);
// }

// const setCorsHeaders = (res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
// };

// const sendJson = (res, statusCode, data) => {
//   res.writeHead(statusCode, { "Content-Type": "application/json" });
//   res.end(JSON.stringify(data));
// };

// const handleFileServing = (req, res, filePath) => {
//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       sendJson(res, 404, { error: "File not found" });
//     } else {
//       const ext = path.extname(filePath).toLowerCase();
//       const mimeTypes = {
//         ".jpg": "image/jpeg",
//         ".jpeg": "image/jpeg",
//         ".png": "image/png",
//         ".gif": "image/gif",
//       };
//       res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
//       res.end(content);
//     }
//   });
// };

// const readJsonFile = async (filePath) => {
//   try {
//     const data = await fsp.readFile(filePath, "utf-8");
//     return data ? JSON.parse(data) : [];
//   } catch (err) {
//     if (err.code !== "ENOENT") throw err;
//     return [];
//   }
// };

// const writeJsonFile = async (filePath, data) => {
//   await fsp.writeFile(filePath, JSON.stringify(data, null, 2));
// };

// const server = http.createServer(async (req, res) => {
//   setCorsHeaders(res);

//   if (req.method === "OPTIONS") {
//     res.writeHead(204);
//     return res.end();
//   }

//   const parsedUrl = url.parse(req.url, true);
//   const pathname = parsedUrl.pathname.replace(/\/+$/, "");
//   const filePath = path.join(__dirname, pathname);

//   if (pathname.startsWith("/uploads/")) {
//     return handleFileServing(req, res, filePath);
//   }

//   // Generic GET
//   if (req.method === "GET" && pathname === "") {
//     try {
//       const data = await readJsonFile(GENERIC_FILE);
//       return sendJson(res, 200, { data });
//     } catch {
//       return sendJson(res, 500, { error: "Failed to read data" });
//     }
//   }

//   // Generic POST
//   if (req.method === "POST" && pathname === "") {
//     let body = "";
//     req.on("data", chunk => body += chunk);
//     req.on("end", async () => {
//       try {
//         const parsed = JSON.parse(body);
//         const data = await readJsonFile(GENERIC_FILE);
//         data.push(parsed);
//         await writeJsonFile(GENERIC_FILE, data);
//         sendJson(res, 200, { message: "Data received" });
//       } catch {
//         sendJson(res, 500, { error: "Internal Server Error" });
//       }
//     });
//     return;
//   }

//   // GET /events
//   if (req.method === "GET" && pathname === "/events") {
//     try {
//       const events = await readJsonFile(EVENTS_FILE);
//       return sendJson(res, 200, events);
//     } catch {
//       return sendJson(res, 500, { error: "Failed to read events data" });
//     }
//   }

//   // POST /events with image
//   if (req.method === "POST" && pathname === "/events") {
//     const form = new formidable.IncomingForm({ uploadDir: UPLOAD_DIR, keepExtensions: true });

//     form.parse(req, async (err, fields, files) => {
//       if (err) return sendJson(res, 500, { error: "Form parsing error" });

//       // const uploaded = Object.values(files)[0]; // get the first file
// // const uploadedFile = uploaded|| files.file || files.photo; // change this to your actual input field name
//      const uploadedFile = fields.photo || files.photo; // change this to your actual input field name

// console.log("Files received:", uploadedFile);
// if (!uploadedFile || !uploadedFile.originalFilename) {
//   return sendJson(res, 400, { error: "No valid file uploaded" });
// }

// const ext = path.extname(uploadedFile.originalFilename).toLowerCase();
// const allowed = [".jpg", ".jpeg", ".png", ".gif"];
// if (!allowed.includes(ext)) {
//   return sendJson(res, 400, { error: "Invalid file type" });
// }

// const filename = uploadedFile.originalFilename;
// const newPath = path.join(UPLOAD_DIR, filename);
// await fsp.rename(uploadedFile.filepath, newPath);


//       const newEvent = {
//         name: fields.name,
//         description: fields.description,
//         location: fields.location,
//         time: fields.time,
//         date: fields.date,
//         phone: fields.phone,
//         photo: `http://localhost:3000/uploads/${filename}`,
//       };

//       const events = await readJsonFile(EVENTS_FILE);
//       events.push(newEvent);
//       await writeJsonFile(EVENTS_FILE, events);
//       sendJson(res, 200, { message: "Event created" });
//     });
//     return;
//   }

//   // POST /bookevent
//   if (req.method === "POST" && pathname === "/bookevent") {
//     let body = "";
//     req.on("data", chunk => body += chunk);
//     req.on("end", async () => {
//       try {
//         const parsed = JSON.parse(body);
//         const bookings = await readJsonFile(BOOKINGS_FILE);
//         bookings.push(parsed);
//         await writeJsonFile(BOOKINGS_FILE, bookings);
//         sendJson(res, 201, { message: "Booking data received" });
//       } catch {
//         sendJson(res, 400, { error: "Invalid booking data" });
//       }
//     });
//     return;
//   }

//   // Method not allowed fallback
//   sendJson(res, 405, { error: "Method Not Allowed" });
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });



const express = require('express');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const cors = require('cors');

const app = express();
const PORT = 3000;

const EVENTS_FILE = path.join(__dirname, 'events.json');
const UPLOAD_DIR = path.join(__dirname, 'uploads');

// Ensure uploads and JSON file exist
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);
if (!fs.existsSync(EVENTS_FILE)) fs.writeFileSync(EVENTS_FILE, '[]');

// Middleware
app.use(cors());
app.use('/uploads', express.static(UPLOAD_DIR));

// Helper to read/write events
const readEvents = () => JSON.parse(fs.readFileSync(EVENTS_FILE));
const writeEvents = (events) => fs.writeFileSync(EVENTS_FILE, JSON.stringify(events, null, 2));

// GET all events
app.get('/events', (req, res) => {
  const events = readEvents();
  res.json(events);
});

// POST create new event
// app.post('/events', (req, res) => {
//   const form =new  formidable.IncomingForm({ multiples: false, uploadDir: UPLOAD_DIR, keepExtensions: true });

//   form.parse(req, (err, fields, files) => {
//     if (err) return res.status(500).json({ error: 'Form parse error' });

//     const { oraganizer, description, location, date, time, phone } = fields;
//     // const imageFile = photo?.[0] || files.photo;
// const imageFile = fields.photo || files.file; // change this to your actual input field name
//        const imgfile= files.photo.filepath
// const newEvent = {
//       id: Date.now().toString(),
//       oraganizer,
//       description,
//       location,
//       date,
//       time,
//       phone,
//       image: imageFile ? `/uploads/${path.basename(imgfile)}` : '',
//       status: 'Scheduled',
//     };

//     const events = readEvents();
//     events.push(newEvent);
//     writeEvents(events);

//     res.status(201).json(newEvent);
//   });
// });
// app.post('/events', (req, res) => {
//   const form = new formidable.IncomingForm({
//     multiples: false,
//     uploadDir: UPLOAD_DIR,
//     keepExtensions: true,
//   });

app.post('/events', (req, res) => {
  const form =new  formidable.IncomingForm({ multiples: false, uploadDir: UPLOAD_DIR, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });

    const { organizer, description, location, date, time, phone,status } = fields;
    // const imageFile = photo?.[0] || files.photo;
// const imageFile = fields.photo || files.file; // change this to your actual input field name
   
const file= files.photo

      const imageUrl = `/uploads/${path.basename(file.filepath)}`;

     console.log('Files received:', fields);
    
      const newEvent = {
    id: Date.now().toString(),
          organizer: organizer?.[0]|| "",

    description: description?.[0] || "",
    location: location?.[0] || "",
    date: date?.[0] || "",
    time: time?.[0] || "",
    phone: phone?.[0] || "",
    photo: file ? imageUrl : '',
    status: status?.[0]|| "",
  };

    const events = readEvents();
    events.push(newEvent);
    writeEvents(events);

    res.status(201).json(newEvent);
  });
//  form.parse(req, (err, fields, files) => {
//     if (err) return res.status(500).json({ error: 'Form parse error' });

//     const { oraganizer, description, location, date, time, phone } = fields;
//     const uploadedFile = files.photo; // ensure your input field name is 'photo'

//     const newEvent = {
//       id: Date.now().toString(),
//       oraganizer,
//       description,
//       location,
//       date,
//       time,
//       phone,
//       image: uploadedFile && uploadedFile.filepath
//         ? `/uploads/${path.basename(uploadedFile.filepath)}`
//         : '',
//       status: 'Scheduled',
//     };

//     const events = readEvents();
//     events.push(newEvent);
//     writeEvents(events);

//     res.status(201).json(newEvent);
//   });
});

 

// form.parse(req, (err, fields, files) => {
//   if (err) return res.status(500).json({ error: 'Form parse error' });

//   console.log('FIELDS:', fields);
//   console.log('FILES:', files);

//   const getField = (field) => Array.isArray(field) ? field[0] : field;

//   const newEvent = {
//     id: Date.now().toString(),
//     oraganizer: getField(fields.oraganizer),
//     description: getField(fields.description),
//     location: getField(fields.location),
//     date: getField(fields.date),
//     time: getField(fields.time),
//     phone: getField(fields.phone),
//     image: files.photo && files.photo.filepath
//       ? `/uploads/${path.basename(files.photo.filepath)}`
//       : '',
//     status: 'Scheduled',
//   };

//   const events = readEvents();
//   events.push(newEvent);
//   writeEvents(events);

//   res.status(201).json(newEvent);
// });




// DELETE event by ID

app.put("/events/:id",(req,res)=>{
  const id = req.params.id;
  const events = readEvents();
  const index = events.findIndex((event) =>
    event.id === id
  );
  if (index === -1) {
    res.status(404).json({ error: 'Event not found' });
    console.log("955 event not found")
    } 
    const event = events[index];
    console.log(event)

    

    
  const form =new  formidable.IncomingForm({ multiples: false, uploadDir: UPLOAD_DIR, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });

    const { organizer, description, location, date, time, phone,status } = fields;
    // const imageFile = photo?.[0] || files.photo;
// const imageFile = fields.photo || files.file; // change this to your actual input field name
   
event.organizer=organizer
event.description=description
event.location=location
event.date=date
event.time=time
event.phone=phone
event.status=status

const file= files.photo

      const imageUrl = `/uploads/${path.basename(file.filepath)}`;

     console.log('Files received:', fields);
    
      const newEvent = {
    id: Date.now().toString(),
          organizer: organizer?.[0]|| "",

    description: description?.[0] || "",
    location: location?.[0] || "",
    date: date?.[0] || "",
    time: time?.[0] || "",
    phone: phone?.[0] || "",
    photo: file ? imageUrl : '',
    status: status?.[0]|| "",
  };

    const events = readEvents();
    events.push(newEvent);
    writeEvents(events);

    res.status(201).json({"message":"updated successfully"});
  });
//  form.parse(req, (err, fields, files) => {
//     if (err) return res.status(500).json({ error: 'Form parse error' });

//     const { oraganizer, description, location, date, time, phone } = fields;
//     const uploadedFile = files.photo; // ensure your input field name is 'photo'

//     const newEvent = {
//       id: Date.now().toString(),
//       oraganizer,
//       description,
//       location,
//       date,
//       time,
//       phone,
//       image: uploadedFile && uploadedFile.filepath
//         ? `/uploads/${path.basename(uploadedFile.filepath)}`
//         : '',
//       status: 'Scheduled',
//     };

//     const events = readEvents();
//     events.push(newEvent);
//     writeEvents(events);

//     res.status(201).json(newEvent);
//   });
}

);

app.delete('/api/events/:id', (req, res) => {
  const events = readEvents();
  const updatedEvents = events.filter(event => event.id !== req.params.id);

  if (events.length === updatedEvents.length) {
    return res.status(404).json({ error: 'Event not found' });
  }

  writeEvents(updatedEvents);
  res.json({ message: 'Event deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
