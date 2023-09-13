"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [disc, setdisc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setmainTask([...mainTask, { title, disc }]);

    settitle("");
    setdisc("");
  };
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let randerTask = <h2>No Task Yet</h2>;

  if (mainTask.length > 0) {
    randerTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5 border-black border-2 ">
          <div className="justify-between w-2/3overflow-ellipsis">
            <p className="text-2xl font-semibold text-amber-950">{t.title}</p>
            <p className="text-xl  ">{t.disc}</p>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 font-bold rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="text-white bg-[black] text-5xl font-bold p-5 text-center">
        ToDoList
      </h1>
      <form onSubmit={submitHandler} className="bg-green p-5">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="text-2xl border-zinc-800 border-2 px-4 py-2 ml-10"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter Your Task"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 ml-10"
          value={disc}
          onChange={(e) => {
            setdisc(e.target.value);
          }}
        />

        <button className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-[white] bg-black font-bold rounded hover:bg-gray-600 ml-10">
          ADD TASK
        </button>
      </form>
      <div className="p-10 bg-slate-300 ">
        <ul>{randerTask}</ul>
      </div>
    </>
  );
};

export default page;
