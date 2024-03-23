import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl text-bold text-center">My Todos</h1>
      Todo Page
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
