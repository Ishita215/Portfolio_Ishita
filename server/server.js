import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "Portfolio API is running." });
});

app.post("/api/contact", (req, res) => {
  const { email, subject, message } = req.body;
  if (!email || !subject || !message) {
    return res.status(400).json({ success:false, message:"Please fill in all fields." });
  }
  console.log("\n--- NEW PORTFOLIO MESSAGE ---");
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);
  console.log("-----------------------------\n");
  res.json({ success:true, message:"Message received successfully." });
});

app.listen(PORT, () => console.log(`Express server running at http://localhost:${PORT}`));
