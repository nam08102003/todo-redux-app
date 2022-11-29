import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addToDoAction } from "../../redux/actions";
import {
  todoListSelector,
  searchTextSelector,
  searchStatusSelector,
  searchPrioritySelector,
} from "../../redux/selectors";

import { todoListSlice } from "../../redux/reducer";

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const listTodo = useSelector(searchPrioritySelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addToDo({
        id: uuidv4(),
        name: name,
        priority: priority,
        completed: false,
      })
    );

    setName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => {
            return (
              <Todo
                key={item.id}
                id={item.id}
                name={item.name}
                prioriry={item.priority}
                completed={item.completed}
              />
            );
          })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={name} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
