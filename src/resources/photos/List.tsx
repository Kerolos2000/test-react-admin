import React from "react";
import { ImageField, ReferenceField, TextField, UrlField } from "react-admin";
import { List } from "../../custom";

export interface ListPhotosProps {}

export const ListPhotos: React.FC<ListPhotosProps> = () => {
  return (
    <List>
      <ReferenceField source="albumId" reference="albums" />
      <TextField source="id" />
      <TextField source="title" />
      <UrlField source="url" />
      <ImageField source="thumbnailUrl" />
    </List>
  );
};
