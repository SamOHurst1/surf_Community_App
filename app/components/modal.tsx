// components/TodoModal.tsx
import React, { useState } from "react";

interface TodoModalProps {
  onSave: (content: string) => void;
  onClose: () => void;
}

export default function TodoModal({ onSave, onClose }: TodoModalProps) {
  const [content, setContent] = useState("");

  function handleSave() {
    if (content.trim()) {
      onSave(content);
      setContent("");
    }
    onClose(); // Close the modal after saving
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Create To-do</h2>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter todo content"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            onClick={onClose}
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              backgroundColor: "#aaa",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: "5px 10px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
