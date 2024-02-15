import React from "react";
import { Datagrid, List as RaList } from "react-admin";

export interface ListProps {
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <RaList {...rest}>
      <Datagrid rowClick="edit">{children}</Datagrid>
    </RaList>
  );
};
