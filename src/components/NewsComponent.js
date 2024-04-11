import React from 'react';
import NewsService from '../services/NewsService';

class NewsComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            news:[]
        }
    }

    componentDidMount(){
        NewsService.getNews().then((res)=>{
            this.setState({news:res.data});
        });
    }

    render (){
        return (
            <div>
                 <h2 className="news-flow">Nyheter</h2>
                <table className="news-table">
                    <thead>
                    <tr>
                        <td> News Id</td>
                        <td> News Title</td>
                        <td> News Text</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.news.map(
                            news =>
                                <tr key={news.id}>
                                    <td>{news.id}</td>
                                    <td>{news.title}</td>
                                    <td>{news.text}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default NewsComponent;