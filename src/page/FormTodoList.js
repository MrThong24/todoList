import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Select } from "../components/select";
import TableTodoList from "./TableTodoList";
import { v4 as uuidv4 } from "uuid";
const FormTodoList = () => {
  const [todolist, setTodolist] = useState([]);

  const { handleSubmit, control } = useForm(); // destructuring
  const onSubmit = (values) => {
    values.id = uuidv4();
    const newList = [...todolist];
    newList.push(values);
    setTodolist(newList);
  };
  const handleOnRemove = (id) => {
    const newTodoList = todolist.filter((todo) => todo.id !== id);
    setTodolist(newTodoList);
    console.log(newTodoList);
  };

  return (
    <div className="w-full px-[100px] mt-[180px] flex">
      <form className="w-[35%]" onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input
            name="title"
            type="text"
            control={control}
            placeholder="Enter your title"
          ></Input>
        </Field>
        <Field>
          <Select
            name="gender"
            options={["female", "male", "other"]}
            control={control}
          />
        </Field>
        <Button type="submit">Submit</Button>
      </form>
      <TableTodoList todolist={todolist} onRemove={handleOnRemove} />
    </div>
  );
};

export default FormTodoList;
