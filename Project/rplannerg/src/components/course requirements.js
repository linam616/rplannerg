import React, { useState } from "react";
import TodoForm from "./TodoForm";

function courseRequirements() {
  return (
    <div className="App">
      <h1>Custom Select/dropdown</h1>
      <DropDownContainer>
        <DropDownHeader>Mangoes</DropDownHeader>
        <DropDownListContainer>
          <DropDownList>
            <ListItem>Mangoes</ListItem>
            <ListItem>Apples</ListItem>
            <ListItem>Oranges</ListItem>
          </DropDownList>
        </DropDownListContainer>
      </DropDownContainer>
    </div>
  );
}
export default courseRequirements;
