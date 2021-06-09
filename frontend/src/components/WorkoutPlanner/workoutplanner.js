import React, { useState, useEffect } from "react";
import { workout } from "../workout/workout";
import {
    Table,
    TableContainer,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Container,
    Typography,
} from "@material-ui/core";

function WorkoutTable({ day, bmiRange, bmiName }) {
    const [mainLift, setMainLift] = useState("");
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        if (day === "Upper Body") {
            setUpperBody();
        }
        else if (day === "Lower Body") {
            setLowerBody();
        }
    }, [day]);

    const setUpperBody = () => {
        setMainLift ("Bench Press");
        setExercises(workout.UpperBody);
    };

    const setLowerBody = () => {
        setMainLift("Squat");
        setExercises(workout.LowerBody);
    };

    const bmis = workout.BmiPlanner;

    const getPhaseIndex = () => {
        const currentBmiObj = bmis.filter((bmi) => {
            return bmi.name === bmiName;
        });

    return bmis.indexOf(currentBmiObj[0]);
};

const thisPhaseIndex = getPhaseIndex();

const getPhaseName = () => {
    // Daca Bmi-ul respectiv e la final, ne intoarcem la inceput

    if (thisPhaseIndex === bmis.length - 1) return bmis[0].name;
    // else urmatorul
    return bmis[thisPhaseIndex + 1].name;
};

const getPhaseRange = () => {
    if (thisPhaseIndex === bmis.length - 1) return  bmis[0].range;
    return bmis[thisPhaseIndex + 1].range;
};

const thisPhaseName = getPhaseName();
const thisPhaseRange = getPhaseRange();

return (
    <Container>
        {day && bmiRange ? (
            <>
                <Typography variant ="h4">
                    Axeaza-te pe asta : {thisPhaseName}
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: "bold" }}>Exercitiu</TableCell>
                                <TableCell style={{ fontWeight: "bold"}}>
                                    Target Bmi
                                </TableCell>
                                <TableCell style={{ fontWeight: "Bold"}}>
                                    Seturi X Reprize
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{mainLift}</TableCell>
                                <TableCell>{thisPhaseRange}</TableCell>
                                <TableCell>
                                    3 X N/A
                                    <br />
                                    Ne oprim cand simtim ca nu mai da rezultate
                                </TableCell>
                            </TableRow>
                            {exercises.map((exercise) => {
                                return (
                                    <TableRow>
                                        <TableCell>{exercise.name}</TableCell>
                                        <TableCell>N/A</TableCell>
                                        <TableCell>{exercise.reprize}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        ) : (
           <Typography variant="h3" style={{ marginTop: 80 }}>
               Va rog selectati Tipul de Zi si BMI-ul pe care l-ati calculat anterior
           </Typography>
        )}
    </Container>
    );
}

export default WorkoutTable;