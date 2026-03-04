import React, { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "今夜はどこまでいけるの？", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const updated = [...messages, { text: input, sender: "user" }];

    let reply = "噛みつかないで 優しくして";

    if (input.toLowerCase().includes("project")) {
      reply = "Check out the Projects section above!";
    } else if (input.toLowerCase().includes("contact")) {
      reply = "Scroll down to the Contact section!";
    } else if (input.toLowerCase().includes("love")) {
      reply = "苦いものはまだ嫌いなの";
    } else if (input.toLowerCase().includes("joy")){
        reply = "ねえ 私と生きてくれる？";
    } else if (input.toLowerCase().includes("hope")) {
        reply = "ずっと恋しくてシンデレラ";
    }

    updated.push({ text: reply, sender: "bot" });

    setMessages(updated);
    setInput("");
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#6a11cb",
          color: "white",
          padding: "15px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 999
        }}
      >
        💬 {/*Comment rani*/}
      </div>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            zIndex: 999
          }}
        >
          <div style={{ padding: "10px", overflowY: "auto", flex: 1 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0"
                }}
              >
                <span>{msg.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", padding: "10px" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type..."
              style={{ flex: 1 }}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;