import Nav from "./components/Nav";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";
import { fectchList } from "./actions/taskActions";

export default async function Home() {
  const tasks = await fectchList()
  return (
    <>
      <Nav />
      <ToDoList tasks={tasks || []}/>
      <Footer />
    </>
  );
}
