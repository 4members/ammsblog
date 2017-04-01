import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3';
import axios from 'axios';

let Article = React.createClass({

    getInitialState:function() {
      return {
        active : false,
        articles :[]
      }
    },

    componentDidMount:function() {
      axios.get('/').then(function(result){
        console.log(result);
      })
    },
    render: function() {
      let active = this.state.active ? 'YES' : 'NO';
        return <div><h4 > my article {
                this.props.user
            }: {
                (this.props.facebook) ? this.facebook(this.props.facebook) : null
            }

             </h4>
             <button onClick={this.setactive}>active</button>
             <h5>{active}</h5>
             </div>

    },
    facebook: function(path) {
        return <a href = {
            'www.facebook.com' + path
        } > facebook < /a>
    },
    setactive:function() {
      this.setState({
        active : !this.state.active
      })
    }
})
let App = React.createClass({

            render: () => {
                return ( < div >
                    <
                    h1 > art: < /h1><Article user="mhmd shorafa" facebook="mhmd shorafa"/ > ,
                    <br / > < Article user = "saleh boll" / >
                    <
                    /div>)

                }
            });

        ReactDOM.render( < App / > , document.getElementById('root'));
