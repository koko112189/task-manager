import { Category } from "./category";

export interface TaskToDo {
    id: string;
    title: string;
    isCompleted: boolean;
    categoryId?: string;
    category: Category;
}
