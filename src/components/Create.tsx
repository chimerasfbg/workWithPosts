import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    const item = { title, body };
   
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      // history.go(-1);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Create;
