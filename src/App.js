import { useRef, useState, useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

//pela userRef hook e element ne point kre
//pela ene declare krvo
//pachi j element ma vaprvu hoy e elemenet ma ref property ma e varible assign krvi
//thats it
function App() {
  const fileInputRef = useRef();
  const [file, setfile] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);
  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  console.log(file);
  return (
    // <div className="container">
    //   <img src="../nature.jpg" alt="..." />
    //   <div className="wrapper">
    //     <h1>Simple File Sharing</h1>
    //     <p>Upload And Share Download Link</p>

    //     <button onClick={() => onUploadClick()}>Upload</button>
    //     <input
    //       type="file"
    //       ref={fileInputRef}
    //       style={{ display: "none" }}
    //       onChange={(e) => setfile(e.target.files[0])}
    //     />

    //     <a href={result} target="_blank" rel="noreferrer">
    //       {result}
    //     </a>
    //   </div>
    // </div>
    <div className="flex flex-col">
      <div class="flex items-center justify-center w-[60vw] mx-auto mt-[30vh]">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>

          <input
            id="dropzone-file"
            type="file"
            ref={fileInputRef}
            class="hidden"
            onChange={(e) => setfile(e.target.files[0])}
          />
        </label>
      </div>
      <a
        href={result}
        target="_blank"
        rel="noreferrer"
        className="text-lg text-center mt-7 text-sky-400"
      >
        {result}
      </a>
    </div>
  );
}

export default App;
