import React from "react";
import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin";

export interface ShowPhotosProps {}

export const ShowPhotos: React.FC<ShowPhotosProps> = () => {
  return (
    <Show>
      <SimpleShowLayout>
        <ReferenceField source="userId" reference="users" />
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </SimpleShowLayout>
    </Show>
  );
};
