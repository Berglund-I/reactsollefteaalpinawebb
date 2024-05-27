import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useEffect, useState} from "react";
import StrapiAdminService from "../services/StrapiAdminService";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
}));

function CommonQuestionsComponent() {

    const [question, setQuestion] = useState([]);

    useEffect(() => {
        StrapiAdminService.getQuestion()
            .then(response => {
                setQuestion(response.data);
            })
            .catch(error => {
                console.error('Error fetching question', error);
            });
    }, []);
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h2" paddingLeft="25px" paddingTop="20px" gutterBottom>
                Vanliga frågor:
            </Typography>
            <Typography variant="body1" paddingLeft="25px" paddingBottom="10px" gutterBottom>
                Här finns vanliga frågor, hoppas de hjälper dig hitta svaret på din fråga.
            </Typography>

            <Box sx={{ padding: '20px', paddingTop: '0' }}>
                {question.map((info, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="body1">
                                {info.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                {info.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
}

export default CommonQuestionsComponent;