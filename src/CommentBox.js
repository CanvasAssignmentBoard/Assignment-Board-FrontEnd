import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, useFormControl} from "@mui/material";
import {DriveFileRenameOutlineOutlined, InsertEmoticonTwoTone} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {ItemCard} from "./ItemCard";

export default function TextareaValidator() {
    const [italic, setItalic] = React.useState(false);
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [val, setVal] = React.useState('');
    const arr = [{text: "Comment 1" , date: '09-10-2022' }];
let i = 1;
    const [comments, setComments] = React.useState(arr);

    const handleAddComment = (text, date) => {
        const comms = comments.slice(0);

        comms.push({
            text: text,
            date: date
        });

      setComments(comms);
    };

    return (
        <div>
                <h3>Comments</h3>
            <div className={"comment-box"}>
                <List sx={{ width: '100%', maxWidth: "300px", maxHeight: "100px", bgcolor: '#444b58', color: '#FFF' }}>
                    {comments.map(item =>
                        <ListItem key={i++}>
                            <ListItemText primary={item.text} secondary={item.date}/>
                        </ListItem>
                    )}
                </List>
            </div>
        <FormControl>
            <FormLabel>Your comment</FormLabel>
            <TextField
                placeholder="Type something here…"
                value={val}
                onChange={(e) => {setVal(e.target.value)}}
               />
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 'var(--Textarea-paddingBlock)',
                            pt: 'var(--Textarea-paddingBlock)',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                            flex: 'auto',
                        }}
                    >
                        <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={(event) => setAnchorEl(event.currentTarget)}
                        >
                            <FormatBold />
                            <KeyboardArrowDown fontSize="md" />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                            size="sm"
                            placement="bottom-start"
                            sx={{ '--List-decorator-size': '24px' }}
                        >
                            {['200', 'normal', 'bold'].map((weight) => (
                                <MenuItem
                                    key={weight}
                                    selected={fontWeight === weight}
                                    onClick={() => {
                                        setFontWeight(weight);
                                        setAnchorEl(null);
                                    }}
                                    sx={{ fontWeight: weight }}
                                >
                                    <ListItemDecorator>
                                        {fontWeight === weight && <Check fontSize="sm" />}
                                    </ListItemDecorator>
                                    {weight === '200' ? 'lighter' : weight}
                                </MenuItem>
                            ))}
                        </Menu>
                        <IconButton
                            variant={italic ? 'soft' : 'plain'}
                            color={italic ? 'primary' : 'neutral'}
                            aria-pressed={italic}
                            onClick={() => {setItalic((bool) => !bool); console.log(comments)}}
                        >
                            <FormatItalic />
                        </IconButton>
                        <Button onClick={() => {handleAddComment(val, "02-10-2022")}} sx={{ ml: 'auto' }}>Send</Button>
                    </Box>

        </FormControl>
        </div>
    );
}
