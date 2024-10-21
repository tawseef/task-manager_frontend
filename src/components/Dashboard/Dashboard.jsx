import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import DownloadIcon from "@mui/icons-material/Download";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskModal from "../Modal/Modal"

function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      title: "New Task",
      description: "Do something in React",
      deadline: "2 Days",
      status: "TODO",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className={styles.dashboardWrapper}>
      <div>
        {tasks.length > 0 ? (
          <div className={styles.tableDiv}>
            <table>
              <thead>
                <tr>
                  <th className={`${styles.wd1} ${styles.p5}`}>Title</th>
                  <th className={`${styles.wd2} ${styles.p5}`}>Description</th>
                  <th className={`${styles.wd3} ${styles.p5}`}>Deadline</th>
                  <th className={`${styles.wd4} ${styles.p5}`}>Status</th>
                  <th className={`${styles.wd5} ${styles.p5}`}>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((item, index) => (
                  <tr key={index}>
                    <td className={`${styles.wd1} ${styles.p5}`}>{item.title}</td>
                    <td className={`${styles.wd2} ${styles.p5}`}>{item.description}</td>
                    <td className={`${styles.wd3} ${styles.p5}`}>
                      {item.deadline}
                      <br />
                      <span className={styles.completion}>In Progress</span>
                    </td>
                    <td className={`${styles.wd4} ${styles.p5}`}>
                      <span className={styles.todo}>{item.status}</span>
                    </td>
                    <td className={`${styles.wd5} ${styles.p5}`}>
                      <DownloadIcon />
                      <EditIcon />
                      <DeleteIcon />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <>No task found!</>
        )}
      </div>

      <div className={styles.add}>
        <div onClick={toggleModal}>+</div>

        {/* Ensure TaskModal receives correct props */}
        <TaskModal open={modalOpen} onClose={toggleModal} />
      </div>
    </div>
  );
}

export default Dashboard;
