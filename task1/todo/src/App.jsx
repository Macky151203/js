import { useState, useEffect } from "react";
import Inputcomp from "./comps/input";

function App() {
  const [name, setname] = useState("");
  const [task, settask] = useState("");
  const [completed, setcompleted] = useState(false);
  const [todotasks, settodotasks] = useState([]);
  const [comptasks, setcomptasks] = useState([]);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetcheddata = JSON.parse(localStorage.getItem("todo"));
    console.log(fetcheddata);
    if (fetcheddata) {
      const temptodo = fetcheddata.filter((item) => item.completed == false);
      const tempcomp = fetcheddata.filter((item) => item.completed == true);
      setdata(fetcheddata);
      settodotasks(temptodo);
      setcomptasks(tempcomp);
    }
  }, []);

  const add = (e) => {
    e.preventDefault();
    const newobj = { name, task, completed };
    console.log(data);
    let tempdata;
    if (data) {
      tempdata = [...data, newobj];
    } else {
      tempdata = [newobj];
    }
    localStorage.setItem("todo", JSON.stringify(tempdata));
    setdata(tempdata);
    const temptodo = tempdata.filter((item) => item.completed == false);
    const tempcomp = tempdata.filter((item) => item.completed == true);
    settodotasks(temptodo);
    setcomptasks(tempcomp);
    setname("");
    settask("");
    alert("new task added!");
  };

  const completedtask = (i) => {
    let filtereddata1 = data.filter(
      (item) => !(item.task === i.task && item.name === i.name)
    );
    filtereddata1 = [...filtereddata1, { ...i, completed: true }];
    console.log("filtered completed", filtereddata1);
    const temptodo = filtereddata1.filter((item) => item.completed == false);
    const tempcomp = filtereddata1.filter((item) => item.completed == true);
    setdata(filtereddata1);
    settodotasks(temptodo);
    setcomptasks(tempcomp);
    console.log(filtereddata1);
    localStorage.setItem("todo", JSON.stringify(filtereddata1));
  };

  const deletetask = (name, task) => {
    const filtereddata = data.filter(
      (item) => !(item.task === task && item.name === name)
    );
    const temptodo = filtereddata.filter((item) => item.completed == false);
    const tempcomp = filtereddata.filter((item) => item.completed == true);
    setdata(filtereddata);
    settodotasks(temptodo);
    setcomptasks(tempcomp);
    console.log(filtereddata);
    localStorage.setItem("todo", JSON.stringify(filtereddata));
  };

  return (
    <>
      <div className="max-w-full overflow-hidden">
        <div className="flex justify-center items-center mt-4 ">
          <form
            className="flex flex-col gap-2 md:w-1/2 items-center"
            onSubmit={add}
          >
            <div className="text-center text-2xl my-2">Enter The task here</div>
            <input
              value={name}
              placeholder="Enter name"
              className="md:w-1/2 border-1 rounded-md p-1"
              type="text"
              onChange={(e) => {
                setname(e.target.value);
              }}
              required
            />
            <input
              value={task}
              placeholder="Enter task"
              className="md:w-1/2 border-1 rounded-md p-1"
              type="text"
              onChange={(e) => {
                settask(e.target.value);
              }}
              required
            />
            <button
              className="md:w-1/4 w-full bg-green-600 hover:bg-green-500 cursor-pointer rounded-md text-white  py-1"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>

        <div className="p-2 flex w-full flex-col gap-4 mt-4  md:flex-row">
          <div className="md:w-1/2">
            <div className="text-center">Todo tasks</div>
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col justify-center w-full items-center gap-4">
                  {todotasks &&
                    todotasks.map((item, i) => {
                      return (
                        <div
                          className="shadow-lg border border-1 rounded-lg w-full md:w-1/2 pb-2"
                          key={i}
                        >
                          <div className="bg-slate-200 px-2 rounded-t-lg">
                            Name-{item.name}
                          </div>
                          <div className="px-2 my-2">{item.task}</div>
                          <div className="flex gap-1 px-2">
                            <button
                              className="rounded-md cursor-pointer bg-red-400 text-white px-2 p-1"
                              onClick={() => {
                                deletetask(item.name, item.task);
                              }}
                            >
                              Del
                            </button>
                            <button
                              className="rounded-md cursor-pointer border-1 text-green-500 border-green-400  px-2 p-1"
                              onClick={() => {
                                completedtask(item);
                              }}
                            >
                              Set completed
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-center">Completed tasks</div>
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col justify-center  w-full items-center gap-4">
                  {comptasks &&
                    comptasks.map((item, i) => {
                      return (
                        <div
                          className="shadow-md border border-1 rounded-lg w-full md:w-1/2 pb-2"
                          key={i}
                        >
                          <div className="bg-slate-200 px-2 rounded-t-lg p-1">
                            Name-{item.name}
                          </div>
                          <div className="px-2 my-2">{item.task}</div>
                          <div className="flex gap-1 px-2">
                            <button
                              className="rounded-md cursor-pointer bg-red-400 text-white px-2 p-1"
                              onClick={() => {
                                deletetask(item.name, item.task);
                              }}
                            >
                              Del
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
