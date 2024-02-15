import { Admin, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {
  CreatePosts,
  EditPosts,
  ListPosts,
  ShowPosts,
} from "./resources/posts";
import { ListPhotos } from "./resources/photos";

const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com/"
);

export function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="posts"
        list={ListPosts}
        create={CreatePosts}
        show={ShowPosts}
        edit={EditPosts}
      />
      <Resource name="photos" list={ListPhotos} />
    </Admin>
  );
}
