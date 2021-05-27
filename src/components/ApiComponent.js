import React from 'react';
import { Table} from 'reactstrap';
      export default class MyComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            error: null,
            isLoaded: false,
            items: [],
            
          };
         
        }
      
        componentDidMount() {
          fetch("https://reqres.in/api/users?page=1")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result.data
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
             
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
           
        }
        clicker() {
    
        }
        render() {

          const { error, isLoaded, items } = this.state;
          
          
    
          if(!this.props.open)
          {
            return <div onClick={this.clicker.bind(this)}>HELLO<p>This is assignment</p><p>Press Get user button</p></div>
          }
          else if (error&&this.props.open) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded&&this.props.open) {
            return <div className="loader"></div>;
          } else {
            return (
                <div >
                {items && items.length > 0 &&this.props.open
                    ? 
                    <div>
                    <Table  className="tp">
                    <thead  style={{backgroundColor:"#512DA8"}}>
                      <tr>
                        <th >ID</th>
                        <th>EMAIL</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                      <tr>
                        <td >{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td><img 
                        src={item.avatar}
                        alt="new"
                        /></td>
                      </tr>
                    ))}
                    </tbody>
                      </Table>
                      </div>
                    : "Loading..."}
                </div>
            );
          }
        }
      }
     