import styled from 'styled-components'

const color = 'blue'
const Button = styled.button`
/*color: red;*/
color: ${props => props.color};
background: ${color};
/*font-size: 1rem;*/
font-size: ${props => (props.big ? '3rem':'1rem')}; /*? = is the prop there*/
padding: 1rem;
`
export default Button 




/* ****IN page if want to use button***** 
import Button from '../examples/button'
-------
export default class tours extends Component {
 render() {
  return ( 
  
  <Layout> hello from tours page!!!!!!!
  <Button big>first button</Button>
  <Button color="yellow">second button</Button>
   </Layout>
  )
 }
} */