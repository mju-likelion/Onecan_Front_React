import React, {useState} from 'react';
import { addToCart } from '../../../src/_actions/user_action';
import {useDispatch} from 'react-redux';


class Count extends React.Component{
      constructor(props) {
          super(props);
          this.state = {
              value:0
          }
      };

      onclickHandler = (plusMinus) => {
            this.setState({value:this.state.value+plusMinus})

      }
      render () {
          return (
              <>
              <span>
              <Display value = {this.state.value} />
              <button style={{
                width: '100px',
                height: '39px',
                left: '719px',
                top: '810px',

                background: 'linearGradient',
                boxShadow: '0px 4px 4px rgba(255, 243, 243, 0.25)',
                borderRadius: '10px',
                border:'none',
                outline:'none',
                marginRight:'10px'
                }}
                onClick={()=>this.onclickHandler(-1)}>-</button>
               
                <Button mother={()=> this.onclickHandler(1)}>+</Button>
              
              </span>
              </>
          );
      }
}
const Button = ({children, mother}) =>
<span>
    <button 
    style={{
        width: '100px',
        height: '39px',
        left: '719px',
        top: '810px',

        background: 'linearGradient',
        boxShadow: '0px 4px 4px rgba(255, 243, 243, 0.25)',
        borderRadius: '10px',
        border:'none',
        outline:'none'
    }}onClick={mother}>{children}</button>
</span>

const Display = (props) =>
<span >
  <h1 style={{marginLeft:'98px'}}>{props.value}</h1>
</span>
export default Count;
