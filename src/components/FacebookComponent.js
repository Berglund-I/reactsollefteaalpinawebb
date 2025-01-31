import React from 'react';
import FacebookService from "../services/FacebookService";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SidebarComponent from "./SidebarComponent";
import Grid from "@mui/material/Grid";

class FacebookComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            facebook: [],
            loading: true, // Lägg till en loading-flagga för att indikera att data hämtas
            postsToShow: 5
        }
        this.showMorePosts = this.showMorePosts.bind(this);
    }

    componentDidMount() {
        FacebookService.getFacebookFeed().then((res)=>{
            this.setState({facebook: res.data, loading: false}, () => {
                console.log(this.state);
            });
        })
    }

    showMorePosts() {
        this.setState(prevState => ({
            postsToShow: prevState.postsToShow + 10
        }));
    }

    render (){
        const { facebook, loading, postsToShow } = this.state;

        return (
                <Grid item xs={12} sm={12}>
                    <div className="fb-container">
                        {loading ? (
                            <Typography variant="body1">Hämtar nyheter från facebook <FontAwesomeIcon icon={faSpinner} spin style={{color: "#003c99"}}/></Typography>
                        ) : facebook.length === 0 ? (
                            <Typography variant="body1">Hittade ingen information</Typography>
                        ) : (
                            <>
                                {facebook.slice(0, postsToShow).map((post, index) => (
                                    <Card key={post.idFacebook}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div">
                                                {post.createdTime}
                                            </Typography>
                                            <Typography variant="body1">
                                                {post.message}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                                {postsToShow < facebook.length &&
                                    <Button variant="contained" color="primary" sx={{ width: '200px', margin: '20px' }} onClick={this.showMorePosts}>Visa fler
                                        inlägg</Button>
                                }
                            </>
                        )}
                    </div>
                </Grid>


        )
    }
}

export default FacebookComponent;