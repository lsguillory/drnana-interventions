 import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Effect from './effect'
import Title from '../title'


//****** */ effect page(s) -anxiety, stereotype, mind-wandering, etc. 
//----main sset up import from graphlql ------effectjs

export default class EffectList extends Component {
 
 state = {
  effects: [],
  sortedEffects: [],
 } 
 
 componentDidMount() {
  this.setState({
   effects: this.props.effects.edges,
   sortedEffects: this.props.effects.edges,
  })
 }

 render() {
  return (
    <section className={styles.effects}>
      <Title title="ST effects |" subtitle=" interventions" />
      <div className={styles.center}>
        {this.state.sortedEffects.map(({ node }) => {
          return <Effect key={node.contentful_id} effect={node} />
        })}
      </div>
    </section>
  )
}
}
 