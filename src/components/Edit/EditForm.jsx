import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { taskEdit } from "../../reducer/taskReducer";

export const EditForm = ({
  updateTask,
  setUpdateTask,
  setIsEditing,
  previousFocusEl,
  updateId,
}) => {
  const dispatch = useDispatch();
  const closeEditModal = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  };

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditModal();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditModal]);

  const handleEditForm = (e) => {
    e.preventDefault();
    dispatch(taskEdit({ updateId, updateTask }));
    closeEditModal();
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditModal();
      }}
    >
      <form className="todo" onSubmit={handleEditForm}>
        <div className="wrapper">
          <input
            type="text"
            className="input"
            id="editTask"
            required
            autoFocus
            maxLength={100}
            placeholder="Update Task"
            value={updateTask}
            onChange={(event) => setUpdateTask(event.target.value)}
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button className="btn" type="submit">
          <CheckIcon />
        </button>
      </form>
    </div>
  );
};
