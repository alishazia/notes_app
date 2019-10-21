// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { css } from 'glamor'

// import Form from './components/Form'
// import Notes from './components/Notes'

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       state = { notes: [], filter: 'none' }
//     }
//   }
// }
// function App() {
//   return (
//     <div className="App" style={{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center"}}>

//       <div style={{display:"flex",flexDirection:"column",width:"30%",justifyContent:"center",alignItems:"center",boxShadow:"dimgrey 2px 2px 6px 0px",margin:"10%"}}>
//       <div style={{display:"flex",flexDirection:"row",width:"100%",margin:"5%",justifyContent:"center",alignItems:"center"}}><h3>Notes</h3></div>
//       <div style={{display:"flex",flexDirection:"row",width:"100%",margin:"5%",justifyContent:"center",alignItems:"center"}}><span style={{width:"80%"}}>+ Note Name</span></div>
//       <div style={{display:"flex",flexDirection:"row",width:"100%",margin:"5%",paddingBottom:"50%",justifyContent:"center",alignItems:"center"}}><span style={{width:"80%"}}>+ Note Name</span></div>
//       </div>
//     </div>
//   );
// }

// export default App;
// src/components/Notes.js

import React from 'react'
import { css } from 'glamor'

import Note from './Note'

class Notes extends React.Component {
  render() {
    return (
      <div {...css(styles.container)}>
        {
          this.props.notes.map((t, i) => (
          <Note
            key={i}
            note={t}
            deleteNote={this.props.deleteNote}
            updateNote={this.props.updateNote}
          />
          ))
        }
      </div>
    )
  }
}

const styles = {
  container: {
    width: '360px',
    margin: '0 auto',
    '@media(max-width: 360px)': {
      width: 'calc(100% - 40px)'
    }
  }
}

export default Notes
