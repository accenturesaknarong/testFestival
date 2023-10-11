import { Input, Modal } from "antd";
import Kratong from "../../assets/Kratong";
import { useCallback, useReducer } from "react";

export default function CreateModal({ open, setOpen, getData }) {
  const INITIAL_KRATONG_DATA = {
    name: "",
    text: "",
    kratongId: "",
  };
  const reducer = (state, action) => {
    switch (action?.type) {
      case "SET_NAME":
        return { ...state, name: action?.data };
      case "SET_TEXT":
        return { ...state, text: action?.data };
      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(reducer, INITIAL_KRATONG_DATA);
  const onHandleData = useCallback(() => {
    getData(data)
    setOpen(false)
  }, [data, getData, setOpen]);
  return (
    <Modal open={open} onCancel={() => setOpen(false)} onOk={onHandleData}>
      <div>
        <span>Name: </span>
        <Input
          onChange={(e) =>
            dispatch({ type: "SET_NAME", data: e?.target?.value })
          }
        />
      </div>
      <div>
        <span>Text: </span>
        <Input
          onChange={(e) =>
            dispatch({ type: "SET_TEXT", data: e?.target?.value })
          }
        />
      </div>
      <div>
        <Kratong width={"100%"} />
      </div>
    </Modal>
  );
}
