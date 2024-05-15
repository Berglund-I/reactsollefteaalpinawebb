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

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    flexGrow: 1,
}));

function CommonQuestionsComponent() {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h2" paddingLeft="25px" paddingTop="20px" gutterBottom>
                Vanliga frågor:
            </Typography>
            <Typography variant="body1" paddingLeft="25px" paddingBottom="10px" gutterBottom>
                Här finns vanliga frågor, hoppas de hjälper dig hitta svaret på din fråga.
            </Typography>

            <Box sx={{ padding: '20px', paddingTop: '0' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="body1">Får vem som helst bli medlem i Sollefteå Alpina?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Alla är välkommna så länge man kan åka skidor själv och åka i stora liften. Klarar man att åka men har utmaningar med liften vill vi att en förälder är med och stöttar tills det sitter. Välkommen!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="body1">Hur gör jag för att få vara med i klubben?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Gå till <Link variant="body1" to="/Bli medlem">bli medlem</Link> och fyll i formuläret. Betala in medlemsavgift och träningsavgift till klubbens bankgiro. Koll vilken dag din grupp har träning, sen är det bara att dyka upp. Vi ses i backen!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography variant="body1">Vad är skillnaden mellan medlemsavgift och träningsavgift?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Medlemsavgift betalar samtliga medlemmar i klubben, föräldrar, aktiva och ledare. Träningsavgift behöver bara den som ska vara med på träningar och träna i backen betala.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4a-content"
                    id="panel4a-header"
                >
                    <Typography variant="body1">Hur tänker ni kring träning beroende på väder?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Träningar kan ändras eller ställas in beroende på väder, se till att hålla koll på nyhetsflödet på startsidan för senaste rapport.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            </Box>
        </Box>
    );
}

export default CommonQuestionsComponent;