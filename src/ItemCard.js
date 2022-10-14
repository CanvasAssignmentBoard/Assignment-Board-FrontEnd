import React from 'react';
import { useDrag } from 'react-dnd';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {
    DriveFileRenameOutlineOutlined,
    InsertEmoticonTwoTone
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import TextareaValidator from "./CommentBox";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: '#444b58',
    color: '#FFF',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ItemCard = ({id, name, status, description }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => setOpen(false);
    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { id, name, status, description },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const statusIcon = (status) => {
        if (status === "todo") {
            return "⚪️";
        } else if (status === "inprogress") {
            return "✍️";
        } else if (status === "needsreview") {
            return "🔵";
        }else if (status === "done") {
            return "✅";
        }
    }
    return (
        <div onClick={handleOpen} className='item-styling' ref={dragRef}>
            {name}
            {statusIcon(status)}
            {isDragging}
            <Modal
                open={open}
                onClose={handleClose}
            >
                    <Box sx={style}>
                        <Grid container spacing={0}>
                            <Grid item xs={8}>
                                <Typography id="transition-modal-title" variant="h6" component="h2">
                                    {name}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    {description}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                   Status:  {statusIcon(status)} {status}
                                </Typography>

                            </Grid>
                            <Grid item xs={8}>
                                <List sx={{ width: '100%', maxWidth: "300px", bottom: '0', position: "absolute", bgcolor: '#444b58', color: '#FFF' }}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <InsertEmoticonTwoTone />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Feedback received" secondary={
                                            <Typography type="body2" style={{ color: '#FFFFFF' }}>Oct 9, 2022</Typography>
                                        } />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <DriveFileRenameOutlineOutlined />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Started working" secondary={
                                            <Typography type="body2" style={{ color: '#FFFFFF' }}>Oct 7, 2022</Typography>
                                        } />
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item xs={4}>
<TextareaValidator></TextareaValidator>
                            </Grid>
                        </Grid>
                    </Box>
            </Modal>
        </div>
    )
}