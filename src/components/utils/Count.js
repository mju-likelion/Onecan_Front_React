import React from 'react';

class Count extends React.Component{
      constructor(props) {
          super(props);
          this.state = {
              value:0
          }
      }
      onclickHandler = (plusMinus) => {
            this.setState({value:this.state.value+plusMinus})
      }
      render () {
          return (
              <>
              <span>
              <Display value = {this.state.value} />
              <Button mother={()=> this.onclickHandler(1)}>+</Button>
              <button onClick={()=>this.onclickHandler(-1)}>-</button>
              </span>
              </>
          );
      }
}
const Button = ({children, mother}) =>
<span>
    <button style={{}}onClick={mother}>{children}</button>
</span>

const Display = (props) =>
<span >
  <h1 style={{marginLeft:'90px'}}>{props.value}</h1>
</span>
export default Count;
