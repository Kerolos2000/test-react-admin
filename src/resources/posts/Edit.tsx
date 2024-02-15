import React from "react";
import {
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";

export interface EditPostsProps {}

export const EditPosts: React.FC<EditPostsProps> = () => {
  const PageTitle = () => {
    const record = useRecordContext();
    return <span>{record ? `Edit ${record.title}` : ""}</span>;
  };

  return (
    <Edit title={<PageTitle />}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput source="title" />
        <TextInput fullWidth multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};
