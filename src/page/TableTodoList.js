import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Table } from "react-bootstrap";

const TableTodoList = ({ todolist, onRemove, onEdit }) => {
  const handleOnRemove = (id) => {
    console.log(id);
    if (!onRemove) {
      return;
    } else {
      onRemove(id);
    }
  };
  const handleEdit = (id) => {
    console.log(id);
    if (!onEdit) {
      return;
    } else {
      onEdit(id);
    }
  };
  return (
    <div className="px-[100px] w-[65%]">
      <Table className="" striped bordered hover>
        <thead className="bg-teal-800 text-white">
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.gender}</td>
                <td>
                  <Button
                    onClick={() => {
                      handleOnRemove(item.id);
                    }}
                    className="bg-red-700"
                    variant="danger"
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    onClick={() => {
                      handleEdit(item.id);
                    }}
                    className="bg-green-600"
                    variant="success"
                  >
                    Edit
                  </Button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableTodoList;
