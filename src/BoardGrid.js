import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Container, Divider} from "@mui/material";
import {DndProvider, useDrop} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import {ItemCard} from "./ItemCard";
import {useState} from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const arr1 = [
    { id: 1, description: "Test 1 omschrijving", name: 'Task 1', status: "todo" },
    { id: 2, description: "Test 2 omschrijving", name: 'Task 2', status: "todo" }];
const arr2 = [
    { id: 3, description: "Test 3 omschrijving", name: 'Task 3', status: "inprogress" },
    { id: 4, description: "Test 4 omschrijving", name: 'Task 4', status: "inprogress" }];
const arr3 = [
    { id: 5, description: "Test 5 omschrijving", name: 'Task 5', status: "needsreview" },
    { id: 6, description: "Test 6 omschrijving", name: 'Task 6', status: "needsreview" }];
const arr4 = [
    { id: 7, description: "Test 7 omschrijving", name: 'Task 7', status: "done" },
    { id: 8, description: "Test 8 omschrijving", name: 'Task 8', status: "done" }];
export default function BasicGrid() {
    const [basket1, setBasket1] = useState(arr1);
    const [basket2, setBasket2] = useState(arr2);
    const [basket3, setBasket3] = useState(arr3);
    const [basket4, setBasket4] = useState(arr4);
    const [{ isOver }, dropRef] = useDrop({
        accept: 'item',
        drop: (item) => {window.alert(item.name + " Dragged to column 'To do' (API CALL)")},
        // drop: (item) => setBasket1(...basket1.push(item)),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })
    const [{ isOver2 }, dropRef2] = useDrop({
        accept: 'item',
        drop: (item) => {window.alert(item.name + " Dragged to column 'In progress' (API CALL)")},
        // drop: (item) => setBasket2(...basket2.push(item)),
        collect: (monitor) => ({
            isOver2: monitor.isOver()
        })
    })
    const [{ isOver3 }, dropRef3] = useDrop({
        accept: 'item',
        drop: (item) => {window.alert(item.name + " Dragged to column 'Needs Feedback' (API CALL)")},
        // drop: (item) =>
        //     setBasket3(...basket3 && basket3.push(item), setBasket1(basket1.splice(basket1.findIndex(x => x.id === item.id), 1))),
        collect: (monitor) => ({
            isOver3: monitor.isOver()
        })
    })
    const [{ isOver4 }, dropRef4] = useDrop({
        accept: 'item',
        drop: (item) => {window.alert(item.name + " Dragged to column 'Done' (API CALL)")},
        // drop: (item) => setBasket4(...basket4.push({id: item.id, name: item.name, status: "done"})) && console.log(basket4),
        collect: (monitor) => ({
            isOver4: monitor.isOver()
        })
    })

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                    <Grid xs={3}>
                        <Container className={"column-styling"} maxWidth="sm">
                            <p className={"column-header"}>To Do</p>
                            <Divider/>
                            <div ref={dropRef}>
                                {basket1.map(item => <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} status={item.status} />)}
                                {isOver && <div>Drop Here!</div>}
                            </div>
                        </Container>
                    </Grid>
                    <Grid xs={3}>
                        <Container className={"column-styling"} maxWidth="sm">
                            <p className={"column-header"}>In Progress</p>
                            <Divider/>
                            <div  ref={dropRef2}>
                                {basket2.map(item => <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} status={item.status} />)}
                                {isOver2 && <div>Drop Here!</div>}
                            </div>
                        </Container>
                    </Grid>
                    <Grid xs={3}>
                        <Container className={"column-styling"} maxWidth="sm">
                            <p className={"column-header"}>Needs Feedback</p>
                            <Divider/>
                            <div  ref={dropRef3}>
                                {basket3.map(item => <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} status={item.status}/>)}
                                {isOver3 && <div>Drop Here!</div>}
                            </div>
                        </Container>
                    </Grid>
                    <Grid xs={3}>
                        <Container className={"column-styling"} maxWidth="sm">
                            <p className={"column-header"}>Done</p>
                            <Divider/>
                            <div ref={dropRef4}>
                                {basket4.map(item => <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} status={item.status}/>)}
                                {isOver4 && <div>Drop Here!</div>}
                            </div>
                        </Container>
                    </Grid>
            </Grid>
        </Box>
    );
}
