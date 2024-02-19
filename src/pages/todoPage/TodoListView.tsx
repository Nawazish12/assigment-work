import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, FormControlLabel, FormGroup, Paper, Typography, } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import CommonSkeleton from "../../common/CommonSkeleton.js";
import { useDeleteSingleTodoMutation, useGetAllTodoQuery, useUpdateSingleTodoMutation } from '../../services/rtk/todoapi/TodoSlice.js';
import { TodoItem } from "../../services/types/AllTypes.js";
import TodoDialog from "./TodoDialog.js";

const TodoListView: React.FC = () => {
    const [open, setOpen] = useState(false);
    const { data: allTodoList, isLoading, refetch } = useGetAllTodoQuery({});
    const [deleteSingleTodo] = useDeleteSingleTodoMutation();
    const [updateSingleTodo] = useUpdateSingleTodoMutation()

    const handleDelete = (todoId: number) => {
        deleteSingleTodo({ id: todoId }).unwrap().then(() => {
            refetch();
        });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const todoBody = {
            completed: event.target.checked,
            id: id
        }
        updateSingleTodo(todoBody)
    };

    return (
        <>
            <Box className="bg-[#F8F8FF] ">
                <Box className="px-6 py-10 w-[80%] m-auto max-lg:w-full">
                    <Typography variant="h3" className="items-center justify-center flex">
                        Todo List
                    </Typography>
                    <Button variant="contained" onClick={() => setOpen(true)}>Add Todo</Button>
                    <Box className="bg-[#ECEDF6] mt-3 rounded-md px-6 py-6 max-h-[600px] overflow-auto">
                        {isLoading ? (
                            <>
                                <CommonSkeleton count={5} />
                            </>
                        ) : (
                            allTodoList?.todos?.map((item: TodoItem) => (
                                <Paper key={item.id} className="mb-4">
                                    <Box className="flex justify-between px-3 py-3">
                                        <Box>
                                            <FormGroup>
                                                <FormControlLabel
                                                    className={`${item.completed && 'line-through'}`}
                                                    control={<Checkbox checked={item.completed} onChange={(event) => handleCheckboxChange(event, item.id)} />}
                                                    label={item?.todo}
                                                />
                                            </FormGroup>
                                        </Box>
                                        <Box className='flex gap-2 items-center'>
                                            <DeleteIcon onClick={() => handleDelete(item?.id)} sx={{ fontSize: '35px', cursor: 'pointer' }} className="py-2 px-2 bg-[#EEEE] rounded-md" />
                                        </Box>
                                    </Box>
                                </Paper>
                            ))
                        )}
                    </Box>
                </Box>
            </Box>
            {
                open &&
                <TodoDialog open={open} setOpen={setOpen} />
            }
        </>
    );
};

export default TodoListView;
