import React from "react";
import {  ReferenceField, TextField } from "react-admin";
import { List } from "../../custom";

export interface ListPostsProps {}

export const ListPosts: React.FC<ListPostsProps> = () => {
  return (
    <List >
        <ReferenceField source="userId" reference="users" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
    </List>
  );
};
