import React from 'react';
import FacebookService from "../services/FacebookService";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <div className="fb-container">
                {loading ? (
                    <p>Hämtar nyheter från facebook <FontAwesomeIcon icon={faSpinner} spin style={{color: "#003c99"}} /></p>
                ) : facebook.length === 0 ? (
                    <p>Hittade ingen information</p>
                ) : (
                    <>
                        <table className="facebook-table">
                            <tbody>
                            {facebook.slice(0, postsToShow).map((post, index) => (
                                <tr key={post.idFacebook}>
                                    <td className="post">
                                        <h3>{post.createdTime}</h3>
                                        <p>{post.message}</p>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        {postsToShow < facebook.length &&
                            <button className="show-more-button" onClick={this.showMorePosts}>Visa fler inlägg</button>
                        }
                    </>
                )}
            </div>
        )
    }
}

export default FacebookComponent;
