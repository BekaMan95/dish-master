export interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}


export interface TodoListProps {
  todos: TodoProps[];
};
