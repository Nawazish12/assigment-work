import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { TodoDialogProps } from '../../services/types/AllTypes.js';
import { useAddTodoMutation } from '../../services/rtk/todoapi/TodoSlice.js'
import { useSelector } from 'react-redux';
import { RootState } from '../../store.js';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const TodoDialog: React.FC<TodoDialogProps> = ({ open, setOpen, }) => {
    const user = useSelector((state: RootState) => state.user);

    const [todoName, setTodoName] = React.useState('');
    const [isChecked, setIsChecked] = React.useState<boolean>(false);
    const [addTodo] = useAddTodoMutation()

    const handleTodoNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        const body = {
            todo: todoName,
            completed: isChecked,
            userId: user?.id
        }
        addTodo(body).unwrap().then(() => {
            handleClose()
        })
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                maxWidth='sm'
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Add Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="todoName"
                        label="Todo Name"
                        type="text"
                        fullWidth
                        value={todoName}
                        onChange={handleTodoNameChange}
                    />
                    <FormControlLabel control={
                        <Checkbox
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    }
                        label="Completed"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' disabled={!todoName || !isChecked} onClick={handleSubmit}>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default TodoDialog;
