import React from "react";

export default function Contact() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={""}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={""}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label htmlFor="subject">
            <input
              type="text"
              placeholder="Subject"
              name="name"
              value={""}
              onChange={""}
            />
          </label>
        </div>
        <div>
          <label htmlFor="textArea">
            <textarea
              name="textarea"
              placeholder="Type your message here..."
              value={""}
              onChange={""}
            />
          </label>
        </div>

        <button> Submit </button>
      </form>
    </div>
  );
}
