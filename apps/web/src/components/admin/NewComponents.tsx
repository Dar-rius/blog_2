import { css } from "../../../styled-system/css";
import { flex } from "../../../styled-system/patterns";
import React, { useState } from "react";
import axios from "axios";
import { url, urlServer } from "../../utils";

export default function NewComponent() {
  const [message, setMessage] = useState("");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let form = new FormData(e.target);
    form.set("title", form.get("title"));
    form.set("label", form.get("label"));
    form.set("preface", form.get("preface"));
    form.set("content", form.get("content"));
    try {
      const token = sessionStorage.getItem("token");
      await axios.postForm(`${urlServer}/create-blog`, form, {
        headers: { authorization: `Bearer ${token}` },
      });
      window.location = `${url}/admin/edit`;
    } catch (err) {
      setMessage("A field is not entered correctly");
      console.error(err.response);
    }
  }
  //style
  const styleContainer = flex({
    direction: "column",
    mx: "35%",
    alignItems: "flex-start",
    my: "3%",
  });

  const styleLabel = css({ fontSize: 21, mb: 2 });

  return (
    <form method="post" onSubmit={handleSubmit} enctype="multipart/form-data">
      <div className={styleContainer}>
        <p className={styleLabel}>Title</p>
        <input
          placeholder="Enter your title of blog"
          type="text"
          name="title"
          required
        />
      </div>
      <div className={styleContainer}>
        <p className={styleLabel}>Labels</p>
        <select
          name="label"
          required
          id="pet-select"
          class={css({ color: "black", bg: "white" })}
        >
          <option value=""> Select the domain </option>
          <option value="Droit du travail">Droit du travail</option>
          <option value="Droit etranger">Droit etranger</option>
          <option value="hamster">Hamster</option>
          <option value="Droit du numerique">Droit du numerique</option>
          <option value="Propriete intellectuelle">
            Propriete intellectuelle
          </option>
          <option value="Droit fiscal">Droit fiscal</option>
          <option value="Droit des societes">Droit des societes</option>
          <option value="Droit civil">Droit civil</option>
          <option value="Veille juridique">Veille juridique</option>
        </select>
      </div>
      <div className={styleContainer}>
        <p className={styleLabel}>Preface</p>
        <input
          placeholder="Enter the preface"
          type="text"
          name="preface"
          required
        />
      </div>
      <div className={styleContainer}>
        <p className={styleLabel}>Content</p>
        <input
          placeholder="Enter your title of blog"
          type="file"
          name="content"
          required
        />
      </div>
      <p className={css({ color: "red.300" })}>{message}</p>
      <button type="submit">Add content</button>
    </form>
  );
}
