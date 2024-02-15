import React from "react";
import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export interface CreatePostsProps {}

export const CreatePosts: React.FC<CreatePostsProps> = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  );
};
